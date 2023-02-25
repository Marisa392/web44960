/*CONDICIONES
while es por condicion, siempre y cuando sea verdadera
*/

/*let valor =1
while (valor <=5) {
    console.log ("valor de la variable" + valor )
    valor ++
}


/*for (expresion inicial, condicion, expresion final)
sentencia*/

/*for (i=0; i<10; i++){
    console.log ("itere 10 veces corte" + i)
}
*/

//funciones son un sub-codigo de algoritmo, la funcion corre cuando se llama
//funcion un conjunto de instrucciones para realizar algo
//ejemplo de calculadora
/*let n1, n2, resultado, resultado2

n1= Number (prompt("Ingresa el primer numero"))
n2=Number (prompt("Ingresa el segundo numero"))

resultado = n1 + n2
resultado2= n1 + n2

console.log (resultado)
console.log (resultado2)*/

//sub-funcion suma sintaxis
//function name(params) {
    
//}

//function saludar () {
    //alert ("Hola soy una funcion que saluda")
    
//}
//saludar ()

/*function sumar(n1,n2,n3) {
    let resultado = n1 + n2+ n3
    console.log(resultado)
    return resultado
    
}

let n1, n2, n3

n1= Number (prompt("Ingresa el primer numero"))
n2= Number (prompt("Ingresa el segundo numero"))
n3= Number (prompt("Ingresa el tercer numero"))

let datos=sumar(n1,n2,n3)
console.log (datos)  
*/

/*function calculadora(valor1,valor2, operador) {
switch (operador) {
    case "+":
        return valor1 + valor2;
        
        case "-":
            return valor1 - valor2;
            
            case "*":
        return valor1 * valor2;
        
        case "/":
        return valor1 / valor2;

    default:
        return 0
}
}

let n1= Number (prompt("Ingresa el primer valor"))
let n2= Number (prompt("Ingresa el segundo valor"))
let operacion= (prompt("Ingresa el operador a utilizar \n + para sumar \n - para restar \n * para multiplicar \n / para dividir"))

alert (calculadora(n1,n2,operacion))
*/

//scope alcance, ambito, amplitud
//variable LOCAL 
//function saludarAJuan(params) {
 // el alcance que esta dentro de las llaves
 // los parantesis son donde se guardan la info, las llaves son las sentencias a ejecutar
  //let nombre= "Juan"
  // return nombre
  //console.log (nombre)
 //}
 //saludarAJuan()

/*VARIABLES GLOBALES
let resultado
 function suma (valor1, valor2){
    resultado= valor1 + valor2
 }
 suma(3,5)
console.log (resultado)
resultado =30;
console.log (resultado)
*/

/*funcion flecha, funcion anonima


const saludar = function(nombre){
let nombre = "Juan"
let alerta = alert ("Hola mi nombre es " + nombre)
return alerta
}
saludar ()
*/

/*const saludar= (nombre)  => {return "Hola mi nombre es " + nombre}
alert(saludar("Juan"))*/

/*funcion flecha
const suma = (n1, n2) => n1+n2
console.log (suma(40,50))
*/

/*ENTREGA
CREAR UN SIMULADOR INTERACTIVO, TIENE QUE TENER VARIABLES, ESTRUCTURA DE Constrol.. 
Swicht , un IF, IF ANIDADO, BUCLE QUE LE PREGUNTE TRES VECES AL USUARIO SU NOMBRE 
Y UNA FUNCION

CALCULAR EL COSTO TOTAL DE PRODUCTOS O SERVICIOS SELECCIONADOR POR EL USUARIO

un switch con las diferentes tipos de remeras, camisas, musculosas, opcion1, opcion2,opcion3
*/

/*OBJETOS, SON VARIABLES QUE AGRUPAN BAJO EL MISMO CRITERIO DISTINTOS TIPOS DE VALORES
objeto LITERAL CUANDO LO CREAMOS NO LO EDITAMOS
*/

/*const imai_01 = {
marca: "Samsung",
color: "Blanco",
precio: 50000
}
console.log (imai_01.marca, imai_01.precio, imai_01.color)

imai_01.pixeles=18
console.log (imai_01.pixeles)S*/

