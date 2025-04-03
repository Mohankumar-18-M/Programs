import java.util.Scanner;
import java.util.Random;

public class StonePaperScissors {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Random random = new Random();

        String[] choices = {"stone", "paper", "scissors"};
        System.out.println("Welcome to Stone-Paper-Scissors game!");
        System.out.print("Enter your choice (stone, paper, scissors):\nYour choice: ");
        String userChoice =scanner.nextLine().toLowerCase();

        //check input
        if (!userChoice.equals("stone") && !userChoice.equals("paper") && !userChoice.equals("scissors")) {
            System.out.println("Invalid choice. Please enter stone, paper, or scissors.");
            return;
        }

        // Computer's choice
        int computerIndex = random.nextInt(3);
        String computerChoice = choices[computerIndex];
        System.out.println("Computer choice: " + computerChoice);

        //find winner
        if (userChoice.equals(computerChoice)) {
            System.out.println("It's a tie!");
        } else if ((userChoice.equals("stone") && computerChoice.equals("scissors")) ||
                   (userChoice.equals("paper") && computerChoice.equals("stone")) ||
                   (userChoice.equals("scissors") && computerChoice.equals("paper"))) {
            System.out.println("You win!");
        } else {
            System.out.println("Computer wins!");
        }
        scanner.close();
    }
}
