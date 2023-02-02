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
        this.resultado = document.querySelector('.resultado')

        this.testeValores()
    }

    // retorna o valor calculando com a taxa
    calculaTaxa = (valor) => valor / 8

    // retorna o valor por FE
    calculaPorFe = (currency, fe) => currency / fe

    testeValores() {
        let compra = 30
        let venda = 6

        console.log(`comprado ${compra} itens por 1 FE e vendendo 99 por ${venda}`)
        console.log(`o valor da venda é de ${this.calculaPorFe(99, venda)}`)
    }
}

new Flip