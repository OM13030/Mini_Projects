const BASE_URL = "https://v6.exchangerate-api.com/v6/bdfa7038511f5f97e65dbdd9/latest";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");



for (let select of dropdowns) {
  for (curCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = curCode;
    newOption.value = curCode;
    if(select.name === "from" && curCode === "USD")  {
        newOption.selected = "selected";
    } else if(select.name === "to" && curCode === "INR")  {
        newOption.selected = "selected";
    } 
    select.append(newOption);

  }

  select.addEventListener("change", (evt) => {
    updateflag(evt.target);
  } );
}

const updateflag = (element) => {
    let curCode = element.value;
    let countryCode = countryList[curCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;

}



const updateExchangeRate = async () => {
  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;
  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }
  const URL = `${BASE_URL}/${fromCurr.value}`;
    let response  = await fetch(URL);
    let data = await response.json();   
    let x = `${toCurr.value}`;  
    let rate = data.conversion_rates[x];


  let finalAmount = amtVal * rate;
  console.log(finalAmount);
  msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
};

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});

window.addEventListener("load", () => {
  updateExchangeRate();
});


