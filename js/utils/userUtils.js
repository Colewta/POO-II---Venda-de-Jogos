import { clienteController, gerenteController } from "./utils.js";

const viewCliente = document.querySelector('.viewCliente');
const viewGerente = document.querySelector('.viewGerente');
const radios = document.querySelector('.radios');

viewCliente.style.display = 'none';
viewGerente.style.display = 'none';

const radioCliente = document.querySelector('.cliente');
const radioGerente = document.querySelector('.gerente');

const nivel = document.querySelector('.user-level');

const botao = document.querySelector('.botao');

nivel.addEventListener("change", () => {
    if(nivel.value >= 5) nivel.value = 5;
    if(nivel.value <= 0) nivel.value = 0;
});

radios.addEventListener("click", () => {
    if(radioCliente.checked){
        viewGerente.style.display = 'none';
        viewCliente.style.display = 'flex';
    }
    if(radioGerente.checked){
        viewGerente.style.display = 'flex';
        viewCliente.style.display = 'none';
    }
});

botao.addEventListener("click", () => {
    const codigo = document.querySelector('.user-code').value;
    const nome = document.querySelector('.user-name').value;
    const cpf = document.querySelector('.user-cpf').value;
    const rg = document.querySelector('.user-rg').value;
    const dataNasc = document.querySelector('.user-date').value;
    const endereco = document.querySelector('.user-end').value;
    const cep = document.querySelector('.user-cep').value;
    const email = document.querySelector('.user-email').value;

    if(radioCliente.checked){
        const cadastro = document.querySelector('.user-cadastro').value;
        const nivel = document.querySelector('.user-level').value;
        const clienteEpico = document.querySelector('.user-epic').checked;
        
        clienteController.cadastroCliente(codigo, nome, cpf, rg, dataNasc, endereco, cep, email, cadastro, nivel, clienteEpico);
    }
    if(radioGerente.checked){
        const salario = document.querySelector('.user-salario').value;
        const pis = document.querySelector('.user-pis').value;
        const admissao = document.querySelector('.user-admissao').value;
        
        gerenteController.cadastrarGerente(codigo, nome, cpf, rg, dataNasc, endereco, cep, email, salario, pis, admissao);
    }
});