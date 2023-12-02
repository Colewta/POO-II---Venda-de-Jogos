import { DevsView } from "../view/DevsView.js";
import { GerenteView } from "../view/GerenteView.js";
import { TransportadoraView } from "../view/TransportadoraView.js";
import { arrayObjsValorTotal, arrayObjsVendas, criaArray, limpaView } from "./utils.js";

const selectFiltro = document.querySelector('.select-filtro');

const viewDevs = document.querySelector('.view-subFiltro__dev');
const viewJogos = document.querySelector('.view-subFiltro__jogos');
const viewClientes = document.querySelector('.view-subFiltro__cliente');
const viewVendas = document.querySelector('.view-subFiltro__vendas');

const lista = document.querySelector('.lista');

viewDevs.style.display = 'none';
viewJogos.style.display = 'none';
viewClientes.style.display = 'none';
viewVendas.style.display = 'none';

selectFiltro.addEventListener("change", () => {
    if(selectFiltro.value === 'desenvolvedora'){
        viewDevs.style.display = 'flex';
        viewJogos.style.display = 'none';
        viewClientes.style.display = 'none';
        viewVendas.style.display = 'none';
    }
    if(selectFiltro.value === 'jogo'){
        viewDevs.style.display = 'none';
        viewJogos.style.display = 'flex';
        viewClientes.style.display = 'none';
        viewVendas.style.display = 'none';
    }
    if(selectFiltro.value === 'cliente'){
        viewDevs.style.display = 'none';
        viewJogos.style.display = 'none';
        viewClientes.style.display = 'flex';
        viewVendas.style.display = 'none';
    }
    if(selectFiltro.value === 'venda'){
        viewDevs.style.display = 'none';
        viewJogos.style.display = 'none';
        viewClientes.style.display = 'none';
        viewVendas.style.display = 'flex';
    }
    if(selectFiltro.value === 'transportadora'){
        viewDevs.style.display = 'none';
        viewJogos.style.display = 'none';
        viewClientes.style.display = 'none';
        viewVendas.style.display = 'none';

        let transportadoras = [];
        const transportadoraView = new TransportadoraView();
        if(lista.children.length > 0) limpaView(lista);

        for(let i = 1; i <= Object.keys(localStorage).length; i++){
            const item = JSON.parse(localStorage.getItem(i));
            if(item.tipo === 'transportadora'){ 
                transportadoras.push(item);
            }
        }
        transportadoraView.atualizaView(transportadoras, lista);
    }
    if(selectFiltro.value === 'gerente'){
        viewDevs.style.display = 'none';
        viewJogos.style.display = 'none';
        viewClientes.style.display = 'none';
        viewVendas.style.display = 'none';

        let gerentes = [];
        const gerenteView = new GerenteView();
        console.log(lista.children);
        limpaView(lista);

        for(let i = 1; i <= Object.keys(localStorage).length; i++){
            const item = JSON.parse(localStorage.getItem(i));
            if(item.tipo === 'gerente'){ 
                gerentes.push(item);
            }
        }
        gerenteView.atualizaView(gerentes, lista);
    }
});

const selectDev = document.querySelector('.select-dev');
selectDev.addEventListener("change", () => {
    let devs = [];
    const devView = new DevsView();
    if(lista.children.length > 0) limpaView(lista);

    if(selectDev.value === 'todos'){
        for(let i = 1; i <= Object.keys(localStorage).length; i++){
            const item = JSON.parse(localStorage.getItem(i));
            if(item.tipo === 'desenvolvedora'){ 
                devs.push(item);
            }
        }
        devView.atualizaView(0, 0, devs, lista);
    }

    if(selectDev.value === 'maisVendas'){
        let arrayObjs = [];
        const array = criaArray();

        for(let i = 0; i < array.length; i++){
            for(let j = 1; j <= Object.keys(localStorage).length; j++){
                const item = JSON.parse(localStorage.getItem(j));

                if(item.desenvolvedora === array[i].nome){
                    arrayObjs.push(item);
                    break;
                }
            }
        }

        arrayObjs.forEach((objeto, i) => {
            let arrayFinal = [];
            for(let i = 1; i <= Object.keys(localStorage).length; i++){
                const item = JSON.parse(localStorage.getItem(i));

                if(item.tipo === 'desenvolvedora' && item.nome === objeto.desenvolvedora){
                    arrayFinal.push(item);
                }
            }
            devView.atualizaView(arrayObjsVendas[i].vendas, arrayObjsVendas[i].valorTotal, arrayFinal, lista);
        });

        for(let i = 0; i < arrayObjsVendas.length + 1; i++){
            arrayObjsVendas.pop();
            arrayObjsValorTotal.pop();
        }
    }

    if(selectDev.value === 'maisLucro'){
        let arrayObjs = [];
        const array = criaArray();

        for(let i = 0; i < array.length; i++){
            for(let j = 1; j <= Object.keys(localStorage).length; j++){
                const item = JSON.parse(localStorage.getItem(j));

                if(item.desenvolvedora === array[i].nome){
                    arrayObjs.push(item);
                    break;
                }
            }
        }

        arrayObjs.forEach((objeto, i) => {
            let arrayFinal = [];
            for(let i = 1; i <= Object.keys(localStorage).length; i++){
                const item = JSON.parse(localStorage.getItem(i));

                if(item.tipo === 'desenvolvedora' && item.nome === objeto.desenvolvedora){
                    arrayFinal.push(item);
                }
            }
            devView.atualizaView(arrayObjsValorTotal[i].vendas, arrayObjsValorTotal[i].valorTotal, arrayFinal, lista);
        });

        for(let i = 0; i < arrayObjsValorTotal.length + 1; i++){
            arrayObjsVendas.pop();
            arrayObjsValorTotal.pop();
        }
    }
});