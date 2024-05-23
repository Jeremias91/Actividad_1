class Auto {
    private patente:String;
    private motor:Motor;
    get Patente():String { return this.patente};
    set Patente(p:String) {this.patente = p};

    constructor(patente:string, motor1:Motor){
        this.patente = patente;
        this.motor = motor1;
    }

}

class Motor{
    private cilindrada:Number;
    get Cilindrada():Number{ return this.cilindrada};
    set Cilindrada(c:Number) {this.cilindrada = c};

    constructor(cilindrada:Number){
        this.cilindrada = cilindrada;

    }

}

let motor1= new Motor(1000); 

let auto1 = new Auto('abc',motor1)