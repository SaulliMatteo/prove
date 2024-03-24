function changeColorGreen(){
    document.body.style.backgroundColor = "rgb(29, 190, 29)"
}

function reset(){
    document.body.style.backgroundColor = "rgb(255, 255, 255)"
}

function changeColorBlue(){
    document.body.style.backgroundColor = "rgb(31, 61, 194)"
}

function changeColorRed(){
    document.body.style.backgroundColor = "rgb(190, 29, 29)"
}

function randomColor(){
    console.log("ciao")
    let r = String(Math.floor(Math.random()*255));
    let g = String(Math.floor(Math.random()*255));
    let b = String(Math.floor(Math.random()*255));
    let color = "rgb(" + r + "," + g + "," + b + ")";
    console.log(color)
    document.body.style.backgroundColor = color
}