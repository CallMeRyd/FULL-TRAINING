// Latihan Praktikum 4

#include <iostream>
using namespace std;

int main () {
	int sewa, jarak, hargabbm, tempuhlt, total;
	float butuhbbm;
	
	cout << "Perhitungan biaya perjalanan" << endl;
	cout << "==============================" << endl;
	cout << "1. Harga sewa per hari \t\t: "; cin >> sewa;
	cout << "2. Jarak tujuan \t\t: "; cin >> jarak;
	cout << "3. Harga BBM per liter \t\t: "; cin >> hargabbm;
	cout << "4. Konsumsi BBM per liter \t: "; cin >> tempuhlt;
	
	// Perhitungan
	butuhbbm = jarak / tempuhlt;
	total = sewa + int(butuhbbm) * hargabbm;
	cout << "BBM dibutuhkan \t\t\t: " << butuhbbm << endl;
	cout << "==============================" << endl;
	cout << "Perkiraan total biaya \t\t: " << total << endl;
	
	return 0;
}
