export default class CL_trabajador{
    constructor(nombre, horaregular, horaextra){
        this.nombre=nombre;
        this.horaregular=horaregular;
        this.horaextra=horaextra;
       
    }
    calcregular(){
        return this.horaregular*10;
    }
    calcextra(){
        return this.horaextra*25;
    }
    total(){
        return this.calcregular()+this.calcextra();
    }
}