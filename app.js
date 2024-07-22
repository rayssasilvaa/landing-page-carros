var prevButton = document.getElementById('prev')
var nextButton = document.getElementById('next')
var container = document.querySelector('.container')
var items = container.querySelectorAll('.list .item')
var indicator = document.querySelector('.indicators')
var dots = indicator.querySelectorAll('ul li ')

let active = 0
let firstPosition = 0
let lastPosition = items.length - 1

//função para slider
function setSlider() {
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    //mudar o indicador
    let dotsOld = indicator.querySelector('ul li.active')
    dotsOld.classList.remove('active')
    dots[active].classList.add('active')

    //mudar o numero do indicador
    indicator.querySelector('.number').innerHTML = '0' + (active + 1)
}

nextButton.onclick = () => {
    //verificação if e else
    active = active + 1 > lastPosition ? 0 : active + 1
    setSlider()
    items[active].classList.add('active')
}

//função para botão esquerdo
prevButton.onclick = () => {
    //verificação if e else
    active = active - 1 < firstPosition ? lastPosition : active - 1
    setSlider()
    items[active].classList.add('active')
}
