import { ClienteController } from "../controller/ClienteController.js";
import { DevController } from "../controller/DevController.js";
import { GameController } from "../controller/GameController.js";
import { GerenteController } from "../controller/GerenteController.js";
import { LtdaController } from "../controller/LtdaController.js";
import { UsuarioController } from "../controller/UsuarioController.js";
import { VendaBoletoController } from "../controller/VendaBoletoController.js";
import { VendaCartaoController } from "../controller/VendaCartaoController.js";
import { VendaPixController } from "../controller/VendaPixController.js";

export const clienteController = new ClienteController();
export const devController = new DevController();
export const gameController = new GameController();
export const gerenteController = new GerenteController();
export const ltdaController = new LtdaController();
export const usuarioController = new UsuarioController();
export const vendaBoletoController = new VendaBoletoController();
export const vendaCartaoController = new VendaCartaoController();
export const vendaPixController = new VendaPixController();

export const indexaNav = (obj, key = Object.keys(localStorage).length + 1) => {
    obj.forEach(objeto => {
        localStorage.setItem(key, JSON.stringify(objeto));
        key++;
    });
}

export const criaOption = () => {
    const option = document.createElement('option');
    option.classList.add('option-dev');
    return option;
}

export const procuraItem = (nome, tipo) => {
    for(let i = 1; i <= Object.keys(localStorage).length; i++){
        const item = JSON.parse(localStorage.getItem(i));
        if(item.tipo === tipo && item.nome === nome){
            return item;
        }
    }
}

export const formatarData = data => {
    const ano = data.getFullYear();
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const dia = String(data.getDate()).padStart(2, '0');
    return `${ano}-${mes}-${dia}`;
}

export const formatarDataBr = dataString => {
    const data = new Date(dataString);

    const dia = String(data.getDate() + 1).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();

    const dataFormatada = `${dia}/${mes}/${ano}`;
  
    return dataFormatada;
  }

export const criaDiv = () => {
    const div = document.createElement('div');
    div.classList.add('div-view');
    return div;
}

export const limpaView = lista => {
    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }
}

export let arrayObjsVendas = [];
export let arrayObjsValorTotal = [];

export const criaArray = () => {
    for(let i = 1; i <= Object.keys(localStorage).length; i++){
        const item = JSON.parse(localStorage.getItem(i));
        
        if(item.tipo2){
            if(arrayObjsVendas.length === 0){
                criaNovoObjArray(item);
            }
            else if(arrayObjsVendas.length > 0){
                let encontrou;
                for(let j = 0; j < arrayObjsVendas.length - 1; j++){
                    if(item.desenvolvedora === arrayObjsVendas[j].nome){
                        arrayObjsVendas[j].vendas++;
                        arrayObjsVendas[j].valorTotal += Number(item.desconto.substring(2));
                        encontrou = true;
                    }
                }
                if(!encontrou) criaNovoObjArray(item);
            }
        }
    }

    return arrayObjsVendas;
}

const criaNovoObjArray = item => {
    const obj = {
        nome: item.desenvolvedora,
        vendas: 1,
        valorTotal: Number(item.desconto.substring(2))
    }
    arrayObjsVendas.push(obj);
    arrayObjsVendas.sort((a, b) => b.vendas - a.vendas);

    arrayObjsValorTotal = arrayObjsVendas
    arrayObjsValorTotal.sort((a, b) => b.valorTotal - a.valorTotal);
}