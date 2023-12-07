export class LtdaModel{
    constructor(codigo, nome, cnpj, email, telefone, endereco, entrega, tipo){
        this._codigo = codigo;
        this._nome = nome;
        this._cnpj = cnpj;
        this._email = email;
        this._telefone = telefone;
        this._endereco = endereco;
        this._entrega = entrega;
        this._tipo = tipo;
    }

    get codigo(){
        return this._codigo;
    }
    get nome(){
        return this._nome;
    }
    get cnpj(){
        return this._cnpj;
    }
    get email(){
        return this._email;
    }
    get telefone(){
        return this._telefone;
    }
    get endereco(){
        return this._endereco;
    }
    get entrega(){
        return this._entrega;
    }
    get tipo(){
        return this._tipo;
    }
}