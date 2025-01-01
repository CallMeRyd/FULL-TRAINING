// Latihan 12
// Factorial calculation

#include <iostream>
using namespace std;

long factorial (long a) {
	if (a > 1) {
		return (a * factorial (a - 1));
	} else {
		return (1);
	}
}

int main () {
	long a;
	
	cout << "Type a number : "; cin >> a;
	cout << "!" << a << " = " << factorial (a);
	
	return 0;
}

