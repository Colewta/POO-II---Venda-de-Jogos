import { criaDiv } from "../utils/utils.js";

export class DevsView{
    atualizaView(vendas, valorTotal, devs, lista){
        devs.forEach(dev => {
            const codigo = dev.codigo;
            const nome = dev.nome;
            const cnpj = dev.cnpj;
            const email = dev.email;
            const site = dev.site;
            const redeSocial = dev.rede;
            const endereco = dev.endereco;

            const div = criaDiv();
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