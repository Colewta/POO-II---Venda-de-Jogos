export class TransportadoraView{
    constructor(onLtdaCadastroClick){
        this._onLtdaCadastroClick = onLtdaCadastroClick;
        this._botaoLtda = document.querySelector('.botao-ltda');
    }

    inicializar(){
        this._botaoLtda.addEventListener("click", this._manipulaDOM.bind(this));
    }

    onLtdaCadastroClick(callback){
        this._onLtdaCadastroClick = callback;
    }

    _manipulaDOM(){
        const novoLtda = this._getNovoLtda();
        this._onLtdaCadastroClick(novoLtda);
    }

    _getNovoLtda(){
        const codigo = Number(document.querySelector('.ltda-code').value);
        const nome = document.querySelector('.ltda-name').value;
        const cnpj = document.querySelector('.ltda-cnpj').value;
        const email = document.querySelector('.ltda-email').value;
        const telefone = document.querySelector('.ltda-phone').value;
        const endereco = document.querySelector('.ltda-end').value;
        const entrega = Number(document.querySelector('.ltda-time').value);

        return{
            codigo,
            nome,
            cnpj,
            email,
            telefone,
            endereco,
            entrega,
            tipo: 'transportadora'
        }
    }
    
    _criaDiv(){
        const div = document.createElement('div');
        div.classList.add('div-view');
        return div;
    }

    atualizaView(transportadoras, lista){
        transportadoras.forEach(transportadora => {
            const codigo = transportadora._codigo;
            const nome = transportadora._nome;
            const cnpj = transportadora._cnpj;
            const email = transportadora._email;
            const telefone = transportadora._telefone;
            const endereco = transportadora._endereco;
            const tempoEntrega = transportadora._entrega;

            const div = this._criaDiv();
            div.classList.add('subDiv');

            div.innerHTML = `
                Código: ${codigo}<br/>
                Nome: ${nome}<br/>
                CNPJ: ${cnpj}<br/>
                E-mail: ${email}<br/>
                Telefone: ${telefone}<br/>
                Endereço: ${endereco}<br/>
                Tempo de entrega: ${tempoEntrega} dias<br/>
            `

            lista.appendChild(div);
        });

        return lista;
    }
}