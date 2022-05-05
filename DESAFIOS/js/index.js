//conversor de divisas


/* 
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
 */

//SIMULADOR DE MASCOTA

class Perritos{
        constructor(nombre, edad){
          this.nombre = nombre;
          this.edad = edad;
          this.patas = 4;
        }
      //acciones
        correr(){
          alert(this.nombre + " esta corriendo");
        }
      
        ladrar(){
          alert(this.nombre + " esta ladrando");
        }
    
        saltar(){
            alert(this.nombre + " esta saltando")
        }

        darPatita(){
                alert(this.nombre + " te dio la patita")
        }
}
      
const perrito1 = new Perritos(prompt("Ingrese un nombre para su perrito"), prompt("Ingrese una edad para su perrito"));
alert(perrito1.nombre + " ha sido adoptado");
/* let menu = prompt("Elija una opcion" + "\n 1. acciones" + "\n 2. cuidados"); */

//if(menu == "1"){
        let orden = prompt("Dale una orden a " + perrito1.nombre + "\n1.correr" + "\n2.saltar" + "\n3. ladrar" + "\n4. dar patita");
        while(orden != "5"){
                if(orden == "1"){
                    perrito1.correr();
                }else if(orden == "2"){
                    perrito1.saltar();
                }else if(orden == "3"){
                    perrito1.ladrar();
                }else if(orden == "4"){
                    perrito1.darPatita();
                }
                else{
                    alert("No introdujo una orden valida");
                }
                orden = prompt("Dale una orden a " + perrito1.nombre + "\n1.correr" + "\n2.saltar" + "\n3. ladrar" + "\n4. dar patita" + "\n5. hacer el muerto");
        }
              
        alert("Has sacrificado a " + perrito1.nombre);
        /* let adoptar = prompt("¿Desea adopatr otro perrito? (si/no)"); */
       /*  if(adoptar == "si"){
                const perrito1 = new Perritos(prompt("Ingrese un nombre para su perrito"), prompt("Ingrese una edad para su perrito"));
                alert(perrito1.nombre + " ha sido adoptado");
                let orden = prompt("Dale una orden a " + perrito1.nombre + "\n1.correr" + "\n2.saltar" + "\n3. ladrar" + "\n4. dar patita");
                while(orden != "5"){
                        if(orden == "1"){
                            perrito1.correr();
                        }else if(orden == "2"){
                            perrito1.saltar();
                        }else if(orden == "3"){
                            perrito1.ladrar();
                        }else if(orden == "4"){
                            perrito1.darPatita();
                        }
                        else{
                            alert("No introdujo una orden valida");
                        }
                        orden = prompt("Dale una orden a " + perrito1.nombre + "\n1.correr" + "\n2.saltar" + "\n3. ladrar" + "\n4. dar patita" + "\n5. hacer el muerto");
                }
                      
                alert("Has sacrificado a " + perrito1.nombre);
        }else{
                alert("Usted no quiere a los perritos");
        } */
/* else if(menu == "2"){
        let cuidados = prompt("aca van los cuidados");
         
        if(cuidados == "1"){
                 alert("el perro se baña");
         }
}  */
