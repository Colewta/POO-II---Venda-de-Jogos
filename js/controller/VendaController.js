import { FactoryIndexamento } from "../model/FactoryIndexamento.js";
import { VendaBoletoModel } from "../model/VendaBoletoModel.js";
import { VendaCartaoModel } from "../model/VendaCartaoModel.js";
import { VendaPixModel } from "../model/VendaPixModel.js";
import { VendaModel } from "../model/VendaModel.js";
import { VendaView } from "../view/VendaView.js";
import { VendasBoleto } from "../view/VendasBoletoView.js";
import { VendasCartao } from "../view/VendasCartaoView.js";
import { VendasPix } from "../view/VendasPixView.js";

export class VendaController{
    constructor() {
        this._botaoVenda = document.querySelector('.botao-venda');
        this._radios = document.querySelector('.radios');
        this._selectJogos = document.querySelector('.select-jogo');
        this._selectCliente = document.querySelector('.select-cliente');
        this._quantidade = document.querySelector('.sell-qtd');
        this._dataVenda = document.querySelector('.sell-date');
        this._ltda = document.querySelector('.select-ltda');

        this._boletoView = new VendasBoleto(this._cadastrarVendaBoleto.bind(this));
        this._cartaoView = new VendasCartao(this._cadastrarVendaCartao.bind(this));
        this._pixView = new VendasPix(this._cadastrarVendaPix.bind(this));

        this._inputBoleto = document.querySelector('.boleto');
        this._inputCartao = document.querySelector('.cartao');
        this._inputPix = document.querySelector('.pix');

        this._vendaView = new VendaView();
        this._vendaModel = new VendaModel();

        this._inicializar();
    }

    _inicializar() {
        this._vendaView._arrumaFormulario();
        this._radios.addEventListener("change", this._vendaView._atualizaFormulario);
        this._selectJogos.addEventListener("change", this._vendaModel._atualizaValores);
        this._selectCliente.addEventListener("change", this._vendaModel._atualizaValores);
        this._quantidade.addEventListener("change", this._vendaModel._atualizaValores);
        this._dataVenda.addEventListener("change", this._vendaView._calculaDataEntrega);
        this._ltda.addEventListener("change", this._vendaView._calculaDataEntrega);

        this._botaoVenda.addEventListener("click", () => {
            const cliente = document.querySelector('.select-cliente').value;
            const gerente = document.querySelector('.select-gerente').value;
            const jogo = document.querySelector('.select-jogo').value;
            const valorDesconto = document.querySelector('.sell-desconto').value;
            const total = Number(valorDesconto.substring(2).replace(',', '.'));
            const quantidade = Number(document.querySelector('.sell-qtd').value);
            let desenvolvedora;

            for(let i = 1; i <= Object.keys(localStorage).length; i++){
                const item = JSON.parse(localStorage.getItem(i));

                if(item._tipo === 'jogo' && item._nome === jogo){
                    desenvolvedora = item._desenvolvedora;
                }
            }

            for(let i = 1; i <= Object.keys(localStorage).length; i++){
                const item = JSON.parse(localStorage.getItem(i));

                if(item._tipo === 'desenvolvedora' && item._nome === desenvolvedora){
                    desenvolvedora = item._nome;
                }
            }

            if(this._inputBoleto.checked){
                this._boletoView._getNovaVendaBoleto();
            }
            else if(this._inputCartao.checked){
                this._cartaoView._getNovaVendaCartao();
            }
            else if(this._inputPix.checked){
                this._pixView._getNovaVendaPix();
            }

            this._vendaModel._realizaVenda(total, cliente, gerente, jogo, quantidade, desenvolvedora);
        });
    }

    _cadastrarVendaBoleto(venda){
        const novaVendaBoleto = new VendaBoletoModel(
            venda.codigo,
            venda.cliente,
            venda.gerente,
            venda.data,
            venda.transportadora,
            venda.entrega,
            venda.jogo,
            venda.quantidade,
            venda.itemFisico,
            venda.valorTotal,
            venda.desconto,
            venda.numeroBoleto,
            venda.tipo,
            venda.tipo2
        );

        new FactoryIndexamento(novaVendaBoleto);
    }

    _cadastrarVendaCartao(venda){
        const novaVendaCartao = new VendaCartaoModel(
            venda.codigo,
            venda.cliente,
            venda.gerente,
            venda.data,
            venda.transportadora,
            venda.entrega,
            venda.jogo,
            venda.quantidade,
            venda.itemFisico,
            venda.valorTotal,
            venda.desconto,
            venda.nomeCartao,
            venda.bandeira,
            venda.numeroCartao,
            venda.codigoCartao,
            venda.metodo,
            venda.tipo,
            venda.tipo2
        );

        new FactoryIndexamento(novaVendaCartao);
    }

    _cadastrarVendaPix(venda){
        const novaVendaPix = new VendaPixModel(
            venda.codigo,
            venda.cliente,
            venda.gerente,
            venda.data,
            venda.transportadora,
            venda.entrega,
            venda.jogo,
            venda.quantidade,
            venda.itemFisico,
            venda.valorTotal,
            venda.desconto,
            venda.codigoPix,
            venda.tipo,
            venda.tipo2
        );

        new FactoryIndexamento(novaVendaPix);
    }
}

new VendaController();