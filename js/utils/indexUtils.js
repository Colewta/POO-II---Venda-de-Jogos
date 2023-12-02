import { ClienteView } from "../view/ClienteView.js";
import { DevsView } from "../view/DevsView.js";
import { GamesView } from "../view/GamesView.js";
import { GerenteView } from "../view/GerenteView.js";
import { TransportadoraView } from "../view/TransportadoraView.js";
import { VendasBoleto } from "../view/VendasBoletoView.js";
import { VendasCartao } from "../view/VendasCartaoView.js";
import { VendasPix } from "../view/VendasPixView.js";
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

        const listaAgora = document.querySelector('.lista');
        limpaView(listaAgora);
        let transportadoras = [];
        const transportadoraView = new TransportadoraView();

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

        const listaAgora = document.querySelector('.lista');
        limpaView(listaAgora);
        let gerentes = [];
        const gerenteView = new GerenteView();

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
    const listaAgora = document.querySelector('.lista');
    limpaView(listaAgora);

    let devs = [];
    const devView = new DevsView();

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

const selectCliente = document.querySelector('.select-clientes');
selectCliente.addEventListener("change", () => {
    const listaAgora = document.querySelector('.lista');
    limpaView(listaAgora);

    let arrayClientes = [];
    const clienteView = new ClienteView();

    if(selectCliente.value === 'todos'){
        for(let i = 1; i <= Object.keys(localStorage).length; i++){
            const item = JSON.parse(localStorage.getItem(i));

            if(item.tipo === 'cliente'){
                arrayClientes.push(item);
            }
        }

        const clienteView = new ClienteView();
        clienteView.atualizaView(arrayClientes, lista);
    }

    if(selectCliente.value === 'epicos'){
        for(let i = 1; i <= Object.keys(localStorage).length; i++){
            const item = JSON.parse(localStorage.getItem(i));

            if(item.tipo === 'cliente' && item.epico){
                arrayClientes.push(item);
            }
        }

        const clienteView = new ClienteView();
        clienteView.atualizaView(arrayClientes, lista);
    }

    if(selectCliente.value === 'nivel'){
        for(let i = 1; i <= Object.keys(localStorage).length; i++){
            const item = JSON.parse(localStorage.getItem(i));

            if(item.tipo === 'cliente'){
                arrayClientes.push(item);
            }
        }

        arrayClientes.sort((a, b) => Number(b.nivel) - Number(a.nivel));
        clienteView.atualizaView(arrayClientes, lista);
    }
});

const selectVendas = document.querySelector('.select-vendas');
selectVendas.addEventListener("change", () => {
    const listaAgora = document.querySelector('.lista');
    limpaView(listaAgora);

    const vendaBoletoView = new VendasBoleto();
    const vendaCartaoView = new VendasCartao();
    const vendaPixView = new VendasPix();

    let arrayBoleto = [], arrayCartao = [], arrayPix = [];
    if(selectVendas.value === 'todos'){
        for(let i = 1; i <= Object.keys(localStorage).length; i++){
            const item = JSON.parse(localStorage.getItem(i));

            if(item.tipo === 'venda-boleto'){
                arrayBoleto.push(item);
            }
            if(item.tipo === 'venda-cartao'){
                arrayCartao.push(item);
            }
            if(item.tipo === 'venda-pix'){
                arrayPix.push(item);
            }
        }
        
        vendaBoletoView.atualizaView(arrayBoleto, lista);
        vendaCartaoView.atualizaView(arrayCartao, lista);
        vendaPixView.atualizaView(arrayPix, lista);
    }
    if(selectVendas.value === 'boleto'){
        for(let i = 1; i <= Object.keys(localStorage).length; i++){
            const item = JSON.parse(localStorage.getItem(i));
            
            if(item.tipo === 'venda-boleto'){
                arrayBoleto.push(item);
            }
        }

        vendaBoletoView.atualizaView(arrayBoleto, lista);
    }
    if(selectVendas.value === 'cartao'){
        for(let i = 1; i <= Object.keys(localStorage).length; i++){
            const item = JSON.parse(localStorage.getItem(i));
        
            if(item.tipo === 'venda-cartao'){
                arrayCartao.push(item);
            }
        }

        vendaCartaoView.atualizaView(arrayCartao, lista);
    }
    if(selectVendas.value === 'pix'){
        for(let i = 1; i <= Object.keys(localStorage).length; i++){
            const item = JSON.parse(localStorage.getItem(i));
        
            if(item.tipo === 'venda-pix'){
                arrayPix.push(item);
            }
        }

        vendaPixView.atualizaView(arrayPix, lista);
    }
});

