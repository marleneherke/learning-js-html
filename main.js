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
let listaDeTareas = {
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
    let listFrutas = document.getElementById("listaDeTareas");
    let listItem;
    let btnCheck;
    let btnDelete
    
    for (let index = 0; index < frutas.length; index++) {
        let fruta = frutas[index];
        let itemText = document.createTextNode(fruta);
        listItem = document.createElement("li");

        /* Btn Check */
        let btnIcon = document.createTextNode('✓');
        btnCheck = document.createElement("button");
        btnCheck.classList.add('btn-check');
        btnCheck.appendChild(btnIcon);
        listItem.appendChild(btnCheck);
        /* Btn Delete */
        let btnIconDelete = document.createTextNode('X');
        btnDelete = document.createElement("button");
        btnDelete.classList.add('btn-delete');
        btnDelete.appendChild(btnIconDelete);
        listItem.appendChild(btnDelete);
        
        listItem.appendChild(itemText);
        /* Lista */
        listFrutas.append(listItem);
    }
    /* listFrutas.appendChild(listItem); */

}

venderFrutas(frutas);  

let buttonAddFruta = document.getElementById("btnAgregar");
buttonAddFruta.addEventListener("click", addElement);

function addElement(){
    let listFrutas = document.getElementById("listaDeTareas");
    let fruit = prompt("Schreibe ein Obst: ");
    let itemText = document.createTextNode(fruit);
        listItem = document.createElement("li");
        listItem.appendChild(itemText);
        listFrutas.append(listItem);
}

// connecting with api
function connectAPI(){
    /* fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita', {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET'
            }
        })
    .then(response => response.json())
    .then(data => console.log(data)); */

    const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';


    fetch(URL, {
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin':'*'
        }
      })
        .then(response => response.json())
}

connectAPI();




