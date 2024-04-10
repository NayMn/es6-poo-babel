import Cliente from "./main.js";
import Impuestos from "./impuestos.js";

let primerImpuesto = new Impuestos(100, 20);


let primerCliente = new Cliente("josefa", new Impuestos(600, 30));
let segundoCliente = new Cliente("pamela", primerImpuesto);
let tercerCliente = new Cliente("fernanda", new Impuestos(700, 40));

primerCliente.calcularImpuesto();
tercerCliente.calcularImpuesto();
