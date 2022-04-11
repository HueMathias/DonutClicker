setInterval(function(){
    if (difficulte == 3)
        MoveDonut();
}, 1000);

setInterval(function(){
    if (difficulte == 2 || difficulte == 0)
        MoveDonut();
}, 2500);

function MoveDonut(){
    //Déplace le donuts dans une zone restreinte
    var aleat1 = Math.floor(Math.random() * (750 - 200)) + 200; //X
    var aleat2 = Math.floor(Math.random() * (50 - -10)) + -10;  //Y
    
    $("#donut").offset({left: aleat1, top: aleat2});
}


