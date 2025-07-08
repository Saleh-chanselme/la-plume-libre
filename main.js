/* dark mood  */
/* document.getElementById("toggle-theme").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
}); */
/* end dark mood  */
//document.addEventListener("DOMContentLoaded", () => {
const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Stop the form from refreshing the page

    const firstName = document.getElementById("first-name").value.trim();
    const lastName = document.getElementById("last-name").value.trim();
    const fullName = `${firstName} ${lastName}`.trim();

    // Create or update the message container
    let messageBox = document.getElementById("confirmation-message");
    if (!messageBox) {
        messageBox = document.createElement("p");
        messageBox.id = "confirmation-message";
        messageBox.style.marginTop = "20px";
        messageBox.style.padding = "15px";
        messageBox.style.backgroundColor = "#e6ffe6";
        messageBox.style.border = "1px solid #00aa00";
        messageBox.style.color = "#006600";
        messageBox.style.fontWeight = "bold";
        messageBox.style.borderRadius = "8px";
        messageBox.textContent = `Hello ${fullName}, we received your message and we will treat your demande within 24h.`;
        form.appendChild(messageBox);
    }


    // Optional: Clear form after submit
    form.reset();
});

