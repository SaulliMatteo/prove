let noButton = document.getElementById("no");
let siButton = document.getElementById("si");
let inPiuButton = document.getElementById("inPiu")

let testo = document.getElementById("testo");
let testoNascosto = document.getElementById("testoNascosto");

let gattoPlease = document.getElementById("gattoPlease");

noButton.onclick = function(){
    noButton.style.display = "none";
    siButton.style.display = "none";
    let gattoArrabbiato = gattoPlease;
    gattoArrabbiato.src = "immage/gattoArrabbiato.gif";
    testo.textContent = "Lo sapevo che eri ricchiona";
    
}

siButton.onclick = function(){
    noButton.style.display = "none";
    siButton.style.display = "none";
    inPiuButton.style.display = "inline-block";
    let gattoFelice = gattoPlease;
    gattoFelice.src = "immage/kiss.gif";
    testo.textContent = "WOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO";
    testoNascosto.textContent = "(Guarderemo Shamless tutto il giorno)";
}

inPiuButton.onclick = function(){
    inPiuButton.style.display = "none";
    testoNascosto.style.display = "none"
    let gattoTriste = gattoPlease;
    gattoTriste.src = "immage/goma-sad.gif"
    testo.textContent = "Mi dispiace non poterti chiedere quella cosa ma ho un regalo apposta e non voglio buttarlo nel nulla ed e' troppo tardi per spedirlo";
}