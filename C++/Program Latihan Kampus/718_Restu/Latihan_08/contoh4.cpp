// contoh 4
// struct dengan array

#include <iostream>
#include <iomanip>
using namespace std;

int main () {
	struct mhs {
		char nim[5];
		char nama[15];
		float nilai;
	};
	
	mhs mahasiswa[5];
	int a = 0;
	
	while (a < 5) {
		cout << "Data pada index ke - " << a << endl;
		cout << "==========================" << endl;
		cout << "Masukkan NIM \t= "; cin >> mahasiswa[a].nim;
		cout << "Masukkan Nama \t= "; cin >> mahasiswa[a].nama;
		cout << "Masukkan Nilai \t= "; cin >> mahasiswa[a].nilai;
		a++;
	}
	
	system("cls");
	
	// Cetak Judul
	cout << "	NIM		Nama	Nilai	" << endl;
	cout << "===========================" << endl;
	for(int b = 0; b < 5; b++) {
		cout << setw (7) << mahasiswa[b].nim;
		cout << setw (22) << mahasiswa[b].nama;
		cout << setw (5) << mahasiswa[b].nilai;
	}

	return 0;
}











