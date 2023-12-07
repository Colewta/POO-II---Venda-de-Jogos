import { IndexModel } from "../model/IndexModel.js";
import { ClienteView } from "../view/ClienteView.js";
import { DevsView } from "../view/DevsView.js";
import { IndexView } from "../view/IndexView.js";
import { GerenteView } from "../view/GerenteView.js";
import { GamesView } from "../view/GamesView.js";
import { TransportadoraView } from "../view/TransportadoraView.js";
import { VendasBoleto } from "../view/VendasBoletoView.js";
import { VendasCartao } from "../view/VendasCartaoView.js";
import { VendasPix } from "../view/VendasPixView.js";

export class IndexController{
    constructor(){
        this._lista = document.querySelector('.lista');
        this._selectDevs = document.querySelector('.select-dev');
        this._selectJogos = document.querySelector('.select-games');
        this._selectClientes = document.querySelector('.select-clientes');
        this._selectVendas = document.querySelector('.select-vendas');

        this._devView = new DevsView();
        this._clienteView = new ClienteView();
        this._gerenteView = new GerenteView();
        this._gamesView = new GamesView();
        this._ltdaView = new TransportadoraView();
        this._vendaBoletoView = new VendasBoleto();
        this._vendaCartaoView = new VendasCartao();
        this._vendaPixView = new VendasPix();

        this._indexModel = new IndexModel();
        this._indexView = new IndexView();

        this._selectFiltro = document.querySelector('.select-filtro');

        this._inicializar();
    }

    _inicializar(){
        this._indexView._arrumaLayout();

        this._selectFiltro.addEventListener("change", () => {
            this._indexView._atualizaLayout.bind(this._indexView)();

            if(this._selectFiltro.value === 'transportadora'){
                this._indexView._limpaView();
                const arrayLtdas = this._indexModel._modeloFiltrosLtdas();
                this._ltdaView.atualizaView(arrayLtdas, this._lista);
            }
            if(this._selectFiltro.value === 'gerente'){
                this._indexView._limpaView();
                const arrayGerentes = this._indexModel._modeloFiltroGerentes();
                this._gerenteView.atualizaView(arrayGerentes, this._lista);
            }
        });

        this._selectDevs.addEventListener("change", () => {
            this._indexView._limpaView();
            const arrayDevs = this._indexModel._modeloFiltrosDevs(this._selectDevs.value);
            this._devView.atualizaView(arrayDevs, this._lista);
        });

        this._selectClientes.addEventListener("change", () => {
            this._indexView._limpaView();
            const arrayClientes = this._indexModel._modeloFiltrosClientes(this._selectClientes.value);
            this._clienteView.atualizaView(arrayClientes, this._lista);
        });

        this._selectJogos.addEventListener("change", () => {
            this._indexView._limpaView();
            const arrayJogos = this._indexModel._modeloFiltrosJogos(this._selectJogos.value);
            this._gamesView._atualizaView(arrayJogos, this._lista);
        });

        this._selectVendas.addEventListener("change", () => {
            this._indexView._limpaView();
            const arrayVendas = this._indexModel._modeloFiltrosVendas(this._selectVendas.value);
            const subArrayBoleto = [], subArrayCartao = [], subArrayPix = [];

            arrayVendas.forEach(venda => {
                if(venda._tipo2 === 'venda-boleto') subArrayBoleto.push(venda);
                if(venda._tipo2 === 'venda-cartao') subArrayCartao.push(venda);
                if(venda._tipo2 === 'venda-pix') subArrayPix.push(venda);
            });

            this._vendaBoletoView.atualizaView(subArrayBoleto, this._lista);
            this._vendaCartaoView.atualizaView(subArrayCartao, this._lista);
            this._vendaPixView.atualizaView(subArrayPix, this._lista);
        });
    }
}

new IndexController();