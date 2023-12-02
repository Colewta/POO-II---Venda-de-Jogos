import { VendaBoletoModel } from "../model/VendaBoletoModel.js";
import { indexaNav } from "../utils/utils.js";

const arrayObjs = [];

export class VendaBoletoController{
    cadastrarVendaBoleto(codigo, cliente, gerente, dataVenda, transportadora, dataEntrega, desenvolvedora, produto, quantidade, fisico, valorTotal, desconto, numero){
        const model = new VendaBoletoModel(codigo, cliente, gerente, dataVenda, transportadora, dataEntrega, desenvolvedora, produto, quantidade, fisico, valorTotal, desconto, numero);
        const obj = model.criaObj();
        arrayObjs.push(obj);
        indexaNav(arrayObjs);
    }
}