/*TRABAJADORES EMPRESA
Se conoce de cada uno de los trabajadores de una empresa su nombre, número de horas
trabajadas en tiempo regular y número de horas extra. La hora en tiempo regular se paga a
10$. y la hora en tiempo extra se paga a 25$. Se desea que el programa genere el nombre y
salario obtenido de cada trabajador; además se requiere el monto total de nómina pagada.
Se dispone de los siguientes datos de varios trabajadores: (nombre, número de horas
regular, números de horas extra) (Mary, 30, 10), (José, 35,5), (Carlos, 35,0), (Pedro, 25, 10)
El trabajador Mary tiene un salario de: 550$
El trabajador José tiene un salario de: 475$
El trabajador Carlos tiene un salario de: 350$
El trabajador Pedro tiene un salario de: 500$
Monto total de nómina pagada: 1875$*/
import CL_empresa from "./CL_empresa.js";
import CL_trabajador from "./CL_trabajador.js";

let trab1=new CL_trabajador("Mary", 30, 10);
let trab2=new CL_trabajador("Jose", 35, 5);
let trab3=new CL_trabajador("Carlos", 35, 0);
let trab4=new CL_trabajador("Pedro", 25, 10);

let empresa= new CL_empresa();
empresa.procesar(trab1);
empresa.procesar(trab2);
empresa.procesar(trab3);
empresa.procesar(trab4);

let salida=document.getElementById("salida");
salida.innerHTML=`

El trabajador ${trab1.nombre} tiene un salario de: ${trab1.total()}$
<br>El trabajador ${trab2.nombre} tiene un salario de: ${trab2.total()}$
<br>El trabajador ${trab3.nombre} tiene un salario de: ${trab3.total()}$
<br>El trabajador ${trab4.nombre} tiene un salario de: ${trab4.total()}$
<br><br>
<br>Monto total de nómina pagada: ${empresa.acumtotal}$

`


