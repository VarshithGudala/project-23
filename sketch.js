const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var playerhero;
var playerground
var computerenemy;  
var computerground;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
   //Create Player Base and Computer Base Object
   computerground = new ComputerBase(width-300,random(450,height-300),180,150); 
   playerground = new PlayerBase(300,random(450,height-300),180,150);
   playerhero = new Player(285,playerground.body.position.y-150,50,180);
   computerenemy = new ComputerPlayer(width-285,computerground.body.position.y-150,50,180);

 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
   
   //Display Playerbase and computer base 
   playerground.display();
   computerground.display();
   
   //display Player and computerplayer
   playerhero.display();
   computerenemy.display();

}
