import { arrayObjsVendas, criaArray, criaOption, formatarData, procuraItem, vendaBoletoController, vendaCartaoController, vendaPixController } from "./utils.js";

const botao = document.querySelector('.botao');
const radios = document.querySelector('.radios');

const inputValor = document.querySelector('.sell-valor');
const inputDesconto = document.querySelector('.sell-desconto');

const selectCliente = document.querySelector('.select-cliente');
const selectGerente = document.querySelector('.select-gerente');
const selectLtda = document.querySelector('.select-ltda');
const selectJogo = document.querySelector('.select-jogo');

const data = document.querySelector('.sell-date');
const qtd = document.querySelector('.sell-qtd');

const radioBoleto = document.querySelector('.boleto');
const radioCartao = document.querySelector('.cartao');
const radioPix = document.querySelector('.pix');

const viewBoleto = document.querySelector('.viewBoleto');
const viewCartao = document.querySelector('.viewCartao');
const viewPix = document.querySelector('.viewPix');

viewBoleto.style.display = 'none';
viewCartao.style.display = 'none';
viewPix.style.display = 'none';

const automatizaDataEntrega = () => {
    const dataEntrega = document.querySelector('.sell-entrega');
    const inputDataVenda = document.querySelector('.sell-date').value;
    const transportadora = selectLtda.options[selectLtda.selectedIndex].value;

    if(inputDataVenda && transportadora){
        const dataVenda = new Date(inputDataVenda);
        const entrega = Number(procuraItem(transportadora, 'transportadora').entrega);
        const dataEntregaCalculada = new Date(dataVenda);
        dataEntregaCalculada.setDate(dataEntregaCalculada.getDate() + entrega + 1);
        const dataFormatada = formatarData(dataEntregaCalculada);
        
        dataEntrega.value = dataFormatada;
    }
}

const calcularValores = () => {
    if(qtd.value < 0) qtd.value = 0;
    const nomeJogo = selectJogo.options[selectJogo.selectedIndex].value;
    const quantidade = document.querySelector('.sell-qtd').value;
    const jogo = procuraItem(nomeJogo, 'jogo');
    const valor = Number(jogo.valor);
    let valorTotal = valor * quantidade;

    if(selectJogo && qtd){
        if(jogo.genero === 'Ação'){
            valorTotal += (valorTotal * 0.0225);
            inputValor.value = `R$${valorTotal.toFixed(2)}`;
        }
        if(jogo.genero === 'Aventura'){
            valorTotal += (valorTotal * 0.055);
            inputValor.value = `R$${valorTotal.toFixed(2)}`;
        }
        if(jogo.genero === 'RPG'){
            valorTotal += (valorTotal * 0.0375);
            inputValor.value = `R$${valorTotal.toFixed(2)}`;
        }
        if(jogo.genero === 'Esporte'){
            valorTotal += (valorTotal * 0.075);
            inputValor.value = `R$${valorTotal.toFixed(2)}`;
        }
        if(jogo.genero === 'Corrida'){
            valorTotal += (valorTotal * 0.0725);
            inputValor.value = `R$${valorTotal.toFixed(2)}`;
        }

        const clienteSelecionado = selectCliente.options[selectCliente.selectedIndex].value;
        const cliente = procuraItem(clienteSelecionado, 'cliente');
        if(clienteSelecionado){
            if(cliente.epico){
                valorTotal -= (valorTotal * 0.05);
                inputDesconto.value = `R$${Number(valorTotal).toFixed(2)}`;
            }
        }
    }
}

window.addEventListener("load", () => {
    for(let i = 1; i <= Object.keys(localStorage).length; i++){
        let item = JSON.parse(localStorage.getItem(i));
        const option = criaOption();
        option.textContent = item.nome;

        if(item.tipo === 'cliente') selectCliente.appendChild(option);
        if(item.tipo === 'gerente') selectGerente.appendChild(option);
        if(item.tipo === 'transportadora') selectLtda.appendChild(option);
        if(item.tipo === 'jogo') selectJogo.appendChild(option);
    }
});

botao.addEventListener("click", () => {
    const codigo = document.querySelector('.sell-code').value;
    const cliente = selectCliente.options[selectCliente.selectedIndex].value;
    const gerente = selectGerente.options[selectGerente.selectedIndex].value;
    const dataVenda = document.querySelector('.sell-date').value;
    const transportadora = selectLtda.options[selectLtda.selectedIndex].value;
    const dataEntrega = document.querySelector('.sell-entrega').value;
    const produto = selectJogo.options[selectJogo.selectedIndex].value;
    const quantidade = document.querySelector('.sell-qtd').value;
    const fisico = document.querySelector('.sell-fisico').checked;
    const valorTotal = document.querySelector('.sell-valor').value;
    const desconto = document.querySelector('.sell-desconto').value;
    let desenvolvedora;

    for(let i = 1; i <= Object.keys(localStorage).length; i++){
        const item = JSON.parse(localStorage.getItem(i));

        if(item.tipo === 'jogo' && item.nome === produto){
            desenvolvedora = item.desenvolvedora;
        }
    }
    
    if(radioBoleto.checked){
        const numberoBoleto = document.querySelector('.boleto-numero').value;
        vendaBoletoController.cadastrarVendaBoleto(codigo, cliente, gerente, dataVenda, transportadora, dataEntrega, desenvolvedora, produto,quantidade, fisico, valorTotal, desconto, numberoBoleto);
    }
    if(radioCartao.checked){
        const nomeCartao = document.querySelector('.card-nome').value;
        const bandeira = document.querySelector('.card-bandeira').value;
        const numeroCartao = document.querySelector('.card-number').value;
        const codigoSeguranca = document.querySelector('.card-code').value;
        const metodo = document.querySelector('.credito').checked ? 'credito' : 'debito';
        vendaCartaoController.cadastrarVendaCartao(codigo, cliente, gerente, dataVenda, transportadora, dataEntrega, desenvolvedora, produto, quantidade, fisico, valorTotal, desconto, nomeCartao, bandeira, numeroCartao, codigoSeguranca, metodo);
    }
    if(radioPix.checked){
        const codigoPix = document.querySelector('.codigo-pix').value;
        vendaPixController.cadastrarVendaPix(codigo, cliente, gerente, dataVenda, transportadora, dataEntrega, desenvolvedora, produto, quantidade, fisico, valorTotal, desconto, codigoPix);
    }
});

selectLtda.addEventListener("change", automatizaDataEntrega);
data.addEventListener("change", automatizaDataEntrega);

selectJogo.addEventListener("change", calcularValores);
qtd.addEventListener("change", calcularValores);
selectCliente.addEventListener("change", calcularValores);

radios.addEventListener("click", () => {
    if(radioBoleto.checked){
        viewBoleto.style.display = 'flex';
        viewCartao.style.display = 'none';
        viewPix.style.display = 'none';
    }
    if(radioCartao.checked){
        viewBoleto.style.display = 'none';
        viewCartao.style.display = 'flex';
        viewPix.style.display = 'none';
    }
    if(radioPix.checked){
        viewBoleto.style.display = 'none';
        viewCartao.style.display = 'none';
        viewPix.style.display = 'flex';
    }
});