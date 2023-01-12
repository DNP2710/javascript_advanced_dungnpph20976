const game={
    team1: 'bayern Munich',
    team2: 'Dortmund',
    player:[
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnary',
            'Lewandowki',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanj',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
       
    ],
     score: '4:0',
     ccored:['Lewandowki','Gnary','Lewandowki','Hummels'],
     date:"Nov 9th, 2020",
    odds:{
        team1: 1.33,
        x: 3.25,
        team2:6.5,
    }
        
}

// 1

for (const [i, player] of game.ccored.entries())
    console.log(`goal ${1+i}: ${player}`);

//2
const odds = Object.values(game.odds)
 let average =0;
  for (const odd of odds) average += odd;
  average /= odds.length;
  console.log(average);

  //3
for (const [team,odd] of Object.entries(game.odds)){
    const teamStr = team ==="x" ? "draw" :`victory ${game[team]}`;
    console.log(`Odd of ${teamStr} : ${odd}`);
}