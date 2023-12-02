import { VendaCartaoModel } from "../model/VendaCartaoModel.js";
import { indexaNav } from "../utils/utils.js";

const arrayObjs = [];

export class VendaCartaoController{
    cadastrarVendaCartao(codigo, cliente, gerente, dataVenda, transportadora, dataEntrega, desenvolvedora, produto, quantidade, fisico, valorTotal, desconto, nomeCartao, bandeira, numeroCartao, codigoSeguranca, metodo){
        const model = new VendaCartaoModel(codigo, cliente, gerente, dataVenda, transportadora, dataEntrega, desenvolvedora, produto, quantidade, fisico, valorTotal, desconto, nomeCartao, bandeira, numeroCartao, codigoSeguranca, metodo);
        const obj = model.criaObj();
        arrayObjs.push(obj);
        indexaNav(arrayObjs);
    }
}