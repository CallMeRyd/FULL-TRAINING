// Pertemuan 6
// Latihan 1
/*		Buatlah program untuk mencetak urutan bilangan genap dari 
		0 sampai dengan 100 menggunakan perintah perulangan while()
*/

#include <iostream>
using namespace std;

int main () {
	int a = 0;
	
	while (a <= 100) {
		cout << "Bilangan ke-" << a << endl;
		a += 2; 
	}
	
	return 0;
}
