export class ClienteModel{
    constructor(codigo, valorCompras, nome, cpf, rg, dataNasc, end, cep, email, cadastro, nivel, clienteEpico, tipo){
        this._codigo = codigo;
        this._valorCompras = valorCompras;
        this._nome = nome;
        this._cpf = cpf;
        this._rg = rg;
        this._dataNasc = dataNasc;
        this._end = end;
        this._cep = cep;
        this._email = email;
        this._cadastro = cadastro;
        this._nivel = nivel;
        this._clienteEpico = clienteEpico;
        this._tipo = tipo;
    }

    get codigo(){
        return this._codigo;
    }
    get valorCompras(){
        return this._valorCompras;
    }
    get nome(){
        return this._nome;
    }
    get cpf(){
        return this._cpf;
    }
    get rg(){
        return this._rg;
    }
    get dataNasc(){
        return this._dataNasc;
    }
    get end(){
        return this._end;
    }
    get cep(){
        return this._cep;
    }
    get email(){
        return this._email;
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
    get tipo(){
        return this._tipo;
    }
}