function getComputerChoice() {
    const choices = ['stone', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return '\nIt\'s a draw!';
    }
    
    if (
        (userChoice === 'stone' && computerChoice === 'scissors') ||
        (userChoice === 'scissors' && computerChoice === 'paper') ||
        (userChoice === 'paper' && computerChoice === 'stone')
    ) {
        return '\nYou win!';
    } else {
        return '\nYou lose!';
    }
}
function playGame() {
    const userChoice = prompt('Enter your choice (stone, paper, or scissors):').toLowerCase();
    const computerChoice = getComputerChoice();
    
    if (!['stone', 'paper', 'scissors'].includes(userChoice)) {
        console.log('Invalid choice. Please enter stone, paper, or scissors.');
        return;
    }
    console.log(`\nYou chose: ${userChoice}`);
    console.log(`\nThe computer chose: ${computerChoice}`);
    const result = determineWinner(userChoice, computerChoice);
    console.log(result);
}
playGame();
