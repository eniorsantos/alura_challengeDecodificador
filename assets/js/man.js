// Função encriptar e enviar---------------


let btncripto = document.getElementById('cripto');

//let pattern = '[a-z]';
btncripto.addEventListener('click', function (e) {
  let frase = document.getElementById('texto').value;
  let fraseCripto = [];

  if (checkChar(frase)) {


    for (let j = 0; j < frase.length; j++) {

      if (frase[j] == 'a') {
        fraseCripto.push('ai');
      } else if (frase[j] == 'e') {
        fraseCripto.push('enter');
      } else if (frase[j] == 'i') {
        fraseCripto.push('imes');
      } else if (frase[j] == 'o') {
        fraseCripto.push('ober');
      } else if (frase[j] == 'u') {
        fraseCripto.push('ufat');
      } else {
        fraseCripto.push(frase[j])
      }

    }

    let mychar = fraseCripto.toString().replace(/,/g, '');

    localStorage.setItem('valueText', mychar);

    window.location.replace('aplicacao.html');

    
  } else {
    alert('Apenas letras minúsculas e sem acento!')
   
  }




});

// Função descriptar e enviar----------------

let btndescripto = document.getElementById('descripto');
btndescripto.addEventListener('click', function (e) {
  let texto = document.getElementById('texto').value;

  if (checkChar(texto)) {


    let fraseDescrip = texto.replace(/ai/g, 'a').replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ober/g, 'o').replace(/ufat/g, 'u');

    localStorage.setItem('valueText', fraseDescrip);

    window.location.replace('aplicacao.html');

    

  } else {
    alert('Apenas letras minúsculas e sem acento!')
    
  }
});

let textretorno = document.getElementById('textretorno');
textretorno.textContent = localStorage.getItem('valueText');

//Funcão COPIAR ok--------------

document.getElementById('copiar').addEventListener('click', clipboardCopy);
async function clipboardCopy() {
  let text = document.getElementById('textretorno').value;
  await navigator.clipboard.writeText(text);
}

// funcao testa caracteres

function checkChar(e) {
  let pattern = '[a-z]';
  let f = e;

  for (let j = 0; j < f.length; j++) {

    if (f[j].match(pattern) || f[j] === ' ' || f[j] === '\n') {
      continue;
    } else {
      return false;
    }

  }
  return true;


}