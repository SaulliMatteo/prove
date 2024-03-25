let listElement = document.querySelectorAll(".elementi")
let appleBtn = document.querySelectorAll(".appleBtn")
const androidBtn = document.getElementById("imgAndroid")
const txtInserimento = document.getElementById("txtInserimento")

//per aggiungere a tutti i bottoni l'eventi
function addEvntList(elemento){
    elemento.forEach(element => {
        element.addEventListener("click", event => {
            // Ottieni il genitore dell'elemento figlio
            const parentElement = event.target.parentNode;
            // Rimuovi l'elemento genitore
            parentElement.parentNode.removeChild(parentElement);
        })
    })
}

//aggiunta eventList per aggiungere gli elementi
androidBtn.addEventListener("click", () => {
    createElement()
})
txtInserimento.addEventListener("keyup", event =>{
    if(event.key == "Enter"){
        createElement()
    }
})

function createElement(){
    //creazione elemento li
    const newElement = document.createElement("li")

    //creazione checkBox
    const newCheckBox = document.createElement("input")

    //creazione elemento img
    const appleImg = document.createElement("img")

    //aggiunta immmagine all'elemento img
    appleImg.src = "img/apple.svg"
    appleImg.classList = "appleBtn"

    //aggiunta caratteristiche a newCheckBox
    newCheckBox.type = "checkbox"

    //aggiunta caratteristiche all'elemento li
    const text = document.createTextNode(" - " + document.getElementById("txtInserimento").value)
    newElement.classList = "elementi"

    //aggiunta all'elemento il testo
    newElement.prepend(appleImg)
    newElement.append(newCheckBox);
    newElement.insertBefore(text, newCheckBox)

     // pulisce il campo di input
    txtInserimento.value = "";

    //aggiunta dell'elemento li al DOM
    document.getElementById("lista").append(newElement)
    
    //aggiurnamento delle nodeList
    listElement = document.querySelectorAll(".elementi")
    appleBtn = document.querySelectorAll(".appleBtn")

    //aggiunta dell'evento ad appleBtn
    addEvntList(appleBtn)
}