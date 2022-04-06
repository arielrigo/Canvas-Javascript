let area = document.getElementById('tela')
let lista = document.getElementsByClassName('color')

document.querySelectorAll('.color').forEach(item => {
    item.addEventListener('click', () => {
        for (i = 0; i < lista.length; i++) {
            lista[i].classList.remove('active')
        }
        item.classList.add('active')
    })
})



area.addEventListener('mousemove', (event) => {
    if (event.buttons == 1 && 'mousemove') {
        let color = document.querySelectorAll('.color')

        color.forEach(item => {
            if (item.classList.length > 1) {
                let colors = item.style.backgroundColor
                let contexto = area.getContext('2d')

                contexto.font = '100px arial'
                contexto.lineWidth = 4

                let rect = area.getBoundingClientRect()

                let x = event.clientX - rect.left
                let y = event.clientY - rect.top

                contexto.fillStyle = `${colors}`
                contexto.fillRect(x, y, 3, 3)

            }
        })
    }
})



let button = document.querySelector('.clear')

button.addEventListener('click', () => {

    let ctx = area.getContext('2d')
    ctx.fillStyle = 'white'
    ctx.fillRect(0, 0, 800, 400)



})