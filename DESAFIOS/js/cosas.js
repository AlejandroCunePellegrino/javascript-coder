//SIMULADOR DE MASCOTA
/* 
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
 */

//app clima

/* window.addEventListener('load', ()=> {
  let lon 
  let lat 

  let temperaturaValor = document.getElementById('temperatura-valor')  
  let temperaturaDescripcion = document.getElementById('temperatura-descripcion')   
  let ubicacion = document.getElementById('ubicacion')  
  

  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition( posicion => {
      //console.log(posicion.coords.latitude);
      //console.log(posicion.coords.longitude);
      lat = posicion.coords.latitude;
      lon = posicion.coords.longitude;
      
      const urlapi = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=398be54fee268104825d67b99dca5026&units=metric&lang=es`
      console.log(urlapi);

      fetch(urlapi)
        .then(response =>{ return response.json()})
        .then(data => {
          console.log(data.main.temp);
          let temp = Math.round(data.main.temp)
          temperaturaValor.innerText = `${temp}°C`

          //console.log(data.weather[0].description);
          let desc = data.weather[0].description;
          temperaturaDescripcion.innerText = desc.toUpperCase()

          //console.log(data.name);
          let ubi = data.name;
          ubicacion.innerText = `${ubi}` 
        })
        .catch(error => {
          console.log(error);
        })
    })
  }
}) */