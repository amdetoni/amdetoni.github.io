let lista = []
let lista2 = []
let addItem = document.getElementById('adicionarItem')
let list = document.getElementById('list')
let tamanhoLista = document.getElementById('tamanhoLista')
let item = document.getElementById('item')
let removerItem = document.getElementById('remover')
addItem.addEventListener('mouseenter', fonteNegrito)
addItem.addEventListener('mouseout', fonteNormal)

function fonteNegrito() {
    addItem.style.fontWeight='bold'
}

function fonteNormal() {
    addItem.style.fontWeight='normal'
}

function reordenar() {    
    lista2 = lista.map((e) => `${e} ${lista.indexOf(e)}`);
    list.innerHTML = `${lista2.join('<br>')}`
    if (lista2.length < 1) {
        tamanhoLista.innerHTML = '<b>Tamanho da lista</b>'        
    } else {
        tamanhoLista.innerHTML = `<b>Tamanho da lista: ${lista2.length} ítem(ns).</b>`
    }
}
    
function inserir() {    
    let valorItem = item.value    
    let elementoRepetido = lista.find((i) => i === valorItem)

    if (valorItem.length == 0) {
        window.alert('Nenhum ítem foi informado, tente novamente.')
    } else if (elementoRepetido === valorItem) {
        window.alert(`Ítem informado já existente na posição ${lista.indexOf(valorItem)} da lista.`)
        item.value = ''
    } else {               
        lista.push(valorItem)
        item.value=''        
        reordenar();       
        }    
    }

function remover() {    
    let valorItemRemover = Number(removerItem.value)
    let elementoExistente = lista2.includes(lista2[valorItemRemover])    
    
    if (removerItem.value.length == 0) {
        window.alert('Não foi apontado nenhum elemento para remover da lista, tente novamente!')
    } else if (elementoExistente == false) {
        window.alert('Ítem não encontrado na lista.')
        removerItem.value = ''
    } else {
        lista.splice(valorItemRemover, 1)
        removerItem.value = ''
        reordenar();
        }
        if (lista.length == 0) {
            list.innerHTML = "Os ítens adicionados à lista serão listados aqui."
        }
    }

function limpar() {
    let size = Number(lista.length)
    lista.splice(0, size)
    reordenar();
    list.innerHTML = "Os ítens adicionados à lista serão listados aqui."
}