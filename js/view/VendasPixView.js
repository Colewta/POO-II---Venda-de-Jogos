import { criaDiv, formatarDataBr } from "../utils/utils.js";

export class VendasPix{
    atualizaView(vendas, lista){
        vendas.forEach(venda => {
            const codigo = venda.codigo;
            const cliente = venda.cliente;
            const gerente = venda.gerente;
            const dataVenda = formatarDataBr(venda.dataVenda);
            const transportadora = venda.transportadora;
            const dataEntrega = formatarDataBr(venda.dataEntrega);
            const produto = venda.produto;
            const quantidade = venda.quantidade;
            const fisico = venda.fisico ? 'Sim' : 'Não';
            const numeroPix = venda.numeroPix;

            const div = criaDiv();
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