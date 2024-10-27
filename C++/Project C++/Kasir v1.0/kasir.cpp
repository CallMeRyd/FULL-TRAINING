#include<iostream>
using namespace std;

int main() {
	// Membuat Kasir
	/* Ada 4 Item :
		1. roti  = Rp. 2.500
		2. aqua  = Rp. 2.000
		3. fanta = Rp. 6.000
		4. pilus = Rp. 500
	*/
	
	// Rules : 
	/* 1. ada uang kembalian
	   2. ada kas
	   3. struck pembelian
	   4. bisa membeli lebih dari 1
	*/
	
	int roti = 2500;
	int aqua = 2000;
	int fanta = 6000;
	int pilus = 500;
	int jml_roti, jml_aqua, jml_fanta, jml_pilus;
	
	int kas, total;
	string user;
	
	cout << "Roti  = Rp. " << roti << "\t/pcs" << endl;
	cout << "Aqua  = Rp. " << aqua << "\t/pcs" << endl;
	cout << "Fanta = Rp. " << fanta << "\t/pcs" << endl;
	cout << "Pilus = Rp. " << pilus << "\t\t/pcs" << endl;
	
	// pemisah
	cout << "================================" << endl;
	// pemisah
	
	cout << "Masukka jumlah Roti \t: ";
	cin >> jml_roti;
	cout << "Masukka jumlah Aqua \t: ";
	cin >> jml_aqua;
	cout << "Masukka jumlah Fanta \t: ";
	cin >> jml_fanta;
	cout << "Masukka jumlah Pilus \t: ";
	cin >> jml_pilus;
	
	// pemisah
	cout << "================================" << endl;
	// pemisah
	
	cout << "Harga Total Roti \t: Rp. " << roti * jml_roti << endl;
	cout << "Harga Total Aqua \t: Rp. " << aqua * jml_aqua << endl;
	cout << "Harga Total Fanta \t: Rp. " << fanta * jml_fanta << endl;
	cout << "Harga Total Pilus \t: Rp. " << pilus * jml_pilus << endl;
	
	// pemisah
	cout << "================================" << endl;
	// pemisah
	
	cout << "Total Belanja \t: Rp. " << (roti * jml_roti) + (aqua * jml_aqua) + (fanta * jml_fanta) + (pilus * jml_pilus);  
}
















