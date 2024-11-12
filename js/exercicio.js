//1)
function boasVindas() {
    document.write(`Seja bem-vindo thiago!`)
}
boasVindas();

//2)
function calcIdade(ano, mes) {
    document.write(`<h1>a idade de thiago  é ${2024 - ano} ${mes == 'mes' ? 'x' : 'y'}</h1>`)
}
calcIdade(1993, 12)

//3)
function frequenciaAluno(presentes, total) {
    return (((total - presentes)) * 100 / total).toFixed(0);
}

document.write(`<h1>O percentual de faltantes é: ${frequenciaAluno(11, 19)}
% </h1>`)

//4)

function calcularMedia(notaTeorica, notaPratica1, notaPratica2) {
    return ((notaTeorica * 2) + notaPratica1 + notaPratica2) / 4;
}

document.write(`<h1>A média é: ${calcularMedia(10, 10, 10)} </h1>`)

function idntPeriodo(horario){
    const[hora, minutos] = horario.split(':')
        if (Number(hora) >= 5 && Number(hora) < 12) return 'manha'
        else if (Number(hora) >= 12 && Number(hora) < 18) return 'tarde'
        else return 'noite'
    
}
const horario1 = idntPeriodo ('12:30')
const horario2 = idntPeriodo ('10:30')
const horario3 = idntPeriodo ('04:45')
const horario4 = idntPeriodo ('20:00')
const horario5 = idntPeriodo ('21:30')
const horario6 = idntPeriodo ('08:00')
const horario7 = idntPeriodo ('09:00')
const horario8 = idntPeriodo ('03:22')
const horario9 = idntPeriodo ('05:12')
const horario10 = idntPeriodo ('12:30')

function contagemDePeriodo(horario){
    if(horario == 'manha') manha++
    else if(horario=='tarde') tarde++
    else noite++
}

let manha = 0
let tarde = 0
let noite = 0


contagemDePeriodo(horario1)
contagemDePeriodo(horario2)
contagemDePeriodo(horario3)
contagemDePeriodo(horario4)
contagemDePeriodo(horario5)
contagemDePeriodo(horario6)
contagemDePeriodo(horario7)
contagemDePeriodo(horario8)
contagemDePeriodo(horario9)
contagemDePeriodo(horario10)


document.write(`a quantidade de acessos por período foi: <br>
    <h2>manhã:${manha}</h2> 
    <h2>tarde:${tarde}</h2> 
    <h2>noite:${noite}</h2>
    `)


//6)
function qtdItens(array) {
    let tamanho = 0;

    while (!!array[tamanho] == true){
            tamanho++;
        } 
    return tamanho;
}
document.write(`<h1> O tamanho da palavra Jessica é ${qtdItens('jessica')}</h1>`);

//6.a)
function itens(array){
    return array.length;

}
document.write(`<h1> O tamanho da palavra camila é ${itens('camila')}</h1>`);

//7)
function soPares(array) {
    let pares = [];
    for (let i = 0; i < qtdItens(array); i++) {
        if (array[i] % 2 == 0) {
            pares.push(array[i])
        }
    }
    return pares;
}
document.write(`<h1> os pares do array [1,2,3,4,5,6,7,8,9,10] são: ${soPares([1,2,3,4,5,6,7,8,9,10])}`)

//7a)
function par(array){
    return array.filter((numero)=> numero % 2==0);
}
document.write(`<h1> os pares do array [4,8,3,82,10] são: ${par([4,8,3,82,10])}`)

//8)
function camelCase(frase){
    let fraseNova = '';
    for(let i = 0; i < qtdItens(frase); i++){
        if(frase[i] == '_'){
            fraseNova += '';
        } else if(frase[i - 1] == '_'){
            fraseNova += frase[i].toUpperCase();
        }else{
            fraseNova += frase[i];
        }
    }
    return fraseNova;
}

//8a) 
function camCse(nome){
    return nome
    //A função toLowerCase() garante que a string esteja toda em minúsculas.
    .toLowerCase()
    //O método replace(/_./g, match => match.charAt(1).toUpperCase()) usa uma expressão regular para encontrar os caracteres após os underscores (_) e os transforma em maiúsculos. O primeiro caractere após o underscore é ignorado (ficando minúsculo).
    .replace (/_./g, match => match.charAt(1).toUpperCase());

} 

document.write(`<h1>A frase snake_case fica assim "${camCse('snake_case')}" em camelCase</h1>`)

//9)
function todosVerdadeiros(array, condicao){
    let isTrue = true;
    for(let i = 0; i < qtdItens(array); i++){
        if(!eval(array[i] + condicao)){
            isTrue = false;
        }
    }
    return isTrue;
}

document.write(`<h1>Todos os itens do array[2,4,6,8,5] são pares? 
    ${todosVerdadeiros([2,4,6,8,5], ' % 2 == 0') ? 'Sim' : 'Não'}</h1>`);

//9a)
function verdadeiro(array){
    return array.every(num => num % 2 == 0);
}
document.write(`<h1>Todos os itens do array[2,4,6,8,20] são pares? 
    ${verdadeiro([2,4,6,8,20])? 'Sim': 'Não'}</h1>`);