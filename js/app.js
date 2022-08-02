
let numArray = []
let numInseriti= []
let score = 0
let correctNum = []

for(var i=0; i < 5; i++){
    let num = Math.floor(Math.random() * 100);
    
    if(!numArray.includes(num)){
        numArray.push(num)
    }else{
        i--
    }
}

alert('Memorizza questi numeri:   ' + numArray.join('  '))
console.log(numArray)

setTimeout(() =>{
    for(i=0; i < numArray.length; i++){
    const numero = parseInt(prompt('Inserire un numero'))
        if(Number.isInteger(numero)){
            numInseriti.push(numero)
        } else{
            console.warn('Elemento inserito non valido! Reinserisci il numero');
            i--
        }
    }
    console.log(numInseriti)
    check()
},5000)


function check(){
    for(let i=0; i < numArray.length; i++){
        if(numArray.includes(numInseriti[i])){
            score++
            correctNum.push(numInseriti[i]);
        } 
    }
    console.log('Hai totalizzato ' + score + ' punti')
    if(score > 0){
        console.log('Hai indovinato i seguenti numeri: ' + correctNum.join('  '))
    }else {
        console.log('Non hai indovinato nemmeno un numero :(')
    }
}