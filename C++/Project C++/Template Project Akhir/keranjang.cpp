#include <iostream>
#include <vector>
#include <string>

using namespace std;

struct Barang {
    string nama;
    int harga;
    int jumlah;
};

vector<Barang> daftarBarang = {
    {"Apel", 5000},
    {"Pisang", 3000},
    {"Jeruk", 4000}
};

void tambahKeKeranjang(vector<Barang>& keranjang, const string& namaBarang) {
    int jumlahYangDiinginkan;

    for (Barang& barang : daftarBarang) {
        if (barang.nama == namaBarang) {
            cout << "Berapa banyak " << namaBarang << " yang ingin Anda tambahkan? ";
            cin >> jumlahYangDiinginkan;
            barang.jumlah = jumlahYangDiinginkan; // Set jumlah barang langsung
            keranjang.push_back(barang);
            cout << jumlahYangDiinginkan << " " << namaBarang << " berhasil ditambahkan ke keranjang." << endl;
            return;
        }
    }
    cout << "Barang tidak ditemukan." << endl;
}

int hitungTotalHarga(const vector<Barang>& keranjang) {
    int totalHarga = 0;
    for (const Barang& barang : keranjang) {
        totalHarga += barang.harga * barang.jumlah; // Kalikan harga dengan jumlah
    }
    return totalHarga;
}

int main() {
    vector<Barang> keranjang;
    string pencarian;

    // Tambahkan beberapa barang ke keranjang
    cout << "Masukkan kata kunci barang : "; cin >> pencarian;
    tambahKeKeranjang(keranjang, pencarian);

    // Hitung total harga
    int total = hitungTotalHarga(keranjang);
    cout << "Total harga belanja Anda adalah: Rp " << total << endl;

    return 0;
}
