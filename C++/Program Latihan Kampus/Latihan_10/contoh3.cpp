// Contoh 3
// Passing parameters by reference
// More than one returning value

#include <iostream>
using namespace std;

void prevNext (int x, int& prev, int& next) {
	prev = x - 1;
	next = x + 1;
}

int main () {
	int x = 100, y, z;
	prevNext (x, y, z);
	cout << "Previous = " << y << ", Next = " << z;
	
	return 0;
}
