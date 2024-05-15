/*https://viacep.com.br/ws/{cep}/json/ */
import { validate } from "./validate.js";

const getCep = document.getElementById("getCep");
const btnSearch = document.getElementById("search-cep");





btnSearch.addEventListener("click" , async () => {
    const response = await (await fetch(`https://viacep.com.br/ws/${getCep.value}/json/`)).json()
    validate(response)
})

