document.body.addEventListener('keyup', (event) =>{  // o document.body representa o corpo do site, todo o site 
    toqueSom(event.code.toLowerCase()) // se colocasse esse parametro no console, iria aparecer keya, keyd, a palavra key + a letra que eu digitei minusculo

})

function toqueSom(sound){
    let audioElemnt = document.querySelector(`#s_${sound}`) // o id de cada som é: s_keyw...... 
    let keyElement = document.querySelector(`div[data-key = "${sound}"]`)

    if(audioElemnt){ // se ele achou o id que representa o audio, ele vai tocar 
        audioElemnt.currentTime = 0 // toda vez que eu aperto, o audio reinicia 
        audioElemnt.play()
    }
    if(keyElement){
        keyElement.classList.add('active')

        setTimeout(()=>{
            keyElement.classList.remove('active')
        }, 300)
    }
}

/// agora o evento do botão
document.querySelector('.composer button').addEventListener('click', ()=>{
    let som = document.querySelector('#input').value
   
    if(som !== ''){
        let somArray = som.split('') // com isso, se cria um array com cada letra, cada letra vira um array
        playComposicao(somArray)
    }
})

function playComposicao(somArray){

    let tempo = 0

    for(let somItem of somArray){ // pega cada item do somArray e manda pro somItem
       setTimeout(()=>{
        toqueSom(`key${somItem}`)
       },tempo)
       
        tempo += 250
    }
}