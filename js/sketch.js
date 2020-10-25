let x;
let lengte;
let dikte;




function setup() {
  createCanvas(700, 250);

}

function draw() {

  background(240);
  
  for (let i=0;i<20;i++) {

    x = 50 + (i*20);
    lengte = 100 + (i*5);
   dikte = 20-i;
    if  (i<10) {
      stroke (0);
   } else {
     stroke (255,0,0);
    }
    strokeWeight (dikte);
   line (x,50, x, lengte);
}


}

// while (x < stop) {
    
    
//   strokeWeight (j);
//   stroke (lijnKleur)
//   line(x, 50, x, i);
//   x = x + stap;
//   i = i + stap;
//   j = j + - lijnDikte;
// }


// x = 50;
// i = 80;
// j = 1

// for (let k = 0; k < 7; k++) {
//   lijnKleur = ("red")
// }