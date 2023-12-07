import { formatarDataBr } from "../utils/utils.js";

export class VendasCartao{
    constructor(onCartaoCadastroClick) {
        this._onCartaoCadastroClick = onCartaoCadastroClick;
    }

    onCartaoCadastroClick(callback){
        this._onCartaoCadastroClick = callback;
    }

    _getNovaVendaCartao(){
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

        const nomeCartao = document.querySelector('.card-nome').value;
        const bandeira = document.querySelector('.card-bandeira').value;
        const numeroCartao = document.querySelector('.card-number').value;
        const codigoCartao = document.querySelector('.card-code').value;
        const metodo = document.querySelector('.credito').checked ? 'Crédito' : 'Débito';

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
            nomeCartao,
            bandeira,
            numeroCartao,
            codigoCartao,
            metodo,
            tipo: 'venda',
            tipo2: 'venda-cartao'
        }

        this._onCartaoCadastroClick(obj);
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
            const nomeCartao = venda._nomeCartao;
            const bandeira = venda._bandeira;
            const numeroCartao = venda._numeroCartao;
            const codigoCartao = venda._codigoCartao;
            const metodo = (venda._metodo === 'credito' ? 'crédito' : 'débito');

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
                Nome do cartão: ${nomeCartao}<br/>
                Bandeira: ${bandeira}<br/>
                Número do cartão: ${numeroCartao}<br/>
                Código de segurança: ${codigoCartao}<br/>
                Cartão de ${metodo}<br/>
            `

            lista.appendChild(div);
        });

        return lista;
    }
}