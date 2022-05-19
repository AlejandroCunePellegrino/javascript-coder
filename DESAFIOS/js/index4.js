/*
	Declaramos atributos de estado
*/
let hambre = 100;
let higiene = 100;
let sueño = 100;
let diversion = 100;
let social = 100;

// Declaramos un array
//const acciones = [];
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
     document.getElementById("pet").src="images/perrito0.jpg";
     document.getElementById('mensaje').innerHTML = 'Dejaste morir a tu mascota, refresca la página';
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
  let temporizador = setInterval(Loop, 1000);
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
Start();

//Declaramos las acciones
let comer = document.getElementById('comer');
let baniar = document.getElementById('baniar');
let dormir = document.getElementById('dormir');
let brincar = document.getElementById('brincar');
let hablar = document.getElementById('hablar');

//Ejecutamos las accioines
comer.addEventListener(`click`, (e) =>{
  console.log("hice click");
  Comer();
  localStorage.setItem("comer", "esta lleno");
})

baniar.addEventListener(`click`, (e) =>{
  console.log("hice click");
  Banio();
  localStorage.setItem("bañar", "esta limpio");
})

dormir.addEventListener(`click`, (e) =>{
  console.log("hice click");
  Dormir();
  localStorage.setItem("dormir", "descansado");
})

brincar.addEventListener(`click`, (e) =>{
  console.log("hice click");
  Brincar();
  localStorage.setItem("brincar", "se divirtio");
})

hablar.addEventListener(`click`, (e) =>{
  console.log("hice click");
  Conversar();
  localStorage.setItem("hablar", "socializo");
})
