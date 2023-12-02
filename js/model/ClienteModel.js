export class ClienteModel{
    constructor(codigo, nome, cpf, rg, dataNasc, end, cep, email, cadastro, nivel, clienteEpico){
        this._codigo = codigo;
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
    get cadastro(){
        return this._cadastro;
    }
    get nivel(){
        return this._nivel;
    }
    get clienteEpico(){
        return this._clienteEpico;
    }

    criaObj(){
        const obj = {
            codigo: this._codigo,
            nome: this._nome,
            cpf: this._cpf,
            rg: this._rg,
            dataNascimento: this._dataNasc,
            endereco: this._end,
            cep: this._cep,
            email: this._email,
            cadastro: this._cadastro,
            nivel: this._nivel,
            epico: this._clienteEpico,
            tipo: 'cliente'
        }

        return obj;
    }
}