import java.util.ArrayList;
import java.util.Random;
import java.util.Scanner;

class QuizQuestion {
    String question;
    String[] choices;
    char correctAnswer;

    QuizQuestion(String question, String[] choices, char correctAnswer) {
        this.question = question;
        this.choices = choices;
        this.correctAnswer = correctAnswer;
    }
}

public class QuizApp {
    public static void main(String[] args) {
        ArrayList<QuizQuestion> questions = new ArrayList<>();
        questions.add(new QuizQuestion("What is the capital of France?", new String[]{"A. Paris", "B. London", "C. Berlin", "D. Madrid"}, 'A'));
        questions.add(new QuizQuestion("What is 2 + 2?", new String[]{"A. 3", "B. 4", "C. 5", "D. 6"}, 'B'));
        questions.add(new QuizQuestion("Which planet is known as the Red Planet?", new String[]{"A. Earth", "B. Venus", "C. Mars", "D. Jupiter"}, 'C'));
        Scanner scanner = new Scanner(System.in);
        Random random = new Random();
        int score = 0;
        for (int i = 0; i < 3; i++) {
            int randomIndex = random.nextInt(questions.size());
            QuizQuestion question = questions.get(randomIndex);
            System.out.println("Question " + (i + 1) + ": " + question.question);
            for (String choice : question.choices) {
                System.out.println(choice);
            }
            System.out.print("Your answer: ");
            char userAnswer = scanner.next().toUpperCase().charAt(0);
            if (userAnswer == question.correctAnswer) {
                System.out.println("Correct!");
                score++;
            } else {
                System.out.println("Wrong! The correct answer was " + question.correctAnswer + ".");
            }
            questions.remove(randomIndex);  //stop repeat
            System.out.println();
        }
        System.out.println("Quiz finished! Your final score is: " + score + "/3");r
        scanner.close();
    }
}
