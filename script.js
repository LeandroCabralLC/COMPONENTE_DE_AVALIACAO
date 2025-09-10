// seleção dos botões de avaliação
const ratings = document.querySelectorAll('.rating');
let selectedRating = 0;

ratings.forEach(button => {
    button.addEventListener('click', () => {
        // Remover a classe 'selected' de todos os botões
        ratings.forEach(b => b.classList.remove('selected'));
        
        // Adicionar a classe 'selected' ao botão clicado
        button.classList.add('selected');
        
        // Armazenar a avaliação escolhida
        selectedRating = button.getAttribute('data-value');
    });
});

//  enviar o feedback
function submitFeedback() {
    if (selectedRating > 0) {
        // Ocultar a tela de feedback
        document.getElementById('feedback-card').style.display = 'none';
        
        // Mostrar a tela de agradecimento
        document.getElementById('thank-you-card').style.display = 'block';
        
        // Atualizar a nota escolhida no texto de agradecimento
        document.getElementById('selected-rating').textContent = selectedRating;
    } else {
        alert('Por favor, selecione uma avaliação antes de enviar!');
    }
}

const el = document.querySelector('.enviar');
el.textContent = 'E N V I A R';