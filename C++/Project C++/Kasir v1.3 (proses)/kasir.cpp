// Kasir v1.3
#include <iostream>
#include <iomanip>
#include <string>
using namespace std;

// struct / object
struct Barang {
	string nama;
	double harga;
};

// function
//void namaBelanjaan(string nama, int harga) {
//	cout << "..." << endl;
//}

int main() {
	// list barang & harga
		Barang produk[4] = {
			{"roti", 2500},
			{"aqua", 3000},
			{"fanta", 6000},
			{"snack", 5500}
		};
		int jml_produk = sizeof(produk) / sizeof(*produk);
	
	// menampilkan produk
		cout << "=========================" << endl;
		cout << "===== Daftar Produk =====" << endl;
		cout << "=========================" << endl;
		for (int i = 0; i < jml_produk; i++) {
			cout << i + 1 << ". "	<< produk[i].nama << " \t: " << produk[i].harga << endl;
		}
		
		cout << "=========================" << endl;
		
	// systim
		cout << "Barang : ";
		cin >> 
		
	// testing
	
	
	return 0;
}













