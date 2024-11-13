// Pertemuan 5
// Tugas Praktikum 2 


// Menghitung jumlah diskon yang di dapatkan
#include <iostream>
using namespace std;

int main () {
	int beli;
	double diskon = 0;
	string ulang = "y";
	
	while (ulang == "y") {
		system("cls");	
		cout << "Masukkan Nominal Pembelian \t: "; cin >> beli;
		
		if (beli > 100000) {
			diskon = 20;
		} else if (beli > 50000 && beli <= 100000) {
			diskon = 15;
		} else if (beli > 20000 && beli <= 50000) {
			diskon = 10;
		} else if (beli <= 20000) {
			cout << "\nTotal diskon Anda adalah \t: 0%" << endl;
			cout << "Total pembayaran Anda \t\t: " << beli << endl;
		} else {
			system("cls");
			cout << "Masukkan angka !!!" << endl;
		}
		
		if (diskon > 1) {
			cout << "\nTotal diskon Anda adalah \t: " << diskon << "%" << endl;
			diskon = (diskon / 100) * beli;
			beli -= diskon;
			cout << "Total pembayaran Anda \t\t: " << beli << endl;
		}
		cout << "\nUlangi <y/n> : "; cin >> ulang; 
		
		if (ulang == "y") {
			beli = 0;
			diskon = 0;
		}
	}
	system("cls");	
	cout << "Semoga Hari mu Suram !!!" << endl;
	
	return 0;
}
