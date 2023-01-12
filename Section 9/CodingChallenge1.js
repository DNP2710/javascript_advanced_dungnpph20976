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
//1
const [player1, player2]  = game.player;
console.log(player1,player2);

//2 
const [gk,... fieldPlayer]=player1;
console.log(gk, fieldPlayer);

//3
 const allPlayer= [...player1, ...player2];
 console.log(allPlayer);

 //4
  const playerFinal= [...player1,'Thiago','Continho', 'Periscis'];

  //5

  const {odds:{team1,x,team2}}= game; 
  console.log(team1, x,team2);

  //6

  const printGoals= function (...player) {
    console.log(player);
    console.log(`${player.length} da ghi ban` ); 
  };

  printGoals(...game.ccored);

  //7

  team1 < team2 && console.log("team 1 co ti le thang cao hon");
  team1 > team2 && console.log("team 2 co ti le thang cao hon");
  team1 == team2 && console.log("2 team  co ti le thang bang nhau");