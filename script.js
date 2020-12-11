var select = document.getElementById('m');
var salvar = document.getElementById('salvar')
var cancelar = document.getElementById('cancelar')
var parar = document.getElementById('parar')
var valor;
var audio = document.getElementById('audio');
var check = document.getElementById('check');
var body = document.body;
audio.loop = true;
audio.currentTime = 0;

check.onclick = function() {
    if (check.checked) { 
        body.style.backgroundColor = "#494949";
    }
    else {
        body.style.backgroundColor = "#dbdbdb";
    }
}

function Zero(x) {
    return x = x < 10 ? (`0${x}`) : x;
}
function Value() {
    for (i = 0; i < 60; i++) {
        select.innerHTML += '<option value="' + Zero(i) + '">' + Zero(i) + '</option>'
    }
}
function Relogio() {
    var data = new Date();
    var h = Zero(data.getHours());
    var m = Zero(data.getMinutes());
    var s = Zero(data.getSeconds());

    var view = document.getElementById('relogio');
    view.innerHTML = h + ':' + m + ':' + s;

    Alarm(m, s);

    setTimeout(Relogio, 1000);
}
salvar.onclick = function () {
    salvar.style.display = 'none';
    cancelar.style.display = '';
    valor = select.value;
    select.disabled = true;
    select.style.backgroundColor = "#494949";
}
parar.onclick = function () {
    audio.pause();
    parar.style.display = 'none'
    cancelar.style.display = ''
    salvar.style.display = 'none';
    Relogio();
}
cancelar.onclick = function () {
    cancelar.style.display = 'none'
    salvar.style.display = '';
    valor = '';
    select.disabled = false;
    select.style.backgroundColor = "#f5f5f5";
}
function Alarm(x, y) {
    if ((valor == x) && (00 == y)) {
        audio.play();
        parar.style.display = '';
        cancelar.style.display = 'none';
    }
}
Relogio();
Value();