/*OBJETO CONSTRUCTOR ES LA CREACION DE LA BASE PARA REPLICAR COPIAS FIELES.
THIS SOLO SE UTILIZA EN LOS CONSTRUCTORES, THIS SIGNIFICA "ESTE."
EL CONSTRUCTOR SE DEFINE CON LA SINTAXIS DE UNA FUNCION SE LE ASIGNAN PARAMETROS
Y LUEGO ESOS PARAMETROS SE TIENEN QUE CONVERTIR EN PROPIEDADES GLOBALES USANDO THIS
LUEGO SE UsA NEW PARA CREAR A PARTIR DEL CONSTRUCTOR ORIGINAL LAS COPIAS INFINITAS 
CON LAS MISMA PROPIEDADES DEL CONSTRUCTOR

La mayuscula esta reservada para los constructores

function Persona(nombre,apellido) {
    this.nombre= nombre;
    this.apellido= apellido;
    this.hablar= function(){alert("Hola mi nombre es " + this.nombre)}
}

const estudiante1 = new Persona ("Juan, Perez")
const estudiante2 = new Persona ("Pedro, Lopez")
estudiante1.hablar()

console.log ("El estudiante se llama " + estudiante1.nombre + " y su apellido es " +estudiante1.apellido)
for(const propiedades in estudiante1){
    console.log(estudiante1[propiedades])
}*/


/*METODOS
let nombre= prompt( "Ingresa tu nombre").toUpperCase()
let nombre1= prompt( "Ingresa tu nombre").toLowerCase()*/



/*ES6 class VERSION NUEVA

class Persona {
constructor (nombre,apellido,dni){
    this.nombre= nombre;
    this.apellido= apellido;
    this.dni= dni;
}

hablar () {
    alert("Hola mi nombre es " + this.nombre)
}
}

const estudiante1= new Persona ("Juan, Perez")
console.log (estudiante1.hablar())

SI O SI UN CONTRUCTOR PARA EL TRABAJO FINAL

EJEMPLO DE VERSION ES6*/
/*class Producto{
    constructor(nombre, precio){
        this.nombre= nombre.toUpperCase();
        this.precio= Number(precio)
    }
    sumarIva(){
        this.precio = this.precio *1.21
    }
}

const prod1 = new Producto (prompt("Ingresa el nombre del producto"), 
prompt("Ingresa el precio del producto"))

const prod2= new Producto (prompt("Ingresa el nombre del producto"), 
prompt("Ingresa el precio del producto"))

prod1.sumarIva()
prod2.sumarIva()
console.log(prod1)
console.log(prod2)
*/


/*array, es un objeto que representa una lista, dentro de la lista podemos guardar
String,number, boolean, object and array*/

/*const listaDeCursos = [ "js", "React", "Backend"]
console.log (listaDeCursos)

for (let index = 0; index < listaDeCursos.length; index++) {
    const element = listaDeCursos[index];
    console.log(element)
    
}

*/
/*length= cuenta la longitud 
let nombre= "Marisa"
console.log (nombre.length)*/

/*MeTODO-SINTAXIS .elNombreDelMetodo
PUSH */
/*unshift, ENVIA LOS DATOS A LA PRIMERA POSICION Y MUEVE LAS DEMAS POSICIONES 
SHIFT, elimina el primer o ultimo elemento
POP, ELIMINA EL ULTIMO INGRESO DEL ARRAY
*/
/*const diasDeLaSemana =[ "lunes", "Martes", "Miercoles","Jueves", "Viernes" ]
diasDeLaSemana.push ("Sabado")
console.log(diasDeLaSemana)

diasDeLaSemana.unshift ("Domingo")
console.log (diasDeLaSemana)

diasDeLaSemana.shift()
console.log (diasDeLaSemana)

diasDeLaSemana.pop()
console.log (diasDeLaSemana)*/

