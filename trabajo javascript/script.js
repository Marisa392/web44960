//DECLARAR LA VARIALE
//SINTAXIS
//CPALABRA RESERVADA PARA DEFINIR LA VARIABLE-EL VALOR (NOMBBRE PARA IDENFITICAR EL VALOR)
//= SIMBOLO DE ASIGNACION DE VALOR-TIPO DE VALOR
//DECLARO LA VARIABLE 
//let nombre = "Carolina"

//let nombre, apellido
//nombre= "Carolina"




//vamos a decirle al mundo hola
/*varias lineas de 
comentarios*/
//onsole.log("Hello World")

//nombre = "Marisa"
//let apellido = "Ferreyra"


//alert("esto es una alerta")
//alert("mi nombre es" + " " + nombre + " " + "mi apellido es " + apellido)

//let nombre = prompt("Ingresa tu nombre")
//let apellido = prompt ("Ingresa tu edad")
//console.log(nombre)
//console.log(edad)

//let num1, num2, resultado ;

//num1=pr ompt ("Ingresa el primer numero a sumar")
//num2=prompt ("Ingresa el segundo numero a sumar ")

//resultado= num1 + num2
//alert (resultado)

//let nombre =  prompt ("Ingresa tu nombre")
//let apellido  = prompt ("Ingresa tu apellido")
//let nacimiento = prompt ("Ingresa fecha de nacimiento")
//alert (nombre + " " +  apellido) 

//let nombre = prompt (" Ingrese su nombre ")
//let apellido = prompt (" Ingrese su Apellido ")
//let fecha = prompt (" Ingrese su fecha de Nacimiento ")
//alert ("Mi nombre es " + nombre + " " + "y mi apellido es"+ " " +apellido+ " " +"Mi fecha de nacimiento es" +" " + fecha)

//numeros
//parseInte pasar a enteros
//parseFloat, pasar a flotantes

//let n1, n2, resultado

//n1 = parseInt(prompt("Ingresa un num"))
//n2 = parseInt (prompt("Ingresa un num"))  


//n1 = Number(prompt("Ingresa un num"))
//n2 = Number (prompt("Ingresa un num"))  
//resultado = n1 + n2
//console.log (resultado)

//variales simbols + - *  / 
// incrementador o decrementador 
// ++ de a 1
// - - de a 1  
//let vida = 4
//vida++
//console.log (vida)

//=asignar valor solo con el signo igual 

//let monedas =25
//monedas -=1
//console.log (monedas)

//boolean=variables logicas=true o false
// el operador AND && "y"
// verdadero && verdadero= verdadero
// falso && verdadero= falso
// verdadero && falso = falso
// falso && falso = falso
//TODO ES FALSO MENOS verdadero && verdadero= verdadero

//let tengoHambre =true
//let tengoComida = true
//let comoComida= tengoHambre && tengoComida
//console.log (comoComida)

//el operador OR  || "O"
//verdadero || verdadera= verdadero
//falso ||verdadero= verdadero
//verdadero||falso=verdadero
//falso||falso=falso
//TODO ES VERDADERO MENOS falso||falso=falso

//let tren= true;
//let colectivo= false
//let llegoAlTrabajo=tren || colectivo
//console.log (llegoAlTrabajo)

//operador NOT ! negacion
//let meGustaEstudiar =!true
//console.log(meGustaEstudiar)

//OPERADORES LOGICOS
// 5 < 4 :false
// let n1, n2, resultado;
// n1=7;
// n2=6;
// resultado = n1 <= n2;
// console.log (resultado)

//=== estrictamente igual 
//!==estrictamente diferente 
//let n1, n2, resultado;
//n1= 7
//n2= "7"
//resultado=n1 === n2;
//console.log(resultado)

//if SI CONDICIONADO, LA CONDICION TIENE QUE SER VERDADERA
//if (true){
//alert ("Soy verdadero")
//}

//if (!false){
//alert ("Soy verdadero")
//}

//if...else(sino)
//if(false){
   //alert("Soy verdadero")
//}else{
   // alert("Es falso")
//}

//EJEMPLO
//let edadParaVentaDeAlcohol=18
//let edad = Number (prompt("Ingresa tu edad"))
//if (edad >= edadParaVentaDeAlcohol) {
    //alert(" Estas habilitado para comprar alcohol")
//} else {
    //alert ("No estas habilitado para comprar alcohol")
//}

//let nombreDeUsuario = prompt (" Ingresa el nombre de usuario")

//if (nombreDeUsuario == "") {
    //alert ("No ingresaste nada, volve a ingresar")
//} else {
    //alert (" El nombre ingresado es " + nombreDeUsuario)
//}

//EJEMPLO DE LOGIN
//let usuario = "juan@mail.com"
//let contrasenia = "1234"
//let login = prompt("Ingresa tu mail")
//let password = prompt ("Ingresa tu contrasena")
//if (( "juan@mail.com" == login || "JUAN@MAIL.COM" == login ) && (contrasenia == password)){
    //alert ("Bienvenido a tu seccion")
//} else {
    //alert("El usuario o contrasena son incorrectas")
//}

//if anidado
//let usuario= Number (prompt("ingresa el monto"))
//if (usuario <= 100) {
   // alert('Recibe un prestamo de 100')
//} else if(usuario <= 1000)
   // alert("Recibe un prestamo de 1000")



   //CICLO FOR, sabes la cantidad de pasos, ESTRUCTURA POR CONTEO.
   //for (let i = 0; i < 10; i++){
//alert(i);
   //}

   /*for (let i = 1; i < 5; i++){
   if( i == 1){
   alert ("Tengo " + i +  " oveja");
   }
   else{
    alert("Tengo " + i +  " ovejas");
     }
     }
     */
     

     
    /*const user = "admin" for repite datos
    const pass = "pass1234";
    let intentos = 3;

    for ( let i= 0 ; i < 3; i++){

        let u = prompt ("Ingrese su usuario")
        let p = prompt ("Ingrese su contrasena")

        if (u== user && p== pass){
        alert("Bienvenido");
        break;
    }
    intentos --;
     alert ("Usuario y o pass incorrecto. Te quedan "+intentos+ " intentos")
}
   if ( intentos <= 0 ) {
    alert ("Usuario Bloqueado")
   }
 */

   /*CICLO while POR CONDICION MIENTRAS=WHILE , no se sabe cuando se va a dar
   DO WHILE, PRIMERO HACE DESPUES VERIFICA , significa mientras, cuando se valida y se cumple se corta */
/*let i= 1;
     while (i<=5){
        if( i == 1){
        alert ("Tengo " + i +  " oveja");
        }
        else{
         alert("Tengo " + i +  " ovejas");
          }
          i++
        }
      */

       
       //switch EVALUAR CASOs

/*let num1 = parseInt(prompt ("Ingrese un numero"));
let operacion= prompt ("Indique la operacion : +, -, *, ");
let num2 = parseInt (prompt("ingrese otro numero"));

let flag = true;

if (isNaN (num1) || isNaN(num2)){
alert("Debes ingresar numeros enteros");
flag=false

}

if (flag){
    if (operacion){


    }else{
            alert ("Debes ingresar el tipo de operacion")}

        let  resultado;
        switch (operacion){
            case "+" :
                resultado = num1 + num2;
                break;

                case "-" :
                    resultado = num1  - num2;
                    break;

                    case "*" :
                    resultado = num1  * num2;
                    break;
                    default:
                        alert ("No ingresaste una operacion valida");

        }
        alert ("El resultado de la operacion es : "+ resultado)

    }
     */


let nombre= "Marisa"
alert ("Mi nombre es " + nombre)



