import { formatarDataBr } from "../utils/utils.js";

export class VendasBoleto{
    constructor(onBoletoCadastroClick) {
        this._onBoletoCadastroClick = onBoletoCadastroClick;
    }

    onBoletoCadastroClick(callback){
        this._onBoletoCadastroClick = callback;
    }

    _getNovaVendaBoleto(){
        const codigo = Number(document.querySelector('.sell-code').value);
        const cliente = document.querySelector('.select-cliente').value;
        const gerente = document.querySelector('.select-gerente').value;
        const data = document.querySelector('.sell-date').value;
        const transportadora = document.querySelector('.select-ltda').value;
        const entrega = document.querySelector('.sell-entrega').value;
        const jogo = document.querySelector('.select-jogo').value;
        const quantidade = Number(document.querySelector('.sell-qtd').value);
        const itemFisico = document.querySelector('.sell-fisico').checked;
        const valor = document.querySelector('.sell-valor').value;
        const valorTotal = Number(valor.substring(2).replace(',', '.'));
        const valorDesconto = document.querySelector('.sell-desconto').value;
        const desconto = Number(valorDesconto.substring(2).replace(',', '.'));

        const numeroBoleto = document.querySelector('.boleto-numero').value;

        const obj = {
            codigo,
            cliente,
            gerente,
            data,
            transportadora,
            entrega,
            jogo,
            quantidade,
            itemFisico,
            valorTotal,
            desconto,
            numeroBoleto,
            tipo: 'venda',
            tipo2: 'venda-boleto'
        }

        this._onBoletoCadastroClick(obj);
    }

    _criaDiv(){
        const div = document.createElement('div');
        div.classList.add('div-view');
        return div;
    }

    atualizaView(vendas, lista){
        vendas.forEach(venda => {
            const codigo = venda._codigo;
            const cliente = venda._cliente;
            const gerente = venda._gerente;
            const dataVenda = formatarDataBr(venda._dataVenda);
            const transportadora = venda._transportadora;
            const dataEntrega = formatarDataBr(venda._dataEntrega);
            const produto = venda._produto;
            const quantidade = venda._quantidade;
            const fisico = venda._fisico ? 'Sim' : 'Não';
            const numeroBoleto = venda._numeroBoleto;

            const div = this._criaDiv();
            div.classList.add('subDiv');

            div.innerHTML = `
                Código: ${codigo}<br/>
                Cliente: ${cliente}<br/>
                Gerente: ${gerente}<br/>
                Data da venda: ${dataVenda}<br/>
                Transportadora: ${transportadora}<br/>
                Data de entrega: ${dataEntrega}<br/>
                Produto: ${produto}<br/>
                Quantidade: ${quantidade}<br/>
                Itens físicos?: ${fisico}<br/>
                Número do boleto: ${numeroBoleto}<br/>
            `

            lista.appendChild(div);
        });

        return lista;
    }
}