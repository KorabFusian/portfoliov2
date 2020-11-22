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
}

if (window.navigator.language === "fr" || window.navigator.language === "en") {
    localize (window.navigator.language)
} else {
    localize ("en")
}