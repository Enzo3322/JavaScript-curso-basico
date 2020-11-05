/*console.log('Vai começar...')
for(var c = 1;c <= 5;c++){
    console.log(c)
}
console.log('FIM!')

let num =[5, 6, 7, 9]
num.push()
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)*/

let num = [2, 19, 72, 48, 56, 73, 8, 2, 7, 9, 3]
num.push()
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(9)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}