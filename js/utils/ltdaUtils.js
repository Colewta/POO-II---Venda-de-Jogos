import { ltdaController } from "./utils.js";

const botao = document.querySelector('.botao');

botao.addEventListener("click", () => {
    const codigo = document.querySelector('.ltda-code').value;
    const nome = document.querySelector('.ltda-name').value;
    const cnpj = document.querySelector('.ltda-cnpj').value;
    const email = document.querySelector('.ltda-email').value;
    const telefone = document.querySelector('.ltda-phone').value;
    const endereco = document.querySelector('.ltda-end').value;
    const entrega = document.querySelector('.ltda-time').value;

    ltdaController.cadastrarTransportadora(codigo, nome, cnpj, email, telefone, endereco, entrega);
});