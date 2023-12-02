import { criaOption, gameController } from "./utils.js";

const botao = document.querySelector('.botao');
const select = document.querySelector('.select-dev');
const selectGenero = document.querySelector('.select-genero');

botao.addEventListener("click", event => {
    const codigo = document.querySelector('.game-code').value;
    const nome = document.querySelector('.game-name').value;
    const descricao = document.querySelector('.game-descricao').value;
    const desenvolvedora = select.options[select.selectedIndex].value;
    const lancamento = document.querySelector('.game-date').value;
    const valor = document.querySelector('.game-value').value;
    const requisitos = document.querySelector('.game-minset').value;
    const avaliacao = document.querySelector('.game-nota').value;
    const genero = selectGenero.options[selectGenero.selectedIndex].value;
    const disponivel = true;

    gameController.cadastrarGame(codigo, nome, descricao, desenvolvedora, lancamento, valor, requisitos, avaliacao, genero, disponivel);
});

window.addEventListener("load", () => {
    for(let i = 1; i <= Object.keys(localStorage).length; i++){
        const dev = JSON.parse(localStorage.getItem(i));
        if(dev.tipo === 'desenvolvedora'){
            const option = criaOption();
            option.textContent = dev.nome;
            select.appendChild(option);
        }
    }
});