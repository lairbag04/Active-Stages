function loadCard() {
    const cardone = document.getElementById("card-1");
    const cardtwo = document.getElementById("card-2");
    cardtwo.style.display = "block";
    cardone.style.display = "none";
}

const buttons = document.querySelectorAll(".buttons");
const text = document.getElementById("titlecard-2");
buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(bnt => bnt.classList.remove("active")); 
    button.classList.add("active");
    
    button.classList.remove("animate__animated", "animate__pulse");
    button.classList.add("animate__animated", "animate__pulse");

    const mensage = button.getAttribute("data-mensage");
    text.innerHTML = mensage;
  });
});
