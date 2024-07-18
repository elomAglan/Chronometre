// Variables
var sp, btn_start, btn_stop, btn_reset, t, ms, s, mn, h;

// Initialisation
window.onload = function() {
    sp = document.getElementsByTagName('span');
    btn_start = document.getElementById('start');
    btn_stop = document.getElementById('stop');
    btn_reset = document.getElementById('reset');
    t = null;
    ms = 0;
    s = 0;
    mn = 0;
    h = 0;
}

// Mettre en place le compteur
function update_chrono() {
    ms += 1;
    if (ms == 10) {
        ms = 0;
        s += 1;
    }
    if (s == 60) {
        s = 0;
        mn += 1;
    }
    if (mn == 60) {
        mn = 0;
        h += 1;
    }

    // Insertion des valeurs dans les spans
    sp[0].innerHTML = h + "h";
    sp[1].innerHTML = mn + "min";
    sp[2].innerHTML = s + "s";
    sp[3].innerHTML = ms + "ms";
}

// Fonction du bouton start
function start() {
    // Cette ligne de code exécute la fonction update_chrono() toutes les 100 ms
    if (!t) {
        t = setInterval(update_chrono, 100);
        btn_start.disabled = true;
    }
}

// Fonction du bouton stop
function stop() {
    clearInterval(t); // Suppression de l'interval t
    t = null;
    btn_start.disabled = false;
}

// Fonction du bouton reset
function reset() {
    clearInterval(t);
    t = null;
    btn_start.disabled = false;
    ms = 0;
    s = 0;
    mn = 0;
    h = 0;

    // Insérer ces nouvelles valeurs dans les spans
    sp[0].innerHTML = h + "h";
    sp[1].innerHTML = mn + "min";
    sp[2].innerHTML = s + "s";
    sp[3].innerHTML = ms + "ms";
}
