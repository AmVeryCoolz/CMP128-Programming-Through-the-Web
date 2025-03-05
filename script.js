let quotes = [
    "You are Amazing!!",
    "Good job",
    "Never give up", 
    "Reach for the stars and you will get far"
];

function displayQuotes(){
    let randomQuotesIndex = Math.floor(Math.random()*quotes.length);
    let myQuotes=quotes[randomQuotesIndex];
    let quotesDiveElements= document.getElementByID("myQuotes");
    quotesDivElement.innerHTML=myQuotes;   
}


// Ensure DOM elements exist before adding event listener
//document.addEventListener('DOMContentLoaded', function() {
 //   let btn = document.getElementById('btn');
 //   let output = document.getElementById('output');

  //  if (btn && output) {
  //      btn.addEventListener('click', function() {
            // Select a random quote from the array
  //          let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  //          output.innerHTML = randomQuote;
   //     });
  //  }
//});
