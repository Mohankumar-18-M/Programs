#include<iostream>
#include<cstdlib>
#include<string>
#include<ctime>
using namespace std;

string comp_result(){
    int com_choice = rand() % 3;
    switch(com_choice){
        case 0:return "stone";
        case 1:return "paper";
        case 2:return "scissor";
        default: return " ";
        }
    }
string find_win(string user_inp,string com_inp)
 {
    if(user_inp == com_inp){
        return "It's a Tie !";
    }
    else if((com_inp =="stone" && user_inp =="paper")||(com_inp =="paper" && user_inp =="scissor")||(com_inp =="scissor" && user_inp =="stone")){
        return "You Win !!!";
        }
    else{
        return "Computer Win ...";
        }
}

int main(){

    srand(static_cast<unsigned int>(time(0)));

    
    string user_choice,comp_choice,result;
    cout<<"Enter your choice (Stone, Paper, scissor)\n";
    cin>>user_choice;
    
    for(char& c: user_choice){
        c = tolower(static_cast<unsigned char>(c));
        }
    if(user_choice !="stone" && user_choice !="paper" && user_choice !="scissor"){
        cout<<"Invalid Choice! Please enter a valid choice.";
        return 1;
        }
    comp_choice = comp_result();
    cout<<"YOU : "<<user_choice;
    cout<<"\nCOMPUTER : "<<comp_choice;
    result = find_win(user_choice,comp_choice);
    cout<<"\n"<<result;
    
    
}