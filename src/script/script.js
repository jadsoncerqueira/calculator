let res = '';

const ops = document.getElementsByClassName('op');
console.log(ops[0].innerHTML)
const somaBtn = document.querySelector('.soma');
const deleteBtn = document.querySelector('.delete');
const deleteBtnAll = document.querySelector('.deleteAll');


function adicionaValues (event) {
  const resultado = document.querySelector('#resultado');
  const value = event.target.innerHTML;
  if(resultado.innerHTML === '0') {
    res = res.slice(0, -1);
    resultado.innerHTML = res;
  }
  res += value;
  resultado.innerHTML = res;
};

function soma () {
    res = res.replace(/÷/gi, '/');
    res = res.replace(/x/gi, '*');
    let ult = res[res.length - 1]
    if(ult === '+' || ult === '-' || ult === '÷' || ult === '*') {
        res = res.slice(0, -1);
        if(res.length === 1) {
            resultado.innerHTML = res;
        } else {
            if (res.includes('+') || res.includes('-') || res.includes('÷') || res.includes('*')) {
                const results = eval(res);
                resultado.innerHTML = String(results);
                res = String(results)
            } else {
                resultado.innerHTML = res;
            }
        }
    } else {
        const results = eval(res);
        const resultado = document.querySelector('#resultado');
        resultado.innerHTML = String(results);
        res = String(results)
    }
};

function apagar () {
    const resultado = document.querySelector('#resultado');
    console.log(res.length)
    if (res.length === 1) {
        res = '0'
        resultado.innerHTML = res;
    } else {
      res = res.slice(0, -1);
      resultado.innerHTML = res;
    }
};

function apagarTudo () {
    const resultado = document.querySelector('#resultado');
    res = '0';
    resultado.innerHTML = res
};

somaBtn.addEventListener('click', soma)
deleteBtn.addEventListener('click', apagar)
deleteBtnAll.addEventListener('click', apagarTudo)

for (let i = 0; i < ops.length; i += 1) {
  ops[i].addEventListener('click', adicionaValues)
}


