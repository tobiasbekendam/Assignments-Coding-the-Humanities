
var images = new Array(20);
var angle = 360;
var imageNumber = 0;
var myRequest = new XMLHttpRequest();
var method = "GET";
var url = "http://www.europeana.eu/api/v2/search.json?wskey=jmeuxFe2A&query&query=flowers&start=1&rows=24&profile=standard"

myRequest.open(method, url);
myRequest.send();

myRequest.onreadystatechange = function(){
    if (myRequest.readyState === 4) {
        var data = myRequest.response;
        var dataParsed = JSON.parse(data);
        console.log(dataParsed);
        var i;
        for (i = 0; i < dataParsed.items.length; i++) {
            images[i] = dataParsed.items[i].edmPreview[0];
        }
    } else {
        console.log(myRequest.readyState);
    }
}



var angle = 0; 
var imageNumber = 0;



    turn = function(){
    
    var img = document.getElementById('image');
    
    
    if (angle>300){
        angle = 0;
    }
    
    angle+=90;
    img.style.transform = 'rotate('+angle+'deg)'; 
    console.log("click received: " + angle + " deg");
}



guess = function(){
    if(angle==360){
        alert("Correct!");
        next();
    
    }else{
        alert("Incorrect!");
    }
    
    console.log("guess received: " + angle + " deg");
}


next = function(){
    imageNumber+=1;
    if (imageNumber == images.length){
        imageNumber=0;
    }
    turn(); 
    
    document.getElementById('image').src = images[imageNumber];
    console.log("next received");
}    
    