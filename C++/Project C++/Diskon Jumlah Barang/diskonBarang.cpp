#include <iostream>
#include <string>
using namespace std;

int jmlAwal (int jmlBarang, int perBar) {
	return jmlBarang * perBar;
}

int jmlAkhir (int jmlAwal, float diskon) {
	return jmlAwal - (jmlAwal * (diskon / 100));
}

int main () {
	int jml_barang, total_akhir, total_awal, perBarang;
	float diskon;
	
	// input user
	cout << "Masukkan jumlah barang \t\t: "; cin >> jml_barang;
	cout << "Masukkan harga per barang \t: Rp."; cin >> perBarang;
	
	// diskon	
	if (jml_barang > 50) {
		diskon = 50;
	} else if (jml_barang >= 25 && jml_barang <= 50) {
		diskon = 25;
	} else if (jml_barang >= 10 && jml_barang <= 24) {
		diskon = 10;
	}
	
	
	// Program
	total_awal = jmlAwal(jml_barang, perBarang);
	total_akhir = jmlAkhir (total_awal, diskon);
	
	//output
	cout << "====================================================="<< endl;
	cout << "Diskon yang didapat \t\t: " << diskon << "%" << endl;
	cout << "Jumlah harga awal \t\t: Rp." << total_awal << endl;
	cout << "Harga yang harus dibayar \t: Rp." << total_akhir << endl;
	
	
	return 0;
}
