let nombre = document.getElementById('nombre');
let pw = document.getElementById('pw');
let btnEnter = document.getElementById("btnEnter");
const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");



signupBtn.addEventListener("click", () => {
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
});

loginBtn.addEventListener("click", () => {
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
});



function store() {
    localStorage.setItem('name', nombre.value)
    localStorage.setItem('pw', pw.value)
}

btnRegister.addEventListener("click", () => {
    store();
});



function check() {
    let storedNombre = localStorage.getItem('name');
    let storedPw = localStorage.getItem('pw');

    let userName = document.getElementById('userName');
    let userPw = document.getElementById('userPw');
    let mensaje = document.getElementById("mensaje");

    if(userName.value == storedNombre && userPw.value == storedPw) {
        mensaje.innerText = "Te has logeado correctamente";
        juego.innerHTML = `<a href= "proyecto-final/html/tamagochi.html">Ir al juego</a>`
    }else {
        mensaje.innerText = "Error, no estas registrado!"
    }
}
btnEnter.addEventListener("click", () => {
    check();
})