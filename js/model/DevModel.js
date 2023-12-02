export class DevModel{
    constructor(codigo, nome, cnpj, email, site, endereco, redeSocial, numeroVendas){
        this._codigo = codigo;
        this._nome = nome;
        this._cnpj = cnpj;
        this._email = email;
        this._site = site;
        this._endereco = endereco;
        this._redeSocial = redeSocial;
        this._numeroVendas = numeroVendas;
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
    set numeroVendas(novoNumero){
        this._numeroVendas = novoNumero;
    }

    criaObj(){
        const obj = {
            codigo: this._codigo,
            nome: this._nome,
            cnpj: this._cnpj,
            email: this._email,
            site: this._site,
            endereco: this._endereco,
            redeSocial: this._redeSocial,
            numeroVendas: this._numeroVendas,
            tipo: 'desenvolvedora'
        }

        return obj;
    }
}