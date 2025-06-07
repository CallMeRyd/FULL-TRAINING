// contoh 5

#include <iostream>
using namespace std;

int main () {
	int a = 5, b = 6, c = 7, d = 10;
	float hasil[5];
	
	hasil[0] = a + b * c;
	hasil[1] = a + b * c - d;
	hasil[2] = a / b + c * d;
	hasil[3] = (a + b) * c - d;
	hasil[4] = a * b / c + d;
	
	for (int i = 0; i < 5; i++) {
		cout << hasil[i] << endl;
	}
	
	
	return 0;
	
}
