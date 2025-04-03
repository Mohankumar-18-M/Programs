import java.util.Scanner;

public class VotingEligibilityChecker {
    public static void main(String[] args) {
        int minimumVotingAge = 18;
        Scanner scanner = new Scanner(System.in);
        System.out.print("Please enter your age: ");
        int age = scanner.nextInt();
        if (age >= minimumVotingAge) {
            System.out.println("You are eligible to vote.");
        } else {
            System.out.println("You are not eligible to vote.");
        }
        scanner.close();
    }
}
