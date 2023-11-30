import { ClienteModel } from "../model/clienteModel.js";
import { UsuarioController } from "./UsuarioController.js";

export class ClienteController extends UsuarioController{
    cadastroCliente(codigo, nome, cpf, rg, dataNasc, endereco, cep, email, cadastro, nivel, clienteEpico){
        const model = new ClienteModel(codigo, nome, cpf, rg, dataNasc, endereco, cep, email, cadastro, nivel, clienteEpico);
    }
}