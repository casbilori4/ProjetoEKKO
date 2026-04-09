document.addEventListener("DOMContentLoaded", function () {

    // ===============================
    // LÓGICA DE NAVEGAÇÃO
    // ===============================
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            // Impede que o link '#' faça a página dar o "pulo" para o topo
            if (this.getAttribute('href') === "#") {
                e.preventDefault();
            }

            // Remove a classe 'active' de todos os links
            navLinks.forEach(item => item.classList.remove('active'));

            // Adiciona a classe 'active' apenas no link clicado
            this.classList.add('active');
        });
    });

    // ===============================
    // LÓGICA DO MENU LATERAL (MODAL)
    // ===============================
    const btnAbrirMenu = document.querySelector('.menu-hamburguer');
    const btnFecharMenu = document.querySelector('.fechar-menu');
    const menuLateral = document.querySelector('.menu-lateral');
    const menuOverlay = document.querySelector('.menu-overlay');

    if (btnAbrirMenu) {
        btnAbrirMenu.addEventListener('click', function () {
            menuLateral.classList.add('ativo');
            menuOverlay.classList.add('ativo');
            document.body.style.overflow = 'hidden'; // Trava o scroll do fundo
        });
    }

    const fecharMenu = function () {
        menuLateral.classList.remove('ativo');
        menuOverlay.classList.remove('ativo');
        document.body.style.overflow = ''; // Libera o scroll
    };

    if (btnFecharMenu) {
        btnFecharMenu.addEventListener('click', fecharMenu);
    }

    if (menuOverlay) {
        menuOverlay.addEventListener('click', fecharMenu);
    }

    // ===============================
    // LÓGICA DO MODAL DE CHAT
    // ===============================
    const btnAbrirChat = document.getElementById('btnAbrirChat');
    const btnFecharChat = document.getElementById('btnFecharChat');
    const modalChat = document.getElementById('modalChat');

    if (btnAbrirChat && modalChat && btnFecharChat) {
        // Abre ou fecha o chat no clique do botão flutuante
        btnAbrirChat.addEventListener('click', function (e) {
            e.preventDefault();
            modalChat.classList.toggle('ativo');
        });

        // Fecha o chat no ícone de fechar (X)
        btnFecharChat.addEventListener('click', function () {
            modalChat.classList.remove('ativo');
        });
    }
});