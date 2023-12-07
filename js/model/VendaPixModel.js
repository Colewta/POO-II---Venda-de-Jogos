export class VendaPixModel{
    constructor(codigo, cliente, gerente, dataVenda, transportadora, dataEntrega, produto, quantidade, fisico, valorTotal, desconto, numeroPix){
        this._codigo = codigo;
        this._cliente = cliente;
        this._gerente = gerente;
        this._dataVenda = dataVenda;
        this._transportadora = transportadora;
        this._dataEntrega = dataEntrega;
        this._produto = produto;
        this._quantidade = quantidade;
        this._fisico = fisico;
        this._valorTotal = valorTotal;
        this._desconto = desconto;
        this._numeroPix = numeroPix;
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
    get numeroPix(){
        return this._numeroPix;
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
            numeroPix: this._numeroPix,
            tipo: 'venda-pix',
            tipo2: 'venda'
        }

        return obj;
    }
}