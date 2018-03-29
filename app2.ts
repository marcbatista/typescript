class Carro{
    private modelo:string
    private numeroDePortas: number
    private velocidade: number = 0

    constructor(modelo: string, numeroDePortas: number){
        this.modelo = modelo 
        this.numeroDePortas = numeroDePortas
    }

    public acelerar(): void {
        this.velocidade = this.velocidade + 10        
    }

    public parar(): void {
        this.velocidade = 0
    }

    public velocidadeAtual(): number {
        return this.velocidade
    }
}

class Concessionaria {
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



class Pessoa {
    private nome: string
    private carroPreferido: string
    private carro: any 

    constructor (nome: string, carroPreferido:string){
        this.nome= nome 
        this.carroPreferido =  carroPreferido
    }

    public dizerNome(): string {
        return this.nome
    }

    public dizerCarroPreferido(): string{
        return this.carroPreferido
    }

    public comprarCarro(carro:any): void{
        this.carro= carro 
    } 

    public dizerCarroQueTem(): any {
        return this.carro
    }

}

// criar carros 

let carroA  = new Carro('dodge',4)
let carroB = new Carro('veloster',3)
let carroC = new Carro('cerato',4)


// montar lista de carros da Concessionaria

let listaDeCarros: Carro[] = [carroA,carroB,carroC]

let concessionaria = new Concessionaria('av paulista',listaDeCarros )

//exibir lista de carros 

console.log(concessionaria.mostrarListaDeCarros())