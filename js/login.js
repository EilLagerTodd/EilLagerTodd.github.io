const loginform = document.getElementById("login-form")
const logininput = document.getElementById("login-form-input")
const greeting = document.getElementById("greeting")
const key = "username"
const hidden = "hidden"
const savedusername = localStorage.getItem(key)

function saveName(text){
    localStorage.setItem(key, text);
}

function submitname(event) {
    event.preventDefault();
    const value = logininput.value;
    loginform.classList.add(hidden)
    greeting.classList.remove(hidden)
    greeting.innerText = `안녕하세요, ${value} 씨? 좋은 하루 인가요?`;
    saveName(value)
}

function askName(){
    loginform.classList.remove(hidden)
    greeting.classList.add(hidden)
}

function paintGreeting(){

    const savedusername = localStorage.getItem(key)

    loginform.classList.add(hidden)
    greeting.classList.remove(hidden)

    greeting.innerText = `안녕하세요, ${savedusername} 씨? 좋은 하루 인가요?`;
}

if(savedusername == null) {
    askName()
}else {
    paintGreeting()
}

loginform.addEventListener("submit", submitname);