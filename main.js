// Einzeiliger Kommentar 
/*
    Kommentar über mehrere Zeilen
*/

// global 
var numero1 = 1;
var numero2 = 6;
var vorname = "alecho";
// local
let nachname = " Herke";
// constante
const dateOfBirth = "21.10.1999";
// array
let frutas = ["naranja", "uva", "banano"];
// object
let listaDeFrutas = {
    cantidad: 5,
    nombre: "naranja",
    origin: "Spain",
    atributos: {
        precio: 5,
        color: "naranja oscuro",
        sabor: "dulce"
    }
};
// boolean
let jaOderNein = true; 
// concatenar
let fullName = vorname + ' ' + nachname;
// sumar
let fullNumber = numero1 + numero2;


/* console.log(fullNumber);
console.log(fullName);

alert(fullName);

let message = prompt("hallo ihr schmongos");
alert(message); */

// function

function venderFrutas(frutas){
    let listFrutas = document.getElementById("listaDeFrutas");
    let listItem;

    for (let index = 0; index < frutas.length; index++) {
        let fruta = frutas[index];
        let itemText = document.createTextNode(fruta);
        listItem = document.createElement("li");
        listItem.appendChild(itemText);
        listFrutas.append(listItem);
    }
    /* listFrutas.appendChild(listItem); */

}

venderFrutas(frutas);  

let buttonAddFruta = document.getElementById("btnAgregar");
buttonAddFruta.addEventListener("click", addElement);

function addElement(){
    let listFrutas = document.getElementById("listaDeFrutas");
    let fruit = prompt("Schreibe ein Obst: ");
    let itemText = document.createTextNode(fruit);
        listItem = document.createElement("li");
        listItem.appendChild(itemText);
        listFrutas.append(listItem);
}


