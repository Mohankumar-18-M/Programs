function checkVotingEligibility() {
    let age = prompt("Please enter your age:");
    age = Number(age);
    if (isNaN(age)) {
        console.log("Please enter a valid number for your age.");
        return;
    }
    if (age >= 18) {
        console.log("You are eligible to vote.");
    } else {
        console.log("You are not eligible to vote.");
    }
}
checkVotingEligibility();
