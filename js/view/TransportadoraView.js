import { criaDiv } from "../utils/utils.js";

export class TransportadoraView{
    atualizaView(transportadoras, lista){
        transportadoras.forEach(transportadora => {
            const codigo = transportadora.codigo;
            const nome = transportadora.nome;
            const cnpj = transportadora.cnpj;
            const email = transportadora.email;
            const telefone = transportadora.telefone;
            const endereco = transportadora.endereco;
            const tempoEntrega = transportadora.entrega;

            const div = criaDiv();
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