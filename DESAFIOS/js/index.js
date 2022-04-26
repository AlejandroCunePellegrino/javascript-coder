//conversor de divisas



let continuar = prompt('¿Desea ingresar una entrada?(si/no)');

let usd = 198;
let euro = 213;
let real = 43;


while(continuar == 'si') {
    let ingresarMoneda = prompt("Ingrese moneda (usd/euro/real)");
    let ingresarCantidad = parseInt(prompt("Ingrese cantidad de pesos, que quiere convertir"));
    if(ingresarMoneda == "usd"){
            alert("el resultado es: " + ingresarCantidad / usd);
    }else if(ingresarMoneda == "euro"){
            alert("el resultado es: " + ingresarCantidad / euro);
    }else if(ingresarMoneda == "real"){
            alert("el resultado es: " + ingresarCantidad / real);
    }else if(ingresarMoneda == ""){
            alert("Ingresaste un campo vacio");
    }else{
            alert("Ingresaste un valor invalido");
    }
    continuar = prompt('¿Desea realizar otra conversion?(si/no)');
}


