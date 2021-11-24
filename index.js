var start = 1;

while(start == 1){
console.log("...............................")
var precoGas = parseFloat(prompt("Digite o valor da Gasolina: ").replace(',', '.'))
console.log("...............................")

console.log(" ")
console.log("...............................")
var precoAlcool = parseFloat(prompt("Digite o valor do Álcool: ").replace(',', '.'))
console.log("...............................")
console.log(" ")
var resultado = 100 * ((precoAlcool) / (precoGas))

console.log(" ")
console.log("A relação é de " + resultado.toFixed(2).replace('.', ',') +"%")
console.log(" ")

if (resultado > 70.00) {
  console.log("|||||||||||||||||||||||||||||||||||")
  console.log("||| Pode abastecer com Gasolina |||")
  console.log("|||||||||||||||||||||||||||||||||||")
}
else if (resultado < 70.00){
  console.log("|||||||||||||||||||||||||||||||||")
  console.log("||| Pode abastecer com Álcool |||")
  console.log("|||||||||||||||||||||||||||||||||")
}
else if (resultado == 70.00) {
  console.log("||||||||||||||||||||||||||||||||||||||||||||||||||||||||||")
  console.log("||| Tanto faz, pode abastecer com qualquer combustível |||")
  console.log("||||||||||||||||||||||||||||||||||||||||||||||||||||||||||")
}

console.log(" ")
console.log(" ")

start = prompt("Digite << 1 >> para refazer a conta e << 0 >> para finalizar: ")

console.log(" ")
console.log(" ")

if(start==0){
  alert("Obrigado por usar nossa calculadora!")
}
}