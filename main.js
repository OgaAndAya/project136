objects= [];
status= " ";

function setup(){
    canvas= createCanvas(380,380);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}
function start(){
    objectDetector= ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML= "status: detecting objects";
    object_name= document.getElementById("object_name").value;
}
function modelLoaded(){
    console.log(modelLoaded);
    
}

function gotResult(error,results){
if (error){
    console.log(error);
}
console.log(results);
}