export class LtdaModel{
    constructor(codigo, nome, cnpj, email, telefone, endereco, entrega){
        this._codigo = codigo;
        this._nome = nome;
        this._cnpj = cnpj;
        this._email = email;
        this._telefone = telefone;
        this._endereco = endereco;
        this._entrega = entrega;
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

    criaObj(){
        const obj = {
            codigo: this._codigo,
            nome: this._nome,
            cnpj: this._cnpj,
            email: this._email,
            telefone: this._telefone,
            endereco: this._endereco,
            entrega: this._entrega,
            tipo: 'transportadora'
        }

        return obj;
    }
}