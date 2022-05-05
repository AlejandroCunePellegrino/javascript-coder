let pass = prompt("Ingrese la contraseña");
let intento = 0;


while(pass != "1234" && intento != 3){
    intento++;
    alert("Contraseña equivocada");
    pass = prompt("Ingrese la contraseña");
}

if(pass == 1234){
    alert("Acceso consedido")
}else if(intento == 3){
    alert("Bloqueado");
}