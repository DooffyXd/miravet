document.addEventListener('DOMContentLoaded', () => {

    // --- FUNÇÃO: Formulário para WhatsApp ---
    const contactForm = document.getElementById('whatsapp-form');
    
    // Insira seu número de WhatsApp com código do país (sem + ou 00)
    const phoneNumber = '5521973625764'; 

    // Garante que o formulário exista antes de adicionar o listener
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Impede o envio padrão do formulário
            event.preventDefault();

            // Pega os valores dos campos do formulário
            const name = document.getElementById('form-name').value;
            const phone = document.getElementById('form-phone').value;
            const whatsapp = document.getElementById('form-whatsapp').value;
            const message = document.getElementById('form-message').value;

            // Monta a mensagem formatada
            let whatsappMessage = `Olá! Gostaria de fazer um contato.

*Nome:* ${name}
*Telefone:* ${phone}`;

            if (whatsapp) {
                whatsappMessage += `
*WhatsApp:* ${whatsapp}`;
            }
            
            whatsappMessage += `

*Mensagem:*
${message}
`;

            // Codifica a mensagem para ser usada em uma URL
            const encodedMessage = encodeURIComponent(whatsappMessage);

            // Cria o link final do WhatsApp
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

            // Abre o link em uma nova aba
            window.open(whatsappUrl, '_blank');
        });
    }

    // A função de animação foi removida para garantir que o site sempre seja visível.

});
