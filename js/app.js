// 1. CIFRADO

let btnCipher = $('#btnCipher'); 

btnCipher.click((event) => {
  event.preventDefault();
  cipher(this);  
});

// Función para cifrar
let cipher = (phrase) => {
  // Pidiendo una frase al usuario
  var phrase = document.getElementsByTagName('input')[0].value;
  
  // Obtener el caracter ASCII de cada letra y almacenar en un array
  let inputPhrase = [];
  for (let i = 0; i < phrase.length; i++) {
    inputPhrase.push(phrase.charCodeAt(i));
  }

  // Aplicar fórmula
  for (let j = 0; j < phrase.length; j++) {
    if (inputPhrase[j] >= 65 && inputPhrase[j] <= 90) { // Para letras MAYUSCULAS
      inputPhrase[j] = (inputPhrase[j] - 65 + 33) % 26 + 65;
    } else if (inputPhrase[j] >= 97 && inputPhrase[j] <= 122) { // Para letras minusculas
      inputPhrase[j] = (inputPhrase[j] - 97 + 33) % 26 + 97;
    } else {
      inputPhrase[j] = inputPhrase [j];
    }
  }
  
  // Transformar número en letra (Caracter ASCII)
  let outputPhrase = [];
  for (let j = 0; j < phrase.length; j++) {
    outputPhrase.push(String.fromCharCode(inputPhrase[j]));
  }

  // Convertir el array en string y mostrar frase cifrada al usuario
  document.getElementById('result').innerHTML = outputPhrase.join('');
};

// 2. DESCIFRADO

let btnDecipher = $('#btnDecipher');

btnDecipher.click((event) => {
  event.preventDefault();
  decipher(this);
});

// Creando función para descifrar
let decipher = (phrase) => {
// Pidiendo una frase al usuario
  var phrase = document.getElementsByTagName('input')[0].value;

  // Obtener el caracter ASCII de cada letra y almacenar en un array
  let inputPhrase = [];
  for (let i = 0; i < phrase.length; i++) {
    inputPhrase.push(phrase.charCodeAt(i));
  }

  // Aplicar fórmula
  for (let j = 0; j < phrase.length; j++) {
    if (inputPhrase[j] >= 65 && inputPhrase[j] <= 90) { 
      inputPhrase[j] = (- 33) % 26 + inputPhrase[j];
    } else if (inputPhrase[j] >= 97 && inputPhrase[j] <= 122) {
      inputPhrase[j] = (- 33) % 26 + inputPhrase[j];
    } else {
      inputPhrase[j] = inputPhrase [j];
    }
  }

  // Transformar número en letra (Caracter ASCII)
  let outputPhrase = [];
  for (let j = 0; j < phrase.length; j++) {
    outputPhrase.push(String.fromCharCode(inputPhrase[j]));
  }

  // Convertir el array en string y mostrar frase cifrada al usuario
  document.getElementById('result').innerHTML = outputPhrase.join('');
};