const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")


function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const CurrencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const CurrencyValueConverted = document.querySelector(".currency-value")
    
    const dolarToday = 5.2
    const euroToday = 6.2
    const realToday = 1.0

    if(currencySelect.value == "dolar"){
        
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)

    }

    if(currencySelect.value == "euro"){
        
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style:"currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
        

    }
   
    if(currencySelect.value == "real"){
        
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style:"currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realToday)
        

    }


        CurrencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)



}

function changeCurrency(){
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/img/dolar.png"
        
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/img/euro.png"

    }     

    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real Brasileiro"
        currencyImage.src = "./assets/img/real.png"
    }



    convertValues()   

}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)

