#include<iostream>
using namespace std;
float calculateBMI(float weight, float height) {
    return weight / (height * height);
}
int main() {
    float weight, height;
    cout << "Enter your weight in kilograms: ";
    cin >> weight;
    cout << "Enter your height in meters: ";
    cin >> height;
    float bmi = calculateBMI(weight, height);
    cout << "Your BMI is: " << bmi << endl;
    if (bmi < 18.5) {
        cout << "You are underweight." << endl;
    } else if (bmi >= 18.5 && bmi < 24.9) {
        cout << "You have a normal weight." << endl;
    } else if (bmi >= 25 && bmi < 29.9) {
        cout << "You are overweight." << endl;
    } else {
        cout << "You are obese." << endl;
    }

    return 0;
}
