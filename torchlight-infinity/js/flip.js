/*
// variáveis iniciais
const taxa = 8
let compraFe = document.getElementById('compra-fe')
let vendaFe = document.getElementById('venda-fe')
let compraInsumo = document.getElementById('compra-insumo')
let vendaInsumo = document.getElementById('venda-insumo')
let resultado = document.querySelector('.resultado')

console.log(resultado)

let teste = document.createElement('p')
teste.innerHTML = `TESTE <strong class='bold'></strong>`
resultado.appendChild(teste)

let alteraTeste = document.querySelector('.bold')
compraFe.addEventListener('input', () => alteraTeste.innerHTML = Number(compraFe.value))
*/

class Flip {
    constructor() {
        // elementos de HTML
        this.inputCompraFe = document.getElementById('compra-fe')
        this.inputVendaFe = document.getElementById('venda-fe')
        this.inputCompraInsumo = document.getElementById('compra-insumo')
        this.inputVendaInsumo = document.getElementById('venda-insumo')
        this.areaResultado = document.querySelector('.resultado')

        // valores iniciais
        this.compraFe = 1
        this.compraInsumo = 30
        this.vendaFe = 10
        this.vendaInsumo = 99
        this.valorInsumo = this.calculaUnitario(this.vendaFe, this.vendaInsumo)
        this.valorFe = this.calculaUnitario(this.vendaInsumo, this.vendaFe)

        // aplica os valores no HTML
        this.inputCompraFe.value = this.compraFe
        this.inputCompraInsumo.value = this.compraInsumo
        this.inputVendaFe.value = this.vendaFe
        this.inputVendaInsumo.value = this.vendaInsumo

        // aplica funções
        this.calculaCompra()
        this.calculaVenda()
    }

    // retorna o valor calculando com a taxa
    calculaTaxa = (valor) => valor - valor / 8

    // retorna quanto vale a unidade
    calculaUnitario = (qtd, unidade) => qtd / unidade 
    

    // calcula a quantidade comprada dinamicamente, subtraindo a taxa
    calculaCompra() {
        this.inputCompraInsumo.addEventListener('input', () => {
            this.compraInsumo = this.calculaTaxa(Number(this.inputCompraInsumo.value))
        })
    }

    // calcula a quantidade de FE recebida, aplicando a taxa
    calculaVenda() {
        this.inputVendaFe.addEventListener('input', () => {
            this.vendaFe = this.calculaTaxa(Number(this.inputVendaFe.value))
        })
    }


}

// new Flip
let checaResultado = new Flip
console.error('Apagar depois a variável checaResultado e descomentar a de cima')