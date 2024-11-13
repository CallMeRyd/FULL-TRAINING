// Pertemuan 5
// Tugas Praktikum 2 


// Menghitung tunjangan anak
#include <iostream>
using namespace std;

int main () {
	int jumlah_anak, tunjangan = 50000, maks = 3;
	string ulang = "y";
	
	
		system("cls");
		cout << "Masukkan jumlah anak (Maksimal = " << maks << " anak) \t: "; cin >> jumlah_anak;
		if (jumlah_anak <= maks) {
			tunjangan *= jumlah_anak;
			cout << "Anda mendapatkan tunjangan sebesar \t\t: " << tunjangan << endl;
		} else if (jumlah_anak > maks) {
			tunjangan *= maks;
			cout << "Anda mendapat tunjangan sebesar \t\t: " << tunjangan << endl;;
			cout << "Karena anak Anda lebih dari 3 maka yang mendapatkan tunjangan hanya 3 anak saja !!" << endl;
		}
	
	
	return 0;
}
