import { GerenteModel } from "../model/GerenteModel.js";
import { indexaNav } from "../utils/utils.js";
import { UsuarioController } from "./UsuarioController.js";

const arrayObjs = [];

export class GerenteController extends UsuarioController{
    cadastrarGerente(codigo, nome, cpf, rg, dataNasc, end, cep, email, salario, pis, admissao){
        const model = new GerenteModel(codigo, nome, cpf, rg, dataNasc, end, cep, email, salario, pis, admissao);
        const obj = model.criaObj();
        arrayObjs.push(obj);
        indexaNav(arrayObjs);
    }
}