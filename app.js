BASE_URL ="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json"

let selects = document.querySelectorAll("#inner select");

for( let select of selects){
    for( let currCode in countryList){
         let newOption=document.createElement("option");
         newOption.innerText=currCode;
         newOption.value=currCode;
         select.append(newOption);
    }
}
