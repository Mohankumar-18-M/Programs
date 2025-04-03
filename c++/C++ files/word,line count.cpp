#include <iostream>
#include <string>
#include <sstream>

using namespace std;

int main() {
    string input;
    string line;
    int charCount = 0, wordCount = 0, lineCount = 0;

    cout << "Enter text (type 'END' on a new line to finish input):" << endl;

    while (true) {
        getline(cin, line);
        if (line == "END") {
            break;
        }
        input += line + '\n';
    }

    charCount = input.length();
    for(char c : input){
        if(c == '\n'){
            lineCount++;
        }
    }

    istringstream stream(input);
    string word;
    while (stream >> word) {
        wordCount++;
    }
    cout << "Number of characters: " << charCount << endl;
    cout << "Number of words: " << wordCount << endl;
    cout << "Number of lines: " << lineCount << endl;

    return 0;
}
