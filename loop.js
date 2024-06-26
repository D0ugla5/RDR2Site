// let nome = "", acumulador = ""

// while (nome != "pare") {
//     nome = prompt("Digite um nome ou pare para sair: ").toLowerCase()
//     if(nome != "pare" )
//     acumulador += nome + " "
// }
// alert (acumulador)

// let numero , contador = 0

// numero = Number(prompt("digite um nº: "))
// while (contador < numero){
//     alert("Go Foo u")
//     contador ++
// }

// let idade=0

// while(idade <= 18){
//     idade = prompt("Idade")
//     alert("Sua idade é menor que 18!")
// }
// alert("Maior de 18")

// let numero = prompt("Quantos números você quer? ")
// let contador = 0
// let soma = 0
// let media = 0

// while (contador <= numero){
//     let numeros = Number(prompt("Digite um valor: "))
//     soma +=numeros
//     media = soma / numero
//     contador++ 
// }
// alert ("A média é " + media.toFixed(2))
// let soma = 0
// for(let i = 10; i <= 20; i ++ ){
//     soma += i
// }
// console.log(soma) 
for(let i=100; i <= 200; i+= 3){
    if( i%2 == 1 ){
        console.log(i)
    }
}