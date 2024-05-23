"use strict";
class Persona {
    constructor(nombre, apellido) {
        //Atributos de nuestro objeto Persona
        this.nombre = '';
        this.apellido = '';
        this.anoActual = 0;
        this.nombre = nombre;
        this.apellido = apellido;
    }
    toString() {
        return this.nombre + this.apellido;
    }
    edad(ano_actual) {
        return this.anoActual - this.anoNac;
    }
}
class Estudiante extends Persona {
    constructor(nota, nombre, apellido) {
        super(nombre, apellido);
        this.nota = 0;
        this.nota = 0;
    }
}
let cesar = new Estudiante(0, 'Cesar', 'Perez');
