export class GerenteModel{
    constructor(codigo, nome, cpf, rg, dataNasc, end, cep, email, salario, pis, admissao){
        this._codigo = codigo;
        this._nome = nome;
        this._cpf = cpf;
        this._rg = rg;
        this._dataNasc = dataNasc;
        this._end = end;
        this._cep = cep;
        this._email = email;
        this._salario = salario;
        this._pis = pis;
        this._admissao = admissao;
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
    get salario(){
        return this._salario;
    }
    get pis(){
        return this._pis;
    }
    get admissao(){
        return this._admissao;
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
            salario: this._salario,
            pis: this._pis,
            admissao: this._admissao,
            tipo: 'gerente'
        }

        return obj;
    }
}