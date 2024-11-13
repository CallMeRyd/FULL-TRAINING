// Pertemuan 6
// contoh 12

#include <iostream>
using namespace std;

int main () {
	int bil = 1;
	
	do {
		if (bil >= 6) {
			break;
		}
		cout << bil << endl;
	} while (bil++);
	
	return 0;
}
