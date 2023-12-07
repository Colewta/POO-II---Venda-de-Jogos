import { FactoryOption } from "../model/FactoryOption.js";
import { formatarDataBr } from "../utils/utils.js";

export class GamesView{
    constructor(onGameCadastroClick){
        this._VENDAS = 0;
        this._VALORTOTAL = 0;
        this._onGameCadastroClick = onGameCadastroClick;
        this._botaoGame = document.querySelector('.botao-game');
    }

    inicializar(){
        const select = document.querySelector('.select-dev');
        new FactoryOption('desenvolvedora', select);

        this._botaoGame.addEventListener("click", this._manipulaDOM.bind(this));
    }

    onGameCadastroClick(callback){
        this._onGameCadastroClick = callback;
    }

    _manipulaDOM(){
        const novoGame = this._getNovoGame();
        this._onGameCadastroClick(novoGame);
    }

    _getNovoGame(){
        const codigo = Number(document.querySelector('.game-code').value);
        const nome = document.querySelector('.game-name').value;
        const descricao = document.querySelector('.game-descricao').value;
        const desenvolvedora = document.querySelector('.select-dev').value;
        const lancamento = document.querySelector('.game-date').value;
        const valor = Number(document.querySelector('.game-value').value);
        const requisitos = document.querySelector('.game-minset').value;
        const avaliacao = Number(document.querySelector('.game-nota').value);
        const genero = document.querySelector('.select-genero').value;

        return {
            vendas: this._VENDAS,
            valorVendido: this._VALORTOTAL,
            codigo,
            nome,
            descricao,
            desenvolvedora,
            lancamento,
            valor,
            requisitos,
            avaliacao,
            genero,
            disponivel: true,
            tipo: 'jogo'
        };
    }

    _criaDiv(){
        const div = document.createElement('div');
        div.classList.add('div-view');
        return div;
    }

    _atualizaView(games, lista){
        games.forEach(jogo => {
            const codigo = jogo._codigo;
            const vendas = jogo._vendas;
            const valorVendido = jogo._valorVendido;
            const nome = jogo._nome;
            const descricao = jogo._descricao;
            const desenvolvedora = jogo._desenvolvedora;
            const lancamento = formatarDataBr(jogo._lancamento);
            const valor = jogo._valor;
            const requisitos = jogo._requisitos;
            const avaliacao = jogo._avaliacao;
            const genero = jogo._genero;

            const div = this._criaDiv();
            div.classList.add('subDiv');

            div.innerHTML = `
                Código: ${codigo}<br/>
                Número de vendas: ${vendas}<br/>
                Valor vendido: ${valorVendido}<br/>
                Nome: ${nome}<br/>
                Descrição: ${descricao}<br/>
                Desenvolvedora: ${desenvolvedora}<br/>
                Data de lançamento: ${lancamento}<br/>
                Preço: R$${valor},00<br/>
                Requisitos mínimos: ${requisitos}<br/>
                Avaliação: ${avaliacao}<br/>
                Gênero: ${genero}</br>
            `

            lista.appendChild(div);
        });

        return lista;
    }
}