// Pertemuan 6
// contoh 9

#include <iostream>
using namespace std;

int main () {
	int a, b;
	
	for (a = 1; a <= 5; a++) {
		printf("\n");
		for (b = a; b <= 5; b++) {
			printf(" %d ", a);
		}
	}
	
	return 0;
}
