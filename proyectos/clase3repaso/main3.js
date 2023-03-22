//SUGAR SINTAX//

//1-PLANTILLAS LITERALES, la usamos a tra ves de backsticks// 

let nombre = "Pepe";
let trabajo ="Zapateria";

let mensaje = ` ${nombre} trabaja en una ${trabajo}`;
console.log (mensaje);


//2-OPERADOR TERNARIO: simplificacion de if o else// 
// sintaxis: condicion ? codigosiesverdad :codigosiesfalso;//

let llueve = true;
 
console.log (llueve ? "tortafrita" : "asado")

//3-OPERADOR spread , operador de propagacion se usa con array u objetos//

const nombres = ["Juan", "Pedro"];
console.log (nombres);

console.log (...nombres)


const a = [1,2,3];
const b = [4,5,6];
const nuevoArray = [...a,...b];
console.log (nuevoArray);

//metodo SORT, modo destrcutivo, para ordenar los elementos del array//
nuevoArray.sort ((a,b) => a-b);
console.log (nuevoArray);

//4-desestructuracion de objetos//

conts= bart ={
    nombre:"Bart",
    apellido:"Simpson",
    edad:10,
}

let  {nombre:nombrecillo,apellido, edad} = bart;
console.log (edad);

//5-desestructuracion de array//

let frutas =["manzana", "pera"]
let [fruta1,fruta2] =frutas
console.log(fruta1)


