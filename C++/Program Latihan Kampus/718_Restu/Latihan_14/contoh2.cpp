// Latihan 14
// Binary Search

#include <iostream>
using namespace std;

int binarySearch(int [], int, int); 

int main () {
	const int jmlData = 10;
	int data[jmlData] = {1, 2, 45, 46, 56, 68, 93, 94, 95, 98};
	int cari, lokasi;
	
	cout << "Data yang dicari : "; cin >> cari;
	lokasi = binarySearch(data, jmlData, cari);
	if (lokasi > -1) {
		cout << "Data yang dicari ditemukan pada lokasi : " << lokasi << "\n";
	} else {
		cout << "Data tidak ditemukan !\n";
	}
}

int binarysSearch(int list[], int jumlah, int vCari) {
	int kiri, kanan, tengah;
	
	kiri = 0;
	kanan = jumlah - 1;
	
	while (kiri <= kanan) {
		tengah = (int) ((kiri + kanan) / 2);
		if (vCari == list[tengah]) {
			return tengah;
		} else if (vCari > list[tengah]) {
			kiri = tengah + 1;
		} else {
			kanan = tengah - 1;
		}
	}
	
	return -1;
}








