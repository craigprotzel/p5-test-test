// console.log("Loading!");

window.addEventListener('load', function(){

    // console.log("Page is loaded!");

    //Get the json data for environmental hazards
    fetch('envirohazards.json')
        .then(function(response){
            //console.log(response);
            return response.json();
        })
        .then(function(data){
            console.log("The Enviro Hazards Data!");
            // console.log(data);

            let randomNum = Math.floor(Math.random() * data.entries.length);
            console.log(randomNum);
            let theHazard = data.entries[randomNum];
            console.log(theHazard);
        
            charNums = theHazard.length;
            console.log(charNums);

            //let pageText = document.getElementById('the-hazard');
            //pageText.innerHTML = theHazard;
        })
        

    //Get the json data for the ISS location
    fetch('http://api.open-notify.org/iss-now.json')
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log("The ISS Data!");
            console.log(data);

            let lon = data.iss_position.longitude
            let lat = data.iss_position.latitude
            console.log(lon,lat);
        });
});

// console.log("Loading...");



//p5 code

let charNums;

function setup(){
    createCanvas(windowWidth,windowHeight);
    background(140,30,90);
}

function draw(){
    //ellipse(mouseX, mouseY, 40,40);
    for (let i=0; i < charNums; i++){
        rect(200 + (i * 80) , height/2, 50, 60);
    }
}