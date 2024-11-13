// Pertemuan 6
// Latihan 1
/*		Buatlah program untuk mencetak urutan bilangan ganjil dari 
		1 sampai dengan 99 menggunakan perintah perulangan do while()
*/

#include <iostream>
using namespace std;

int main () {
	int a = 1;
	
	do {
		cout << "Bilangan ke-" << a << endl;
		a += 2; 
	} while (a <= 99);
	
	return 0;
}
