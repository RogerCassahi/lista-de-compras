
var nomeProduto = document.getElementById("nomeProduto")
var custoProduto = document.getElementById("custoProduto")
var quantidadeProduto = document.getElementById("quantidadeProduto")
var lista = document.getElementById("lista-adicionada")
var itemId;
var valorTotalGasto = document.getElementById('valorTotalGasto')
var novoProduto = document.getElementById("novoProduto")
var novoValor = document.getElementById("novoValor")
var novaQuantidade = document.getElementById("novaQuantidade")
var produtoValorAntigo
var valorValorAntigo
var quantidadeValorAntigo

function adicionar() {
    itemId = lista.childElementCount;
    var tr = document.createElement("tr")
    var tdProdutoNome = document.createElement("td")
    var tdProdutoCusto = document.createElement("td")
    var tdQuantidadeProduto = document.createElement("td")
    var tdBtn = document.createElement("td")
    var tdEditar = document.createElement("button")
    var tdExcluir = document.createElement("button")


    if (nomeProduto.value != '') {
        tdProdutoNome.innerText = nomeProduto.value
    } else {
        alert("Digite o nome do produto")
        return
    }

    if (custoProduto.value != '') {
        tdProdutoCusto.innerText = "R$" + custoProduto.value
    }
    else {
        alert("Por favor, digite o preço do produto")
    }



    if (quantidadeProduto.value != '') {
        tdQuantidadeProduto.innerText = quantidadeProduto.value
    } else {
        alert("Digite a quantidade")
        return
    }

    lista.appendChild(tr)
    tr.appendChild(tdProdutoNome)
    tr.appendChild(tdProdutoCusto)
    tr.appendChild(tdQuantidadeProduto)
    tr.appendChild(tdBtn)
    tdBtn.appendChild(tdEditar)
    tdBtn.appendChild(tdExcluir)
    tr.setAttribute("index", itemId)
    tdExcluir.setAttribute("class", "btnExcluir")
    tdExcluir.setAttribute("onclick", "excluir(" + itemId + ")")
    tdEditar.setAttribute("onclick", "editar(" + itemId + ")")
    tdEditar.setAttribute("class", "btnEditar")
    tdBtn.setAttribute("class", "liBtn")

    nomeProduto.value = ""
    custoProduto.value = ""
    quantidadeProduto.value = ""

    valorTotal()

}


function valorTotal() {

    var numeros = [];
    for (i = 0; i < lista.children.length; i++) {
        var x = (lista.children[i].childNodes[1].innerHTML).replace(/\D/g, '')
        var y = (lista.children[i].childNodes[2].innerHTML).replace(/\D/g, '')

        numeros.push(x * y)
    }
    var total = numeros.reduce((total, numero) => total + numero, 0);
    valorTotalGasto.textContent = "R$" + total
    console.log(total)
}



function mostrarValorTotal() {
    var check = document.getElementById('check')

    if (check.checked != true) {
        document.getElementById('painelValorTotalGasto').style.display = 'flex'
    } else {
        document.getElementById('painelValorTotalGasto').style.display = 'none'
    }
}


function excluir(itemId) {
    for (i = 0; i < lista.children.length; i++) {
        if (lista.children[i].getAttribute("index") == itemId) {
            lista.children[i].remove()
        }
    }
    valorTotal()
}


function editar(itemId) {
    document.getElementById('editar').style.display = 'flex'

    for (i = 0; i < lista.children.length; i++) {
        if (lista.children[i].getAttribute("index") == itemId) {

            produtoValorAntigo = lista.children[itemId].childNodes[0]
            valorValorAntigo = lista.children[itemId].childNodes[1]
            quantidadeValorAntigo = lista.children[itemId].childNodes[2]

            novoProduto.value = produtoValorAntigo.innerHTML
            novoValor.value = valorValorAntigo.innerHTML
            novaQuantidade.value = quantidadeValorAntigo.innerHTML

        }

    }

}

function editarValores() {
    produtoValorAntigo.innerHTML = novoProduto.value
    valorValorAntigo.innerHTML = novoValor.value
    quantidadeValorAntigo.innerHTML = novaQuantidade.value
    document.getElementById('editar').style.display = 'none'
    valorTotal()
}
