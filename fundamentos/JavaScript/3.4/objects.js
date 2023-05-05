let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
// 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo o nome dela.
consoleText = `Bem-vinda, ${info.personagem}.`;
console.log(consoleText);
//2 - Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, imprima o objeto no console.
// Object.assign(info, {recorrente: 'Sim'}) //boolean?
info['recorrente'] = 'sim' //boolean
console.log(info);
//3 - Faça um for/in que mostre todas as chaves do objeto.
for (key in info){
    console.log(key);
}
//4 - Faça um novo for/in, mas agora mostre todos os valores das propriedades do objeto.
for (key in info){
    console.log(info[key]);
}
//5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: “Tio Patinhas”, “Christmas on Bear Mountain, Dell’s Four Color Comics #178”, “O último MacPatinhas”, “Sim”. Então, imprima os valores de cada objeto juntos, de acordo com cada uma das chaves.

//cria novo objeto
let newObject = Object.assign({}, info)
let values = ['Tio Patinhas', 'Christmas on Bear Mountain, Dell’s Four Color Comics #178', 'O último MacPatinhas', 'Sim'];
let count = 0;
for (key in newObject){
    
    newObject[key] = values[count]
    count += 1
}
for (key in info){
    console.log(`${info[key]} e ${newObject[key]}`)
}
