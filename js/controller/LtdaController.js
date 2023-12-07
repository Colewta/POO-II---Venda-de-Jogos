import { FactoryIndexamento } from "../model/FactoryIndexamento.js";
import { LtdaModel } from "../model/LtdaModel.js";
import { TransportadoraView } from "../view/TransportadoraView.js";

export class LtdaController{
    constructor() {
        this._view = new TransportadoraView(this._cadastrarLtda.bind(this));
        this._view.inicializar();
    }

    _cadastrarLtda(ltdaData){
        const novoLtda = new LtdaModel(
            ltdaData.codigo,
            ltdaData.nome,
            ltdaData.cnpj,
            ltdaData.email,
            ltdaData.telefone,
            ltdaData.endereco,
            ltdaData.entrega,
            ltdaData.tipo
        );

        new FactoryIndexamento(novoLtda);
    }
}

new LtdaController();