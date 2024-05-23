class Persona{
  //Atributos de nuestro objeto Persona
  private nombre:string='';
  apellido:string='';
  anoActual:number=0;
  anoNac: any;

  constructor(nombre:string, apellido:string) {  
        this.nombre = nombre;
        this.apellido = apellido;
      }

  toString():string  {
    return this.nombre + this.apellido;
  }

  edad(ano_actual:number):number  {
    return this.anoActual - this.anoNac;
  }

}

class Estudiante extends Persona {
    private nota:number  = 0;
    constructor(nota:number , nombre:string, apellido:string){
      super(nombre, apellido );
      this.nota = 0
    }

}

let cesar= new Estudiante(0, 'Cesar','Perez' ); 