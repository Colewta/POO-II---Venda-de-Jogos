export class UsuarioController{
    constructor(codigo, nome, cpf, rg, dataNasc, end, cep, email){
        this._codigo = codigo;
        this._nome = nome;
        this._cpf = cpf;
        this._rg = rg;
        this._dataNasc = dataNasc;
        this._end = end;
        this._cep = cep;
        this._email = email;
    }

    get codigo(){
        return this._codigo;
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
}