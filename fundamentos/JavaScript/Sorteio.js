games = [];

//adiciona jogos dos estudantes

studentName = 'Neidson';
studentGame = [18, 26, 35, 50, 60, 5];
games.push([studentName, studentGame]);
studentName = 'RuanChagas';
studentGame = [10, 27, 8, 12, 2, 21];
games.push([studentName, studentGame]);

//Faz sorteio
megaSenaGame = [];
for (let i = 0; i < 6; i++){
    megaSenaGame.push(Math.floor(Math.random() * 60))
}

//verifica acerto e retorna as estatísticas no console
for (let game of games){
    studentName = game[0]    
    studentGame = game[1]    
    hits = 0
    wrongs = 0
    correctNumbers = []
    wrongNumbers = []

    
    for (value of studentGame){
        for (megaValue of megaSenaGame){
            if (value == megaValue){
                hits += 1
                correctNumbers.push(value)
            } else{
                wrongs += 1
                wrongNumbers.push(value)
            }
        }    
    }
    
    console.log('Numeros Sorteados: ', megaSenaGame);    
    console.log('Jogo do', studentName, ':', studentGame);
    console.log('Numero de acertos:', hits);
    console.log('Numeros acertados:', correctNumbers);
    console.log('--------------');
}