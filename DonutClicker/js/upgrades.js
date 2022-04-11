function UpgradeClick(){
    var clickCostAvant = 0;
    if (score >= clickCost){
        score-= clickCost;

        //Gère l'augmentation du coût
        clickCostAvant = clickCost;
        clickCost = clickCost + clickCostBefore;
        clickCostBefore = clickCostAvant;                        
                              
        //Augmente le nb de points du click
        pointClick ++;

        //Change les valeurs affichées
        document.getElementById("clickCost").value = clickCost;
        document.getElementById("MonScore").value = score;
    }
    AffichageClickAmeliorer();
}

function UpgradeDebutant(){
    var clickDebutantAvant = 0;
    if (score >= clickDebutant){
        score -= clickDebutant;

        //Gère l'augmentation du coût
        clickDebutantAvant = clickDebutant;
        clickDebutant = clickDebutant + clickDebutantBefore;
        clickDebutantBefore = clickDebutantAvant;

        //Augmente le nb de points par seconde
        pointPassif += 5;

        //Change valeurs affichées
        document.getElementById("clickDebutant").value = clickDebutant;
        document.getElementById("MonScore").value = score;
    }
    AffichageDebutantAmeliorer();
}

function UpgradeInter(){
    var clickInterAvant = 0;
    if (score >= clickInter){
        score -= clickInter;

        //Gère l'augmentation du coût
        clickInterAvant = clickInter;
        clickInter = clickInter + clickInterBefore;
        clickInterBefore = clickInterAvant;

        //Augmente le nb de points par seconde
        pointPassif += 20;

        //Change valeurs affichées
        document.getElementById("clickInter").value = clickInter;
        document.getElementById("MonScore").value = score;
    }
    AffichageInterAmeliorer();
}

function UpgradePro() {
    var clickProAvant = 0;
    if (score >= clickPro) {
        score -= clickPro;

        //Gère l'augmentation du coût
        clickProAvant = clickPro;
        clickPro = clickPro + clickProBefore;
        clickProBefore = clickProAvant;

        //Augmente le nb de points par seconde
        pointPassif += 50;

        //Change valeurs affichées
        document.getElementById("clickPro").value = clickPro;
        document.getElementById("MonScore").value = score;
    }
    AffichageProAmeliorer();
}

function UpgradeExpert() {
    var clickExpertAvant = 0;
    if (score >= clickExpert) {
        score -= clickExpert;

        //Gère l'augmentation du coût
        clickExpertAvant = clickExpert;
        clickExpert = clickExpert + clickExpertBefore;
        clickExpertBefore = clickExpertAvant;

        //Augmente le nb de points par seconde
        pointPassif += 100;

        //Change valeurs affichées
        document.getElementById("clickExpert").value = clickExpert;
        document.getElementById("MonScore").value = score;
    }
    AffichageExpertAmeliorer();
}


function Upgrade(cpt){
    //Affiche le texte de l'amélioration en vert quand on clique sur le bouton améliorer
    switch (cpt){
        case 1:
            $("#txtUp1").css("color", "green");
            setTimeout(function(){
                $("#txtUp1").css("color", "white");
            }, 300);
            break;
        case 2:
            $("#txtUp2").css("color", "green");
            setTimeout(function(){
                $("#txtUp2").css("color", "white");
            }, 300);
            break;
        case 3:
            $("#txtUp3").css("color", "green");
            setTimeout(function(){
                $("#txtUp3").css("color", "white");
            }, 300);
            break;
        case 4:
            $("#txtUp4").css("color", "green");
            setTimeout(function () {
                $("#txtUp4").css("color", "white");
            }, 300);
            break;
        case 5:
            $("#txtUp5").css("color", "green");
            setTimeout(function () {
                $("#txtUp5").css("color", "white");
            }, 300);
            break;
    }    
}