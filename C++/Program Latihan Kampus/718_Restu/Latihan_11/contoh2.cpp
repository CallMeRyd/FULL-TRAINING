// Contoh 2
// Overload Function

#include <iostream>
using namespace std;

int devide (int a, int b) {
	return (a / b);
}

int devide (float a, float b) {
	return (a / b);
}

int main () {
	int x = 5, y = 2;
	float n = 5.0, m = 2.0;
	
	cout << devide(x, y) << endl;
	cout << devide(n, m) << endl; 
	
	return 0;
}
