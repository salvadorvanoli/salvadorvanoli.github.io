document.addEventListener("DOMContentLoaded", function() {

    // Lógica de funcionamiento de la S = studies.
    
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
        habilitiestitle.classList.add("hide");
        habilitiesbox.classList.add("hide");
    }
    
    instrfunc.addEventListener("click", goback);

    function studies(){
        instr.classList.add("hide");
        instrfunc.classList.remove("hide");
        name.classList.add("hide");
        lastname.classList.add("hide");
        studiesbox.classList.remove("hide");
        littledesc.classList.add("hide");
        studiesTitle.classList.remove("hide");
    }

    function pressS(){
        NStudies.style.textShadow = "0.5vh 0.5vh yellow";
        NStudies.style.color = "orange";
    }

    function nopressS(){
        NStudies.style.textShadow = "0.5vh 0.5vh lightyellow";
        NStudies.style.color = "red";
    }

    NStudies.addEventListener("mousedown", pressS);
    NStudies.addEventListener("mouseup", nopressS);
    NStudies.addEventListener("click", studies);

    // Lógica de funcionamiento de la L = languages.

    let NLanguages = document.getElementById("NLanguages");
    let languagestitle = document.getElementById("languagestitle");
    let languagesbox = document.getElementById("languages");

    function languages(){
        instr.classList.add("hide");
        instrfunc.classList.remove("hide");
        name.classList.add("hide");
        lastname.classList.add("hide");
        littledesc.classList.add("hide");
        languagestitle.classList.remove("hide");
        languagesbox.classList.remove("hide");
    }

    function pressL(){
        NLanguages.style.textShadow = "0.5vh 0.5vh blueviolet";
        NLanguages.style.color = "skyblue";
    }

    function nopressL(){
        NLanguages.style.textShadow = "0.5vh 0.5vh magenta";
        NLanguages.style.color = "blue";
    }

    NLanguages.addEventListener("mousedown", pressL);
    NLanguages.addEventListener("mouseup", nopressL);
    NLanguages.addEventListener("click", languages);

    // Lógica de funcionamiento de la R = work.

    //Completar cuando tenga trabajo.

    // Lógica de funcionamiento de la A = habilities.

    let LhAbilities = document.getElementById("LhAbilities");
    let habilitiestitle = document.getElementById("habilitiestitle");
    let habilitiesbox = document.getElementById("habilities");

    function habilities(){
        instr.classList.add("hide");
        instrfunc.classList.remove("hide");
        name.classList.add("hide");
        lastname.classList.add("hide");
        littledesc.classList.add("hide");
        habilitiestitle.classList.remove("hide");
        habilitiesbox.classList.remove("hide");
    }

    function pressA(){
        LhAbilities.style.textShadow = "0.5vh 0.5vh darkyellow";
        LhAbilities.style.color = "darkorange";
    }

    function nopressA(){
        LhAbilities.style.textShadow = "0.5vh 0.5vh yellow";
        LhAbilities.style.color = "orange";
    }

    LhAbilities.addEventListener("mousedown", pressA);
    LhAbilities.addEventListener("mouseup", nopressA);
    LhAbilities.addEventListener("click", habilities);

});