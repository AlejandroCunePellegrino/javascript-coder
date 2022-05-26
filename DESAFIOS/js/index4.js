/*
	Declaramos atributos de estado
*/
let hambre = 100;
let higiene = 100;
let sueño = 100;
let diversion = 100;
let social = 100;
let temporizador;

// Declaramos un array
//const acciones = [];
/*
	Esta función tiene la tarea de actualizar la información en pantalla
de vez en cuando
*/
function Loop(time = 10){

  let total = hambre + higiene + sueño + diversion + social;

  /*
  Si alguno de los atributos llega a 0 nuestra mascota muere!
  a continuación controlamos el nivel de satisfacción de la mascota
  */
  if(hambre <= 0 || higiene <= 0 || sueño <= 0 || diversion <= 0 || social <= 0){
      document.getElementById("pet").src="images/perrito0.jpg";
      //document.getElementById('mensaje').innerHTML = 'Dejaste morir a tu mascota, refresca la página';
      clearInterval(temporizador);
      console.log("cmurio");
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Dejaste morir a tu mascota, refresca la página!',
        footer: '<a href="https://github.com/AlejandroCunePellegrino" target= _blank>¿Quiere conocer al creador?</a>'
      }) 
  }
  else if(total > 400){
     document.getElementById("pet").src="images/perrito100.jpg";
  }
  else if(total > 300){
     document.getElementById("pet").src="images/perrito80.jpg";
  }
  else if(total > 200){
     document.getElementById("pet").src="images/perrito60.jpg";
  }
  else if(total > 100){
     document.getElementById("pet").src="images/perrito40.jpg";
  }
  else if(total > 50){
     document.getElementById("pet").src="images/perrito20.jpg";
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
let jugar = document.getElementById('jugar');
jugar.addEventListener('click', (e) =>{
  console.log("se inicio el juego");
  Start();
})


//Declaramos las acciones
let comer = document.getElementById('comer');
let baniar = document.getElementById('baniar');
let dormir = document.getElementById('dormir');
let brincar = document.getElementById('brincar');
let hablar = document.getElementById('hablar');


//Objeto
const acciones = {cantidad: 0, estado: ""};


//Ejecutamos las accioines
comer.addEventListener(`click`, (e) =>{
  console.log("hice click");
  Comer();
  const comida = JSON.parse(localStorage.getItem("comer")) || acciones;
  comida.cantidad++
  comida.estado = "esta lleno"
  localStorage.setItem("comer", JSON.stringify(comida));
  
})

baniar.addEventListener(`click`, (e) =>{
  console.log("hice click");
  Banio();
  const banio = JSON.parse(localStorage.getItem("baniar")) || acciones;
  banio.cantidad++
  banio.estado = "esta limpio"
  localStorage.setItem("baniar", JSON.stringify(banio));
})

dormir.addEventListener(`click`, (e) =>{
  console.log("hice click");
  Dormir();
  const siesta = JSON.parse(localStorage.getItem("dormir")) || acciones;
  siesta.cantidad++
  siesta.estado = "esta descansado"
  localStorage.setItem("dormir", JSON.stringify(siesta));
})

brincar.addEventListener(`click`, (e) =>{
  console.log("hice click");
  Brincar();
  const saltar = JSON.parse(localStorage.getItem("salto")) || acciones;
  saltar.cantidad++
  saltar.estado = "salto"
  localStorage.setItem("salto", JSON.stringify(saltar));
})

hablar.addEventListener(`click`, (e) =>{
  console.log("hice click");
  Conversar();
  const charla = JSON.parse(localStorage.getItem("charlar")) || acciones;
  charla.cantidad++
  charla.estado = "socializo"
  localStorage.setItem("charlar", JSON.stringify(charla));
})
