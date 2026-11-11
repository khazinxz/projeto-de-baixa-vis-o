let tamanhoFonteAtual = 18;
let espacamentoAtivo = false;

// 1. Alternar modo de Alto Contraste
function alternarContraste() {
    document.body.classList.toggle('alto-contraste');
    const btn = document.getElementById('btn-contraste');
    const ativo = document.body.classList.contains('alto-contraste');
    btn.setAttribute('aria-pressed', ativo);
}

// 2. Alternar Amplitude de Tela Visível (Largura Total 100%)
function alternarAmplitude() {
    document.body.classList.toggle('tela-ampla');
    const btn = document.getElementById('btn-amplitude');
    const ativo = document.body.classList.contains('tela-ampla');
    btn.setAttribute('aria-pressed', ativo);
    btn.textContent = ativo ? '🖥️ Reduzir Largura da Tela' : '🖥️ Ampliar Largura da Tela';
}

// 3. Aumentar ou diminuir o tamanho do texto
function alterarFonte(direcao) {
    tamanhoFonteAtual += direcao * 2;
    if (tamanhoFonteAtual < 14) tamanhoFonteAtual = 14;
    if (tamanhoFonteAtual > 32) tamanhoFonteAtual = 32;
    document.documentElement.style.fontSize = tamanhoFonteAtual + 'px';
}

// 4. Aumentar espaçamento entre letras e linhas
function alternarEspacamento() {
    espacamentoAtivo = !espacamentoAtivo;
    document.body.classList.toggle('espacamento-amplo', espacamentoAtivo);
}

// 5. Ler toda a página em voz alta
function lerPagina() {
    pararLeitura();
    const texto = document.getElementById('conteudo-principal').innerText;
    falarTexto(texto);
}

// 6. Ler apenas uma seção específica
function lerSecao(idSecao) {
    pararLeitura();
    const secao = document.getElementById(idSecao);
    if (secao) {
        falarTexto(secao.innerText);
    }
}

// 7. Síntese de voz nativa
function falarTexto(texto) {
    if ('speechSynthesis' in window) {
        const fala = new SpeechSynthesisUtterance(texto);
        fala.lang = 'pt-BR';
        fala.rate = 1.0;
        window.speechSynthesis.speak(fala);
    } else {
        alert('Seu navegador não suporta leitura em voz alta.');
    }
}

// 8. Parar leitura
function pararLeitura() {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
    }
}

// 9. Restaurar padrão
function resetarAcessibilidade() {
    pararLeitura();
    tamanhoFonteAtual = 18;
    espacamentoAtivo = false;
    document.documentElement.style.fontSize = '18px';
    document.body.classList.remove('alto-contraste', 'espacamento-amplo', 'tela-ampla');
    document.getElementById('btn-contraste').setAttribute('aria-pressed', 'false');
    const btnAmp = document.getElementById('btn-amplitude');
    btnAmp.setAttribute('aria-pressed', 'false');
    btnAmp.textContent = '🖥️ Ampliar Largura da Tela';
}
