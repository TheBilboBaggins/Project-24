const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase;
var computer, computerBase;

var arrow;
var playerArcher
var computerArrow,playerArrow

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
 
  //Create Player Archer Object

  computerBase = new ComputerBase(
    width - 300,
    random(450, height - 300),
    180,
    150
  );
  computer = new Computer(
    width - 280,
    computerBase.body.position.y - 153,
    50,
    180
  );
  computerArcher = new ComputerArcher(
    width - 330,
    computerBase.body.position.y - 195,
    120,
    120
  );
  
  //Create an arrow Object
  playerArcher = new PlayerArcher(
    335,
    playerBase.body.position.y - 195,
    120,
    120
  ); 
  
  playerArrow = new PlayerArrow (playerArcher.body.position.x,playerArcher.body.position.y,124,10)
  computerArrow = new ComputerArrow(computerArcher.body.position.x,computerArcher.body.position.y,124,10)
}

function draw() {
  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

 
  playerBase.display();
  player.display();
  

  computerBase.display();
  computer.display();
  
  playerArcher.display();
  computerArcher.display()
  


  //Display arrow();
  playerArrow.display();
  computerArrow.display()

  //if Space (32) key is pressed call shoot function of playerArrow
  if(keyCode === 32){
    playerArrow.shoot(playerArcher.body.angle)
    //Call shoot() function and pass angle of playerArcher


  }
}



