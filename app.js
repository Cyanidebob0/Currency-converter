BASE_URL ="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies"

let selects = document.querySelectorAll("#inner select");
let btn = document.querySelector("button");
let fromCurr = document.querySelector("#dropdown-from");
let toCurr  = document.querySelector("#dropdown-to");

for( let select of selects){
    for( let currCode in countryList){
         let newOption=document.createElement("option");
         newOption.innerText=currCode;
         newOption.value=currCode;
         select.append(newOption);

         if(select.name==="dropdown-from" && currCode==="USD"){
            newOption.selected ="selected";
         }
         else if(select.name==="dropdown-to" && currCode==="INR"){
            newOption.selected ="selected";
         }
    }
    select.addEventListener("change",(res)=>{
        updateFlag(res.target);
    })
}




let updateFlag = (element) => {
    let cCode = element.value;
    let countryCode = countryList[cCode];

    
    if (element.name === 'dropdown-from') {
        let flagFrom = document.querySelector("#flag-from");
        flagFrom.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
    } else if (element.name === 'dropdown-to') {
        let flagTo = document.querySelector("#flag-to");
        flagTo.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
    }
}


btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    let inputFrom = document.querySelector("#input-from");
    let inputTo = document.querySelector("#input-to");
    let exchangeRateElem = document.querySelector("#exchange-rate");

    let amount = parseFloat(inputFrom.value);
    if (isNaN(amount) || amount <= 0) {
        amount = 1;
        inputFrom.value=1;
    }

    let fromCurrency = fromCurr.value.toLowerCase();
    let toCurrency = toCurr.value.toLowerCase();

    let url = `${BASE_URL}/${fromCurrency}.json`;
    try {
        let response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch exchange rates.");
        let data = await response.json();

        let rate = data[fromCurrency][toCurrency];
        if (!rate) throw new Error("Currency not found.");

        let convertedAmount = (amount * rate).toFixed(2);
        inputTo.value = convertedAmount;
        exchangeRateElem.textContent = `Exchange Rate: 1 ${fromCurrency.toUpperCase()} = ${rate} ${toCurrency.toUpperCase()}`;
    } catch (error) {
        console.error("Error:", error);
        inputTo.value = "Error";
        exchangeRateElem.textContent = "Exchange Rate: N/A";
    }
});


