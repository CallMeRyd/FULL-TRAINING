// Contoh 1
// Array 1D

#include <iostream>
using namespace std;

int billy [] = {16, 2, 77, 40, 12071};
int result = 0;

int main () {
	for(int i = 0; i < 5; i++) {
		result += billy[i];
	}
	
	cout << result;
	
	return 0;
}
