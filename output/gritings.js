const args = process.argv;

// process.arg[0] = node path
// process.arg[1] = file path

const name = args[2] | "guest";
const time = new Date().getHours();
let greating;
if (time < 12) {
  greating = "good morning";
} else if (time < 18) {
  greating = "good afternone";
} else {
  greating = "good evidkj";
}
console.log(`${greating} ${name}`);
