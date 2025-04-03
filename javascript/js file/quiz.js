const quiz = [
    {
        question: "What is the capital of France?",
        choices: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        choices: ["Harper Lee", "Jane Austen", "Mark Twain", "J.K. Rowling"],
        correctAnswer: "Harper Lee"
    },
    {
        question: "What is the largest planet in our solar system?",
        choices: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Jupiter"
    }
];
let score = 0;
let currentQuestionIndex = 0;
function displayQuestion() {
    if (currentQuestionIndex < quiz.length) {
        const questionObj = quiz[currentQuestionIndex];
        console.log(`Q${currentQuestionIndex + 1}: ${questionObj.question}`);
        questionObj.choices.forEach((choice, index) => {
            console.log(`${index + 1}. ${choice}`);
        });

        const userAnswer = prompt(`Please enter the number of your answer for question ${currentQuestionIndex + 1}:`);
        checkAnswer(userAnswer);
    } else {
        displayScore();
    }
}
function checkAnswer(userAnswer) {
    const questionObj = quiz[currentQuestionIndex];
    const correctAnswerIndex = questionObj.choices.indexOf(questionObj.correctAnswer) + 1;

    if (parseInt(userAnswer) === correctAnswerIndex) {
        score++;
        console.log("\nCorrect!\n");
    } else {
        console.log(`\nWrong! The correct answer was ${correctAnswerIndex}. ${questionObj.correctAnswer}\n`);
    }

    currentQuestionIndex++;
    displayQuestion();
}

function displayScore() {
    console.log(`Quiz finished! Your final score is: ${score}/${quiz.length}`);
}
displayQuestion();
