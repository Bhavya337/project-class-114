function preload(){

}

function setup(){
    canvas=createCanvas (350 ,350) ;
    canvas.center();
    video = createCapture(VIDEO);
    video.size(350, 350);
    video.hide();
    
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses );

}

function modelLoaded(){
    console.log('pose net model is loaded ');
}
function  draw(){
    image(video,0,0,350,350);

}
function takesnapshot(){
   save("filterimage.png")
}
function gotPoses(results){
if (results.length>0){
   console.log(results);
   console.log("x codinate for nose is "+ results[0].pose.nose.x );
   console.log("y codinate for nose is "+ results[0].pose.nose.y );

}
}