
var boy,Runner_running;

var track , pathimage;

var invisiblepath
function preload(){
 Runner_running = loadAnimation ("Runner-1.png","Runner-2.png")

pathimage = loadImage ("path.png")



}

function setup(){
  createCanvas(400,400)
  



 track = createSprite(200,200,100,400)

track.addImage("track",pathimage)

invisiblepath = createSprite(200,210,100,400)

invisiblepath.visible=false;

boy = createSprite (200,200,30,30)

boy.addAnimation("running",Runner_running)
boy.scale=0.1



}

function draw(){
  background(0)
  
drawSprites();

track.velocityY= 4

if(keyDown("Space")&& boy.y<0){

boy.velocityY =velocityY-0.1
boy.x=World.mouse.X


}
 
boy.collide(invisiblepath);





if(track.y>400){ 

track.y = 200;

}








}
