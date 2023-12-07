export class VendaBoletoModel{
    constructor(codigo, cliente, gerente, dataVenda, transportadora, dataEntrega, produto, quantidade, fisico, valorTotal, desconto, numeroBoleto, tipo, tipo2){
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
        this._numeroBoleto = numeroBoleto;
        this._tipo = tipo;
        this._tipo2 = tipo2;
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
    get numeroBoleto(){
        return this._numeroBoleto;
    }
    get tipo(){
        return this._tipo;
    }
    get tipo2(){
        return this._tipo2;
    }
}