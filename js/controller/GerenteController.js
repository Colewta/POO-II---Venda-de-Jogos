import { UsuarioController } from "./UsuarioController.js";

export class gerenteController extends UsuarioController{
    constructor(codigo, nome, cpf, rg, dataNasc, end, cep, email, salario, pis, admissao){
        super(codigo, nome, cpf, rg, dataNasc, end, cep, email);
        this._salario = salario;
        this._pis = pis;
        this._admissao = admissao;
    }

    get salario(){
        return this._salario;
    }
    get pis(){
        return this._pis;
    }
    get admissao(){
        return this._admissao;
    }
}