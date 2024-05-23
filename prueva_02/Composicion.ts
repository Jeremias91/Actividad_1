class Book {
    private nombreLibro:String;
private hojas:Page;

    constructor(nombreLibro:String){
        this.nombreLibro = nombreLibro;
        this.hojas = new Page( 1, 'buenas')

    }

}

class Page{
    private numeroDeHoja:Number;
    private texto:String;

    constructor(numeroDeHoja:Number, texto:String){
        this.numeroDeHoja = numeroDeHoja;
        this.texto=texto;

    }

}

let book1 = new Book ('libro1')
