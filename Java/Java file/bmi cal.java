import java.util.Scanner;

public class BMICalculator {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double weight;
        double height;
        System.out.print("Enter your weight in kilograms: ");
        weight = scanner.nextDouble();
        System.out.print("Enter your height in meters: ");
        height = scanner.nextDouble();
        double bmi = calculateBMI(weight, height);
        System.out.printf("Your BMI is: %.2f\n", bmi);
    }

    public static double calculateBMI(double weight, double height) {
        return weight / (height * height);
    }
}
