"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
// criar carros 
var carroA = new Carro_1.default('dodge', 4);
var carroB = new Carro_1.default('veloster', 3);
var carroC = new Carro_1.default('cerato', 4);
// montar lista de carros da Concessionaria
var listaDeCarros = [carroA, carroB, carroC];
var concessionaria = new Concessionaria_1.default('av paulista', listaDeCarros);
//exibir lista de carros 
// console.log(concessionaria.mostrarListaDeCarros())
// comprar  o carro 
var cliente = new Pessoa_1.default('marcello ', 'veloster');
// console.log(cliente.dizerCarroPreferido())
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro);
        console.log(carro);
    }
});
