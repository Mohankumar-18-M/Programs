#include <iostream>
using namespace std;

int main() {
    const int min_vote_age = 18;
    int age;
    cout << "Enter your age: ";
    cin >> age;
    if (age >= min_vote_age) {
        cout << "You are eligible to vote!" << endl;
    } else {
        cout << "You are not eligible to vote yet." << endl;
    }

    return 0;
}
