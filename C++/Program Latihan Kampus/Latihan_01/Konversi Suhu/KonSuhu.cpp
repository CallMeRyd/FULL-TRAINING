// Konversi Suhu
#include <iostream>
using namespace std;

// var
double c, r, k, f;
/*
	c = celcius
	r = reamur
	k = kelvin
	f = fahrenheit
*/

// function
double hitungR(double c) {
	double r = c * 4/5;
	return r;
}
double hitungK(double c) {
	double k = c + 273;
	return k;
}
double hitungF(double c) {
	double f = (c * 9/5) + 32;
	return f;
}

// void
void tampilkanKonversi(double c) {
	r = hitungR(c);
	k = hitungK(c);
	f = hitungF(c);
	cout << c << " derajat celcius = " << endl;
	cout << r << " derajat reamur." << endl;
	cout << k << " derajat kelvin." << endl;
	cout << f << " derajat fahrenheit." << endl;
}

// main
int main() {
	string lanjut = "y";
	while (lanjut == "y") {
		cout << "======= Konversi Suhu =======" << endl;
		cout << "Masukkan suhu celcius : "; cin >> c;
		tampilkanKonversi(c);
		cout << "lanjut <y/n> : "; cin >> lanjut;	
	}
	
}
