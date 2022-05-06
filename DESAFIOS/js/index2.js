//SIMULADOR DE PERRITOS

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
        alert(this.nombre + " esta saltando");
    }

    darPatita(){
            alert(this.nombre + " te dio la patita");
    }
    //cuidados
    darComida(){
        alert(this.nombre + " esta comiendo");
    }

    baniar(){
        alert(this.nombre + " se esta bañando");
    }

    acariciar(){
        alert(this.nombre + " se siente feliz");
    }

    cepillar(){
        alert(this.nombre + " se siente alegre");
    }
}

let adoptar
const cementerio = [];
let menu = prompt("Elija una opcion, luego adopte un perrito" + "\n 1. acciones" + "\n 2. cuidados");
if(menu == "1"){
    do{
        const perrito1 = new Perritos(prompt("Ingrese un nombre para su perrito"), prompt("Ingrese una edad para su perrito"));
        alert(perrito1.nombre + " ha sido adoptado");
        
        let orden = prompt("Dale una orden a " + perrito1.nombre + "\n1.correr" + "\n2.saltar" + "\n3. ladrar" + "\n4. dar patita" + "\n 5. no me interesa");
        while(orden != "5"){
            if(orden == "1"){
                perrito1.correr();
            }else if(orden == "2"){
                perrito1.saltar();
            }else if(orden == "3"){
                perrito1.ladrar();
            }else if(orden == "4"){
                perrito1.darPatita();}
            else{
                alert("No introdujo una orden valida");
            }
            orden = prompt("Dale una orden a " + perrito1.nombre + "\n1.correr" + "\n2.saltar" + "\n3. ladrar" + "\n4. dar patita" + "\n5. hacer el muerto");
        }
                      
        alert("Has sacrificado a " + perrito1.nombre);
        cementerio.push(`Mataste a ${perrito1.nombre}, que tenia ${perrito1.edad} años`);
        adoptar = prompt("¿Quieres adoptar otro perrito?(si/no)");
    }while(adoptar === "si");   
}else if(menu == "2"){
    do{
        const perrito1 = new Perritos(prompt("Ingrese un nombre para su perrito"), prompt("Ingrese una edad para su perrito"));
        alert(perrito1.nombre + " ha sido adoptado");

        let cuidado = prompt("¿Que quieres hacer con " + perrito1.nombre + "\n1.dar de comer" + "\n2.bañarlo" + "\n3.acariciarlo" + "\n4.cepillar" + "\n 5. darlo en adopcion");
        while(cuidado != "5"){
            if(cuidado == "1"){
                perrito1.darComida();
            }else if(cuidado == "2"){
                perrito1.baniar();
            }else if(cuidado == "3"){
                perrito1.acariciar();
            }else if(cuidado == "4"){
                perrito1.cepillar();}
            else{
                alert("No introdujo una orden valida");
            }
            cuidado = prompt("Dale una orden a " + perrito1.nombre + "\n1.dar de comer" + "\n2.bañarlo" + "\n3.acariciarlo" + "\n4.cepillar" + "\n 5. darlo en adopcion" + "\n 6.");
        }
                      
        alert("Has sacrificado a " + perrito1.nombre);
        cementerio.push(`Mataste a ${perrito1.nombre}, que tenia ${perrito1.edad} años`);
        adoptar = prompt("¿Quieres adoptar otro perrito?(si/no)");
    }while(adoptar === "si");
}
else{
    alert("Introdujo un comando invalido");
}

let cielito = prompt("¿Queres ver quien esta en el cielo de perritos?(si/no)");
if(cielito == "si"){
    for(const perrito of cementerio){
        alert(perrito);
    }
    //cementerio.join();
}else{
    alert("gracias por jugar");
}
console.log(cementerio);