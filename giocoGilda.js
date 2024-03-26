//prendiamo gli elementi finishLine e player dal DOM
const finishLine = document.getElementById("finishLine");
const player = document.getElementById("player");

//creiamo le hitBox dei due elementi
const finishLine_hitBox = document.createElement("div")
const player_hitBox = document.createElement("div")

//inizio player
//prendiamo le caratteristiche dell'oggetto player
const player_height = player.offsetHeight;
const player_width = player.offsetWidth;
let playerX = player.offsetLeft
let playerY = player.offsetTop
//aggiungiamo le caratteristiche all'hitBox dell'oggetto player
player_hitBox.style.height = player_height + "px";
player_hitBox.style.width = player_width + "px";
player_hitBox.style.position = "absolute"
player_hitBox.style.top = playerY + "px"
player_hitBox.style.left = playerX + "px"
player_hitBox.style.border = "1px solid black"
//aggoingiamo l'elemento player_hitBox al DOM
document.body.appendChild(player_hitBox)
//fine player

//inizio traguardo
//prendiamo le caratteristiche dell'oggetto finishLine
const finishLine_height = finishLine.offsetHeight;
const finishLine_width = finishLine.offsetWidth;
//non si aggiornano automaticamente ma dobbiamo aggiornare la pagina
let finishLineX = finishLine.offsetLeft;
let finishLineY = finishLine.offsetTop;
//aggiungiamo le caratteristiche all'hitbox dell'oggetto finishLine
finishLine_hitBox.style.height = finishLine_height + "px";
finishLine_hitBox.style.width = finishLine_width + "px";
finishLine_hitBox.style.position = "absolute"
finishLine_hitBox.style.top = finishLineY + "px"
finishLine_hitBox.style.left = finishLineX + "px"
finishLine_hitBox.style.border = "1px solid black"
//aggiungiamo l'elemento finishLine_hitBox al DOM
document.body.appendChild(finishLine_hitBox);
//fine traguardo

//movementSpeed del player
const movementSpeed = 10;

//per far muovere il player
document.addEventListener("keydown", event => {

    event.preventDefault();

    switch(event.key){
        case "a":
            playerX -= movementSpeed;
            break
        case "d":
            playerX += movementSpeed;
            break
        case "w":
            playerY -= movementSpeed
            break
        case "s":
            playerY += movementSpeed
            break
    }
    player.style.left = playerX + "px"
    player.style.top = playerY + "px"
    player_hitBox.style.top = playerY + "px"
    player_hitBox.style.left = playerX + "px"

    //per controllare se le due hitBox si incontrano
    let collisione = checkCollision(player_hitBox, finishLine_hitBox)
    //in caso di collisione
    if(collisione){
        const newElement = document.createElement("h1")
        newElement.style.textAlign = "center"
        newElement.style.fontSize = "6em"
        newElement.textContent = "BRAVAAAAAA, HAI VINTOOOO!!!!💕❤😘💕"

        player.textContent = "😍"

        document.body.appendChild(newElement)
    }
})

//per spostare l'hitBox in caso di cambiamento di grandezza della scheda
window.addEventListener("resize", () => {
    finishLineX = finishLine.offsetLeft;
    finishLineY = finishLine.offsetTop;
    finishLine_hitBox.style.top = finishLineY + "px"
    finishLine_hitBox.style.left = finishLineX + "px"
})

//funzione per controllare se le due hitBox si toccano
function checkCollision(hitbox1, hitbox2) {
    const rect1 = hitbox1.getBoundingClientRect();
    const rect2 = hitbox2.getBoundingClientRect();
    return !(rect1.right < rect2.left || 
             rect1.left > rect2.right || 
             rect1.bottom < rect2.top || 
             rect1.top > rect2.bottom);
}