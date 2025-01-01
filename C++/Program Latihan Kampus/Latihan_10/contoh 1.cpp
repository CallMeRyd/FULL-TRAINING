// Contoh 1

#include <iostream>
using namespace std;

int additional (int a, int b) {
	int c;
	c = a + b;
	return c;
}

int main () {
	int x = 5, y = 3;
	
	int hasil;
	
	hasil = additional (x, y);
	cout << "Hasil = " << hasil;
	
	return 0;
}
