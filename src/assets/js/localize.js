function localize (language)
{
        let lang = ':lang(' + language + ')';
        let hide = '[lang]:not(' + lang + ')';
        document.querySelectorAll(hide).forEach(function (node) {
          node.style.display = 'none';
        });
        let show = '[lang]' + lang;
        document.querySelectorAll(show).forEach(function (node) {
          node.style.display = 'unset';
        });
        if(language === "fr") {
            document.getElementById("buttonFR").style.backgroundColor = "#89A"
            document.getElementById("buttonFR").style.color = "#000"
            document.getElementById("buttonEN").style.backgroundColor = "#FFF"
            document.getElementById("buttonEN").style.color = "#000"
        }   
        if(language === "en") {
            document.getElementById("buttonFR").style.backgroundColor = "#FFF"
            document.getElementById("buttonFR").style.color = "#000"
            document.getElementById("buttonEN").style.backgroundColor = "#89A"
            document.getElementById("buttonEN").style.color = "#000"
        }
            
}

if (window.navigator.language === "fr" || window.navigator.language === "en") {
    localize (window.navigator.language)
} else {
    localize ("en")
}