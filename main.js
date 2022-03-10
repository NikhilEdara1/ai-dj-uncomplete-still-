song ="";
scorerightwrist =0;
scoreleftwrist =0;
rightx =0;
leftwristx =0;
rightwristy =0;
leftwristy =0;

function preload(){
    song =loadSound("music.mp3");
}
function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
video.hide();
x=ml5.poseNet(video,modelloaded);
x.on('pose',gotposes);
}
function modelloaded(){
    console.log("model has been initiated");
}
function gotposes(result){
    if(result.length>0){
        console.log(result);
        scorerightwrist=result[0].pose.keypoints[10].score;
        scoreleftwrist=result[0].pose.keypoints[9].score;
        leftwristx=result[0].pose.leftWrist.x;
        leftwristy=result[0].pose.leftWrist.y;
        rightx=result[0].pose.rightWrist.x;
        rightwristy=result[0].pose.rightWrist.y;
        console.log("score of left wrist"+scoreleftwrist);
        console.log("score of right wrist"+scorerightwrist);
        console.log("right wrist x"+rightx);
        console.log("right wrist y"+rightwristy);
        console.log("left wrist x"+leftwristx);
        console.log("left wrist y"+leftwristy);


         }
}

function Play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function draw(){
    image(video,0,0,600,500);
    fill("red");
    stroke("red");
    if(scorerightwrist>0.2)
    {
        circle(rightx,rightwristy,20);
        if(rightwristy > 0 && rightwristy <= 100)
        {
            document.getElementById("ad").innerHTML = "speed=0.5x";
            song.rate(0.5);
        }
        else if(rightwristy>100 && rightwristy<=200)
        {
            document.getElementById("ad").innerHTML = "speed=1x";
            song.rate(1); 
        }
        else if(rightwristy>200 && rightwristy<=300)
        {
            document.getElementById("ad").innerHTML = "speed=1.5x";
            song.rate(1.5);
        }
        else if(rightwristy>300 && rightwristy<=400)
        {
            document.getElementById("ad").innerHTML = "speed=2";
            song.rate(2);
        }
        else if(rightwristy>400)
        {
            document.getElementById("ad").innerHTML = "speed=2.5x";
            song.rate(2.5);
        }
    }
}

