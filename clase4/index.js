/* function saludar(nombre){
    let saludo = `Bienvenido/a ${nombre}`;
    alert(saludo);
}

let nombre = prompt("Ingrtesa tu nombre");
saludar(nombre);  */


/* function saludar(nombre, apellido, saludo="Bienvenid@"){
    console.log(`${saludo} ${nombre} ${apellido}`);
}

let nombre = "Alejandro";
let apellido = "Pellegrino";
saludar(nombre, apellido);
saludar(nombre, apellido);
saludar(nombre, apellido);
 */
/*return*/
/* function suma(x,y){
    return x + y;
}

let resultado = suma(1,2);
console.log("este es el resultado", resultado); */

/* function calculadora(num1, operacion, num2){
    switch(operacion){
        case "+":
            return num1 + num2;
            

        case "-":
         return num1 - num2;
        
        case "*":
            return mum1 * num2;
        
    }
}

let resultado = calculadora(10, "+", 5);
console.log("el resultado de la operacion es:", resultado); */

/* SCOPE */

/* function saludo(){
    let saludoBienvenido = "Hola";
    console.log(saludoBienvenido);
} */
//el log solo reconoce la variable cuando esta dentro del bloque{}
//si la variable esta fuera del bloque es universal
/* saludo() */
//console.log(saludoBienvenido);

//funciones flechas

/* const suma = function(a, b){
    return a + b;}

const resta = function(a, b){
    return a - b;}

    console.log(suma(3, 4));
    console.log(resta(3, 4)); */

    const suma = (a,b) => a + b;
    console.log(suma(3, 4));
    /* cuando se returna algo sencillo no es necesario utilizar el return */