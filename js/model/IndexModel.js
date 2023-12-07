export class IndexModel{
    constructor(){}

    _procuraItem(tipo){
        let array = [];

        for(let i = 1; i <= Object.keys(localStorage).length; i++){
            const item = JSON.parse(localStorage.getItem(i));

            if(item._tipo === tipo){
                array.push(item);
            }
        }

        return array;
    }

    _modeloFiltrosDevs(subFiltro){
        const array = this._procuraItem('desenvolvedora');

        if(subFiltro === 'todos'){
            return array;
        }
        if(subFiltro === 'maisVendas'){
            array.sort((a, b) => b._numeroVendas - a._numeroVendas);
            return array;
        }
        if(subFiltro === 'maisLucro'){
            array.sort((a, b) => b._vendasTotais - a._vendasTotais);
            return array;
        }
    }

    _modeloFiltrosClientes(subFiltro){
        const array = this._procuraItem('cliente');

        if(subFiltro === 'todos'){
            return array;
        }
        if(subFiltro === 'epicos'){
            let subArray = array.filter(obj => obj._clienteEpico);
            console.log(subArray);
            return subArray;
        }
        if(subFiltro === 'nivel'){
            array.sort((a, b) => b._nivel - a._nivel);
            return array;
        }
    }

    _modeloFiltrosJogos(subFiltro){
        const array = this._procuraItem('jogo');
        let subArray = [];

        if(subFiltro === 'todos'){
            return array;
        }
        if(subFiltro === 'acao'){
            subArray = array.filter(obj => obj._genero === 'Ação');
            return subArray;
        }
        if(subFiltro === 'aventura'){
            subArray = array.filter(obj => obj._genero === 'Aventura');
            return subArray;
        }
        if(subFiltro === 'rpg'){
            subArray = array.filter(obj => obj._genero === 'RPG');
            return subArray;
        }
        if(subFiltro === 'esporte'){
            subArray = array.filter(obj => obj._genero === 'Esporte');
            return subArray;
        }
        if(subFiltro === 'corrida'){
            subArray = array.filter(obj => obj._genero === 'Corrida');
            return subArray;
        }
        if(subFiltro === 'maisCaros'){
            array.sort((a, b) => b._valor - a._valor);
            return array;
        }
        if(subFiltro === 'maisBaratos'){
            array.sort((a, b) => a._valor - b._valor);
            return array;
        }
        if(subFiltro === 'avaliacao+'){
            array.sort((a, b) => b._avaliacao - a._avaliacao);
            return array;
        }
        if(subFiltro === 'avaliacao-'){
            array.sort((a, b) => a._avaliacao - b._avaliacao);
            return array;
        }
    }

    _modeloFiltrosVendas(subFiltro){
        const array = this._procuraItem('venda');
        let subArray = [];

        if(subFiltro === 'todos'){
            return array;
        }
        if(subFiltro === 'boleto'){
            subArray = array.filter(obj => obj._tipo2 === 'venda-boleto');
            return subArray;
        }
        if(subFiltro === 'cartao'){
            subArray = array.filter(obj => obj._tipo2 === 'venda-cartao');
            return subArray;
        }
        if(subFiltro === 'pix'){
            subArray = array.filter(obj => obj._tipo2 === 'venda-pix');
            return subArray;
        }
    }

    _modeloFiltrosLtdas(){
        const array = this._procuraItem('transportadora');
        array.sort((a, b) => a._codigo - b._codigo);
        return array;
    }

    _modeloFiltroGerentes(){
        const array = this._procuraItem('gerente');
        array.sort((a, b) => a._codigo - b._codigo);
        return array;
    }
}