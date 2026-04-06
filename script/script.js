document.addEventListener("DOMContentLoaded", function() {
    
    // Seleciona todos os links da navegação
    const navLinks = document.querySelectorAll('.nav-links a');

    // Adiciona o evento de clique para cada link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            
            // Impede que o link '#' faça a página dar o "pulo" para o topo
            if(this.getAttribute('href') === "#") {
                e.preventDefault();
            }
            
            // 1. Remove a classe 'active' de todos os links para limpar a seleção anterior
            navLinks.forEach(item => item.classList.remove('active'));
            
            // 2. Adiciona a classe 'active' apenas no link que foi clicado no momento
            this.classList.add('active');
        });
    });

});