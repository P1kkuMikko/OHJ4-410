function kotiin() {
    document.getElementById("home").style.display = "block";
    document.getElementById("version1").style.display = "none";
    document.getElementById("version2").style.display = "none";
    document.getElementById("kaverilista").innerHTML = "";
    document.getElementById("kaverilista2").innerHTML = "";
}

function showVersion1() { 
    document.getElementById("home").style.display = "none";
    document.getElementById("version1").style.display = "block";
    document.getElementById("kaverilista").style.display = "block";
}

function showVersion2() {
    document.getElementById("home").style.display = "none";
    document.getElementById("version2").style.display = "block";
    document.getElementById("kaverilista").style.display = "block";
}

function Aloita() {
    var kaverit = [];
    var promptMessage = "Anna kaverin nimi";

    while (kaverit.length < 10) {
        var nimi = prompt(promptMessage);
        if (nimi === null || nimi === "") {
            promptMessage = "Nimi ei voi olla tyhjä. Anna kaverin nimi uudelleen:";
            continue;
        }
        kaverit.push(nimi);
        promptMessage = "Anna seuraava kaverin nimi";
    }

    var kaverilista = document.getElementById("kaverilista");
    kaverilista.innerHTML = "<ol>" + kaverit.map(function(nimi) {
        return "<li>" + nimi + "</li>";
    }).join('') + "</ol>";
}

function lisaaKaveri() {
    var input = document.getElementById('kaveri2');
    var list = document.getElementById('kaverilista2');

    var li = document.createElement('li');
    li.textContent = input.value;
    list.appendChild(li);

    input.value = '';
}

function jarjestaKaverit() {
    var list = document.getElementById('kaverilista2');
    var items = Array.from(list.getElementsByTagName('li'));

    items.sort(function(a, b) {
        return a.textContent.localeCompare(b.textContent);
    });

    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }

    items.forEach(function(item) {
        list.appendChild(item);
    });
}

function poistaKaveri() {
    var input = document.getElementById('kaveri2');
    var list = document.getElementById('kaverilista2');

    for (var i = 0; i < list.children.length; i++) {
        if (list.children[i].textContent === input.value) {
            list.removeChild(list.children[i]);
            break;
        }
    }

    input.value = '';
}
