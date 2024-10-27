#include<iostream>
using namespace std;

int main() {
	// cout
	int nomor = 1;
	string nama = "Ryd";
	
	
	cout<<nama<<" adalah player PUBG No."<<nomor<<endl; // Mirip console.log di JS
	
	// cin
	string game;
	string name;
	
	cout<<"\nSiapa nama anda\t\t\t: ";
	cin>>name;
	
	cout<<"Apa game pilihan anda "<<name<<" \t: ";
	cin>>game;
	
	
	cout<<"\nSelamat bernain "<<game<<", "<<name<<" !!"<<endl;
	
	// getline(.., nama_var);
	string aktivitas;
	string tempat;
	
	cout<<"Apa aktivitas Anda\t\t: ";
	getline(cin, aktivitas);
	
	cout<<"Dimana anda "<<aktivitas<<"\t\t: ";
	getline(cin, tempat);
	
	
	cout<<"\nSelamat melakukan aktivitas "<<aktivitas<<" di "<<tempat<<" !!"<<endl;
	
}
