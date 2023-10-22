// Add this JavaScript code to your existing script file
const showModalButton = document.querySelectorAll(".btn-4");
const modal = document.getElementById("itemModal");
const closeModalButton = document.getElementById("closeModal");

showModalButton.forEach(button => {
    button.addEventListener("click", () => {
        modal.style.display = "block";
    });
});

closeModalButton.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
