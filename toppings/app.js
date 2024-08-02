/************************************************************* 
************** .getElementById()  &  .innerHTML ***************/

/*
const contenedor = document.getElementById("contenedor")
console.log(contenedor)
console.dir(contenedor)
console.log(contenedor.id)
console.log(contenedor.innerHTML)
console.log(contenedor.innerText)

console.log('')

const titulo = document.getElementById("titulo")
console.log(titulo)
console.dir(titulo)
//console.log(titulo.tagName)
console.log(titulo.innerText)
console.log(titulo.innerHTML)
const titulo2 = document.getElementById("titul")
console.log(titulo2)
*/


/************************************************************* 
************** .getElementsByClassName() *********************/

/*
const toppings = document.getElementsByClassName("topping")
console.log(toppings)
console.log("toppings.length: ", toppings.length)
console.log("toppings[0]: ", toppings[0])
console.log("toppings[0].id: ", toppings[0].id)
console.log("toppings[1]: ", toppings[1])
console.log("toppings[1].id: ", toppings[1].id)
console.log("toppings[2]: ", toppings[2])
console.log("toppings[2].id: ", toppings[2].id)
console.log("toppings[3]: ", toppings[3])
console.log("toppings[3].id: ", toppings[3].id)

//Aplicando ".forEach()"

toppings.forEach((topping) => {
    console.log(topping)
})
*/

/*
const toppings = document.getElementsByClassName("topping")

for( let i = 0; i < toppings.length; i++){
    console.log(toppings[i]);
}

console.log("toppings: ", toppings)
console.log("typeof toppings: ", typeof toppings)  //object
console.log("for loop: ")


//create a new array variable:
const toppingsArray = [];

// for loop, iterating through toppings
for(let i = 0; i < toppings.length; i++){
    //displaying each topping value
    console.log("toppings[" + i + "]", toppings[i])

    // adding through .push() method to toppingArray variable
    toppingsArray.push(toppings[i])
}
console.log("")
console.log(toppings)
console.log("")

//using the array toppingArray in order to loop/iterate for each element:
toppingsArray.forEach( toppEl => {
    console.log("**: ", toppEl)
})
*/


/************************************************************* 
************** .getElementsByTagName() ***********************/

/*
const misToppings = document.getElementsByTagName("li")
console.log("misToppings: ", misToppings)
console.log("")
const titulo = document.getElementsByTagName("h1")
console.log("titulo: ", titulo)
console.log("")
const divs = document.getElementsByTagName("div")
console.log("divs: ", divs)
*/

/************************************************************* 
************** .querySelector() ******************************/

//Solo trae el primer elemento que satisfaga el selector
/*
const fondoNaranja = document.querySelector(".fondo-naranja")
console.log("fondoNaranja: ", fondoNaranja)
console.log("")
const listaToppings = document.querySelector("#lista-toppings")
console.log("listaToppings: ", listaToppings)
console.log("")
const listAlbahaca = document.querySelector("#lista-toppings #albahacas")
console.log("listAlbahaca: ", listAlbahaca)
console.log("")
*/

/************************************************************* 
************** .querySelectorAll() ***************************/

/*
const fondoMarron = document.querySelectorAll("#lista-toppings .fondo-marron")
console.log("fondoMarron: ", fondoMarron)
console.log("")
const fondoMarron1 = document.querySelectorAll(".topping.fondo-marron")
console.log("fondoMarron1: ", fondoMarron1)
console.log("")
*/

/************************************************************* 
************** Asignar Estilo ********************************/

/*
const primerTopping = document.querySelector(".topping")
console.log("primerTopping: ", primerTopping)
console.log("")
console.log("primerTopping.style: ", primerTopping.style)
console.log("")
console.log("primerTopping.style.backgroundColor = 'blue'" )
primerTopping.style.backgroundColor = 'blue'
console.log("")
console.log("primerTopping.style.color = '#FFa0f3'" )
primerTopping.style.color = '#FFa0f3'
console.log("")
console.log("primerTopping.style.textTransform = 'uppercase'" )
primerTopping.style.textTransform = 'uppercase'
console.log("")
*/

/************************************************************* 
************** Acceder al Texto ******************************/

const listToppings = document.getElementById("lista-toppings")
console.log("listToppings: ", listToppings)
console.log("listToppings.innerText:")
console.log(listToppings.innerText)
console.log("listToppings.innerHTML:")
console.log(listToppings.innerHTML)

const fondoNaranja = document.getElementsByClassName("fondo-naranja")
console.log("fondoNaranja[1].innerText: ", fondoNaranja[1].innerText)