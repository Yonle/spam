var honk = require("fs")

//Watch Out!
function cockroach() {
honk.writeFileSync("RickFile-" + Math.random() + '.txt', 'Never gonna Give you up... \nNever gonna let you down....')
//Don't Do anything right here lol
console.log("YOU KNOW THE RULES, AND YOU GET YOU UP.....")
}

setInterval(function() {
cockroach()
}, 0);

cockroach();
