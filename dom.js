// // First example
document.querySelector('h1').style.color = '#FF0000';
let num1 = document.querySelector('#num1')
let num2 = document.querySelector('#num2')
var btn = document.querySelector('#button')
let output = document.querySelector('p')
btn.addEventListener('click',addNumbers);

function addNumbers (){
    let result = parseInt(num1.value)+ parseInt(num2.value)
    output.innerHTML = result;

//     console.log(result);
}

// // Second example
let btn2 =document.querySelector ('#button2')
let p = document.querySelector('#emoticon')
btn2.addEventListener('click',toggle)

function toggle (){
    alert("Hello World")
    confirm("Are you sure")
    prompt("Enter")
    if(p.innerHTML == "😁"){
        p.innerHTML = "😭"
    }else if (p.innerHTML == "😭"){
        p.innerHTML = "😁"
    }
//     console.log(btn2)
}

// // Third Example
document.querySelector('body').style.backgroundColor = "#010101";

window.addEventListener("resize", ()=>{
    alert ("window is being resized")
}
)

// // li example
let ul= document.querySelector('ul')
for(let element of ul.children){
    element.style.backgroundColor='#FFFF00';
}
const mainDiv = document.getElementById('mainDiv');
// alert("Hello")
let buttonFunc;
let isLogged = prompt("are you logged in")

if (isLogged === true){
    buttonFunc = "Logout"
    for(i=0; i<10; i++){
        mainDiv.innerHTML = '<h1>Hello</h1>'
        mainDiv.classList.add("isLogged")
    }
} else {
    buttonFunc = "Login"
    mainDiv.innerHTML = `<h1>Hello</h1><input type="text"><button></button>`
    mainDiv.classList.add("isNotLogged")
}
// innertext/innerHTML(text only)(retains styling) or text content(text with tags)


// imgs
img = document.createElement("img")
img.setAttribute("src","link")

// Create element
let h1 = document.createElement("h1")
mainDiv.append(h1) 


