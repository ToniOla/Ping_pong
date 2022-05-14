video="";
status="";
objects= [];
function setup(){
    canvas=createCanvas(400,480);
    canvas.center();
   
}
function preload(){
    video=createVideo("video.mp4");
    video.hide();
}

function gotResult(error,results){
    if(error){
        console.log(error);

}
console.log(results);
objects= results;
}
function start(){
  objectDetected=ml5.objectDetector('cocossd',modelLoaded);
  document.getElementById("status").innerHTML="status detecting objects";
}
function modelLoaded(){
    console.log("Model loaded!");
    status=true;
 video.loop();
 video.speed(1);
 video.volume(1);
}
function draw(){
    image(video,0,0,400,480);
   if(status!=""){
objectDetected.detect(video,gotResult);
for (i=0; i<objects.length; i++){
document.getElementById("status").innerHTML= "status:objectDetected";
document.getElementById("number_of_objects").innerHTML=" Number of objects detected are"+objects.length;
fill("orange");
Percent=floor(objects[i].confidence*100);
text(objects[i].label + "" + Percent + "%" ,objects[i].x+15, objects[i].y+15);
noFill();
stroke("crimson");
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height)
}
   }
  
}