// Pertemuan 6
// contoh 14

#include <iostream>
using namespace std;

int main () {
	int bil;
	
	for (bil = 1; bil <= 10; ++bil) {
		if (bil == 6) {
			continue; // angka 6 di abaikan
		}
		
		cout << bil << endl;
	}
	
	return 0;
}
