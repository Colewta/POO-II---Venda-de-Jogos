import { UsuarioModel } from "./UsuarioModel.js";

export class ClienteModel extends UsuarioModel{
    constructor(codigo, nome, cpf, rg, dataNasc, end, cep, email, cadastro, nivel, clienteEpico){
        super(codigo, nome, cpf, rg, dataNasc, end, cep, email);
        this._cadastro = cadastro;
        this._nivel = nivel;
        this._clienteEpico = clienteEpico;
    }

    get cadastro(){
        return this._cadastro;
    }
    get nivel(){
        return this._nivel;
    }
    get clienteEpico(){
        return this._clienteEpico;
    }
}