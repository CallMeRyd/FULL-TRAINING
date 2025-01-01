// Contoh 2
// Passing parameters by reference

#include <iostream>
using namespace std;

void duplicate (int& a, int& b, int& c) {
	a *= 2;
	b *= 2;
	c *= 2;
}

int main () {
	int x = 2, y = 3, z = 5;
	
	duplicate (x, y, z);
	
	cout << "x \t= " << x << endl;
	cout << "y \t= " << y << endl;
	cout << "z \t= " << z << endl;
	
	return 0;
}
