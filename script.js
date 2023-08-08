document.addEventListener("DOMContentLoaded", function() {

    // Lógica de funcionamiento de la S = studies.
    
    let studiesbool = false;
    let languagesbool = false;
    let abilitiesbool = false;
    let instr = document.getElementById("instr");
    let instrfunc = document.getElementById("instrfunc");
    let NStudies = document.getElementById("NStudies");
    let name = document.getElementById("name");
    let lastname = document.getElementById("lastname");
    let studiesbox = document.getElementById("studies");
    let studiesTitle = document.getElementById("studiestitle");
    let littledesc = document.getElementById("littledesc");

    function goback() {
        instr.classList.remove("hide");
        instrfunc.classList.add("hide");
        name.classList.remove("hide");
        lastname.classList.remove("hide");
        studiesbox.classList.add("hide");
        littledesc.classList.remove("hide");
        studiesTitle.classList.add("hide");
        languagestitle.classList.add("hide");
        languagesbox.classList.add("hide");
        abilitiestitle.classList.add("hide");
        abilitiesbox.classList.add("hide");
        studiesbool = false;
        languagesbool = false;
        abilitiesbool = false;
    }
    
    instrfunc.addEventListener("click", goback);

    function studies(){
        if(!abilitiesbool && !languagesbool){
            studiesbool = true;
            instr.classList.add("hide");
            instrfunc.classList.remove("hide");
            name.classList.add("hide");
            lastname.classList.add("hide");
            studiesbox.classList.remove("hide");
            littledesc.classList.add("hide");
            studiesTitle.classList.remove("hide");
        }
    }

    function pressS(){
        NStudies.style.textShadow = "0.5vh 0.5vh #FAA780";
        NStudies.style.color = "#DB5741";
    }

    function nopressS(){
        NStudies.style.textShadow = "0.5vh 0.5vh #FAC9B8";
        NStudies.style.color = "#DB8A74";
    }

    NStudies.addEventListener("mousedown", pressS);
    NStudies.addEventListener("mouseup", nopressS);
    NStudies.addEventListener("click", studies);

    // Lógica de funcionamiento de la L = languages.

    let NLanguages = document.getElementById("NLanguages");
    let languagestitle = document.getElementById("languagestitle");
    let languagesbox = document.getElementById("languages");

    function languages(){
        if(!abilitiesbool && !studiesbool){
            languagesbool = true;
            instr.classList.add("hide");
            instrfunc.classList.remove("hide");
            name.classList.add("hide");
            lastname.classList.add("hide");
            littledesc.classList.add("hide");
            languagestitle.classList.remove("hide");
            languagesbox.classList.remove("hide");
        }
    }

    function pressL(){
        NLanguages.style.textShadow = "0.5vh 0.5vh #87C784";
        NLanguages.style.color = "#5DAC59";
    }

    function nopressL(){
        NLanguages.style.textShadow = "0.5vh 0.5vh #BFFFBC";
        NLanguages.style.color = "#77C973";
    }

    NLanguages.addEventListener("mousedown", pressL);
    NLanguages.addEventListener("mouseup", nopressL);
    NLanguages.addEventListener("click", languages);

    // Lógica de funcionamiento de la R = work.

    //Completar cuando tenga trabajo.

    // Lógica de funcionamiento de la A = habilities.

    let LAbilities = document.getElementById("LAbilities");
    let abilitiestitle = document.getElementById("abilitiestitle");
    let abilitiesbox = document.getElementById("abilities");

    function habilities(){
        if(!languagesbool && !studiesbool){
            abilitiesbool = true;
            instr.classList.add("hide");
            instrfunc.classList.remove("hide");
            name.classList.add("hide");
            lastname.classList.add("hide");
            littledesc.classList.add("hide");
            abilitiestitle.classList.remove("hide");
            abilitiesbox.classList.remove("hide");
        }
    }

    function pressA(){
        LAbilities.style.textShadow = "0.5vh 0.5vh #7D88AC";
        LAbilities.style.color = "#3A3667";
    }

    function nopressA(){
        LAbilities.style.textShadow = "0.5vh 0.5vh #A8AEC1";
        LAbilities.style.color = "#55527B";
    }

    LAbilities.addEventListener("mousedown", pressA);
    LAbilities.addEventListener("mouseup", nopressA);
    LAbilities.addEventListener("click", habilities);

});