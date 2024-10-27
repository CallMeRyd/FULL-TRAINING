#include<iostream>
using namespace std;

int main() {
	// Luas Lingkaran
	int r;
	int d;
	float result;
	
	cout << "Masukkan panjang Jari-jari (jika pakai Diameter masukkan saja 0) : " <<endl;
	cin >> r;
	
	if (r == 0) {
		cout << "Masukkan panjang Diameter : " <<endl;
		cin >> d;
		
		result = 0.25 * 3.14 * d * d;
		
		cout << "Luas segitiga \"d\" adalah " << result <<endl;
		return 0;
	} else {
		result = 3.14 * r * r;
		
		cout << "Luas segitiga \"r\" adalah " << result <<endl;
		return 0;
	}
}
