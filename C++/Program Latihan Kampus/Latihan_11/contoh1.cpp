// contoh 1
// Prototyping

#include <iostream>
using namespace std;

void odd (int a);
void event (int a);

int main () {
	int i;
	while (i != 0) {
		cout << "Type a number (0 to exit) : "; cin >> i;
		odd (i); 
	}
	
	return 0;
}

void odd (int a) {
	if ((a % 2) != 0) {
		cout << "Number is odd.\n\n";
	} else {
		event(a);
	}
}

void event (int a) {
	if ((a % 2) == 0) {
		cout << "Number is even.\n\n";
	} else {
		odd(a);
	}
}








