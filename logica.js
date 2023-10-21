const conjunto = [{
    titulo: 'xiaomi',
    descricao: 'x11',
    valor: 500
    },
    {
    titulo: 'note',
    descricao: 'x14',
    valor: 600,
    },
    {
    titulo: 'nokia',
    descricao: '1100',
    valor: 500,
    },
    {
    titulo: 'LG',
    descricao: 'k10',
    valor: 700,
    }                
]


var i = 0

function addCard () {
    
    
    var newDiv = document.createElement('DIV')
    const cards = document.getElementById('cards')
    newDiv.classList.add('card1')
    cards.appendChild(newDiv)
    

    var newImg = document.createElement('IMG')
    var newH1 = document.createElement('H1')
    var newP = document.createElement('P')
    var newH2 = document.createElement('H2')
    var newButton = document.createElement('BUTTON')
   
    newDiv.appendChild(newImg)
    newDiv.appendChild(newH1)
    newDiv.appendChild(newP)
    newDiv.appendChild(newH2)
    newDiv.appendChild(newButton)

    i=i+1
        
    newImg.src = "././imagens/cel2.jpg"
    newH1.textContent = conjunto[i-1].titulo
    newP.textContent = conjunto[i-1].descricao
    newH2.textContent = conjunto[i-1].valor
    newButton.textContent = 'Saiba Mais!'

    
}


