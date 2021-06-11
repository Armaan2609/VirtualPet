//Create variables here
var dog;
var happyDog;
var database;
var foodS;
var foodStock;
var wall1,wall2,wall3,wall4;


function preload()
{
	//load images here
  dogImage1=loadImage("images/Dog.png");
  dogHappy=loadImage("images/happyDog.png");

  

  ;
}

function setup() {
  database = firebase.database();
	createCanvas(500, 500);
  dog=createSprite(250,250);
  dog.addImage(dogImage1);
  dog.scale=0.3;
  

  wall1=createSprite(20,250,10,500);
  wall2=createSprite(480,250,10,500);
  wall3=createSprite(250,50,500,10);
  wall4=createSprite(250,480,500,10);

   

  foodStock=database.ref("Food");
  foodStock.on("value",readStock)
  
}



function draw() {  
background("green");

if(keyWentDown("UP_ARROW")){
  writeStock(foodS);
  dog.addImage(dogHappy)
}
  drawSprites();
  //add styles here
  fill("white")
 
  textSize(16);
  text("food remaning :"+foodS,170,140);
  fill("white")
  textSize(16);
  text("note : press up key to feed milk to Rocky",130,10,300,20);

}

function readStock(data){
  foodS=data.val();
}


function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1
  }
  database.ref('/').update({
    Food:x
  })
}



