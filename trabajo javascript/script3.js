alert("Bienvenidos a tienda AMADA")
let num1, num2, num3;

function prenda1() {
    let prenda1 = (prompt("Ingrese la primer prenda que desea comprar: remera, musculosa,camisa,jeans,bermuda."));
    num1 = Number(prompt("Ingrese el valor, remera (300), musculosa (200), camisa (800), jeans(1000), bermuda (800)"));


    if (prenda1 == "remera" || prenda1 == "musculosa" || prenda1 == "camisa" || prenda1 == "jeans" || prenda1 == "bermuda") {
        alert("El producto fue agregado a su compra")
        console.log(prenda1)
    } else {
        alert("el producto no se encuentra en nuestra tienda")
    }
}


function prenda2() {
    let prenda2 = (prompt("Ingrese la segunda prenda que desea comprar: remera, musculosa,camisa, jeans, bermuda."));
    num2 = Number(prompt("Ingrese el valor, remera (300), musculosa (200), camisa (800), jeans(1000), bermuda (800)"));

    if (prenda2 == "remera" || prenda2 == "musculosa" || prenda2 == "camisa" || prenda2 == "jeans" || prenda2 == "bermuda") {
        alert("El producto fue agregado a su compra")
        console.log(prenda2)
    } else {
        alert("el producto no se encuentra en nuestra tienda")
    }

}

function prenda3() {
    let prenda3 = (prompt("Ingrese la tercer prenda que desea comprar: remera, musculosa,camisa, jeans, bermuda."));
    num3 = Number(prompt("Ingrese el valor remera (300), musculosa (200), camisa (800), jeans (1000), bermuda (800)"));

    if (prenda3 == "remera" || prenda3 == "musculosa" || prenda3 == "camisa" || prenda3 == "jeans" || prenda3 == "bermuda") {
        alert("El producto fue agregado a su compra")
        console.log(prenda3)
    } else {
        alert("el producto no se encuentra en nuestra tienda")
    }

}

function calculadora() {
    let resultado = num1 + num2 + num3;

    alert("El total de su compra es " + resultado)
}

prenda1();
prenda2();
prenda3();
calculadora();


/*AGREGRAR EL TOTAL DE SU PRODUCTO ES
SUMAR PRENDA 1+ PRENDA 2+ PRENDA 3 */

/*
let n1= Number (prompt("Ingresa el primer valor"))
let n2= Number (prompt("Ingresa el segundo valor"))
let operacion= (prompt("Ingresa el operador a utilizar \n + para sumar \n - para restar \n * para multiplicar \n / para dividir"))

alert (calculadora(n1,n2,operacion)) */