let x = 50;
let stap = 40;
let stop = 550;
let i = 80
let j = 40
let lijnDikte = 3
let lijnKleur = ("black")



function setup() {
  createCanvas(800, 800);
  background(240);

}

function draw() {
  while (x < stop) {
    
    
    strokeWeight (j);
    stroke (lijnKleur)
    line(x, 50, x, i);
    x = x + stap;
    i = i + stap;
    j = j + - lijnDikte;
  }


  x = 50;
  i = 80;
  j = 1

  for (let k = 0; k < 7; k++) {
    lijnKleur = ("red")
  }



}