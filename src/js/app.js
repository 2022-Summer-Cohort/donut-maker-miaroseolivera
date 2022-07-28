let donutButton= document.images["donutButton"];
donutButton.addEventListener("click", addDonut)
donutButton.addEventListener("click", enableAutoClicker)
donutButton.addEventListener("click", enableMultiplier)

let donutNumber = document.querySelector(".donutCount");

let purchaseAutoClickerButton = document.querySelector(".clickerButton")
purchaseAutoClickerButton.addEventListener("click", purchaseAutoClicker);

let autoClickerPriceSpan = document.querySelector("#autoClickerCost");
let autoClickerSpan = document.querySelector("#clickersPurchased");

let purchaseClickMultiplierButton = document.querySelector(".multiplierButton");
purchaseClickMultiplierButton.addEventListener("click", purchaseClickMultiplier);

let clickMultiplierPriceSpan = document.querySelector("#multiplierCost");
let clickMultiplierSpan = document.querySelector("#multipliersPurchased");

let nav = document.querySelector("nav");

let resetButton = document.querySelector("#resetButton");
resetButton.addEventListener("click", resetGame);