export class GerenteModel{
    constructor(codigo, valorVendas, nome, cpf, rg, dataNasc, end, cep, email, salario, pis, admissao, tipo){
        this._codigo = codigo;
        this._valorVendas = valorVendas;
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
        this._tipo = tipo;
    }
    
    get codigo(){
        return this._codigo;
    }
    get valorVendas(){
        return this._valorVendas;
    }
    set atualizaVendas(novoValor){
        this._valorVendas = novoValor;
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
    get tipo(){
        return this._tipo;
    }
}