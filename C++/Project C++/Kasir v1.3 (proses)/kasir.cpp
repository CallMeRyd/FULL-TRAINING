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
		Barang produk[] = {
			{"roti", 2500},
			{"aqua", 3000},
			{"fanta", 6000},
			{"shampo", 6000},
			{"sabun", 6000},
			{"good day", 6000},
			{"chitatos", 5500},
			{"selesai"}
		};
		int jml_produk = sizeof(produk) / sizeof(*produk);
	
	// menampilkan produk
		cout << "=================================" << endl;
		cout << "========= Daftar Produk =========" << endl;
		cout << "=================================" << endl;
		for (int i = 0; i < jml_produk - 1; i++) {
			cout << i + 1 << ". "	<< produk[i].nama << " \t: " << "Rp. " << produk[i].harga << endl;			
		}		
		cout << jml_produk << ". " << produk[jml_produk - 1].nama << endl;
		cout << "=================================" << endl;
				
	// system
		// Proses pembelian
    float total = 0;
    int pilihan;

    while (true) {
        cout << "Kode produk (\"" << jml_produk << "\" untuk selesai) : ";
        cin >> pilihan;

        // Validasi input
        if (pilihan < 1 || pilihan > jml_produk) {
            cout << "Pilihan tidak valid. Silakan coba lagi." << endl;
            continue;
        }

        if (pilihan == jml_produk) {
            break;
        }

        // Hitung total harga
        int jumlah_barang;
        cout << "Jumlah barang : ";
        cin >> jumlah_barang;
        total += produk[pilihan - 1].harga * jumlah_barang;
    }

	cout << "=================================" << endl;
    cout << "Total belanja: Rp " << total << endl;

	return 0;
}













