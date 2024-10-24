const quotes = ["Don't be afraid to ask questions","Working together can be very helpful","Don't panic, you got this <3"]

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}  

function getRandomQuote() {
    const length = quotes.length;
    const selectionNumber = getRandomInt(0,length);
    console.log(selectionNumber);
    const selection = quotes[selectionNumber];
    console.log(selection);
    loadQuote(selection);
}

async function getRandomQuote2() {
    const response = await fetch("https://api.kanye.rest/");
    const responseJson = await response.json()
    const quote = responseJson.quote;
    loadQuote(quote)
}

function loadQuote(quote) {
    document.getElementById("quoteText").innerHTML = quote;
}

const generatorButton = document.getElementById("generatorButton");
generatorButton.addEventListener("click", getRandomQuote2);

