var garden,rabbit;
var gardenImg,rabbitImg;
var applepng;
var leafn;



function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  applepng = loadImage("apple.png");
  leafn = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage("gar", gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage("rabbit", rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x=mouseX;
  
  var select = Math.round(random(1,2));
  
  if(frameCount%80==0){
    if(select ==1){
    createleaf();
    }
  
    else{
      crtapl();
    }
  }
  drawSprites();
}




  



  function createleaf(){
  var leaf=createSprite((random(50, 350)), 40);
  leaf.addImage("lf",leafn);// write your code here 
  leaf.velocityY=3;
  leaf.scale=0.05;
  rabbit.depth=leaf.depth;
  rabbit.depth=leaf.depth+1;
  leaf.lifetime=200;}

  function crtapl(){
    var apple=createSprite((random(50, 350)), 40);
    
    apple.addImage("ap", applepng);// write your code here 
    apple.velocityY=3;
    apple.scale=0.05;
    rabbit.depth=apple.depth;
    rabbit.depth=apple.depth+1;
    apple.lifetime = 200;
    }

  