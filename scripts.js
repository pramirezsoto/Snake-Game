let xSnake = 400;
let ySnake = 400;
function setup() {
    createCanvas(800, 700);
    alert(width)
  }
  
  function draw() {
    background(220);
    drawPlayer(xSnake);
    drawAxis()
    drawBorder();
    
  }

  function keyPressed(){
      switch (keyCode){
       case LEFT_ARROW:
          xSnake = xSnake - 100;
          break;
        case RIGHT_ARROW:
          xSnake = xSnake + 100;
          break;
        case UP_ARROW:
          ySnake = ySnake - 100;
          break;
        case  DOWN_ARROW:
          ySnake = ySnake + 100;
          break;
    }
}

 function drawPlayer(xSnake){
    rect(xSnake, ySnake , 50, 50);
 }

 function drawBorder(){
   for (let indexX = 0; indexX < width; indexX += 50){
       drawBlock( indexX,0);
   }
  
   for (let indexX = 0; indexX < width; indexX += 50){
    drawBlock( indexX, height - 50);
}
 }

 function drawBlock(x,y){
   rect(x,y, 50, 50);
 }