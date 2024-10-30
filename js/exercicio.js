//1)
function boasVindas(){
    document.write(`Seja bem-vindo thiago!`)
}
boasVindas();

//2)
function calcIdade(ano,mes){
    document.write(`<h1>a idade de thiago  é ${2024 - ano} ${mes == 'mes' ?'x':'y'}</h1>`)
}
calcIdade(1993,12)

//3)
function frequenciaAluno (presentes, total){
return (((total-presentes))*100/total).toFixed(0);
}

document.write(`<h1>O percentual de faltantes é: ${frequenciaAluno(10,12)}
% </h1>`)

//4)

function calcularMedia(notaTeorica, notaPratica1, notaPratica2){
     return ((notaTeorica *2 ) + notaPratica1 + notaPratica2) /4 ;
}

document.write(`<h1>A média é: ${calcularMedia(10,10,10)} </h1>`)

//5)
function idntPeriodo(horario){
    const [hora,minutos] = horario.split(':')
   if(Number(hora) >= 5 && Number(hora) <12) return 'manhã';
   else if (Number(hora) >=12 && Number (hora) <18) return 'tarde';
   else return 'noite';
}  

const horario1 = idntPeriodo('12:30')
const horario2 = idntPeriodo('10:30')
const horario3 = idntPeriodo('04:45')
const horario4 = idntPeriodo('20:00')
const horario5 = idntPeriodo('21:00')
const horario6 = idntPeriodo('08:00')
const horario7 = idntPeriodo('09:00')
const horario8 = idntPeriodo('03:22')
const horario9 = idntPeriodo('05:12')
const horario10 = idntPeriodo('12:30')

   


let manha = 0;
let tarde = 0;
let noite = 0;

function contagemDePeriodos(horario){
    if(horario == 'manhã') manha++;
    else if(horario == 'tarde') tarde++;
    else noite++;
}
 
document.write (`<h1>total de acessos da manhã foram: ${manha} </h1>`)
document.write (`<h1>total de acessos da tarde foram: ${tarde} </h1>`)
document.write (`<h1>total de acessos da noite foram: ${noite} </h1>`)

contagemDePeriodos(horario1);
contagemDePeriodos(horario2);
contagemDePeriodos(horario3);
contagemDePeriodos(horario4);
contagemDePeriodos(horario5);
contagemDePeriodos(horario6);
contagemDePeriodos(horario7);
contagemDePeriodos(horario8);
contagemDePeriodos(horario9);
contagemDePeriodos(horario10);