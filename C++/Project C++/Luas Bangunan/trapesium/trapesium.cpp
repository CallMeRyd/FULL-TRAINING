#include<iostream>
using namespace std;

int main() {
	// luas trapesium
	int a, b, t;
	float luas;
	
	cout << "Masukkan sisi A : ";
	cin >> a;
	
	cout << "Masukkan sisi B : ";
	cin >> b;
	
	cout << "Masukkan tinggi : ";
	cin >> t;
	
	luas = 0.5 * (a + b) * t;
	cout << "Luas Trapesium adalah " << luas << endl; 
}
