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