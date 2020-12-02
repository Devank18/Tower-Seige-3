const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground1, stand1, stand2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15;
var box16,box17,box18,box19,box20;
var polygon,slingshot;
var score = 0;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(400,390,800,10);
  stand1 = new Ground(550,320,200,5);
  stand2 = new Ground(700,180,200,5);

  box1 = new Box(470,300,30,30);
  box2= new Box(520,300,30,30);
  box3= new Box(570,300,30,30);
  box4= new Box(620,300,30,30);
  box5= new Box(495,270,30,30);
  box6= new Box(545,270,30,30);
  box7= new Box(595,270,30,30);
  box8= new Box(520,240,30,30);
  box9= new Box(570,240,30,30);
  box10= new Box(542,210,30,30);
  box11= new Box(620,160,30,30);
  box12= new Box(670,160,30,30);
  box13= new Box(720,160,30,30);
  box14= new Box(770,160,30,30);
  box15= new Box(645,130,30,30);
  box16= new Box(695,130,30,30);
  box17= new Box(745,130,30,30);
  box18= new Box(670,100,30,30);
  box19= new Box(720,100,30,30);
  box20= new Box(695,70,30,30);

  polygon = new Polygon(200,200,10);

  slingshot = new Slingshot(polygon.body,{x=100,y=200});
}


function draw() {
  background(0,0,0);

  Engine.update(engine);

  ground1.display();

  stand1.display();
  stand2.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();

  box.score();
  box.score();
  box.score();
  box.score();
  box.score();
  box.score();
  box.score();
  box.score();
  box.score();
  box.score();
  box.score();
  box.score();
  box.score();
  box.score();
  box.score();
  box.score();
  box.score();
  box.score();
  box.score();
  box.score();

    polygon.display();

    slingshot.display();

    drawSprites();

}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(polygon.body);
  }
}

async function getTime(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responsejson = await response.json();
  var dt = responsejson.datetime
  var hour = await dt.slice(11,13)
  console.log(hour);

  if(hour>= 06 && hour<= 12 ){
      background(255,255,255);
  }
  else{
      background(0,0,0);
  }
}

function score(){
  if(this.Visiblity<0 && this.Visiblity > -1005){
    score++;
}}