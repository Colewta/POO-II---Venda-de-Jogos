export class VendaModel{
    constructor(){}

    _atualizaValores(){
        let preco = 0;
        const taxaAcao = 0.0225, taxaAventura = 0.055, taxaRPG = 0.0375, taxaEsporte = 0.075, taxaCorrida = 0.0725;

        const valorTotal = document.querySelector('.sell-valor');
        const desconto = document.querySelector('.sell-desconto');
        
        let cliente = document.querySelector('.select-cliente');
        let jogo = document.querySelector('.select-jogo');
        let quantidade = document.querySelector('.sell-qtd');

        if(quantidade.value < 0) document.querySelector('.sell-qtd').value = 0;

        if(jogo.value !== '' && quantidade.value !== '0'){
            for(let i = 1; i <= Object.keys(localStorage).length; i++){
                const item = JSON.parse(localStorage.getItem(i));

                if(item._tipo === 'jogo' && item._nome === jogo.value){
                    if(item._genero === 'Ação') preco = (item._valor * Number(quantidade.value))  + (item._valor * taxaAcao);
                    if(item._genero === 'Aventura') preco = (item._valor * Number(quantidade.value)) + (item._valor * taxaAventura);
                    if(item._genero === 'RPG') preco = (item._valor * Number(quantidade.value)) + (item._valor * taxaRPG);
                    if(item._genero === 'Esporte') preco = (item._valor * Number(quantidade.value)) + (item._valor * taxaEsporte);
                    if(item._genero === 'Corrida') preco = (item._valor * Number(quantidade.value)) + (item._valor * taxaCorrida);
                }
            }

            valorTotal.value = `R$${preco.toFixed(2)}`;
            desconto.value = `R$${preco.toFixed(2)}`;

            if(cliente.value !== ''){
                for(let i = 1; i <= Object.keys(localStorage).length; i++){
                    const item = JSON.parse(localStorage.getItem(i));

                    if(item._tipo === 'cliente' && item._nome === cliente.value){
                        if(item._clienteEpico) preco -= (0.05 * preco);
                    }
                }

                valorTotal.value = `R$${preco.toFixed(2)}`;
                desconto.value = `R$${preco.toFixed(2)}`;
            }
        }
    }

    _realizaVenda(total, cliente, gerente, jogo, quantidade, desenvolvedora){
        console.log(total);
        for(let i = 1; i <= Object.keys(localStorage).length; i++){
            const item = JSON.parse(localStorage.getItem(i));

            if(item._tipo === 'cliente' && item._nome === cliente){
                item._valorCompras += total;
                this._atualizaLocalStorage(item, i);
            }
            if(item._tipo === 'gerente' && item._nome === gerente){
                item._valorVendas += total;
                this._atualizaLocalStorage(item, i);
            }
            if(item._tipo === 'jogo' && item._nome === jogo){
                item._valorVendido += total;
                item._vendas += quantidade;
                this._atualizaLocalStorage(item, i);
            }
            if(item._tipo === 'desenvolvedora' && item._nome === desenvolvedora){
                item._vendasTotais += total;
                item._numeroVendas += quantidade;
                this._atualizaLocalStorage(item, i);
            }
        }
    }

    _atualizaLocalStorage(objeto, indice){
        localStorage.removeItem(indice);
        return localStorage.setItem(indice, JSON.stringify(objeto));
    }
}