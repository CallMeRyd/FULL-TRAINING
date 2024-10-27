#include<iostream>
using namespace std;

int main() {
	int jml_index, maks, min, nilai;
	cout <<  "Banyaknya Nilai : ";
	cin >> jml_index;
	
	for (int i = 1; i <= jml_index; i++) {
		cout << "Masukkan nilai Ke-" << i << " : ";
		cin >> nilai;
		
		if (i == 1) {
			min = nilai;
			maks = nilai;
		} else {
			if (nilai < min) {
				min = nilai;
			}			
			if (nilai > maks) {
				maks = nilai;
			}
		}					
	}
	cout << "Nilai Maksimal \t:" << maks << endl;
	cout << "Nilai Minimum \t:" << min << endl;
}
