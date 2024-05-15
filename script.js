let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.querySelector("icone-x")

function abrirFecharMenu() {

    if (menu.classList.contains("menu-fechado")) {

        menu.classList.remove("menu-fechado")

        iconeX.computedStyleMap.display = "inline"

        iconeBarras.style.dsiplay = "none"
    } else {
        menu.classList.add("menu-fechado")

        iconeX.style.display = "none"

        iconeBarras.style.display = "inline"
    }

}

window.onresize = () => {
    menu.classList.remove("menu-fechado")
    iconeX.style.display = "inline"
    iconeBarras.style.display = "none"
}


let slides = [
    'primeiro-banner',
    'segundo-banner',
    'terceiro-banner'
]

let slideAtual = 0

let numeroSlides = slides.length

let banner = document.querySelector(".banner")

banner.classList.add(slides[slideAtual])

const mostrarProximoSlide = () => {

    banner.classList.remove(slides[slideAtual])

    if (slideAtual < (numeroSlides - 1)) {
        slideAtual++
    } else {
        slideAtual = 0
    }

    banner.classList.add(slides[slideAtual])
}

const mostrarSlideAnterior = () => {
    banner.classList.remove(slides[slideAtual])

    if (slideAtual > 0) {
        slideAtual--
    } else {
        slideAtual = numeroSlides - 1
    }

    banner.classList.add(slides[slideAtual])
}

const selecionarSlide = (indiceSlide) => {
    slides.forEach(slide => banner.classList.remove(slide))

    slideAtual = indiceSlide

    banner.classList.add(slides[indiceSlide])
}

let listaCases = [
        {
        Imagem: "https://unsplash.it/600/400?image=40",
        descricao: "uma empresa de consultoria cria uma narrativa de gamificacao para seu programa de treinamento",
        },

        {
        Imagem: "https://unsplash.it/600/400?image=38",
        descricao: "uma empresa implementa uma competicao gamificada entre entre equipes que competem pelo topo do ranking",
        },
       {
        Imagem: "https://unsplash.it/600/400?image=52",
        descricao: "uma empresa que promove o bem estar dos funcionarios atraves de um desafio de gamificacao de condicao fisico",
       },
        { Imagem: "https://unsplash.it/600/400?image=03",
        descricao: "uma empresa cria um desafio de gamificacao onde os funcionarios devem mostrar ideias inovadoras"
    }
]

const renderizarCases = () => {
    let elementolista = document.getElementById("lista-cards")

    let template = ""

    listaCases.forEach( cardCase => {
        template += `<div class="card">
        <img src="${cardCase.Imagem}" alt="">
        <p>${cardCase.descricao}</p>
        <button>ver mais</button>
    </div>`
    })

    elementolista.innerHTML = template
}