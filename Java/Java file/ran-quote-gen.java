import java.util.ArrayList;
import java.util.Random;
import java.util.Scanner;

public class RandomQuoteGenerator {

    private static ArrayList<String> quotes = new ArrayList<>();

    public static void main(String[] args) {
        initializeQuotes();

        Scanner scanner = new Scanner(System.in);
        boolean continueGenerating = true;
        while (continueGenerating) {
            System.out.println("Press 'q' to get a random quote or 'e' to exit:");
            String input = scanner.nextLine();

            if (input.equalsIgnoreCase("q")) {
                generateRandomQuote();
            } else if (input.equalsIgnoreCase("e")) {
                continueGenerating = false;
            } else {
                System.out.println("Invalid input. Please try again.");
            }
        }

        System.out.println("Goodbye!");
        scanner.close();
    }

    private static void initializeQuotes() {
        quotes.add("Quote-1");
        quotes.add("Quote-2");
        quotes.add("Quote-3");
        quotes.add("Quote-4");
        quotes.add("Quote-5");
        quotes.add("Quote-6");
        quotes.add("Quote-7");
    }

    private static void generateRandomQuote() {
        Random random = new Random();
        int randomIndex = random.nextInt(quotes.size());
        System.out.println("Here is your random quote:");
        System.out.println(quotes.get(randomIndex));
    }
}
