/*
	Declaramos atributos de estado
*/
let hambre = 100;
let higiene = 100;
let sueño = 100;
let diversion = 100;
let social = 100;
let temporizador;
let jugar = document.getElementById('jugar');
let parar = document.getElementById('parar');
/* const usuario = {
  nombre:"",
  email:"",
  pass:""
} */

/*
	Esta función tiene la tarea de actualizar la información en pantalla
de vez en cuando
*/
function Loop(time = 2){

  let total = hambre + higiene + sueño + diversion + social;

  /*
  Si alguno de los atributos llega a 0 nuestra mascota muere!
  a continuación controlamos el nivel de satisfacción de la mascota
  */
  if(hambre <= 0 || higiene <= 0 || sueño <= 0 || diversion <= 0 || social <= 0){
      document.getElementById("pet").src="images/perrito0.png";
      console.log("cmurio");
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Dejaste morir a tu mascota, refresca la página!',
        footer: '<a href="https://github.com/AlejandroCunePellegrino" target= _blank>¿Quiere conocer al creador?</a>'
      }) 
      clearInterval(temporizador);
    }
  else if(total > 400){
     document.getElementById("pet").src="../images/perrito100.png";
  }
  else if(total > 300){
     document.getElementById("pet").src="../images/perrito80.png";
  }
  else if(total > 200){
     document.getElementById("pet").src="../images/perrito60.png";
  }
  else if(total > 100){
     document.getElementById("pet").src="../images/perrito40.png";
  }
  else if(total > 50){
     document.getElementById("pet").src="../images/perrito20.png";
  }
  
  hambre = hambre - parseInt(time);
  higiene = higiene - parseInt(time);
  sueño = sueño - parseInt(time);
  diversion = diversion - parseInt(time);
  social = social - parseInt(time);

  /*
	 En esta parte controlamos la barra de estado de la mascota.
  */
  document.getElementById('hambre').style.width = hambre * 3 + 'px';
  document.getElementById('higiene').style.width = higiene * 3 + 'px';
  document.getElementById('sueño').style.width = sueño * 3 + 'px';
  document.getElementById('diversion').style.width = diversion * 3 + 'px';
  document.getElementById('social').style.width = social * 3 + 'px';

  /*
	 En esta parte controlamos el porcentaje del estado de la mascota
  */
  document.getElementById('hambre').innerHTML = hambre + '%';
  document.getElementById('higiene').innerHTML = higiene + '%';
  document.getElementById('sueño').innerHTML = sueño  + '%';
  document.getElementById('diversion').innerHTML = diversion + '%';
  document.getElementById('social').innerHTML = social + '%';
}


/*
	Esta función es responsable de iniciar y llamar el temporizador de la función LOOP
*/
function Start(){
  temporizador = setInterval(Loop, 1000);
}

function Stop(){
  clearInterval(temporizador);
}

/*
	Esta función es para recuperar el hambre.
*/
function Comer(){
  hambre = 100;
  document.getElementById('hambre').innerHTML = hambre + '%';
  document.getElementById('hambre').style.width = hambre * 3 + 'px';
}

/*
	Esta funcion es para recuperar higiene
*/
function Banio(){
  higiene = 100;
  document.getElementById('higiene').innerHTML = higiene + '%';
  document.getElementById('higiene').style.width = higiene * 3 + 'px';
}

/*
	Esta funcion es para recuperar sueño
*/
function Dormir(){
  sueño = 100;
  document.getElementById('sueño').innerHTML = sueño + '%';
  document.getElementById('sueño').style.width = sueño * 3 + 'px';
}

/*
	Esta funcion es para recuperar diversion
*/
function Brincar(){
  diversion = 100;
  document.getElementById('diversion').innerHTML = diversion + '%';
  document.getElementById('diversion').style.width = diversion * 3 + 'px';
}

/*
	Esta funcion es para recuperar social
*/
function Conversar(){
  social = 100;
  document.getElementById('social').innerHTML = social + '%';
  document.getElementById('social').style.width = social * 3 + 'px';
}

/*
  Ejecutamos el temporizador
*/

jugar.addEventListener('click', () => {
  console.log("se inicio el juego");
  jugar.style.display = "none"
  parar.style.display = "block"
  Start();
})


parar.addEventListener('click', () =>{
  console.log("se paro el juego");
  parar.style.display = "none"
  jugar.style.display = "block"
  Stop();
})


//Declaramos las acciones
let comer = document.getElementById('comer');
let baniar = document.getElementById('baniar');
let dormir = document.getElementById('dormir');
let brincar = document.getElementById('brincar');
let hablar = document.getElementById('hablar');



//Ejecutamos las accioines
comer.addEventListener(`click`, (e) =>{
  //console.log("hice click");
  Comer();
})

baniar.addEventListener(`click`, (e) =>{
  console.log("hice click");
  Banio();
})

dormir.addEventListener(`click`, (e) =>{
  //console.log("hice click");
  Dormir();
})

brincar.addEventListener(`click`, (e) =>{
  //console.log("hice click");
  Brincar();
})

hablar.addEventListener(`click`, (e) =>{
  //console.log("hice click");
  Conversar();
})


//bichos

const contenedorCards = document.getElementById("contenedor-cards");
const llamarEscenario = async() => {
  const response = await fetch("../data/miescenario.json")
  const data = await response.json()
  console.log(data);

  data.forEach(escenario => {
    let card = document.createElement("div");
    card.innerHTML =  `<img src="${escenario.img}" class="card-img-top img-fluid" alt="escenario">
    <div class="card-body">
    <h5 class="card-title text-center">${escenario.nombre}</h5>
    <a href="#juego" class="btn btn-primary d-block mx-auto btn-center" id= "btnescenario${escenario.id}">Seleccionar</a>
    </div>`
    card.setAttribute("class", "card");
    card.style.width = "18rem";
    contenedorCards.append(card);
    let btnEscenario = document.getElementById(`btnescenario${escenario.id}`);
    btnEscenario.addEventListener("click", () => {
      document.querySelector(".screen-fondo").innerHTML = `<img src= "${escenario.img}" class="screen-img" alt="escenario">`
    })
  });
}

llamarEscenario();



