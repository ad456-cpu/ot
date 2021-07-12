const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//defining the background
var backgroundImg;
//creating an array for the snow
var letsnow =[];
//defining the boy
var boy;


function preload(){
  // loading the background image
  backgroundImg = loadImage("snow2.jpg");
  //loading the boy's image
  boy1=loadImage("vector-boy-wearing-hoodie-character-260nw-1770228356.jpg");
}

function setup() {
  createCanvas(1540,750);
  //creating the boy
  boy=createSprite(600,600,50,50)
  boy.addImage("boy1");
}

function draw() {
  //creating the background
  background(backgroundImg);
    
  
//displaying the boy image
  boy.display();

  drawSprites();
}