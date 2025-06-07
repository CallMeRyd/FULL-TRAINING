// Latihan 14
// Linier Search

#include <iostream>
using namespace std;

int linearSearch(const int *vArray, const int vJmlData, const int vCari) {
	bool notFound = true;
	int i = 0;
	
	while(i < vJmlData && notFound) {
		if (vCari != vArray[i]) {
			i++;
		} else {
			notFound = false;
		}
	}
	
	if (!notFound) {
		return i;
	} else {
		return -i;
	}
}

int main() {
	int data[] = { 57, 3, 502, 99, 1007, 2, 9, 8 };
	int jmlData = sizeof(data) / sizeof(int); 
	int jmlKetemu = 0;
	
	cout << "Data yang dicari : "; cin >> jmlKetemu;
	int i = linearSearch(data, jmlData, jmlKetemu);
	
	if (i == -1) {
		cout << "Data tidak ditemukan !\n\n";
	} else {
		cout << "Data ditemukan pada posisi index ke-" << i << endl;
	}
	
	return 0;
}









