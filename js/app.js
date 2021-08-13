let dia = new Date().getDay();
let saludo = document.getElementById('diaSaludo')

switch (dia) {
  case 0:
    saludo.innerText=`FELIZ DOMINGO!`
    break;
  case 1:
    saludo.innerText=`FELIZ LUNES!`
    break;
  case 2:
    saludo.innerText=`FELIZ MARTES!`
    break;
  case 3:
    saludo.innerText=`FELIZ MIERCOLES!`
    break;
  case 4:
    saludo.innerText=`FELIZ JUEVES!`
    break;
  case 5:
    saludo.innerText=`FELIZ VIERNES!`
    break;

  default:
    saludo.innerText=`FELIZ SABADO!`
    break;
}