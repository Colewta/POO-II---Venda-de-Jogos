export class UsuarioView{
    _arrumaFormulario(){
        const viewCliente = document.querySelector('.viewCliente');
        const viewGerente = document.querySelector('.viewGerente');

        viewCliente.style.display = 'none';
        viewGerente.style.display = 'none';
    }

    _atualizaFormulario(){
        const viewCliente = document.querySelector('.viewCliente');
        const viewGerente = document.querySelector('.viewGerente');

        const cliente = document.querySelector('.cliente');
        const gerente = document.querySelector('.gerente');

        const nivel = Number(document.querySelector('.user-level').value);

        if(nivel){
            if(nivel < 0) document.querySelector('.user-level').value = 0;
            if(nivel > 5) document.querySelector('.user-level').value = 5;
        }

        if(cliente.checked){
            viewCliente.style.display = 'flex';
            viewGerente.style.display = 'none';
        }
        else if(gerente.checked){
            viewCliente.style.display = 'none';
            viewGerente.style.display = 'flex';
        }
    }
}