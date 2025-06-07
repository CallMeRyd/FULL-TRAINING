// Contoh 4
// Variabel Global

#include <iostream>
using namespace std;

int g;

int perjumlahan () {
	// Local Variabel declaration :
	int a, b;
	
	// Actual initialization
	a = 10;
	b = 20;
	g = a + b;
	
	cout << g;
}
