// Latihan 13
// Bubble Sort (Contoh 2)

#include <iostream>
using namespace std;

int main() {
	int Nilai[] = {5, 2, 4, 3, 1};
	int jData = 5;
	int i, j, x;
	for (i = 0; i < jData; i++) {
		cout << "\nTahap : " << (i + 1) << endl;
		cout << "==================================\n";
		for (int j = i; j < jData; j++) {
			if(Nilai[i] > Nilai[j]) {
				x = Nilai[i];
				Nilai[i] = Nilai[j];
				Nilai[j] = x;
			}
			for (int a = 0; a < jData; a++) {
				cout << Nilai[a] << "\t";
			}
			cout << endl;
		}
	}
	return 0;
}
