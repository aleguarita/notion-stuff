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

        this.textoInsumo = document.getElementById('compraInsumoTexto')
        this.textoFeCompra = document.getElementById('compraFeTexto')
        this.textoUnidadeCompra = document.getElementById('insumoUnitarioCompraTexto')
        this.textoComprarVender = document.getElementById('comprarParaVenderTexto')
        this.textoQtdVendaInsumo = document.getElementById('vendaQtdInsumoTexto')
        this.textoVendaFe = document.getElementById('vendaRecebidoTexto')
        this.textoVendaInsumo = document.getElementById('vendaInsumoTexto')
        this.textoLucro = document.getElementById('lucroTexto')
        
        // valores iniciais
        this.compraFe = 1
        this.compraInsumo = 30
        this.vendaFe = 5
        this.vendaInsumo = 99

        // aplica os valores no HTML
        this.inputCompraFe.value = this.compraFe
        this.inputCompraInsumo.value = this.compraInsumo
        this.inputVendaFe.value = this.vendaFe
        this.inputVendaInsumo.value = this.vendaInsumo

        // aplica funções
        this.calculaCompra()
        this.calculaVenda()

        // insere os htmls iniciais
        this.textoInsumo.innerHTML = Math.floor(this.calculaTaxa(Number(this.inputCompraInsumo.value)))
        this.textoFeCompra.innerHTML = this.inputCompraFe.value
        this.textoUnidadeCompra.innerHTML = this.calculaUnitario(this.compraFe, this.calculaTaxa(Number(this.compraInsumo))).toFixed(3)
        this.textoComprarVender.innerHTML = this.calculaQtdNecessaria()
        this.textoQtdVendaInsumo.innerHTML = this.vendaInsumo
        this.textoVendaFe.innerHTML = Math.floor(this.calculaTaxa(Number(this.inputVendaFe.value)))
        this.textoVendaInsumo.innerHTML = this.calculaUnitario(this.calculaTaxa(this.vendaFe), this.vendaInsumo).toFixed(3)
    }

    // retorna o valor calculando com a taxa
    calculaTaxa = (valor) => valor - valor / 8

    // retorna quanto vale a unidade
    calculaUnitario = (qtd, unidade) => qtd / unidade

    // retorna a quantidade de operações que vc precisa realizar para vender aquele lote
    calculaQtdNecessaria = () => Math.ceil(this.vendaInsumo / this.compraInsumo)

    // retorna o valor de lucro em FE
    calculaLucroFe() {

    }

    // calcula todos os modificadores
    aplicaValores() {
        // variáveis de número
        this.compraInsumo = this.calculaTaxa(Number(this.inputCompraInsumo.value))
        this.compraFe = this.inputCompraFe.value
        
        // variáveis de texto
        this.textoInsumo.innerHTML = Math.floor(this.compraInsumo)
        this.textoUnidadeCompra.innerHTML = this.calculaUnitario(this.compraFe, this.calculaTaxa(Number(this.compraInsumo))).toFixed(3)
        this.textoFeCompra.innerHTML = this.compraFe
        this.textoComprarVender.innerHTML = this.calculaQtdNecessaria()
        this.textoVendaFe.innerHTML = Math.floor(this.calculaTaxa(Number(this.inputVendaFe.value)))
        this.textoVendaInsumo.innerHTML = this.calculaUnitario(this.calculaTaxa(this.vendaFe), this.vendaInsumo).toFixed(3)
    }
    
    // calcula a quantidade comprada dinamicamente, subtraindo a taxa
    calculaCompra() {
        this.inputCompraInsumo.addEventListener('input', () => this.aplicaValores())
        this.inputCompraFe.addEventListener('input', () => this.aplicaValores())
    }

    // calcula a quantidade de FE recebida, aplicando a taxa
    calculaVenda() {
        this.inputVendaFe.addEventListener('input', () => this.aplicaValores())
        this.inputVendaInsumo.addEventListener('input', () => this.aplicaValores())
    }



}

new Flip