export class DevModel{
    constructor(codigo, numeroVendas, vendasTotais, nome, cnpj, email, site, endereco, redeSocial, tipo){
        this._codigo = codigo;
        this._numeroVendas = numeroVendas;
        this._vendasTotais = vendasTotais;
        this._nome = nome;
        this._cnpj = cnpj;
        this._email = email;
        this._site = site;
        this._endereco = endereco;
        this._redeSocial = redeSocial;
        this._tipo = tipo;
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
    get site(){
        return this._site;
    }
    get endereco(){
        return this._endereco;
    }
    get redeSocial(){
        return this._redeSocial;
    }
    get numeroVendas(){
        return this._numeroVendas;
    }
    set atualizaVendas(novoNumero){
        this._numeroVendas = novoNumero;
    }
    get vendasTotais(){
        return this._vendasTotais;
    }
    set atualizaTotais(novoTotal){
        this._vendasTotais = novoTotal;
    }
    get tipo(){
        return this._tipo;
    }
}