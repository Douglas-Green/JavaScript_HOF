import { names } from "./names.js";



console.log("\n");
// In doing this exercise I found myself getting confused with the numbering of the exercises
// So I decided to play around with the console a bit and get it to look a little bit more visually appealing.
// That is why this exercise is like this. Just having some fun with the code I suppose.
// If this is not acceptable please tell me and I wont do it again.

const users = [
  { name: "Sam", age: 38, score: 94, isActive: true },
  { name: "Frodo", age: 50, score: 85, isActive: false },
  { name: "Merry", age: 36, score: 82, isActive: true },
  { name: "Pippin", age: 26, score: 77, isActive: false },
];
console.log(
  "********** USERS[] NAME PROPERTIES LISTED WITH .FOREACH() **********\n"
);
// Log all the 'name' properties
users.forEach(user => console.log(user.name));
console.log("\n");
console.log("***** CREATED NEW ARRAY USING .MAP()    *****\n");
console.log("***** WITH ONLY NAMES AND SCORES STORED *****\n");

// Here I thought because we were to use the .map method that since a new Array was going to be created anyways that I would rename the Array to playersAndScores. This way I could of course, keep the original Array as is and later on in this exercise play around with adding some new properties and values to the playersAndScores Array. While still having the original Array to refer back to if needed.
const playersAndScores = users.map(user => ({
  player: user.name,
  score: user.score,
}));

// Learned about this clever fancy little method called console.table(). I figured this would be a great way to display the data that I was working with so I could easily visualize it.
console.table(playersAndScores);

console.log("\n***** NEW ARRAY OF ACTIVE PLAYERS USING .FILTER() *****\n");
const activePlayers = users.filter(user => user.isActive);
console.table(activePlayers);

console.log("\n***** SORTED ORIGINAL ARRAY BY SCORE DESC. USING .SORT *****\n");
const sortedPlayers = [...users].sort((a, b) => b.score - a.score);
console.table(sortedPlayers);

console.log("\n***** CALCULATED TOTAL SCORE USING .REDUCE() *****\n");
const totalScore = users.reduce(
  (totalScore, user) => totalScore + user.score,
  0
);
console.log(`Total score: ${totalScore}`);

console.log("\n***** BONUS/PRACTICE SECTION *****\n");
console.log("\n");
const updatedPlayers = users.map((user, index) => ({
  ...user,

  // I thought that this was a pretty cool trick to use what i guess is called a ternary operator. will totally be using
  // this more often!!!!!
  position: user.name === "Pippin" ? "CUT" : index + 1,
  isActive: true,
}));

updatedPlayers.push(
  { name: "Gandalf", age: 1000, score: 100, isActive: true, position: 0 },
  { name: "Legolas", age: 500, score: 95, isActive: true, position: "center" },
  {
    name: "Douglas",
    age: 41,
    score: 99,
    isActive: true,
    position: "6th Man of The Year",
  }
);

const playersWithNewPositions = updatedPlayers.map(user => {
  switch (user.name) {
    case "Gandalf":
      return { ...user, position: "Power Forward" };
    case "Legolas":
      return { ...user, position: "Shooting Guard" };
    case "Merry":
      return { ...user, position: "Center" };
    case "Sam":
      return { ...user, position: "Small Forward" };
    case "Frodo":
      return { ...user, position: "Point Guard" };
    default:
      return user;
  }
});

// Since earlier I had to sort the array in ascending order I thought I would try and do that in reverse and then show all the players in a table.
const finalPlayers = playersWithNewPositions.sort((a, b) => b.score - a.score);
console.table(finalPlayers);

// Here is where I went a little over board. I was thinking hmm... I wonder if I could create another opposing team with all the same properties but with different values. Then I thought boy it would be nice to no have to constantly come up with names and assigning positions to those names. I'll try and create two functions that can more easily do this for me. So that is what I attempted below.
function getRandomName() {
  return names[Math.floor(Math.random() * names.length)];
}

function getRandomPosition() {
  const positions = [
    "Power Forward",
    "Shooting Guard",
    "Center",
    "Small Forward",
    "Point Guard",
  ];
  return positions[Math.floor(Math.random() * positions.length)];
}

const opposingTeam = playersWithNewPositions.map(player => {
  return {
    ...player,
    name: getRandomName(),
    position: getRandomPosition(),
    isActive: true,
  };
});

const allPlayers = [...playersWithNewPositions, ...opposingTeam];

console.log("Original Team:", playersWithNewPositions);
console.log("Opposing Team:", opposingTeam);
