document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;

    const emailBody = `Nom: ${name}\nEmail: ${email}\nService: ${service}\nMessage: ${message}`;

    // Placeholder pour envoyer l'email
    console.log(emailBody);
    alert('Votre message a été envoyé avec succès !');
});

document.getElementById('sendChat').addEventListener('click', function() {
    const chatInput = document.getElementById('chatInput');
    const chatWindow = document.getElementById('chatWindow');

    if (chatInput.value.trim() !== '') {
        const newMessage = document.createElement('div');
        newMessage.textContent = chatInput.value;
        chatWindow.appendChild(newMessage);
        chatInput.value = '';
    }
});
