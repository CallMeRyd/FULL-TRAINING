#include <iostream>
using namespace std;

int main () {
	int max = 5;
	int top = -1;
	string keranjang[max];
	string lanjut;
	
	do {
		system("cls");
		if (top == max - 1) {
			cout << "Keranjang Anda Penuh" << endl;
		} else {
			top++;
			cout << "Masukkan isi : "; cin >> keranjang[top];
			cout << "data " << keranjang[top] << " berhasil ditambahkan" << endl;
		}
		
		cout << endl;
		cout << "Isi keranjang saat ini : " << endl;
		for(int i = 0; i <= top; i++) {
			cout << i + 1 << ". " << keranjang[i] << endl;
		}
		
		cout << "Lanjut program <y/n> : "; cin >> lanjut;
	} while (lanjut == "y");
	cout << "Program Selesai !" << endl;
}
