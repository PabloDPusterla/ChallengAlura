

function encriptar() {

  let texto = document.getElementById("texto_encriptar").value;
    
    let tieneMayusculas = /[A-Z]/.test(texto);
    let tieneAcentos = /[áéíóúü]/.test(texto);
  
    if (tieneMayusculas || tieneAcentos) {
      alert("Por favor, ingrese solo letras minúsculas sin acentos.");
      return;
    }
  
  let cadena = texto
  
  .replace(/e/g, 'enter')
  .replace(/i/g, 'imes')
  .replace(/a/g, 'ai')
  .replace(/o/g, 'ober')
  .replace(/u/g, 'ufat');
  
  
  
  

  
 
  document.getElementById("texto_encriptado").value = cadena;

  limpiarTexBox("texto_encriptar");

}

function desencriptar() {

  let texto = document.getElementById("texto_encriptar").value;

  let desencriptado = texto
    .replace(/ai/g, 'a')
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u')

  document.getElementById("texto_encriptado").value = desencriptado;

  limpiarTexBox("texto_encriptar");
}

function limpiarTexBox(caja){
  document.getElementById(caja).value = "";
}

function copiar(){
let textoCopiar = document.getElementById("texto_encriptado");
textoCopiar.select();
document.execCommand("copy");
limpiarTexBox("texto_encriptado");
}

