const conjunto = [{
    titulo: 'negocio1',
    descricao: 'negocio',
    valor: 500
    },
    {
    titulo: 'negocio2',
    descricao: 'negocio',
    valor: 500,
    },
    {
    titulo: 'negocio3',
    descricao: 'negocio',
    valor: 500,
    },
    {
    titulo: 'negocio4',
    descricao: 'negocio',
    valor: 500,
    }                
]


    
const obj = {
    titulo: 'negocio',
    descricao: 'negocio',
    valor: 500
}
var TagTitulo = []
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
        
        console.log(conjunto[i-1].titulo)
        TagTitulo = conjunto[i-1].titulo
        console.log(i)
    

    newImg.src = "././imagens/cel2.jpg"
    newH1.textContent = TagTitulo
    newP.textContent = obj.descricao
    newH2.textContent = obj.valor
    newButton.textContent = 'Saiba Mais!'

    
}


