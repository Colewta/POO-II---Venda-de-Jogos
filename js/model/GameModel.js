export class GameModel{
    constructor(vendas, valorVendido, codigo, nome, descricao, desenvolvedora, lancamento, valor, requisitos, avaliacao, genero, disponivel, tipo){
        this._vendas = vendas;
        this._valorVendido = valorVendido;
        this._codigo = codigo;
        this._nome = nome;
        this._descricao = descricao;
        this._desenvolvedora = desenvolvedora;
        this._lancamento = lancamento;
        this._valor = valor;
        this._requisitos = requisitos;
        this._avaliacao = avaliacao;
        this._genero = genero;
        this._disponivel = disponivel;
        this._tipo = tipo;
    }

    get codigo(){
        return this._codigo;
    }
    get nome(){
        return this._nome;
    }
    get descricao(){
        return this._descricao;
    }
    get desenvolvedora(){
        return this._desenvolvedora;
    }
    get lancamento(){
        return this._lancamento;
    }
    get valor(){
        return this._valor;
    }
    get requisitos(){
        return this._requisitos;
    }
    get avaliacao(){
        return this._avaliacao;
    }
    get genero(){
        return this._genero;
    }
    get estaDisponivel(){
        return this._disponivel;
    }
    get tipo(){
        return this._tipo;
    }
}