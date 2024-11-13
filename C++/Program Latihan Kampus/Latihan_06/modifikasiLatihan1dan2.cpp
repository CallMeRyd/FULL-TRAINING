// Pertemuan 6
// Latihan 1
/*		
	1.	Buatlah program untuk mencetak urutan bilangan ganjil dari 
		1 sampai dengan 99 menggunakan perintah perulangan do while()
		
	2.	Buatlah program untuk mencetak urutan bilangan genap dari 
		0 sampai dengan 100 menggunakan perintah perulangan while()
*/

#include <iostream>
using namespace std;

int main () {
	int ganjil = 1, genap = 0, until, pil;
	char ulang = 'y';
	
	while (ulang == 'y' || ulang == 'Y') {
		system("cls");
		cout << "=========== Konversi Ganjil & Genap ===========" << endl;
		cout << "1. Genap\n2. Ganjil\nPilih : "; cin >> pil;
		
		if (pil == 1) {
			// genap
			system("cls");
			cout << "Sampai nominal berapa : "; cin >> until;
				
			while (genap <= until) {
				cout << "Genap Ke-" << genap << endl;
				genap += 2; 
			}
		} else if (pil == 2) {
			// ganjil
			system("cls");
			cout << "Sampai nominal berapa : "; cin >> until;
						
			do {
				cout << "Ganjil Ke-" << ganjil << endl;
				ganjil += 2; 
			} while (ganjil <= until);
		}
		cout << "\n\nulangi [Y/N] : "; cin >> ulang;
	}
		
	return 0;
}
