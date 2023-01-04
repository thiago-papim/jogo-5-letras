const palavra = 'termo';
const comoJogar = document.getElementById('info');
const mostrarInfo = document.getElementById('comoJogar');
const fechamenu = document.getElementById('fechaMenu');
const reset = document.getElementById('buttonReset');

reset.addEventListener('click', function () {
  window.location.reload(true);
})

comoJogar.addEventListener('click', function () {
  if (mostrarInfo.style.display = 'none') {
    mostrarInfo.style.display = 'flex';
    
  }
})

fechamenu.addEventListener('click', function () {
  if (mostrarInfo.style.display = 'block') {
    mostrarInfo.style.display = 'none';
    comoJogar.style.display = 'block'
  }
})

const t1 = document.getElementById('t1');
const t2 = document.getElementById('t2');
const t3 = document.getElementById('t3');
const t4 = document.getElementById('t4');
const t5 = document.getElementById('t5');

const t6 = document.getElementById('t6');
const t7 = document.getElementById('t7');
const t8 = document.getElementById('t8');
const t9 = document.getElementById('t9');
const t10 = document.getElementById('t10');

const t11 = document.getElementById('t11');
const t12 = document.getElementById('t12');
const t13 = document.getElementById('t13');
const t14 = document.getElementById('t14');
const t15 = document.getElementById('t15');

const t16 = document.getElementById('t16');
const t17 = document.getElementById('t17');
const t18 = document.getElementById('t18');
const t19 = document.getElementById('t19');
const t20 = document.getElementById('t20');

const t21 = document.getElementById('t21');
const t22 = document.getElementById('t22');
const t23 = document.getElementById('t23');
const t24 = document.getElementById('t24');
const t25 = document.getElementById('t25');

const t26 = document.getElementById('t26');
const t27 = document.getElementById('t27');
const t28 = document.getElementById('t28');
const t29 = document.getElementById('t29');
const t30 = document.getElementById('t30');

const botaoTeste = document.getElementById('confirma');
const botaoTeste2 = document.getElementById('confirma2');
const botaoTeste3 = document.getElementById('confirma3');
const botaoTeste4 = document.getElementById('confirma4');
const botaoTeste5 = document.getElementById('confirma5');
const botaoTeste6 = document.getElementById('confirma6');

const linha1 = () => {
  const letrasRestantes = [];
  const listaInput = [t1, t2, t3, t4, t5];
  const confirmaPalavra = `${t1.value}${t2.value}${t3.value}${t4.value}${t5.value}`;
  if (confirmaPalavra.length === 5) {
    for (let index = 0; index < palavra.length; index += 1) {
      if (palavra[index] === listaInput[index].value) {
        listaInput[index].style.backgroundColor = 'green';
      } else {
        letrasRestantes.push(palavra[index])
      }
      listaInput[index].disabled = true;
    }
  }
  return letrasRestantes;
}

const linha1_1 = () => {
  const letrasRestantes = linha1();
  const inputFaltando = [t1, t2, t3, t4, t5].filter((element) => element.style.backgroundColor !== 'green');
  for (let index = 0; index < inputFaltando.length; index += 1) {
    for (let i = 0; i < letrasRestantes.length; i += 1) {
      if (inputFaltando[index].value === letrasRestantes[i]) {
        inputFaltando[index].style.backgroundColor = 'red';
        letrasRestantes.splice(i, 1);
      }
    }
  }
}

const linha2 = () => {
  const letrasRestantes = [];
  const listaInput = [t6, t7, t8, t9, t10];
  const confirmaPalavra = `${t6.value}${t7.value}${t8.value}${t9.value}${t10.value}`;
  if (confirmaPalavra.length === 5) {
    for (let index = 0; index < palavra.length; index += 1) {
      if (palavra[index] === listaInput[index].value) {
        listaInput[index].style.backgroundColor = 'green';
      } else {
        letrasRestantes.push(palavra[index])
      }
      listaInput[index].disabled = true;
    }
  }
  return letrasRestantes;
}

const linha2_1 = () => {
  const letrasRestantes = linha2();
  const inputFaltando = [t6, t7, t8, t9, t10].filter((element) => element.style.backgroundColor !== 'green');
  for (let index = 0; index < inputFaltando.length; index += 1) {
    for (let i = 0; i < letrasRestantes.length; i += 1) {
      if (inputFaltando[index].value === letrasRestantes[i]) {
        inputFaltando[index].style.backgroundColor = 'red';
        letrasRestantes.splice(i, 1);
      }
    }
  }
}

const linha3 = () => {
  const letrasRestantes = [];
  const listaInput = [t11, t12, t13, t14, t15];
  const confirmaPalavra = `${t11.value}${t12.value}${t13.value}${t14.value}${t15.value}`;
  if (confirmaPalavra.length === 5) {
    for (let index = 0; index < palavra.length; index += 1) {
      if (palavra[index] === listaInput[index].value) {
        listaInput[index].style.backgroundColor = 'green';
      } else {
        letrasRestantes.push(palavra[index])
      }
      listaInput[index].disabled = true;
    }
  }
  return letrasRestantes;
}

