var canvas;
var music;
var platform1, platform2, platform3, platform4;
var box;
var sprites;

function preload(){
    music = loadSound("music.mp3");
    
}


function setup(){
    canvas = createCanvas(800,600);
    platform1 = createSprite(100,500,175,20);
    platform1.shapeColor = "green";
    platform2 = createSprite(290,500,175,20);
    platform2.shapeColor = "red";
    platform3 = createSprite(480,500,175,20);
    platform3.shapeColor = "blue";
    platform4 = createSprite(670,500,175,20);
    platform4.shapeColor = "pink";
    box = createSprite(random(20,750),200,50,50);
    box.shapeColor = "white";
    box.velocityY = 5;
    box.velocityX = random(-10,10);
    sprites = createEdgeSprites();
   


    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    box.bounceOff(sprites);
    if(box.isTouching(platform1))
    {

        box.shapeColor = "green";
        box.velocityX = 0;
        box.velocityY = 0;
        music.play();

    }

    else if(box.isTouching(platform2))
    {

        box.shapeColor = "red";
        box.velocityX = 0;
        box.velocityY = 0;
        music.play();

    }


    else if(box.isTouching(platform3))
    {

        box.shapeColor = "blue";
        box.velocityX = 0;
        box.velocityY = 0;
        music.play();

    }

    else if(box.isTouching(platform4))
    {

        box.shapeColor = "pink";
        box.velocityX = 0;
        box.velocityY = 0;
        music.play();

    }



    drawSprites();
    
    //create edgeSprite



    //add condition to check if box touching surface and make it box
}
