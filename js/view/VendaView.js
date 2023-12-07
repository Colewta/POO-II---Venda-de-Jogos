import { FactoryOption } from "../model/FactoryOption.js";
import { adicionarDias } from "../utils/utils.js";

export class VendaView{
    _arrumaFormulario(){
        const viewBoleto = document.querySelector('.viewBoleto');
        const viewCartao = document.querySelector('.viewCartao');
        const viewPix = document.querySelector('.viewPix');

        viewBoleto.style.display = 'none';
        viewCartao.style.display = 'none';
        viewPix.style.display = 'none';

        const selectCliente = document.querySelector('.select-cliente');
        const selectGerente = document.querySelector('.select-gerente');
        const selectLtda = document.querySelector('.select-ltda');
        const selectJogo = document.querySelector('.select-jogo');

        new FactoryOption('cliente', selectCliente);
        new FactoryOption('gerente', selectGerente);
        new FactoryOption('transportadora', selectLtda);
        new FactoryOption('jogo', selectJogo);
    }

    _atualizaFormulario(){
        const viewBoleto = document.querySelector('.viewBoleto');
        const viewCartao = document.querySelector('.viewCartao');
        const viewPix = document.querySelector('.viewPix');

        const boleto = document.querySelector('.boleto');
        const cartao = document.querySelector('.cartao');
        const pix = document.querySelector('.pix');

        if(boleto.checked){
            viewBoleto.style.display = 'flex';
            viewCartao.style.display = 'none';
            viewPix.style.display = 'none';
            
        }
        else if(cartao.checked){
            viewBoleto.style.display = 'none';
            viewCartao.style.display = 'flex';
            viewPix.style.display = 'none';
        }
        else if(pix.checked){
            viewBoleto.style.display = 'none';
            viewCartao.style.display = 'none';
            viewPix.style.display = 'flex';
        }
    }

    _calculaDataEntrega(){
        let dataVenda = document.querySelector('.sell-date');
        let ltda = document.querySelector('.select-ltda');
        let dataEntrega = document.querySelector('.sell-entrega');

        if(dataVenda.value !== '' && ltda.value !== ''){
            for(let i = 1; i <= Object.keys(localStorage).length; i++){
                const item = JSON.parse(localStorage.getItem(i));

                if(item._tipo === 'transportadora' && item._nome === ltda.value){
                    const diasEntrega = item._entrega;
                    dataEntrega.value = adicionarDias(dataVenda.value, diasEntrega);
                }
            }
        }
    }
}