const linha3_1 = () => {
  const letrasRestantes = linha3();
  const inputFaltando = [t11, t12, t13, t14, t15].filter((element) => element.style.backgroundColor !== 'green');
  for (let index = 0; index < inputFaltando.length; index += 1) {
    for (let i = 0; i < letrasRestantes.length; i += 1) {
      if (inputFaltando[index].value === letrasRestantes[i]) {
        inputFaltando[index].style.backgroundColor = 'red';
        letrasRestantes.splice(i, 1);
      }
    }
  }
}

const linha4 = () => {
  const letrasRestantes = [];
  const listaInput = [t16, t17, t18, t19, t20];
  const confirmaPalavra = `${t16.value}${t17.value}${t18.value}${t19.value}${t20.value}`;
  if (confirmaPalavra.length === 5) {
    for (let index = 0; index < palavra.length; index += 1) {
      if (palavra[index] === listaInput[index].value) {
        listaInput[index].style.backgroundColor = 'green';
      } else {
        letrasRestantes.push(palavra[index])
      }
      listaInput[index].disabled = true;
    }
  }
  return letrasRestantes;
}

const linha4_1 = () => {
  const letrasRestantes = linha4();
  const inputFaltando = [t16, t17, t18, t19, t20].filter((element) => element.style.backgroundColor !== 'green');
  for (let index = 0; index < inputFaltando.length; index += 1) {
    for (let i = 0; i < letrasRestantes.length; i += 1) {
      if (inputFaltando[index].value === letrasRestantes[i]) {
        inputFaltando[index].style.backgroundColor = 'red';
        letrasRestantes.splice(i, 1);
      }
    }
  }
}

const linha5 = () => {
  const letrasRestantes = [];
  const listaInput = [t21, t22, t23, t24, t25];
  const confirmaPalavra = `${t21.value}${t22.value}${t23.value}${t24.value}${t25.value}`;
  if (confirmaPalavra.length === 5) {
    for (let index = 0; index < palavra.length; index += 1) {
      if (palavra[index] === listaInput[index].value) {
        listaInput[index].style.backgroundColor = 'green';
      } else {
        letrasRestantes.push(palavra[index])
      }
      listaInput[index].disabled = true;
    }
  }
  return letrasRestantes;
}

const linha5_1 = () => {
  const letrasRestantes = linha5();
  const inputFaltando = [t21, t22, t23, t24, t25].filter((element) => element.style.backgroundColor !== 'green');
  for (let index = 0; index < inputFaltando.length; index += 1) {
    for (let i = 0; i < letrasRestantes.length; i += 1) {
      if (inputFaltando[index].value === letrasRestantes[i]) {
        inputFaltando[index].style.backgroundColor = 'red';
        letrasRestantes.splice(i, 1);
      }
    }
  }
}

const linha6 = () => {
  const letrasRestantes = [];
  const listaInput = [t26, t27, t28, t29, t30];
  const confirmaPalavra = `${t26.value}${t27.value}${t28.value}${t29.value}${t30.value}`;
  if (confirmaPalavra.length === 5) {
    for (let index = 0; index < palavra.length; index += 1) {
      if (palavra[index] === listaInput[index].value) {
        listaInput[index].style.backgroundColor = 'green';
      } else {
        letrasRestantes.push(palavra[index])
      }
      listaInput[index].disabled = true;
    }
  }
  return letrasRestantes;
}

const linha6_1 = () => {
  const letrasRestantes = linha6();
  const inputFaltando = [t26, t27, t28, t29, t30].filter((element) => element.style.backgroundColor !== 'green');
  for (let index = 0; index < inputFaltando.length; index += 1) {
    for (let i = 0; i < letrasRestantes.length; i += 1) {
      if (inputFaltando[index].value === letrasRestantes[i]) {
        inputFaltando[index].style.backgroundColor = 'red';
        letrasRestantes.splice(i, 1);
      }
    }
  }
}

botaoTeste.addEventListener('click', linha1)
botaoTeste.addEventListener('click', linha1_1)

botaoTeste2.addEventListener('click', linha2);
botaoTeste2.addEventListener('click', linha2_1);

botaoTeste3.addEventListener('click', linha3)
botaoTeste3.addEventListener('click', linha3_1)

botaoTeste4.addEventListener('click', linha4);
botaoTeste4.addEventListener('click', linha4_1);

botaoTeste5.addEventListener('click', linha5)
botaoTeste5.addEventListener('click', linha5_1)

botaoTeste6.addEventListener('click', linha6);
botaoTeste6.addEventListener('click', linha6_1);
