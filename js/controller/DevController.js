import { DevModel } from "../model/DevModel.js";
import { indexaNav } from "../utils/utils.js";

const arrayObjs = [];

export class DevController{
    cadastrarDev(codigo, nome, cnpj, email, site, endereco, redeSocial){
        const model = new DevModel(codigo, nome, cnpj, email, site, endereco, redeSocial, this._numeroVendas);
        const obj = model.criaObj();
        arrayObjs.push(obj);
        indexaNav(arrayObjs);
    }
}