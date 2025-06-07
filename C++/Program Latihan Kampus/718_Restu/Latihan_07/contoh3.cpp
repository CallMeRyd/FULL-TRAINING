// Contoh 3
// Array sebagai Parameter

#include <iostream>
using namespace std;

void  printarray (int arg[], int lenght) {
	for (int i = 0; i < lenght; i++) {
		cout << arg[i] << " ";
	}
	cout << "\n";
}

int main () {
	int firstArray[] = {5, 10, 15};
	int secondArray[] = {2, 4, 6, 8, 10};
	
	printarray (firstArray, 3);
	printarray (secondArray, 5);
	
	return 0;
}
