export class FactoryOption{
    constructor(tipo, select){
        this._opcoes(tipo, select);
    }

    _criaOption(value){
        //Cria a option e coloca o valor
        const option = document.createElement('option');
        option.classList.add('option');
        option.value = value;
        option.textContent = value;
        return option;
    }
    
    _opcoes(tipo, select){
        //Percorre as chaves do localStorage
        for(let i = 1; i <= Object.keys(localStorage).length; i++){
            const item = JSON.parse(localStorage.getItem(i));
    
            //Procura o item no localStorage que tenha o mesmo tipo que o tipo procurado
            if(item._tipo === tipo){
                //Cria uma option nova utilizando passando o nome do item encontrado
                const option = this._criaOption(item._nome);
                select.appendChild(option);
            }
        }
    }
}