// Let's continue with our football betting app! Keep using the 'game' variable from 
// before

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
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
    'Gnarby',
    'Lewandowski',
    ],
    [
    'Burki',
    'Schulz',
    'Hummels',
    'Akanji',
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
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
    },
    };

//     1.  Loop over the game.scored array and print each player name to the console, 
// along with the goal number (Example: "Goal 1: Lewandowski")
game.scored.forEach((player, index) => {
    console.log(`Goal ${index + 1}: ${player}`);
});

// Task 2: Calculate the average odds
const odds = game.odds;
const totalOdds = odds.team1 + odds.x + odds.team2;
const averageOdds = totalOdds / 3;

console.log(`Average Odds: ${averageOdds}`);

// 3.  Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them 
// (except for "draw"). Hint: Note how the odds and the game objects have the 
// same property names


// Extracting values from the game object

const {team1, odds:odd, team2} = game

console.log(`Odd of victory ${team1}: ${odd.team1}`);
console.log(`Odd of draw: ${odd.x}`)
console.log(`Odd of off victory ${team2}: ${odd.team2}`)

// 4.  Bonus: Create an object called 'scorers' which contains the names of the 
// players who scored as properties, and the number of goals as the value. In this 
// game, it will look like this:
// {
// Gnarby: 1,
// Hummels: 1,
// Lewandowski: 2
// }

const scorers ={}

game.scored.forEach((player)=>{
    scorers[player] = ( scorers[player] || 0) +1;
})
console.log(scorers)