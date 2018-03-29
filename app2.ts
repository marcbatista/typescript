
import Carro from './Carro'
import Pessoa from './Pessoa'
import Concessionaria from './Concessionaria'

// criar carros 

let carroA  = new Carro('dodge',4)
let carroB = new Carro('veloster',3)
let carroC = new Carro('cerato',4)


// montar lista de carros da Concessionaria

let listaDeCarros: Carro[] = [carroA,carroB,carroC]

let concessionaria = new Concessionaria('av paulista',listaDeCarros )

//exibir lista de carros 

// console.log(concessionaria.mostrarListaDeCarros())

// comprar  o carro 

let cliente  = new Pessoa('marcello ','veloster')

// console.log(cliente.dizerCarroPreferido())

concessionaria.mostrarListaDeCarros().map((carro: Carro)=>{
    if(carro['modelo'] == cliente.dizerCarroPreferido()){
        cliente.comprarCarro(carro)
        console.log(carro)
    }
  
} )
