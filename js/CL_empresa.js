export default class CL_empresa{
    constructor(){
        this.acumtotal=0.0;
    }
    procesar(tra){
        this.acumtotal+=tra.total();
    }
}