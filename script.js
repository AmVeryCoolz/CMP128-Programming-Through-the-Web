let quotes = [
    "You are Amazing!!",
    "Good job",
    "Never give up", 
    "Reach for the stars and you will get far"
];

function displayQuotes(){
    let randomQuotesIndex = Math.floor(Math.random()*quotes.length);
    let output=quotes[randomQuotesIndex];
    let quotesDiveElements= document.getElementById("output");
    quotesDivElement.innerHTML=output;   
}

