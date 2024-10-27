#include<iostream>
using namespace std;

int main() {
	// Array
		int nilai[3] = {68, 89, 75}; // declarasi array
		cout << nilai[0] << endl; // menampilkan array nilai yang ber index 0
		cout << nilai[1] << endl;
		cout << nilai[2] << endl;
		cout << "===========================" << endl;
		
		//  bisa juga dengan cara
		string point[2]; // banyaknya nilai / .lenght -nya
		point[0] = "Bobon";
		point[1] = "Sugiyanto";
		cout << point[0] << endl; // menampilkan array nilai yang ber index 0
		cout << point[1] << endl;
		cout << "===========================" << endl;
		
	// sizeof (lenght)
		int a[] = {12, 13, 14, 15, 16};
		cout << "A = " << sizeof(a) / sizeof(*a) << endl; 
		
		// bisa juga dengan cara
		int b[] = {1, 2, 3, 4, 5, 6, 7};
		int jml_b = sizeof(b) / sizeof(*b);
		cout << "B = " << jml_b << endl;
		cout << "===========================" << endl;
		
	// menampilkan isi array
		int c[] = {10, 20, 30, 40, 50};
		int jml_c = sizeof(c) / sizeof(*c);
		
		for (int i = 0; i < jml_c; i++) {
			cout << i + 1 << ". C = " << c[i] << endl;
		}
		cout << "===========================" << endl;
		
	// array 1 dimensi
		// mengisi array di keybord
		int jml_d;
		cout << "Jumlah Index D : ";
		cin >> jml_d;
		
		int d[jml_d];
		
		for (int i = 0; i < jml_d; i++) {
			cout << "Masukkan Index ke-" << i <<" : ";
			cin >> d[i]; 
		}
		cout << "===========================" << endl;
		cout << "===========================" << endl;
		
		for (int i = 0; i < jml_d; i++) {
			cout << "Index ke-" << i <<" : " << d[i] << endl;
		}
}













