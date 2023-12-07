import { DevModel } from "../model/DevModel.js";
import { FactoryIndexamento } from "../model/FactoryIndexamento.js";
import { DevsView } from "../view/DevsView.js";

export class DevController{
    constructor() {
        this._view = new DevsView(this._cadastrarDev.bind(this));
        this._view.inicializar();
    }

    _cadastrarDev(devData){
        const novoDev = new DevModel(
            devData.codigo,
            devData.vendas,
            devData.valorTotal,
            devData.nome,
            devData.cnpj,
            devData.email,
            devData.site,
            devData.endereco,
            devData.redeSocial,
            devData.tipo
        )
        
        new FactoryIndexamento(novoDev);
    }
}

new DevController();