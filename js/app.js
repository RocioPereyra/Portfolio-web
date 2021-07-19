let dia = new Date().getDay();
let saludo = document.getElementById('diaSaludo')

switch (dia) {
  case 0:
    saludo.innerText=`FELIZ DOMINGO!`
    break;
  case 1:
    saludo.innerText=`BUEN LUNES!`
    break;
  case 2:
    saludo.innerText=`BUEN MARTES!`
    break;
  case 3:
    saludo.innerText=`BUEN MIÉRCOLES!`
    break;
  case 4:
    saludo.innerText=`FELIZ JUEVES!`
    break;
  case 5:
    saludo.innerText=`BUEN VIERNES!`
    break;

  default:
    saludo.innerText=`BUEN SÁBADO!`
    break;
}