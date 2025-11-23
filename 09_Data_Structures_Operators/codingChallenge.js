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
