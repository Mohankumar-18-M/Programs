import java.util.Scanner;

public class TextAnalyzer {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        StringBuilder text = new StringBuilder();
        String line;
        int wordCount = 0;
        int charCount = 0;
        int lineCount = 0;

        System.out.println("Enter your text (type 'exit' on a new line to finish):");

        while (true) {
            line = scanner.nextLine();
            if (line.equals("exit")) {
                break;
            }
            text.append(line).append("\n");
            lineCount++;

            // Count words,chars
            String[] words = line.split("\\s+");
            wordCount += words.length;
            charCount += line.length();
        }

        if (text.length() > 0) {
            String lastLine = text.substring(text.lastIndexOf("\n") + 1).trim();
            if (lastLine.isEmpty()) {
                wordCount--;
            }
        }

        System.out.println("Number of lines: " + lineCount);
        System.out.println("Number of words: " + wordCount);
        System.out.println("Number of characters: " + charCount);
    }
}
