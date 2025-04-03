#include<iostream>
#include<vector>
#include<algorithm>
#include<ctime>
#include<cstdlib>
using namespace std;
int qz,score=0,ques=0;
void displayMenu(){
    cout << "\n\t=== Quiz Program ===\n";
    cout << "1. Start Quiz\n";
    cout << "2. Exit\n";
    cout << "Enter your choice: ";
};
int cal_score(int qs,int scr){
    int result = (scr/qs)*100;
    return result;
};
void startQuiz() {
    string user_ans;
    qz = rand()%4;
    switch(qz){
        case 0:
        ques++;
        cout<< "What is the capital of France?\n(a) Paris\n(b) London\n(c) Rome\n";
        break;
        case 1:
        ques++;
        cout<< "What is the largest planet in our solar system?\n(a) Earth\n(b) Jupiter\n(c) Mars\n";
        break;
        case 2:
        ques++;
        cout<< "Who wrote 'Romeo and Juliet'?\n(a) William Shakespeare\n(b) Jane Austen\n(c) Charles Dickens\n";
        break;
        case 3:
        ques++;
        cout<< "What is the powerhouse of the cell?\n(a) Mitochondrion\n(b) Nucleus\n(c) Ribosome\n";
        break;
        default:cout<< " ";
    }
    cout<<"Your answer:";
    cin>>user_ans;
    for(auto& c : user_ans){
        c = tolower(c);
    }
    if(qz ==0 && user_ans == "paris"){
        cout<<"Correct..!";
        score++;
    }
    else if(qz ==1 && user_ans == "jupiter"){
        cout<<"Correct..!";
        score++;
    }
    else if(qz==2 && user_ans == "william shakespeare"){
        cout<<"Correct..!";
        score++;
    }
    else if(qz== 3 && user_ans == "mitochondrion"){
        cout<<"Correct..!";
        score++;
    }
    else{
        cout<<"Wrong";
    }
    
    };
int main(){
     srand(static_cast<unsigned int>(time(0)));
    int choice;
    do {
        displayMenu();
        cin >> choice;
        switch(choice) {
            case 1:
                startQuiz();
                break;
            case 2:
                cout << "Exiting program. Goodbye!\n";
                cout<<"SCORE:"<< cal_score(ques,score);
                break;
            default:
                cout << "Invalid choice. Please enter 1 or 2.\n";
                break;
        }
    } while (choice != 2);

    return 0;
}
