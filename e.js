const myBox = document.getElementById("myBox");
let y = 0;
let x = 0;
let movementSpeed = 10;

const winBox = document.getElementById("winBox");
winBox.style.top = 600 + "px"
winBox.style.left = 1300 + "px"

let winBoxBorder_bottom = 700 + "px";
let winBoxBorder_top = winBox.style.top ;
let winBoxBorder_left = winBox.style.left;
let winBoxBorder_right = 1400 + "px";

let myBoxBorder_bottom;
let myBoxBorder_top;
let myBoxBorder_left;
let myBoxBorder_right;
let ciao;
document.addEventListener("keydown", event => {

    if(event.key == "a" || event.key == "s" || event.key == "d" || event.key == "w"){
        event.preventDefault();

    switch(event.key){
        case "w":
            y -= movementSpeed;
            break;
        
        case "s":
            y += movementSpeed;
            break;
            
        case "a":
            x -= movementSpeed;
            break;
        
        case "d":
            x += movementSpeed;
            break;
    }

    myBox.style.top = y + "px"
    myBox.style.left = x + "px"

    myBoxBorder_bottom = y + 100 + "px";
    myBoxBorder_top = y + "px";
    myBoxBorder_left = x + "px";
    myBoxBorder_right = x + 100 + "px";
    

    if((myBoxBorder_bottom >= winBoxBorder_top && myBoxBorder_top <= winBoxBorder_bottom) && (myBoxBorder_right >= winBoxBorder_left && myBoxBorder_left <= winBoxBorder_right)){
        document.body.removeChild(winBox);
        document.body.removeChild(myBox);
        
        const newElement = document.createElement("a")
        newElement.textContent = "cicca per avere il tuo premio"
        newElement.style.textDecoration = "none"
        newElement.style.textAlign = "center"
        newElement.style.width = 100 + "%"
        newElement.style.height = 100 + "%"
        newElement.style.borderColor = "red"
        newElement.href = "premio.html"

        console.log(newElement)
        
        document.body.append(newElement);
    }

    }
    
})