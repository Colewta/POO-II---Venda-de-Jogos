import { criaDiv, formatarDataBr } from "../utils/utils.js";

export class ClienteView{
    atualizaView(clientes, lista){
        clientes.forEach(cliente => {
            const codigo = cliente.codigo;
            const nome = cliente.nome;
            const cpf = cliente.cpf;
            const rg = cliente.rg;
            const dataNasc = formatarDataBr(cliente.dataNascimento);
            const endereco = cliente.endereco;
            const cep = cliente.cep;
            const email = cliente.email;
            const dataCadastro = formatarDataBr(cliente.cadastro);
            const nivel = cliente.nivel;
            const epico = cliente.epico ? 'Sim' : 'Não';

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
                Data de cadastro: ${dataCadastro}<br/>
                Nível: ${nivel}<br/>
                Épico?: ${epico}<br/>
            `

            lista.appendChild(div);
        });

        return lista;
    }
}