/* estructura de los objetos
{propiedad: valor, propiedad2: valor2,} */

/* let persona ={
    nombre: "andres", 
    edad: 20, 
    apellido: "perez"
};

console.log(persona);
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.apellido); */


//contructor de objeto

/* function Persona(nombre, edad, direccion){
    this.nombre = nombre;
    this.edad = edad;
    this.direccion = direccion;
}

const persona1 = new Persona("Andres", 20, "avenida");
const persona2 = new Persona("Sofia", 22, "vereda");

console.log(persona1.nombre);
console.log(persona2.nombre); */

//METODOS

/* function Persona(nombre, edad, calle){
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
    this.hablar = function(){console.log("HOLA SOY " + this.nombre)};
} */

/* const persona1 = new Persona("Alejandro", 25, "Sarmiento");
console.log(persona1.hablar()); */

//const persona1 = { nombre: "Homero", edad: 39, calle: "Av. Siempreviva 742"};
//devuelve true porque la clave "nombre" existe en el objeto persona1
//console.log( "nombre" in persona1);
//devuelve false porque la clave "origen" no existe en el objeto persona1
//console.log( "origen" in persona1);
//recorremos todas las propiedades del objeto con el ciclo for...in
/* for (const propiedad in persona1) {
    console.log(persona1[propiedad]);
} */

//CLASES
/* class Persona{
    constructor(nombre, edad, calle) {
        this.nombre = nombre;
        this.edad   = edad;
        this.calle  = calle;
    }
    hablar(){
      console.log("HOLA SOY "+ this.nombre);
    }
  }
  const persona1 = new Persona("a", 1, "cra");
  console.log(persona1); */

  /* class Producto {
    constructor(nombre, precio){
      this.nombre = nombre;
      this.precio = precio;
      this.vendido = false;
    }
    vender(){
      this.vendido = true;
    }
  }
  const producto1 = new Producto("Pan", 1200);
  const producto2 = new Producto("Cafe", 1300); */
  //console.log(producto1);
  //console.log(producto2);

/* console.log(producto1.vendido);
producto1.vender();
console.log(producto1.vendido);
console.log(producto2.vendido);
producto2.vender();
console.log(producto2.vendido);  */

class Perritos{
    constructor(nombre, edad){
      this.nombre = nombre;
      this.edad = edad;
      this.patas = 4;
    }
  
    correr(){
      alert("estoy corriendo");
    }
  
    ladrar(){
      alert(this.nombre + " esta ladrando");
    }

    saltar(){
        alert(this.nombre + " esta saltando")
    }
  }
  
  const perrito1 = new Perritos(prompt("Ingrese un nombre para su perrito"), prompt("Ingrese una edad para su perrito"));
  alert(perrito1.nombre + " ha sido creado");
  let orden = prompt("Dale una orden a " + perrito1.nombre + "\n- correr" + "\n- saltar" + "\n- ladrar");
  
while(orden != "sacrificio"){
    if(orden == "correr"){
        perrito1.correr();
    }else if(orden == "saltar"){
        perrito1.saltar();
    }else if(orden == "ladrar"){
        perrito1.ladrar();
    }
    else{
        alert("No introdujo una orden valida")
    }
    orden = prompt("Dale una orden a " + perrito1.nombre + "\n- correr" + "\n- saltar" + "\n- ladrar" + "\n- sacrificio");
}
  
alert("Has sacrificado a " + perrito1.nombre);