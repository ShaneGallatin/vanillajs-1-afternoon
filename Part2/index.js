const cardId = document.getElementById("idInput");
const colorId = document.getElementById("colorInput"); 

function setCard(){
    const card = document.getElementById(idInput.value)
    card.style.color = colorInput.value;
}