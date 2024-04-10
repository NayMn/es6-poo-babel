export default class Cliente {
    constructor(nombre, impuestos) {
        this._nombre = nombre;
        this._impuestos = impuestos;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }

    calcularImpuesto() {

        return console.log(`impuesto total a pagar: ${(this._impuestos.montoBrutoAnual - this._impuestos.deducciones) * 0.21}`)
    }
}