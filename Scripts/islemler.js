function renkDegisim() {

    var renkler = document.getElementById('renkDIV');

    if (renkler.style.backgroundColor == "red") {
        renkler.style.backgroundColor = "blue";
    }
    else if (renkler.style.backgroundColor == "blue") {
        renkler.style.backgroundColor = "yellow";
    }
    else if (renkler.style.backgroundColor == "yellow") {
        renkler.style.backgroundColor = "black";
    }
    else if (renkler.style.backgroundColor == "black") {
        renkler.style.backgroundColor = "red";
    }
}

function hareket() {

    var hareketDIV = document.getElementById('hareketDIV');

    var pos = hareketDIV.style.top;
    var pDeger = parseInt(pos.replace('px', ''));

    pDeger = pDeger + 120;

    var ekranY = window.innerHeight;
    var tagY = pDeger + 100;

    if (ekranY < tagY) {
        hareketDIV.style.top = "0px";
    }
    else {
        hareketDIV.style.top = pDeger + "px";
    }
}

function inputTXT() {

    var txt = document.getElementById('txt');
    txt.value = "Değer";

}


function divTXT() {

    var txt = document.getElementById('txtDIV');
    txt.innerText = "Değer";

}


function divHTML() {

    var txt = document.getElementById('htmlDIV');
    txt.innerHTML = "<button>test</button>";

}