document.addEventListener("DOMContentLoaded", function () {

    // ===============================
    // LÓGICA DE NAVEGAÇÃO
    // ===============================
    const navLinks = document.querySelectorAll('.nav-links a, .nav-links-mobile a');

    const atualizarLinkAtivo = function () {
        const hashAtual = window.location.hash || '#impactos-ambientais';

        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            link.classList.toggle('active', href === hashAtual);
        });
    };

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            atualizarLinkAtivo();

            if (menuLateral && menuOverlay && this.closest('.nav-links-mobile')) {
                menuLateral.classList.remove('ativo');
                menuOverlay.classList.remove('ativo');
                document.body.style.overflow = '';
            }
        });
    });

    atualizarLinkAtivo();
    window.addEventListener('hashchange', atualizarLinkAtivo);

    // ===============================
    // LÓGICA DO MENU LATERAL (MODAL)
    // ===============================
    const btnAbrirMenu = document.querySelector('.menu-hamburguer');
    const btnFecharMenu = document.querySelector('.fechar-menu');
    const menuLateral = document.querySelector('.menu-lateral');
    const menuOverlay = document.querySelector('.menu-overlay');

    if (btnAbrirMenu) {
        btnAbrirMenu.addEventListener('click', function () {
            if (!menuLateral || !menuOverlay) {
                return;
            }

            menuLateral.classList.add('ativo');
            menuOverlay.classList.add('ativo');
            document.body.style.overflow = 'hidden';
        });
    }

    const fecharMenu = function () {
        if (!menuLateral || !menuOverlay) {
            return;
        }

        menuLateral.classList.remove('ativo');
        menuOverlay.classList.remove('ativo');
        document.body.style.overflow = '';
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
        btnAbrirChat.addEventListener('click', function (e) {
            e.preventDefault();
            modalChat.classList.toggle('ativo');
        });

        btnFecharChat.addEventListener('click', function () {
            modalChat.classList.remove('ativo');
        });
    }

    // ===============================
    // LÓGICA DO CARROSSEL DE PRODUTOS
    // ===============================
    if (document.querySelector('.swiper-produtos')) {
        const swiper = new Swiper('.swiper-produtos', {
            slidesPerView: 'auto',
            spaceBetween: 36,
            navigation: {
                nextEl: '.swiper-btn-next',
                prevEl: '.swiper-btn-prev',
            },
            breakpoints: {
                320: {
                    spaceBetween: 20
                },
                768: {
                    spaceBetween: 30
                },
                1200: {
                    spaceBetween: 36
                }
            }
        });
    }

    // ===============================
    // LÓGICA DOS BOTÕES TOGGLE
    // ===============================
    const botoesToggle = document.querySelectorAll('.btn-toggle');

    botoesToggle.forEach(btn => {
        btn.addEventListener('click', function () {
            botoesToggle.forEach(b => b.classList.remove('ativo'));
            this.classList.add('ativo');
        });
    });

});