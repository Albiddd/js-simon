
let numArray = []


for(var i=0; i < 5; i++){
    let num = Math.floor(Math.random() * 100);
    numArray.push(num)
}

alert(numArray.join('  '))


setTimeout(() =>{
    const numero = prompt('inserire un numero')
},5000)