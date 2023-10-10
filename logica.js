const addCard = () =>{
    var newDiv = document.createElement('DIV')
    var newH1 = document.createElement('H1')
    const posic = document.getElementById('container')
    newH1.textContent = "Hello World"
    newDiv.classList.add('novadiv')
    newDiv.appendChild(newH1)
    container.appendChild(newDiv)
}
console.log(newDiv)