//SIMULADOR DE MASCOTA

class Perritos{
    constructor(nombre, edad){
      this.nombre = nombre;
      this.edad = edad;
      this.patas = 4;
    }
  //acciones
    correr(){
      return this.nombre + " esta corriendo";
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


const mascotas = [];
let adoptar = document.getElementById("fadoptar");
let nombre = document.getElementById("fnombre");
let edad = document.getElementById("fedad");
let guarderia = document.getElementById("guarderia")

function mostrarPerritos(){
    let li = "";
    for(const p of mascotas){
        li = li + "<li>" + p.nombre + " de " + p.edad + " años de edad </li>";
    }
    guarderia.innerHTML = li;
}

adoptar.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("aprete click")
    console.log(nombre.value);
    console.log(edad.value);
    let perrito = new Perritos(nombre.value, edad.value);
    mascotas.push(perrito);
    mostrarPerritos();
    
});
