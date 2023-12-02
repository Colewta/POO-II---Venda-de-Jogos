import { GameModel } from "../model/GameModel.js";
import { indexaNav } from "../utils/utils.js";

const arrayObjs = [];

export class GameController{
    cadastrarGame(codigo, nome, descricao, desenvolvedora, lancamento, valor, requisitos, avaliacao, genero, disponivel){
        const model = new GameModel(codigo, nome, descricao, desenvolvedora, lancamento, valor, requisitos, avaliacao, genero, disponivel);
        const obj = model.criaObj();
        arrayObjs.push(obj);
        indexaNav(arrayObjs);
    }
}