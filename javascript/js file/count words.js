function countText(input) {
    let numCharacters = 0;
    let numWords = 0;
    let numLines = 0;
    let lines = input.split('\n');
    numLines = lines.length;
    for (let line of lines) {
        line = line.trim();
        numCharacters += line.length;
        let words = line.split(/\s+/);
        numWords += words.filter(word => word.length > 0).length;
    }
    return {
        characters: numCharacters,
        words: numWords,
        lines: numLines
    };
}

// Get input from user until "END" is entered
let userInput = "";
let inputLine;
console.log(`Enter Your Text("END" text to stop):`);
do {
    inputLine = prompt("");
    if (inputLine !== "END") {
        userInput += inputLine + "\n";
    }
} while (inputLine !== "END");

let result = countText(userInput.trim());

console.log(`Characters: ${result.characters}`);
console.log(`Words: ${result.words}`);
console.log(`Lines: ${result.lines}`);
