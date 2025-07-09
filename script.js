function loadCard() {
    const cardone = document.getElementById("card-1");
    const cardtwo = document.getElementById("card-2");
    const buttons = document.querySelectorAll(".buttons");
    cardtwo.style.display = "block";
    cardone.style.display = "none";
} 
function checkButton(){
    let buttonActive = false;

    buttons.forEach(submit => {
        if (submit.classList.contains("active")) {
            buttonActive = true;
            return; 
        }});

        if (!buttonActive) {
            alert("Select an option");
            return;
        }
        else{
            loadCard(); 
        }
}

const buttons = document.querySelectorAll(".buttons");
const text = document.getElementById("titlecard-2");
buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(bnt => bnt.classList.remove("active")); 
    button.classList.add("active");

    const mensage = button.getAttribute("data-mensage");
    text.innerHTML = mensage;
  });
});
