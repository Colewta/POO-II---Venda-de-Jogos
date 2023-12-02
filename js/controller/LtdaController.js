import { LtdaModel } from "../model/LtdaModel.js";
import { indexaNav } from "../utils/utils.js";

const arrayObjs = [];

export class LtdaController{
    cadastrarTransportadora(codigo, nome, cnpj, email, telefone, endereco, entrega){
        const model = new LtdaModel(codigo, nome, cnpj, email, telefone, endereco, entrega);
        const obj = model.criaObj();
        arrayObjs.push(obj);
        indexaNav(arrayObjs);
    }
}