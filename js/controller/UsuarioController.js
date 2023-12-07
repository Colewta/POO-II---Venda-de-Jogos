import { ClienteModel } from "../model/ClienteModel.js";
import { GerenteModel } from "../model/GerenteModel.js";
import { ClienteView } from "../view/ClienteView.js";
import { GerenteView } from "../view/GerenteView.js";
import { UsuarioView } from "../view/UsuarioView.js";
import { FactoryIndexamento } from "../model/FactoryIndexamento.js";

export class UsuarioController {
    constructor() {
        this._botaoUsuario = document.querySelector('.botao-user');
        this._radios = document.querySelector('.radios');
        this._nivel = document.querySelector('.user-level');

        this._clienteView = new ClienteView(this._cadastrarCliente.bind(this));
        this._gerenteView = new GerenteView(this._cadastrarGerente.bind(this));

        this._inputCliente = document.querySelector('.cliente');
        this._inputGerente = document.querySelector('.gerente');

        this._usuarioView = new UsuarioView();

        this._inicializar();
    }

    _inicializar() {
        this._usuarioView._arrumaFormulario();
        this._radios.addEventListener("change", this._usuarioView._atualizaFormulario);
        this._nivel.addEventListener("change", this._usuarioView._atualizaFormulario);

        this._botaoUsuario.addEventListener("click", () => {
            if(this._inputCliente.checked){
                this._clienteView._getNovoCliente();
            }
            else if(this._inputGerente.checked){
                this._gerenteView._getNovoGerente();
            }
        });
    }

    _novoCliente(cliente){
        return new ClienteModel(cliente);
    }

    _novoGerente(gerente){
        return new GerenteModel(gerente);
    }

    _cadastrarCliente(cliente){
        const novoCliente = this._novoCliente(
            cliente.codigo,
            cliente.nome,
            cliente.cpf,
            cliente.rg,
            cliente.dataNasc,
            cliente.end,
            cliente.cep,
            cliente.email,
            cliente.cadastro,
            cliente.nivel,
            cliente.epico,
            cliente.tipo
        );

        new FactoryIndexamento(novoCliente);
    }

    _cadastrarGerente(gerente) {
        const novoGerente = this._novoGerente(
            gerente.codigo,
            gerente.nome,
            gerente.cpf,
            gerente.rg,
            gerente.dataNasc,
            gerente.end,
            gerente.cep,
            gerente.email,
            gerente.salario,
            gerente.pis,
            gerente.admissao,
            gerente.tipo
        );

        new FactoryIndexamento(novoGerente);
    }
    
    novoUsuario(codigo, nome, cpf, rg, dataNasc, end, cep, email, salario, pis, admissao, cadastro, nivel, clienteEpico, tipo){
        if(tipo === 'cliente'){
            return this._novoCliente(codigo, nome, cpf, rg, dataNasc, end, cep, email, cadastro, nivel, clienteEpico, tipo);
        }
        else if(tipo === 'gerente'){
            return this._novoGerente(codigo, nome, cpf, rg, dataNasc, end, cep, email, salario, pis, admissao, tipo);
        }
    }

    _novoCliente(codigo, nome, cpf, rg, dataNasc, end, cep, email, cadastro, nivel, clienteEpico, tipo){
        const novoCliente = new ClienteModel(codigo, 0, nome, cpf, rg, dataNasc, end, cep, email, cadastro, nivel, clienteEpico, tipo);
        return novoCliente;
    }

    _novoGerente(codigo, nome, cpf, rg, dataNasc, end, cep, email, salario, pis, admissao, tipo){
        const novoGerente = new GerenteModel(codigo, 0, nome, cpf, rg, dataNasc, end, cep, email, salario, pis, admissao, tipo);
        return novoGerente;
    }
}

new UsuarioController();