//Chargement du menu
$(document).ready(function(){                    
    $("#jeuComplet").hide(); 
    $("#mode").hide();   
    $("#fin").hide();   
    $("#infos").hide();                              
});

function Mode(){
    $("#menu").hide();
    $("#mode").show();
}

function Infos(){
    $("#menu").hide();
    $("#infos").show();
}

function Retour(){
    $('#jeuComplet').hide();
    $("#mode").hide();
    $("#fin").hide();
    $("#infos").hide();
    $("#menu").show();
}

//Quand on lance le jeu
function Begin(){
    begin = 1;
    $('#menu').hide();
    $("#fin").hide();  
    
    $('#jeu').show();    
    $('#upgrade').show();  
    $('#zoneBas').show();  
    $('#jeuComplet').show();   
    
    //Masque les boutons améliorer
    $("#clickUpgrade").hide();
    $("#debutantUpgrade").hide();
    $("#interUpgrade").hide();
    
    //Taille du donut en fonction de la difficulté
    if (difficulte == 3){
        $("#donut").css("width", "100px");
        $("#donut").css("height", "100px");
    }
    else if (difficulte == 2 || difficulte == 0){
        $("#donut").css("width", "150px");
        $("#donut").css("height", "150px");
    }
    else {
        $("#donut").css("width", "200px");
        $("#donut").css("height", "200px");
    }
    //Positionnement du donut par dessus l'image noire
    $("#donut").offset({left:615, top:20});
    

    //Menu upgrade
    document.getElementById("clickCost").value = clickCost;
    document.getElementById("clickDebutant").value = clickDebutant;
    document.getElementById("clickInter").value = clickInter;

    if (difficulte == 1)
        multiplicateur = 3;

    document.getElementById("MonScore").value = score;

    //Apparition du bonus
     setInterval( async function(){
        var aleat1 = Math.floor(Math.random() * (520 - 490)) + 490; //X
        var aleat2 = Math.floor(Math.random() * (1490 - 25)) + 25;  //Y
        
        $('#bonus').show();
        $('#bonus').offset({left:aleat2, top:aleat1});      
        await delay(2500);
        $('#bonus').hide();                      
    }, 10000);                        
}

function delay(time){
    return new Promise(resolve =>- setTimeout(resolve, time));
}