const getCep = document.getElementById("getCep");
const city = document.getElementById("city");
const uf = document.getElementById("uf");
const ddd = document.getElementById("ddd");


export const validate = (res) => {
    if(!getCep.value) {
        return;
    }
    city.innerHTML = `CIDADE: ${res.localidade}`
    uf.innerHTML = `UF: ${res.uf}`
    ddd.innerHTML = `DDD: ${res.ddd}`
    getCep.value = ''
}

export const keypress = (e) =>  {
    if(e.key === "Enter"){
        validate()
    }
}
