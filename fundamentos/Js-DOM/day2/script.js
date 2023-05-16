const body = document.querySelector('body');
const heroTitle = document.createElement('h1');
const main = document.createElement('main')
main.className = 'main-content'
heroTitle.innerText = 'TrybeTrip - Agência de Viagens';
body.appendChild(heroTitle);
body.appendChild(main);

const leftContent = document.createElement('section')
leftContent.className = 'left-content'
main.appendChild(leftContent)

const centerContent = document.createElement('section')
centerContent.className = 'center-content'
main.appendChild(centerContent)

const rightContent = document.createElement('section')
rightContent.className = 'right-content'
main.appendChild(rightContent)

const smallImage = document.createElement('img')
smallImage.src = 'https://picsum.photos/200'
leftContent.appendChild(smallImage)
numberList = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'novo', 'dez'];
list = document.createElement('li')
rightContent.appendChild(list)
for (value of numberList){
    const ul =  document.createElement('ul')
    ul.innerText = value
    list.appendChild(ul)
}
h3List = []
for (let index = 0; index <=3; index++){
    const h3 = document.createElement('h3')
    h3.innerText = (`h${index}`)
    h3.className = 'description'
}

main.removeChild(leftContent)
heroTitle.className = 'title'

const p = document.createElement('p')
p.innerText = ('ijdfhuisahfduashfuhhgsdhfusaddhfl')
centerContent.appendChild(p)
rightContent.style.marginRight = 'auto'
centerContent.style.backgroundColor = 'green'


const lastUl = () => {
    const uls = list.querySelectorAll('ul')
    return uls[uls.length - 1]};

list.removeChild(lastUl())
list.removeChild(lastUl())