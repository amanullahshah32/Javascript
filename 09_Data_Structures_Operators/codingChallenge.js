console.log(`--- coding challenge ---\n`);

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1. player array for each team

let players1 = game.players[0];
let players2 = game.players[1];
console.log(players1, players2);

// 2. first player of each team is goalkeeper , others are field players
const [gk1, ...fieldPlayers1] = game.players[0]; // i used rest operator to collect remaining players
// for player 2
const [gk2, ...fieldPlayers2] = game.players[1];
// print in the console
console.log(gk1, fieldPlayers1);
console.log(gk2, fieldPlayers2);

// 3. all players in an array
const [...allPlayers] = game.players[0].concat(game.players[1]); // i used rest operator to merge two arrays
// using the spread operator

const allPlayersSpread = [...game.players[0].concat(game.players[1])];
console.log(
  `using spread operator: ${allPlayersSpread} and the length is ${allPlayersSpread.length}`
);

console.log(allPlayers);
console.log(allPlayers.length);

// 4. adding 3 new substitute players in team 1.
const players1Final = [...game.players[0], "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

//5. Based on the game.odds object, create one variable for each odd (called
// 'team1', 'draw' and 'team2')

// using object destructuring

const { team1, x: draw, team2 } = game.odds;
console.log(game.odds);
console.log(team1, draw, team2);

// 6. function printGals
console.log(`function printGoals:\n`);
const printGoals = function (
  ...arbitratyPlayers // rest parameter to accept any number of arguments
) {
  // loop through each player name
  for (let i = 0; i < arbitratyPlayers.length; i++) {
    console.log(arbitratyPlayers[i]);
  }
  // print total number of goals
  console.log(`Total goals: ${arbitratyPlayers.length}`);

  // console.log(arbitratyPlayers);
};

printGoals(...game.scored); // spread operator to pass the array elements as individual arguments

// 7 . team more likely to win without if else statement or ternary operator

console.log(`--- team more likely to win by logical && operator ---\n`);

const win =
  (team1 < team2 && `${game.team1} is more likely to win`) ||
  `${game.team2} is more likely to win`;
console.log(win);


// coding challenge 2
console.log(`\n--- coding challenge 2 ---\n`);

// task
// 1. loop over game.scored array and print each player name to the console with goal number

console.log(`Task 1:\n`);
for(const [index , player] of game.scored.entries())
{
  console.log(`Goal ${index + 1} : player: ${player}`); //(Example: "Goal 1: Lewandowski")
}

console.log(`Task 2:\n`);
// 2. calculate average odd and log to the console

const avgOdds = function(...oddsValues)
{
  let sum = 0;
  for (const add of oddsValues)
  {
    sum += add;
  }
  console.log(`Average odd is: ${sum / oddsValues.length}`);
}

avgOdds(...Object.values(game.odds));
console.log(...Object.values(game.odds));
console.log(...Object.keys(game.odds));

console.log(`Task 3:\n`);
// 3. print the 3 odds to the console, but in a nice formatted way
// i cat get the name from the game object,

for (const [team, odd] of Object.entries(game.odds))
{
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(' Odd of ' + teamStr + ' : ' + odd);
}

console.log(`Task 4:\n`);
// 4. create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value
const scorers = {};
  
for(const player of game.scored)
// check if player already exists in scores
  {
    if (scorers[player])
    {
      scorers[player]+=1;
    }
    else{
      // if no, add them with 1 goal
      scorers[player] = 1;
    }
  }
  
console.log(scorers);

for(const [player, goals] of Object.entries(scorers))
{
  console.log(`${player} scored ${goals} goals`);
}

// coding challenge 3
console.log(`\n--- coding challenge 3 ---\n`);


const gameEvents = new Map([
 [17, '⚽ GOAL'],
 [36, '🔁 Substitution'],
 [47, '⚽ GOAL'],
 [61, '🔁 Substitution'],
 [64, '🔶 Yellow card'],
 [69, '🔴 Red card'],
 [70, '🔁 Substitution'],
 [72, '🔁 Substitution'],
 [76, '⚽ GOAL'],
 [80, '⚽ GOAL'],
 [92, '🔶 Yellow card'],
 ]);


 // 1. create an array of events without duplciates

 const events = new Set([...gameEvents.values()]); // using spread operator to get values from map and set to remove duplicates
 console.log(events);

 // 2. delete yellow card from minute 64
 gameEvents.delete(64);
 console.log(`after deleting yellow card at minute 64: \n`, gameEvents);

 // 3. print the following string to the console: "An event happened, on average, every 9 minutes"
 eventLength = gameEvents.size;
  console.log(`An event happened, on average, every ${90 / eventLength} minutes`);

// 4. print the events with the time indicating whether it's in first half or second half

for( const [key, value] of gameEvents.entries())
{

  key <= 45? console.log(`[First Half]: ${key} : ${value}`) : console.log(`[Second Half]: ${key} : ${value}`);
  // if(key <=45)
  // {
  //   console.log(`[First Half]: ${key} : ${value}`);
  // }
  // else{
  //   console.log(`[Second Half]: ${key} : ${value}`);
  // }
}