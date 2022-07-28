let donutCount = 0;
let autoClickerPrice = 100;
let autoClickerCount = 0;
let clickMultiplierPrice = 10;
let clickMultiplierCount = 0;

function getDonutCount() {
    return donutCount;
}

function addDonut() {
    donutCount += Math.pow(1.2, clickMultiplierCount);
    donutNumber.innerText = numberWithCommas(Math.round(donutCount));
}

function activateAutoClickers() {
    setInterval(function() {
        donutCount += autoClickerCount * Math.pow(1.2, clickMultiplierCount);
        donutNumber.innerText = numberWithCommas(Math.round(donutCount));
    }, 1000);
}

function getAutoClickerCount() {
    return autoClickerCount;
}

function purchaseAutoClicker() {
    if(donutCount >= autoClickerPrice) {
        donutCount -= autoClickerPrice;
        autoClickerCount += 1;
        autoClickerPrice = Math.round(autoClickerPrice * 1.10);
        donutNumber.innerText = numberWithCommas(Math.round(donutCount));
        autoClickerPriceSpan.innerText = numberWithCommas(autoClickerPrice);
        autoClickerSpan.innerText = numberWithCommas(autoClickerCount);
        if(autoClickerCount <= 1) {
            activateAutoClickers();
        }
    }
}

