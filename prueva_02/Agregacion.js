"use strict";
class Auto {
    get Patente() { return this.patente; }
    ;
    set Patente(p) { this.patente = p; }
    ;
    constructor(patente, motor1) {
        this.patente = patente;
        this.motor = motor1;
    }
}
class Motor {
    get Cilindrada() { return this.cilindrada; }
    ;
    set Cilindrada(c) { this.cilindrada = c; }
    ;
    constructor(cilindrada) {
        this.cilindrada = cilindrada;
    }
}
let motor1 = new Motor(1000);
let auto1 = new Auto('abc', motor1);
