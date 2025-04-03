#include <iostream>
#include <vector>
#include <string>
using namespace std;

int main() {
    vector<string> tasks;
    int choice, num;
    string task;

    while (true) {
        cout << "\n\tMenu\n1. Add\n2. Delete\n3. View\n4. Exit\nChoice: ";
        cin >> choice;
        cin.ignore();
        if (choice == 1) {
            cout << "Enter task: ";
            getline(cin, task);
            tasks.push_back(task);
        } else if (choice == 2) {
            cout << "Task number to delete: ";
            cin >> num;
            cin.ignore();
            if (num > 0 && num <= tasks.size())
                tasks.erase(tasks.begin() + num - 1);
            else
                cout << "Invalid number.\n";
        } else if (choice == 3) {
            for (int i = 0; i < tasks.size(); ++i)
                cout << i + 1 << ". " << tasks[i] << endl;
        } else if (choice == 4) break;
        else cout << "Invalid choice.\n";
    }
    return 0;
}
