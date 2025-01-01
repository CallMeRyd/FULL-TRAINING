#include <iostream>
#include <string>

using namespace std;

struct Barang {
    string nama;
    int harga;
    string kategori;
};

void cariBarang(Barang barang[], string kataKunci, string kategori, int jumlahBarang) {
    bool ditemukan = false;
    for (int i = 0; i < jumlahBarang; i++) {
        if (barang[i].nama.find(kataKunci) != string::npos && barang[i].kategori == kategori) {
            cout << "Barang ditemukan: " << endl;
            cout << "Nama: " << barang[i].nama << endl;
            cout << "Harga: Rp " << barang[i].harga << endl;
            cout << "Kategori: " << barang[i].kategori << endl << endl;
            ditemukan = true;
        }
    }
    if (!ditemukan) {
        cout << "Barang tidak ditemukan." << endl;
    }
}

int main() {
    Barang barang[] = {
        {"Buku Pemrograman C++", 	100000, 	"Buku"},
        {"Potatos Balado",	 		10000, 		"Makanan"},
        {"Abon Sapi",		 		35000, 		"Makanan"},
        {"Pilus Barbaque",	 		5000, 		"Makanan"},
        {"Fanta Stroberi",	 		5000, 		"Minuman"},
        {"Good Day",		 		6000, 		"Minuman"},
        {"Obeng Multi task",		5000, 		"Alat"},
        {"Kaos Polos", 				50000, 		"Pakaian"}
    };
    int jumlahBarang = sizeof(barang) / sizeof(barang[0]);

    string kataKunci;
    string kategori;
    cout << "Masukkan Kategori: ";
    cin >> kategori;
    cout << "Masukkan Kata Kunci: ";
    cin >> kataKunci;

    cariBarang(barang, kataKunci, kategori, jumlahBarang);

    return 0;
}
