import { criaDiv, formatarDataBr } from "../utils/utils.js";

export class GerenteView{
    atualizaView(gerentes, lista){
        gerentes.forEach(gerente => {
            const codigo = gerente.codigo;
            const nome = gerente.nome;
            const cpf = gerente.cpf;
            const rg = gerente.rg;
            const dataNasc = formatarDataBr(gerente.dataNascimento);
            const endereco = gerente.endereco;
            const cep = gerente.cep;
            const email = gerente.email;
            const salario = gerente.salario;
            const pis = gerente.pis;
            const dataAdmissao = formatarDataBr(gerente.admissao);

            const div = criaDiv();
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
                Salário: R$${salario},00<br/>
                PIS: ${pis}<br/>
                Data de admissão: ${dataAdmissao}<br/>
            `

            lista.appendChild(div);
        });

        return lista;
    }
}