const selectGames = document.querySelector('.select-games');
selectGames.addEventListener("change", () => {
    const listaAgora = document.querySelector('.lista');
    limpaView(listaAgora);

    const gamesView = new GamesView();

    let arrayGames = [], acao = [], aventura = [], rpg = [], esportes = [], corrida = [];
    if(selectGames.value === 'todos'){
        for(let i = 1; i <= Object.keys(localStorage).length; i++){
            const item = JSON.parse(localStorage.getItem(i));

            if(item.tipo === 'jogo'){
                arrayGames.push(item);
            }
        }

        gamesView.atualizaView(arrayGames, lista);
    }
    if(selectGames.value === 'acao'){
        for(let i = 1; i <= Object.keys(localStorage).length; i++){
            const item = JSON.parse(localStorage.getItem(i));

            if(item.tipo === 'jogo' && item.genero === 'Ação'){
                acao.push(item);
            }
        }

        gamesView.atualizaView(acao, lista);
    }
    if(selectGames.value === 'aventura'){
        for(let i = 1; i <= Object.keys(localStorage).length; i++){
            const item = JSON.parse(localStorage.getItem(i));

            if(item.tipo === 'jogo' && item.genero === 'Aventura'){
                aventura.push(item);
            }
        }

        gamesView.atualizaView(aventura, lista);
    }
    if(selectGames.value === 'rpg'){
        for(let i = 1; i <= Object.keys(localStorage).length; i++){
            const item = JSON.parse(localStorage.getItem(i));

            if(item.tipo === 'jogo' && item.genero === 'RPG'){
                rpg.push(item);
            }
        }

        gamesView.atualizaView(rpg, lista);
    }
    if(selectGames.value === 'esporte'){
        for(let i = 1; i <= Object.keys(localStorage).length; i++){
            const item = JSON.parse(localStorage.getItem(i));

            if(item.tipo === 'jogo' && item.genero === 'Esporte'){
                esportes.push(item);
            }
        }

        gamesView.atualizaView(esportes, lista);
    }
    if(selectGames.value === 'corrida'){
        for(let i = 1; i <= Object.keys(localStorage).length; i++){
            const item = JSON.parse(localStorage.getItem(i));

            if(item.tipo === 'jogo' && item.genero === 'Corrida'){
                corrida.push(item);
            }
        }

        gamesView.atualizaView(corrida, lista);
    }
    if(selectGames.value === 'maisCaros'){
        for(let i = 1; i <= Object.keys(localStorage).length; i++){
            const item = JSON.parse(localStorage.getItem(i));

            if(item.tipo === 'jogo'){
                arrayGames.push(item);
            }
        }

        arrayGames.sort((a, b) => Number(b.valor) - Number(a.valor));
        gamesView.atualizaView(arrayGames, lista);
    }
    if(selectGames.value === 'maisBaratos'){
        for(let i = 1; i <= Object.keys(localStorage).length; i++){
            const item = JSON.parse(localStorage.getItem(i));

            if(item.tipo === 'jogo'){
                arrayGames.push(item);
            }
        }

        arrayGames.sort((a, b) => Number(a.valor) - Number(b.valor));
        gamesView.atualizaView(arrayGames, lista);
    }
    if(selectGames.value === 'avaliacao+'){
        for(let i = 1; i <= Object.keys(localStorage).length; i++){
            const item = JSON.parse(localStorage.getItem(i));

            if(item.tipo === 'jogo'){
                arrayGames.push(item);
            }
        }

        arrayGames.sort((a, b) => Number(b.avaliacao) - Number(a.avaliacao));
        gamesView.atualizaView(arrayGames, lista);
    }
    if(selectGames.value === 'avaliacao-'){
        for(let i = 1; i <= Object.keys(localStorage).length; i++){
            const item = JSON.parse(localStorage.getItem(i));

            if(item.tipo === 'jogo'){
                arrayGames.push(item);
            }
        }

        arrayGames.sort((a, b) => Number(a.avaliacao) - Number(b.avaliacao));
        gamesView.atualizaView(arrayGames, lista);
    }
});