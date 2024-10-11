
 // Espera o DOM carregar antes de executar o código
document.addEventListener("DOMContentLoaded", () => {
    // Declara variáveis no início
    let menuItems = document.querySelectorAll('.list .pokedev');
    let cards = document.querySelectorAll('.card-pokedev');

    // Adiciona evento de clique a cada item do menu
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            let selectedId = item.id; // Obtém o ID do item clicado

            // Mostra apenas o card correspondente e oculta os outros
            cards.forEach(card => {
                if (card.id === `card-${selectedId}`) {
                    card.classList.add('active'); // Adiciona a classe active para mostrar o card
                } else {
                    card.classList.remove('active'); // Remove a classe active para ocultar
                }
            });

            // Atualiza a classe do menu para mostrar qual item está ativo
            menuItems.forEach(menuItem => {
                menuItem.classList.remove('active'); // Remove a classe active de todos os itens do menu
            });
            item.classList.add('active'); // Adiciona a classe active ao item clicado
        });
    });

    // Adiciona evento de mouse sobre os itens do menu
    menuItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            let selectedId = item.id; // Obtém o ID do item ao passar o mouse

            // Mostra apenas o card correspondente ao passar o mouse
            cards.forEach(card => {
                if (card.id === `card-${selectedId}`) {
                    card.classList.add('active'); // Adiciona a classe active para mostrar o card
                } else {
                    card.classList.remove('active'); // Remove a classe active para ocultar
                }
            });
        });

        // Remove a seleção do card ao sair do mouse
        item.addEventListener('mouseleave', () => {
            // Verifica qual item do menu está ativo
            let activeItem = document.querySelector('.list .pokedev.active');
            if (activeItem) {
                let activeId = activeItem.id; // Obtém o ID do item ativo

                // Mostra apenas o card correspondente ao item ativo
                cards.forEach(card => {
                    if (card.id === `card-${activeId}`) {
                        card.classList.add('active'); // Adiciona a classe active para mostrar o card
                    } else {
                        card.classList.remove('active'); // Remove a classe active para ocultar
                    }
                });
            }
        });
    });
});


