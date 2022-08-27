var valor1 = parseInt(prompt("ingresa el numero 1"));
var valor2 = parseInt(prompt("ingresa el numero 2"));
var opcion = prompt("ingresa la operacion matematica 1: + 2: - 3: * 4: /");

if (opcion == 1) {
  console.log(`el resultado es ${valor1 + valor2}`);
} else if (opcion == 2) {
  console.log(`el resultado es ${valor1 - valor2}`);
} else if (opcion == 3) {
  console.log(`el resultado es ${valor1 * valor2}`);
} else if (opcion == 4) {
  console.log(`el resultado es ${valor1 / valor2}`);
} else {
  console.log("opción incorrecta");
}
