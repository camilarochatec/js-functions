function boasVindas(nome, genero){
    document.write(`<h1>
    Seja bem-vind${genero == 'm' ?'o':'a'}   ${nome}</h1>`)
}

boasVindas("nayara", "f");
boasVindas("joel", "m");
mostrarInformações("Daniel", 21);
mostrarInformações("Adriel", 19);
mostrarInformações("Carine", 27, "Francesa");


function mostrarInformações(nome,idade,naturalidade = 'Brasileiro(a)'){
document.write(
    `<ul>
    <li>Nome: ${nome}</li>
    <li>Idade:${idade}</li>
    <li>Gênero:${naturalidade}</li>
    </ul>`
);
}


/**
 * esta funçao soma dois numeros (annotation- coloca em cima da sua função, para descrever e se orientar)
 * @param {number} numero1 
 * @param {number} numero2 
 * @returns {number}
 */
const somarAntigo = (numero1, numero2) =>{ //isso é uma maneira de escrever a função usando a const.
    document.write(`<h1>O resultado é: ${numero1 + numero2} </h1>`)
}

 //let a=3;duaa maneiras de declarar as variaveis. pode ser com let ou colocar logo no parenteses e ele vai somar.
//let b=5;
//somar(a,b);
//somar(2,2);

const somar = (numero1, numero2) => {
   return numero1 + numero2;
}

document.write(`<h1>O resultado é: ${somar(somar(2,2), somar(2,2))}</h1>`);
document.write(`<h1>frase diferente: ${somar(somar(2,2), somar(2,2))}</h1>`);
document.write(`<h1>Outra frase: ${somar(somar(2,2), somar(2,2))}</h1>`);
somarAntigo(2,2);

