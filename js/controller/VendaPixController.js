import { VendaPixModel } from "../model/VendaPixModel.js";
import { indexaNav } from "../utils/utils.js";

const arrayObjs = [];

export class VendaPixController{
    cadastrarVendaPix(codigo, cliente, gerente, dataVenda, transportadora, dataEntrega, desenvolvedora, produto, quantidade, fisico, valorTotal, desconto, numeroPix){
        const model = new VendaPixModel(codigo, cliente, gerente, dataVenda, transportadora, dataEntrega, desenvolvedora, produto, quantidade, fisico, valorTotal, desconto, numeroPix);
        const obj = model.criaObj();
        arrayObjs.push(obj);
        indexaNav(arrayObjs);
    }
}