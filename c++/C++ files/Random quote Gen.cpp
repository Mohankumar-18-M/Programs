#include<iostream>
#include<vector>
#include<cstdlib>
#include<ctime>
using namespace std;
int main(){
    srand(time(0));
    vector<string> q={"Quote1","Quote2","Quote3","Quote4"};
    char c;
    do {
        cout<<"Hear a quote? (y/n):";
        cin>>c;
        if(c=='y'||c=='Y')cout<<q[rand()%q.size()]<<endl;
        else cout<<"Invalid\n";
    } while((c!='n')&&(c!='N'));
    return 0;
}
