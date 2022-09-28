// Ativar menu de navegação
const links = document.querySelectorAll('.header-menu a');

links.forEach(ativarLinks);

function ativarLinks(link) {
    const url = location.href;
    const href = link.href;

    if(url.includes(href)){
       link.classList.add('ativo');
    }
}

// Ativar itens do orçamento
const parametros = new URLSearchParams(location.search);

parametros.forEach(ativarProduto);

function ativarProduto(parametro) {
    const elemento = document.getElementById(parametro);
    if(elemento) {
        elemento.checked = true;
    }
}

// Perguntas Frequentes
const perguntas = document.querySelectorAll('.perguntas button');

perguntas.forEach(eventosPergunta);

function eventosPergunta(pergunta) {
    pergunta.addEventListener('click', (event) => {
        const pergunta = event.currentTarget;
        const controls = pergunta.getAttribute('aria-controls');
        const resposta = document.getElementById(controls);

        resposta.classList.toggle('ativa');
        const ativa = resposta.classList.contains('ativa');
        pergunta.setAttribute('aria-expanded', ativa);
    });
}