/*SPLICE ELIMINA 1 O VARIOS ELEMENTOS EN CUALQUIER POSICION
const diasDeLaSemana =[ "lunes", "Martes", "Miercoles","Jueves", "Viernes" ]
console.log(diasDeLaSemana)
diasDeLaSemana.splice(2,1)*/

/* el 0 AGREGA 
const diasDeLaSemana =[ "lunes", "Martes", "jueves", "viernes" ]
diasDeLaSemana.splice(2,0,"Miercoles")
console.log(diasDeLaSemana)*/

/*const jugadoresParaMundial =[]
let cantidad =5

do{
    let jugadores = prompt ("Ingresa la lista de jugadores")
    jugadoresParaMundial.push (jugadores)
    console.log (jugadoresParaMundial)
}
while (jugadoresParaMundial.length != cantidad)*/


/*ejemplo de constructor*

class Producto{
    constructor(nombre2, precio2,id2){
        this.id=id2
        this.nombre= nombre2.toUpperCase();
        this.precio= Number(precio2)
    }
    sumarIva(){
        this.precio = this.precio *1.21
    }
}

const productos =[]
let cantidad = 3; cantidad de objetos

do{
    let id = prompt ("Ingresa el id")
    let prod = prompt ("Ingresa el prod")
    let precio = prompt ("Ingresa el precio")
    productos.push(new Producto(id,prod,precio))

}while(productos.length != cantidad)

console.log(productos)*/

/*FOR IN RECORRER OBJETOS./*
/*ejemplo FOR OF ES PARA  RECORRER ARRAY DE OBJETOSc
productos.push (new producto (1, "papa", 500),new producto (2,"harina",300))
console.log (productos)

for (const prod of productos) {
    console.log(prod)*/




    /*const datosDelArray= ["uno", "dos", "tres"]
datosDelArray.forEach(element => console.log(element));
FOR EACH FUNCION DE ORDEN SUPERIOR REEMPLAZA EL FOR */

/*FIND,COMPARA ENTRA AL ARRAY Y SI ES TRUE LO DEVUELVE
const prod =[
    {nombre:"Arroz",precio:500},
    {nombre:"Harina",precio:500}

]
const info = prod.find((element) => element.nombre ==="Arroz")
console.log(info)*/

/*METODO FILTER-FILTRA LOS DATOS DEL ARRAY POR COMPARACION DEL PARAMETRO*/
/*const prod =[
    {nombre:"Arroz",precio:500},
    {nombre:"Harina",precio:500},
    {nombre:"Harina",precio:600},
    {nombre:"Harina",precio:800}
]
const productos = prod.filter((element)=> element.nombre.includes ("Harina"))
console.log (productos)*/

/*PROGRAMAR UN ARRAY VACIO Y LUEGO PUSH EL ARTICULO.
METODO REDUCE PARA mostrar el saldo FINAL DEL CARRITO DE COMPRAS
const saldos= [1000,5000,7000,500]
const precioAPagar=saldos.reduce((acc,element) => acc + element,0 )
console.log(precioAPagar)*/


/*const prod =[
    {nombre:"Arroz",precio:500},
    {nombre:"Harina",precio:500},
    {nombre:"Harina",precio:600},
    {nombre:"Harina",precio:800},
]
console.log(prod)
const preciosConIvaYProdEnMay = prod.map ((elem)=>{
    return{
        nombre: elem.nombre.toUpperCase(),
        precio:elem.precio *1.21
    }
}
)
console.log(preciosConIvaYProdEnMay)*/

/*HACER EL CARRITO DE COMPRAS, SIMULAR INGRESAR PRODUCTOS CON EL prompt
CON EL CONTRUCTOR QUE CREA EL ARRAY Y LUEGO USAMOS EL METODO MAP PARA EL IVA
Y CON EL REDUCE MOSTRAR EL USUARIO LO QUE NOS DEBE*/


/*OBJETOS Math
const datos= [1,34,333,2335]
let valorMax=Math.max(...datos)
let valorMin=Math.min(...datos)
console.log(valorMax)]


console.log(valorMin)

console.log(new Date())*/