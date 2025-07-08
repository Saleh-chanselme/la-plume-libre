const mobileMenu = document.querySelector('.mobile-menu');
const hamburger = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close-btn');

const handleMobileMenu = () => {
    mobileMenu.classList.toggle('visible');
};

hamburger.addEventListener('click', handleMobileMenu);

closeBtn.addEventListener('click', handleMobileMenu);

const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Stop the form from refreshing the page

    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const fullName = `${firstName} ${lastName}`.trim();

    // Create or update the message container
    let messageBox = document.getElementById('confirmation-message');
    if (!messageBox) {
        messageBox = document.createElement('p');
        messageBox.id = 'confirmation-message';
        messageBox.style.marginTop = '20px';
        messageBox.style.padding = '15px';
        messageBox.style.backgroundColor = '#e6ffe6';
        messageBox.style.border = '1px solid #00aa00';
        messageBox.style.color = '#006600';
        messageBox.style.fontWeight = 'bold';
        messageBox.style.borderRadius = '8px';
        messageBox.textContent = `Bonjour ${fullName}, nous avons reçu votre message et nous traiterons votre demande dans les 24h.`;
        form.appendChild(messageBox);
    }

    form.reset();
});
