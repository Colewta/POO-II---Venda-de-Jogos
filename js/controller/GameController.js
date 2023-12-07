import { FactoryIndexamento } from "../model/FactoryIndexamento.js";
import { GamesView } from "../view/GamesView.js";
import { GameModel } from "../model/GameModel.js";

export class GameController {
    constructor() {
        this._view = new GamesView(this._cadastrarGame.bind(this));
        this._view.inicializar();
    }

    _cadastrarGame(gameData) {
        const novoGame = new GameModel(
            gameData.vendas,
            gameData.valorVendido,
            gameData.codigo,
            gameData.nome,
            gameData.descricao,
            gameData.desenvolvedora,
            gameData.lancamento,
            gameData.valor,
            gameData.requisitos,
            gameData.avaliacao,
            gameData.genero,
            gameData.disponivel,
            gameData.tipo
        );
        
        new FactoryIndexamento(novoGame);
    }
}

new GameController();