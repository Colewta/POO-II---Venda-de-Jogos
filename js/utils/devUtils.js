import { devController } from "./utils.js";

const botao = document.querySelector('.botao');

botao.addEventListener("click", event => {
    event.preventDefault();

    const codigo = document.querySelector('.dev-code').value;
    const nome = document.querySelector('.dev-name').value;
    const cnpj = document.querySelector('.dev-cnpj').value;
    const email = document.querySelector('.dev-email').value;
    const site = document.querySelector('.dev-site').value;
    const endereco = document.querySelector('.dev-end').value;
    const redeSocial = document.querySelector('.dev-rede').value;

    devController.cadastrarDev(codigo, nome, cnpj, email, site, endereco, redeSocial);
});