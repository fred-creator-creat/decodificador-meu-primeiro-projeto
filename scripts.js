const inserirTexto = document.getElementById('inserirTexto');
const botaoEncriptar = document.getElementById('botaoEncriptar');
const botaoDesencriptar = document.getElementById('botaoDesencriptar');
const botaoCopiar = document.getElementById('botaoCopiar');
const garoto = document.getElementById('garoto');
const rightInfo = document.getElementById('rightInfo');
const mensagemFinal = document.getElementById('mensagemFinal');
const right = document.getElementById('right');

// Definição dos pares de substituição
let remplazar = [
    ['e', 'enter'],
    ['o', 'ober'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['u', 'ufat'],
];

// Função para atualizar a exibição da mensagem final
const replace = (novoValor) => {
    mensagemFinal.innerHTML = novoValor;

    garoto.classList.add('oculto');
    inserirTexto.value = '';
    rightInfo.style.display = 'none';
    botaoCopiar.style.display = 'block';
    right.classList.add('ajustar');
    mensagemFinal.classList.add('ajustar');
};

// Função para resetar o estado da página
const reset = () => {
    mensagemFinal.innerHTML = '';
    garoto.classList.remove('oculto');
    rightInfo.style.display = 'block';
    botaoCopiar.style.display = 'none';
    right.classList.remove('ajustar');
    mensagemFinal.classList.remove('ajustar');
    inserirTexto.focus();
};

// Função para encriptar o texto
const encriptar = (texto) => {
    for (let [original, substituto] of remplazar) {
        texto = texto.replaceAll(original, substituto);
    }
    return texto;
};

// Função para desencriptar o texto
const desencriptar = (texto) => {
    for (let [original, substituto] of remplazar) {
        texto = texto.replaceAll(substituto, original);
    }
    return texto;
};

// Função de validação de texto
const validarTexto = (texto) => {
    const regex = /^[a-z\s]+$/; // Permite apenas letras minúsculas e espaços
    return regex.test(texto);
};

// Evento de clique para encriptar
botaoEncriptar.addEventListener('click', () => {
    const texto = inserirTexto.value;
    if (validarTexto(texto)) {
        replace(encriptar(texto));
    } else {
        alert('Por favor, use apenas letras minúsculas e sem caracteres especiais');
        reset();
    }
});

// Evento de clique para desencriptar
botaoDesencriptar.addEventListener('click', () => {
    const texto = inserirTexto.value;
    if (validarTexto(texto)) {
        replace(desencriptar(texto));
    } else {
        alert('Por favor, use apenas letras minúsculas e sem caracteres especiais');
        reset();
    }
});

// Evento de clique para copiar
botaoCopiar.addEventListener('click', () => {
    const texto = mensagemFinal.innerHTML;
    navigator.clipboard.writeText(texto).then(() => {
        alert('Texto Copiado!');
        reset();
    });
});