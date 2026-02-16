var amplitude0 = 1;
var amplitude1 = 0;

var intensidadeCampoMagnetico;
var tempoInteração;
var numeroMedi;

var auraEgo = Math.sqrt(2);

  var novaAmplitude0;
    var novaAmplitude1;


var estado ;
var estadoReal;
var estadoImaginario;



function verificar1() {
  const campo = document.getElementById('intensidade');
  const valorNumerico = Number(campo.value);
  const aviso = document.getElementById('aviso');

     if (campo.value === "") {
    aviso.innerText = " Enter a valid number.";
     } 
      else if (isNaN(valorNumerico)) {
    aviso.innerText = " That is not an number";
    campo.value = "";
      }
     else if ( valorNumerico>6.28) {
    aviso.innerText = " Enter something lower than 6,28";
    campo.value = ""; 
 }
   else {
    aviso.innerText = "";
    intensidadeCampoMagnetico= valorNumerico;
   // alert("Número aceito: " + intensidadeCampoMagnetico);
  }
  if (!isNaN(intensidadeCampoMagnetico) && !isNaN(tempoInteração)){
      ronaldo()
}
}

function verificar2() {
  const campo2 = document.getElementById('tempoInteracao');
  const valorNumerico2 = Number(campo2.value);
  const aviso2 = document.getElementById('aviso2');

     if (campo2.value === "") {
    aviso2.innerText = " Enter a valid number.";
     } 
      else if (isNaN(valorNumerico2)) {
    aviso2.innerText = "That is not a number.";
    campo2.value = "";
      }
     else if ( valorNumerico2>10) {
    aviso2.innerText = "Enter something lower or equal than 10";
    campo2.value = ""; 
 }
   else {
    aviso2.innerText = "";
    tempoInteração = valorNumerico2;
    //alert("Número aceito: " + tempoInteração);
    if (!isNaN(intensidadeCampoMagnetico) && !isNaN(tempoInteração)){
      ronaldo()
}

  }

}





function ronaldo(){
novaAmplitude0 = (amplitude0 + amplitude1 )/auraEgo;
novaAmplitude1 = (amplitude0 - amplitude1)/auraEgo;


var fase;
fase = tempoInteração*intensidadeCampoMagnetico;




var novaAmplitude1_real = novaAmplitude1 * Math.cos(fase);
var novaAmplitude1_imaginaria = novaAmplitude1 * Math.sin(fase)

estadoReal = [novaAmplitude0, novaAmplitude1_real];
estadoImaginario = [0, novaAmplitude1_imaginaria]; //rotação so afeta a segunda amplitude

estado = [novaAmplitude0, novaAmplitude1_real];
var faseNormalizada = (fase * 180 / Math.PI) % 360;
document.getElementById('estadoQuant').innerText = " Real State: [" + estadoReal[0].toFixed(2) + ", " + estadoReal[1].toFixed(2) + "]";
document.getElementById('fase').innerText = "Phase: " + (faseNormalizada.toFixed(2)) + "°";
document.getElementById('zonaDeInterf').innerText = " Imaginary Amplitude: [" + estadoImaginario[0].toFixed(2) + ", " + estadoImaginario[1].toFixed(2) + "]";
let magnitude1 = Math.sqrt(novaAmplitude1_real**2 + novaAmplitude1_imaginaria**2);
document.getElementById('bagulho imaginario').innerText = " second amplitude modulus : " + magnitude1;
}







