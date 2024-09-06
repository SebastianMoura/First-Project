// Seleciona o contêiner e o input de cor
const container = document.querySelector('.container');
const colorInput = document.querySelector('.button');

// Define a cor de fundo padrão
const defaultColor = '#fff';
container.style.backgroundColor = defaultColor;

// Função para mudar a cor de fundo
function onChangeBg() {
    container.style.backgroundColor = colorInput.value;
}

// Adiciona um ouvinte de eventos ao input de cor
colorInput.addEventListener('input', onChangeBg);