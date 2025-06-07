// Pertemuan 6
// contoh 11

#include <iostream>
using namespace std;

int main () {
	int a, b;
	char lagi;
	
	atas :
		cout << "Masukkan Bilangan = "; cin >> a;
		
		b = a % 2;
		
		printf("Nilai %d %% 2 adalah = %d", a, b);
		cout << "\n\nIngin Hitung lagi [Y/T] : "; cin >> lagi;
		
		system("cls");
		if (lagi == 'Y' || lagi == 'y') {
			goto atas;
		}
		
		printf("See you next time !!!");
	
	return 0;
}
