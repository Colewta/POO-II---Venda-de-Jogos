export class IndexView{
    constructor(){
        this._viewDevs = document.querySelector('.view-subFiltro__devs');
        this._viewJogos = document.querySelector('.view-subFiltro__jogos');
        this._viewClientes = document.querySelector('.view-subFiltro__clientes');
        this._viewVendas = document.querySelector('.view-subFiltro__vendas');
    }

    _limpaView(){
        const lista = document.querySelector('.lista');
    
        while(lista.firstChild){
            lista.removeChild(lista.firstChild);
        }
    }

    _arrumaLayout(){
        this._viewDevs.style.display = 'none';
        this._viewJogos.style.display = 'none';
        this._viewClientes.style.display = 'none';
        this._viewVendas.style.display = 'none';
    }

    _atualizaLayout(){
        const selectFiltro = document.querySelector('.select-filtro');

        const selectDevs = document.querySelector('.view-subFiltro__devs');
        const selectJogos = document.querySelector('.view-subFiltro__jogos');
        const selectClientes = document.querySelector('.view-subFiltro__clientes');
        const selectVendas = document.querySelector('.view-subFiltro__vendas')

        if(selectFiltro.value === 'desenvolvedora'){
            selectDevs.style.display = 'flex';
            selectJogos.style.display = 'none';
            selectClientes.style.display = 'none';
            selectVendas.style.display = 'none';
        }
        if(selectFiltro.value === 'jogo'){
            selectDevs.style.display = 'none';
            selectJogos.style.display = 'flex';
            selectClientes.style.display = 'none';
            selectVendas.style.display = 'none';
        }
        if(selectFiltro.value === 'cliente'){
            selectDevs.style.display = 'none';
            selectJogos.style.display = 'none';
            selectClientes.style.display = 'flex';
            selectVendas.style.display = 'none';
        }
        if(selectFiltro.value === 'venda'){
            selectDevs.style.display = 'none';
            selectJogos.style.display = 'none';
            selectClientes.style.display = 'none';
            selectVendas.style.display = 'flex';
        }
        if(selectFiltro.value === 'transportadora'){
            selectDevs.style.display = 'none';
            selectJogos.style.display = 'none';
            selectClientes.style.display = 'none';
            selectVendas.style.display = 'none';

            this._limpaView();
        }
        if(selectFiltro.value === 'gerente'){
            selectDevs.style.display = 'none';
            selectJogos.style.display = 'none';
            selectClientes.style.display = 'none';
            selectVendas.style.display = 'none';

            this._limpaView();
        }
    }
}