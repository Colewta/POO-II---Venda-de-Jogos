import { criaDiv, formatarDataBr } from "../utils/utils.js";

export class GamesView{
    atualizaView(games, lista){
        games.forEach(jogo => {
            const codigo = jogo.codigo;
            const nome = jogo.nome;
            const descricao = jogo.descricao;
            const desenvolvedora = jogo.desenvolvedora;
            const lancamento = formatarDataBr(jogo.lancamento);
            const valor = jogo.valor;
            const requisitos = jogo.requisitos;
            const avaliacao = jogo.avaliacao;
            const genero = jogo.genero;

            const div = criaDiv();
            div.classList.add('subDiv');

            div.innerHTML = `
                Código: ${codigo}<br/>
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