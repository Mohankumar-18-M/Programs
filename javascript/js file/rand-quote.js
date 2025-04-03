const quotes = [
    "Quote-1",
    "Quote-2",
    "Quote-3",
    "Quote-4",
    "Quote-5",
    "Quote-6",
    "Quote-7",
];
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}
function displayNewQuote() {
    console.log(getRandomQuote());
}
displayNewQuote();
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function promptForQuote() {
    readline.question('Want new quote? (yes/no): ', userinp => {
        if (userinp.toLowerCase() === 'yes') {
            displayNewQuote();
            promptForQuote();
        } else if(userinp.toLowerCase() === 'no'){
            console.log('Goodbye!');
            readline.close();
        } else{
            console.log('Please Enter Valid Input.');
            promptForQuote();
        }
    });
}
promptForQuote();
