let btn = document.getElementById('btn');
let output = document.getElementById('output');

let quotes = { '"You are Amazing!!"','"GOOD JOB!!!"','"Never give up"','"Reach for the stars and you will get far"'};

btn.addEventListener('click',function(){
  var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
  output.innerHTML = randomQuote;
})

