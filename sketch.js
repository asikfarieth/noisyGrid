// further idea implemented: change of colors (background), change of color of lines and length of compass lines according to the mouse X position

var stepSize = 20;

function setup() {
  createCanvas(500, 500);
}
///////////////////////////////////////////////////////////////////////
function draw() {
  background(125);

  colorGrid();
  compassGrid();
}
///////////////////////////////////////////////////////////////////////
function colorGrid(){
  
  noStroke();
  //stroke(0);
  for (i = 0; i< 25; i++){
    for (j=0; j<25; j++){
      var x = i*25;
      var y = j*25;
      var n = noise(x/1000,y/1000,frameCount/mouseX);
      var green = color(200,5,200);
      var red = color(205,200,15);
      var c = lerpColor(green, red, n);
      fill(c);
    rect(i*20, j*20, stepSize, stepSize)// your code here
  }
}
}
///////////////////////////////////////////////////////////////////////
function compassGrid(){


  if(frameCount%(mouseX*100)==0){
    return;
  }
  console.log(frameCount);
  noStroke();

strokeWeight(2);
   for (i = 0; i<25; i++){
     for (j = 0; j< 25; j++){
       push();

 
       var x1 = i*20;
       var y1 = j*20;
       var n = noise(x1/mouseX,y1/mouseX,frameCount/mouseX);
       var a = map(n, 0, 1,0,720);
       var green = color(0,5,200);
       var red = color(205,200,155);
       var c = lerpColor(green, red, n);
       stroke(c);
       
       translate(i*20+20/2, j*20+20/2);
       rotate(radians(a));
       line(0,0,0,stepSize+30*n);
       pop();



     }
   }
}
