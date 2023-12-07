export class DevsView{
    constructor(onDevCadastroClick){
        this._VENDAS = 0;
        this._VALORTOTAL = 0;
        this._onDevCadastroClick = onDevCadastroClick;
        this._botaoDev = document.querySelector('.botao-dev');
    }

    inicializar(){
        this._botaoDev.addEventListener("click", this._manipulaDOM.bind(this));
    }

    onDevCadastroClick(callback){
        this._onDevCadastroClick = callback;
    }

    _manipulaDOM(){
        const novoDev = this._getNovoDev();
        this._onDevCadastroClick(novoDev);
    }

    _getNovoDev(){
        const codigo = Number(document.querySelector('.dev-code').value);
        const nome = document.querySelector('.dev-name').value;
        const cnpj = document.querySelector('.dev-cnpj').value;
        const email = document.querySelector('.dev-email').value;
        const site = document.querySelector('.dev-site').value;
        const endereco = document.querySelector('.dev-end').value;
        const redeSocial = document.querySelector('.dev-rede').value;

        return{
            codigo,
            vendas: this._VENDAS,
            valorTotal: this._VALORTOTAL,
            nome,
            cnpj,
            email,
            site,
            endereco,
            redeSocial,
            tipo: 'desenvolvedora'
        }
    }

    _criaDiv(){
        const div = document.createElement('div');
        div.classList.add('div-view');
        return div;
    }

    atualizaView(devs, lista){
        devs.forEach(dev => {
            const codigo = dev._codigo;
            const vendas = dev._numeroVendas;
            const valorTotal = dev._vendasTotais;
            const nome = dev._nome;
            const cnpj = dev._cnpj;
            const email = dev._email;
            const site = dev._site;
            const redeSocial = dev._rede;
            const endereco = dev._endereco;

            const div = this._criaDiv();
            div.classList.add('subDiv');

            div.innerHTML = `
                ${vendas} vendas<br/>
                Valor total vendido: R$${valorTotal}<br/>
                Código: ${codigo}<br/>
                Nome: ${nome}<br/>
                CNPJ: ${cnpj}<br/>
                E-mail: ${email}<br/>
                WebSite: ${site}<br/>
                Rede Social: ${redeSocial}<br/>
                Endereço: ${endereco}<br/>
            `

            lista.appendChild(div);
        });

        return lista;
    }
}