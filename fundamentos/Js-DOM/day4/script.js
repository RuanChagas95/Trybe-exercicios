functions = {}
configs = {}
configsDefault = { 'font-color': 'black', 'background-color': 'white', 'font-size': '12pt', 'line-height': 'normal', 'font-family': 'Times New Roman' }

main = document.querySelector('main')
function changeBackground(event) {
    const color = event ? event.target.innerText : configs['background-color']
    main.style.backgroundColor = color
    configs['background-color'] = color
    updateLocals()
}
function changeFontColor(event) {

    const color = event ? event.target.innerText : configs['font-color']
    main.style.color = color
    configs['font-color'] = color
    updateLocals()
}
function changeFontSize(event) {
    const size = event ? event.target.innerText : configs['font-size']
    main.style.fontSize = size
    configs['font-size'] = size
    updateLocals()
}
function changeLineHeight(event) {
    const size = event ? event.target.innerText : configs['line-height']
    main.style.lineHeight = size
    configs['line-height'] = size
    updateLocals()
}
function changeFontFamily(event) {
    const font = event ? event.target.innerText : configs['font-family']
    main.style.fontFamily = font
    configs['font-family'] = font
    updateLocals()
}
function updateLocals() {
    localStorage.setItem('configs', JSON.stringify(configs))
}
function updateConfigs() {
    local = JSON.parse(localStorage.getItem('configs'))
    configs = local !== null ? local : configsDefault
}
functions['font-family'] = changeFontFamily
functions['line-height'] = changeLineHeight
functions['font-size'] = changeFontSize
functions['background-color'] = changeBackground
functions['font-color'] = changeFontColor


btns = document.querySelectorAll('button')
btns.forEach(btn => {
    btn.className = `btn ${btn.parentNode.id}` 
    btn.addEventListener('click', functions[btn.parentNode.id])
});
updateConfigs()
changeBackground()
changeFontColor()
changeFontSize()
changeLineHeight()
changeFontFamily()
