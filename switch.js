let mes = 1; // cambia este valor de 1 a 12

switch (mes) {
  case 12:
  case 1:
  case 2:
    console.log("Invierno");
    break;

  case 3:
  case 4:
  case 5:
    console.log("Primavera");
    break;

  case 6:
  case 7:
  case 8:
    console.log("Verano");
    break;

  case 9:
  case 10:
  case 11:
    console.log("Otoño");
    break;

  default:
    console.log("Mes no válido");
}
