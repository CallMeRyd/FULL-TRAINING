#include<iostream>
using namespace std;

int main() {
	// Menghitung alas segitiga
	int a, t;
	float luas;
	
	cout<<"Masukkan panjang alas \t\t: "<<endl;
	cin>>a;
	
	cout<<"Masukkan panjang tinggi \t: "<<endl;
	cin>>t; 
	
	luas = 0.5 * a * t;
	
	cout<<"Luas sehitiga adalah : "<<luas<<endl;
}
