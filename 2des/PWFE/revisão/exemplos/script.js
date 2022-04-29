/*
var - global
let - local
const - constante
*/
/*
var a = 5;
var b = 10;

var soma = a ** b;

console.log(soma);
*/
/*
var a = 10;
var b = 5;

// if(a == b){
//     console.log('é igual')
// }else{
//     console.log('é diferente')
// }

//if ternario
            // condição ? if : else
var resultado = a != b ? 'é diferente' : 'é igual';

console.log(resultado);
*/
/*
&& - AND - E
|| - OR - OU
!  - NOT - NÃO
*/
/*
var a = '10';
var b = 15;

if(a == 10 && b == 5) {
    console.log('verdadeiro')
}else{
    console.log('falso')
}
if(a !== 10 || b == 5) {
    console.log('verdadeiro')
}else{
    console.log('falso')
}


var notas = [10, 6, 2, 5, 7];
var nota = 0;

for(let i = 0; i < notas.length; i++){
    nota = nota + notas[i]; //nota = 0 + notas[0]=10
}

notas.forEach(item => {
    nota += item; // nota = nota + item;
})

var media = nota / notas.length;

console.log(media);
*/
var notas = [];
var nota = 0;

while (nota > -1){
    nota = Number(prompt('Informe uma nota: '));
    if(nota > -1) notas.push(nota);
}

console.log(notas);
