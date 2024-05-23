"use strict";
class Book {

    constructor(nombreLibro){
        this.nombreLibro = nombreLibro;
        this.hojas = new Page( 1, 'buenas')

    }

}

class Page{

    constructor(numeroDeHoja, texto){
        this.numeroDeHoja = numeroDeHoja;
        this.texto=texto;

    }

}

let book1 = new Book ('libro1')
