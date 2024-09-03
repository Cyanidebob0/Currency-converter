BASE_URL ="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json"

let selects = document.querySelectorAll("#inner select");

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



