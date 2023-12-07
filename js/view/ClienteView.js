import { formatarDataBr } from "../utils/utils.js";

export class ClienteView{
    constructor(onClienteCadastroClick) {
        this._VALORTOTAL = 0;
        this._onClienteCadastroClick = onClienteCadastroClick;
    }

    onClienteCadastroClick(callback){
        this._onClienteCadastroClick = callback;
    }

    _getNovoCliente(){
        const codigo = Number(document.querySelector('.user-code').value);
        const nome = document.querySelector('.user-name').value;
        const cpf = document.querySelector('.user-cpf').value;
        const rg = document.querySelector('.user-rg').value;
        const dataNasc = document.querySelector('.user-date').value;
        const endereco = document.querySelector('.user-end').value;
        const cep = document.querySelector('.user-cep').value;
        const email = document.querySelector('.user-email').value;
        const cadastro = document.querySelector('.user-cadastro').value;
        const nivel = Number(document.querySelector('.user-level').value);
        const epico = document.querySelector('.user-epic').checked;

        const obj = {
            codigo,
            valorCompras: this._VALORTOTAL,
            nome,
            cpf,
            rg,
            dataNasc,
            end: endereco,
            cep,
            email,
            cadastro,
            nivel,
            epico,
            tipo: 'cliente'
        }

        this._onClienteCadastroClick(obj);
    }
    
    _criaDiv(){
        const div = document.createElement('div');
        div.classList.add('div-view');
        return div;
    }

    atualizaView(clientes, lista){
        clientes.forEach(cliente => {
            const codigo = cliente._codigo;
            const nome = cliente._nome;
            const cpf = cliente._cpf;
            const rg = cliente._rg;
            const dataNasc = formatarDataBr(cliente._dataNasc);
            const endereco = cliente._end;
            const cep = cliente._cep;
            const email = cliente._email;
            const dataCadastro = formatarDataBr(cliente._cadastro);
            const nivel = cliente._nivel;
            const epico = cliente._clienteEpico ? 'Cliente Épico' : 'Cliente normal';

            const div = this._criaDiv();
            div.classList.add('subDiv');

            div.innerHTML = `
                Código: ${codigo}<br/>
                Nome: ${nome}<br/>
                CPF: ${cpf}<br/>
                RG: ${rg}<br/>
                Data de nascimento: ${dataNasc}<br/>
                Endereço: ${endereco}<br/>
                CEP: ${cep}<br/>
                E-mail: ${email}<br/>
                Data de cadastro: ${dataCadastro}<br/>
                Nível: ${nivel}<br/>
                ${epico}<br/>
            `

            lista.appendChild(div);
        });

        return lista;
    }
}