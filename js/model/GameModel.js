export class GameModel{
    constructor(codigo, nome, descricao, desenvolvedora, lancamento, valor, requisitos, avaliacao, genero, disponivel){
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
    get disponivel(){
        return this._disponivel;
    }

    criaObj(){
        const obj = {
            codigo: this._codigo,
            nome: this._nome,
            descricao: this._descricao,
            desenvolvedora: this._desenvolvedora,
            lancamento: this._lancamento,
            valor: this._valor,
            requisitos: this._requisitos,
            avaliacao: this._avaliacao,
            genero: this._genero,
            disponivel: this.disponivel,
            tipo: 'jogo'
        }

        return obj;
    }
}