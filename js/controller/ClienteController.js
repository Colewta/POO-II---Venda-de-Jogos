import { ClienteModel } from "../model/clienteModel.js";
import { indexaNav } from "../utils/utils.js";
import { UsuarioController } from "./UsuarioController.js";

const arrayObjs = [];

export class ClienteController extends UsuarioController{
    cadastroCliente(codigo, nome, cpf, rg, dataNasc, endereco, cep, email, cadastro, nivel, clienteEpico){
        const model = new ClienteModel(codigo, nome, cpf, rg, dataNasc, endereco, cep, email, cadastro, nivel, clienteEpico);
        const obj = model.criaObj();
        arrayObjs.push(obj);
        indexaNav(arrayObjs);
    }
}