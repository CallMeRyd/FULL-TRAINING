// Contoh 3
// defult values in function

#include <iostream>
using namespace std;

int devide (int a, int b = 2) {
	int r;
	r = a / b;
	return r;
}

int main () {
	cout << devide(12) << endl;
	cout << devide(20, 4) << endl;
	
	return 0;
}
