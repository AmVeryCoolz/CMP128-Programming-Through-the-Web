let quotes = [
    "You are Amazing!!",
    "Good job",
    "Never give up", 
    "Reach for the stars and you will get far",
    "You are enough"
];

function displayQuotes(){
    let randomQuotesIndex = Math.floor(Math.random()*quotes.length);
    let output=quotes[randomQuotesIndex];
    let quotesDiveElements= document.getElementById("output");
    quotesDiveElements.innerHTML=output;   
}
//plz work im tired
//hurry up man I CANT TAKE THIS ANYMORE
