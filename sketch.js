var canvas;
var music;
var box,surface1,surface2,surface3,surface4,edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(450,500);

    surface1=createSprite(0,480,120,20)
    surface1.shapeColor="red";

    surface2=createSprite(125,480,120,20)
    surface2.shapeColor="yellow";

    surface3=createSprite(250,480,120,20)
    surface3.shapeColor="blue";

    surface4=createSprite(375,480,120,20)
    surface4.shapeColor="green";

    //create box sprite and give velocity
    box=createSprite(random(20,370),200,50,50);
    box.velocityX=5;
    box.velocityY=5;
    box.shapeColor="white";

    edges=createEdgeSprites();
    music.play();
    

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    box.bounceOff(edges);

    if(box.isTouching(surface1))
    box.shapeColor="red";

    if(box.isTouching(surface2)){
        box.shapeColor="yellow";
        box.velocityX=0;
        box.velocityY=0;
        music.stop();
    }
   

    if(box.isTouching(surface3))
    box.shapeColor="blue";

    if(box.isTouching(surface4))
    box.shapeColor="green";



    //add condition to check if box touching surface and make it box
    drawSprites();
}
