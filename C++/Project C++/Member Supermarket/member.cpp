// member

#include <iostream>
using namespace std;

string nama_member, jenis_member, hadiah;
int total, kode_diskon, total_diskon, total_harga;
double diskon = 0;

int main () {
	cout << "Masukkan nama \t\t: "; cin >> nama_member;
	cout << "Total Belanja \t\t: "; cin >> total;
	cout << "Jenis Member \t\t: "; cin >> jenis_member;
	cout << "Masukkan Kode Diskon \t: "; cin >> kode_diskon;
	
	if (kode_diskon == 1234 && jenis_member == "gold") {
		if (total > 1000000) {
			diskon += 50;
		} else if (total >= 500000) {
			diskon += 30;
		} else if (total >= 200000) {
			diskon += 10;
		} 		
	} else if (kode_diskon == 1234 && jenis_member == "silver") {
		diskon += 5;
		hadiah = "piring";
	}
	diskon += 5;
	
	cout << "\nTotal diskon \t: " << diskon << "%" << endl; // output
	
	diskon /= 100;
	total_diskon = diskon * total;
	total_harga = total - total_diskon;
	
	cout << "\nTotal Harga \t: " << total_harga << endl; // output
	
	if (kode_diskon == 1234 && jenis_member == "silver") {
		cout << "Selamat Anda mendapatkan hadiah berupa \"Piring\"" << endl; // output
	}

	
	return 0;
}














