// contoh 2

#include <iostream>
using namespace std;

int main () {
	struct {
		char nim[5];
		char nama[15];
		float nilai;
	} mahasiswa;
	
	cout << "Masukkan NIM \t= "; cin >> mahasiswa.nim;
	cout << "Masukkan Nama \t= "; cin >> mahasiswa.nama;
	cout << "Masukkan Nilai \t= "; cin >> mahasiswa.nilai;
	
	system("cls");
	
	cout << "NIM \t = " << mahasiswa.nim << endl;
	cout << "Nama \t = " << mahasiswa.nama << endl;
	cout << "Nilai \t = " << mahasiswa.nilai << endl;
	
	return 0;
}
