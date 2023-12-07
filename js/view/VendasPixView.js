import { formatarDataBr } from "../utils/utils.js";

export class VendasPix{
    constructor(onPixCadastroClick) {
        this._onPixCadastroClick = onPixCadastroClick;
    }

    onPixCadastroClick(callback){
        this._onPixCadastroClick = callback;
    }

    _getNovaVendaPix(){
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

        const codigoPix = document.querySelector('.pix-codigo');

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
            codigoPix,
            tipo: 'venda',
            tipo2: 'venda-pix'
        }

        this._onPixCadastroClick(obj);
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
            const numeroPix = venda._numeroPix;

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
                Número do pix: ${numeroPix}<br/>
            `

            lista.appendChild(div);
        });

        return lista;
    }
}