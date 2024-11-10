(function() {
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
})();

window.onload = function() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        let isFormValid = form.checkValidity();

        document.querySelectorAll('.error-message').forEach(msg => msg.style.display = 'none');
        form.querySelectorAll(':invalid').forEach((element) => {
            element.nextElementSibling.style.display = 'block';
        });

        if (isFormValid) {
            emailjs.sendForm('contact_service', 'contact_form', this) // Replace with your Service ID and Template ID 
                .then(() => {
                    document.getElementById('status').innerText = 'Message envoyé avec succès !';
                    form.reset();
                }, (error) => {
                    document.getElementById('status').innerText = 'Échec de l\'envoi du message. Veuillez réessayer.';
                    console.error('Erreur:', error);
                });
        }
    });
}
