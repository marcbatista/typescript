import Carro from './Carro'
export  default class Concessionaria {
                    private endereco: string
                    private listaDeCarros: Carro[]

                    constructor(endereco: string, listaDeCarros: Carro[]){
                        this.endereco = endereco 
                        this.listaDeCarros = listaDeCarros
                    }

                    public fornecerEndereço(){
                        return this.endereco
                    }

                    public mostrarListaDeCarros(): Carro[] {
                        return this.listaDeCarros
                    }
                }
