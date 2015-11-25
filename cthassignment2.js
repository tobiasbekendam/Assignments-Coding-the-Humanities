var images = ["http://41.media.tumblr.com/5ffec0abc9929a1db1f5c8e21556fec5/tumblr_mwa0evTKUn1r07v7lo1_1280.jpg",
    "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSF7s4-p52hDiB3rGbe6OPA6Ml8dvHJdafC6LvBPqsWbtpLWwV9tQ", 
              "http://media.discountflooring.com/flooring/absolut-black-1001137118-large.jpg",
              "http://images.nationalgeographic.com/wpf/media-live/photos/000/747/cache/yir-space7_74777_600x450.jpg",
              "http://www.ancient-origins.net/sites/default/files/mesopotamian-wheel.jpg"
];

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