const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var particles;
var plinkos = [];
var divisions =[];
var particle;

var divisionHeight=300;
var score =0;
var count = 0;
var turnsleft = 9;
var gameState ="start";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }
    for (var j = 75; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,175));
    }

    for (var j = 75; j <=width; j=j+50) {
        plinkos.push(new Plinko(j,275));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,375));
    }
    
}
 
function draw() {
  background("black");
  textSize(18)
  text("Score : "+score,20,40);
  fill("white");
  
  textSize(23)
  text(" 150 ", 5, 550);
  text(" 500 ", 95, 550);
  text(" 500 ", 175, 550);
  text(" 300 ", 255, 550);
  text(" 300 ", 335, 550);
  text(" 100 ", 415, 550);
  text(" 100 ", 495, 550);
  text(" 300 ", 575, 550);
  text(" 300 ", 655, 550);
  text(" 200 ", 735, 550);
  text(" Turns Left : "+turnsleft, 630, 45);
  Engine.update(engine);
  ground.display();
  
  if ( gameState =="end") {
    
    textSize(90);
    text("GameOver", 150, 260);
    //return
  }

  for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();  
  }
 
    if(particle!=null)
    {
       particle.display();
        
        if (particle.body.position.y>770)
        {
              if (particle.body.position.x < 80  && particle.body.position.x > 0) 
              {
                  score=score+150;      
                  particle=null;
                  if ( count>= 8) gameState ="end"; 
                  turnsleft--;
                  count++;                         
              }

              else if (particle.body.position.x < 200  && particle.body.position.x > 81) 
              {
                  score=score+500;      
                  particle=null;
                  if ( count>= 8) gameState ="end";
                  turnsleft--;
                  count++;                       
              }

              else if (particle.body.position.x < 400  && particle.body.position.x > 201) 
              {
                  score=score+300;      
                  particle=null;
                  if ( count>= 8) gameState ="end";
                  turnsleft--;
                  count++;                    
              }

              else if (particle.body.position.x < 580 && particle.body.position.x > 401 ) 
              {
                    score = score + 100;
                    particle=null;
                    if ( count>= 8) gameState ="end";
                    turnsleft--;
                    count++;

              }

              else if (particle.body.position.x < 700 && particle.body.position.x > 581 )
              {
                    score = score + 300;
                    particle=null;
                    if ( count>= 8)  gameState ="end";
                    turnsleft--;
                    count++;

              }
              
              else if (particle.body.position.x < 800 && particle.body.position.x > 701 )
              {
                    score = score + 200;
                    particle=null;
                    if ( count>= 8)  gameState ="end";
                    turnsleft--;
                    count++;

              }  
        }
  
      }

   for (var k = 0; k < divisions.length; k++) 
   {
     divisions[k].display();
   }
 
}


function mousePressed()
{
  if(gameState!=="end")
  {
    particle=new Particle(mouseX, 10, 10, 10); 
  }   
}