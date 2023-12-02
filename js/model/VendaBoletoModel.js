export class VendaBoletoModel{
    constructor(codigo, cliente, gerente, dataVenda, transportadora, dataEntrega, desenvolvedora, produto, quantidade, fisico, valorTotal, desconto, numeroBoleto){
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
        this._numeroBoleto = numeroBoleto;
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
    get numeroBoleto(){
        return this._numeroBoleto;
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
            fisico: this.fisico,
            valorTotal: this._valorTotal,
            desconto: this._desconto,
            numeroBoleto: this._numeroBoleto,
            tipo: 'venda-boleto',
            tipo2: 'venda'
        }

        return obj;
    }
}