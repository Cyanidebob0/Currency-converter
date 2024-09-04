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


btn.addEventListener("click", async (evt)=>{
    evt.preventDefault();
    let input = document.querySelector("#input-from");
    if(input.value === 0 || input.value < 1){
        input.value=1;
    }
    let url = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
    let response = await fetch(url);
    console.log(response);
    let data = await response.json(); 
    console.log(data);
    ;
})



