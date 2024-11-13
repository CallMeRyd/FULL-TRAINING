/*
Nama program : Latihan02.cpp
Dibuat Tanggal : 17 oktober 2024
Fungsi Program : menggunakan variabel
Dibuat oleh : Restu Arya Andhika
*/

#include <iostream>
#include <cstring>
using namespace std;

char nama[30];
char alamat[30];
int nilai[] = {85, 90, 80};
int pjng_nilai = sizeof(nilai) / sizeof(*nilai);
int jml_nilai;
float rata;

int main() {
	strcpy(nama, "Restu Arya Andhika");
	strcpy(alamat, "Depan Solo Square");
	for (int i = 0; i < pjng_nilai; i++) {
		jml_nilai += nilai[i];
	}
	rata = jml_nilai / pjng_nilai;
	
	// Cetak data
	cout << "====== Data Mahasiswa ======" << endl;
	cout << "1. Nama \t: " << nama << endl;
	cout << "2. alamat \t: " << alamat << endl;
	for (int i = 0; i < pjng_nilai; i++) {
		cout << i + 3 << ". Nilai " << i + 1 << " \t: " << nilai[i] << endl;
	}
	cout << pjng_nilai + 3 << ". Rata-rata \t: " << rata << endl;
	
	return 0;
}














