export class VendaCartaoModel{
    constructor(codigo, cliente, gerente, dataVenda, transportadora, dataEntrega, desenvolvedora, produto, quantidade, fisico, valorTotal, desconto, nomeCartao, bandeira, numeroCartao, codigoCartao, metodo){
        this._codigo = codigo;
        this._cliente = cliente;
        this._gerente = gerente;
        this._dataVenda = dataVenda;
        this._transportadora = transportadora;
        this._dataEntrega = dataEntrega;
        this._desenvolvedora = desenvolvedora;
        this._produto = produto;
        this._quantidade = quantidade;
        this._fisico = fisico;
        this._valorTotal = valorTotal;
        this._desconto = desconto;
        this._nomeCartao = nomeCartao;
        this._bandeira = bandeira;
        this._numeroCartao = numeroCartao;
        this._codigoCartao = codigoCartao;
        this._metodo = metodo;
    }

    get codigo(){
        return this._codigo;
    }
    get cliente(){
        return this._cliente;
    }
    get gerente(){
        return this._gerente;
    }
    get dataVenda(){
        return this._dataVenda;
    }
    get transportadora(){
        return this._transportadora;
    }
    get dataEntrega(){
        return this._dataEntrega;
    }
    get desenvolvedora(){
        return this._desenvolvedora;
    }
    get produto(){
        return this._produto;
    }
    get quantidade(){
        return this._quantidade;
    }
    get fisico(){
        return this._fisico;
    }
    get valorTotal(){
        return this._valorTotal;
    }
    get desconto(){
        return this._desconto;
    }
    get nomeCartao(){
        return this._nomeCartao;
    }
    get bandeira(){
        return this._bandeira;
    }
    get numeroCartao(){
        return this._numeroCartao;
    }
    get codigoCartao(){
        return this._codigoCartao;
    }
    get metodo(){
        return this._metodo;
    }

    criaObj(){
        const obj = {
            codigo: this._codigo,
            cliente: this._cliente,
            gerente: this._gerente,
            dataVenda: this._dataVenda,
            transportadora: this._transportadora,
            dataEntrega: this._dataEntrega,
            desenvolvedora: this._desenvolvedora,
            produto: this._produto,
            quantidade: this._quantidade,
            fisico: this._fisico,
            valorTotal: this._valorTotal,
            desconto: this._desconto,
            nomeCartao: this._nomeCartao,
            bandeira: this._bandeira,
            numeroCartao: this._numeroCartao,
            codigoCartao: this._codigoCartao,
            metodo: this._metodo,
            tipo: 'venda-cartao',
            tipo2: 'venda'
        }

        return obj;
    }
}