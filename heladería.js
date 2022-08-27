//juanito quiere comprar un helado en la heladería y tiene "x" cantidad de dinero dependiendo de la cantidad del costo del helado, juanito puede comprar o no el helado. el heladero requiere un programa para saber cuanto dinero le sobra a juanito

var juanito = 2000;
var helado1 = 500;
var helado2 = 3000;
var helado3 = 1500;
var opcion = prompt(
  "¿que helado deseas comprar? 1-helado1 2-helado2 3-helado3"
);

if (opcion == 1) {
  console.log(
    "juanito compró el helado1 y le sobra" +
      (juanito - helado1) +
      "pidele más plata a tu mamá" +
      juanito
  );
} else if (opcion == 2) {
  console.log(
    `juanito no puede comprar el helado2 porque vale más ${helado3 - juanito}`
  );
} else if (opcion == 3) {
  console.log("juanito compró el helado1 y le sobra" + (juanito - helado3));
} else {
  console.log("opcion no valida");
}
