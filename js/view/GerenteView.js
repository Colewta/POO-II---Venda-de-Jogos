import { formatarDataBr } from "../utils/utils.js";

export class GerenteView{
    constructor(onGerenteCadastroClick) {
        this._VALORTOTAL = 0;
        this._onGerenteCadastroClick = onGerenteCadastroClick;
    }

    onGerenteCadastroClick(callback){
        this._onGerenteCadastroClick = callback;
    }

    _getNovoGerente(){
        const codigo = Number(document.querySelector('.user-code').value);
        const nome = document.querySelector('.user-name').value;
        const cpf = document.querySelector('.user-cpf').value;
        const rg = document.querySelector('.user-rg').value;
        const dataNasc = document.querySelector('.user-date').value;
        const endereco = document.querySelector('.user-end').value;
        const cep = document.querySelector('.user-cep').value;
        const email = document.querySelector('.user-email').value;
        const salario = Number(document.querySelector('.user-salario').value);
        const pis = document.querySelector('.user-pis').value;
        const admissao = document.querySelector('.user-admissao').value;

        const obj = {
            codigo,
            valorVendas: this._VALORTOTAL,
            nome,
            cpf,
            rg,
            dataNasc,
            endereco,
            cep,
            email,
            salario,
            pis,
            admissao,
            tipo: 'gerente'
        }

        this._onGerenteCadastroClick(obj);
    }

    _criaDiv(){
        const div = document.createElement('div');
        div.classList.add('div-view');
        return div;
    }

    atualizaView(gerentes, lista){
        gerentes.forEach(gerente => {
            const codigo = gerente._codigo;
            const valorVendas = gerente._valorVendas;
            const nome = gerente._nome;
            const cpf = gerente._cpf;
            const rg = gerente._rg;
            const dataNasc = formatarDataBr(gerente._dataNasc);
            const endereco = gerente._end;
            const cep = gerente._cep;
            const email = gerente._email;
            const salario = gerente._salario;
            const pis = gerente._pis;
            const dataAdmissao = formatarDataBr(gerente._admissao);

            const div = this._criaDiv();
            div.classList.add('subDiv');

            div.innerHTML = `
                Código: ${codigo}<br/>
                Valor vendido: R$${valorVendas.toFixed(2)}<br/>
                Nome: ${nome}<br/>
                CPF: ${cpf}<br/>
                RG: ${rg}<br/>
                Data de nascimento: ${dataNasc}<br/>
                Endereço: ${endereco}<br/>
                CEP: ${cep}<br/>
                E-mail: ${email}<br/>
                Salário: R$${salario.toFixed(2)}<br/>
                PIS: ${pis}<br/>
                Data de admissão: ${dataAdmissao}<br/>
            `

            lista.appendChild(div);
        });

        return lista;
    }
}