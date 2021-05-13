var bg,bg1;
var c,c1;
var cc1,cc;
var m,m1;
var mm1,mm;
var touches = 0
function preload() {
    //load the images here
    bg1 = loadImage("images/garden.png");
    m1 = loadImage("images/mouse2.png");
    mm1 = loadImage("images/mouse1.png");
    mm = loadImage("images/mouse3.png");
    c1 = loadImage("images/cat1.png");
    cc1 = loadImage("images/cat4.png");
    cc = loadAnimation("images/cat2.png","images/cat3.png");
    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    c = createSprite(380,540,50,50);
    c.addImage("cat",c1);
    c.scale = 0.15;
    c.addImage("chappy",cc1)
    c.addAnimation("cwalking", cc)
    
    
    m  = createSprite(50,550,50,50);
    m.addImage("mouse",m1);
    m.scale = 0.09;
    m.addImage("mhappy",mm1);
    m.addImage("mteasing",mm);
   
    
    

    //add the background image
    bg = createSprite(0,300,10,50);
    bg.addImage("background",bg1);

}

function draw() {

    background(255);
    c.depth = bg.depth;
    c.depth = c.depth + 1;
    m.depth = bg.depth;
    m.depth = m.depth + 1;
    //Write condition here to evalute if tom and jerry collide
    if (m.isTouching(c)){
        touches = 1;
    }
    
    if (touches == 1){
        c.changeAnimation("chappy",cc1)
        m.changeAnimation("mhappy", mm1)
    }

    if (keyWentDown("LEFT_ARROW")){
        keyPressed();
    }

    if (keyWentUp("LEFT_ARROW")){
        keyreleased();
    }
    
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  m.changeAnimation("mteasing",mm);
  c.changeAnimation("cwalking",cc);
  c.x = c.x - 50;

}

function keyreleased(){
    m.changeAnimation("mouse",m1)
    c.changeAnimation("cat",c1)
}