document.addEventListener('DOMContentLoaded', () => {

    // Animação de "fade-in" para elementos ao rolar a página
    // --------------------------------------------------------
    // Cria um 'observador' que vai vigiar os elementos
    const observer = new IntersectionObserver((entries) => {
        // Para cada 'entrada' (elemento vigiado)
        entries.forEach(entry => {
            // Se o elemento está agora visível na tela
            if (entry.isIntersecting) {
                // Adiciona a classe 'visible' para ativar a animação CSS
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1 // A animação começa quando 10% do elemento está visível
    });

    // Seleciona todos os elementos que devem ser animados
    const elementsToAnimate = document.querySelectorAll('.fade-in');
    
    // Pede ao observador para vigiar cada um desses elementos
    elementsToAnimate.forEach(el => observer.observe(el));

});