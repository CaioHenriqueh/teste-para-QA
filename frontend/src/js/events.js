import  Keypress  from "./validate.js";
import  Validate  from "./validate.js";
const inputCep = document.getElementById("getCep");
const btnSearch = document.getElementById("search-cep");



inputCep.addEventListener("keypress",e => Keypress(e))


btnSearch.addEventListener("click" , async () => {
    const response = await (await fetch(`https://viacep.com.br/ws/${getCep.value}/json/`)).json()
    Validate(response)
})