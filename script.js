
let name = prompt("Qual o seu nome? ")

// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
let hello = alert("Hello " + name + " , é ótimo te ter aqui!")

alert("Vai começar o intensivão de JS!")

// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
alert(`${name} vamos realizar a soma de dois números`)

let number1 = prompt("Digite o primeiro numero: ")

let number2 = prompt("Digite o segundo numero 2:")

let sum = (Number(number1) + Number(number2))

alert(`${number1} somado à ${number2} da o resultado de ${sum}`)

// 3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
let isNumber = sum

if(typeof isNumber == 'number') {
  alert(`${isNumber} é um número`)
} else {
  alert(`não é um número`)
}

// 4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
let isString = name

if(typeof isString == 'string') {
  alert("Seu nome é uma string")
} else {
  alert("Não é uma string")
}

// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
let boolean = true

if(typeof boolean == 'boolean') {
  alert(`${boolean} É um boolean`)
} else {
  alert("Não é um boolean")
}

// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
let sub = number1 - number2

alert(`${number1} subtraido por ${number2} da o resultado de ${sub}`)

alert(`E ${sub} é um número`)

// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
let mult = number1 * number2

alert(`${number1} multiplicado por ${number2} da o resultado de ${mult}`)

alert(`E ${mult} é um número`)

// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
let div = number1 / number2

alert(`${number1} dividido por ${number2} da o resultado de ${div}`)

alert(`E ${div} é um número`)

// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
let isEvenNumber = div

if (isEvenNumber % 2 == 0) {
  alert('É um número par')
} else {
  alert('Não é um número par')
}

// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
let isOddNumber = div

if (isOddNumber % 2 != 0) {
  alert('É um número ímpar')
} else {
  alert('Não é um número ímpar')
}

alert("THE END!")


