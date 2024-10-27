#include<iostream>
using namespace std;


// Function
// 	// Function Declaration
// 		// sintaks
// 		/*
// 			return_type function_name(parameter_list);
// 		*/
// 		// Contoh :
//// 			int tambah (int, int);
// 			
// 	// Function definition
// 		// sintaks
// 		/* 
//			return_type function_name(parameter_list) {
// 				/isi function/
//			}
//		*/ 
//		// Contoh :
////			int tambah(int a, int b) {
////				return a + b;
////			}

// Deklarasi function
int tambah (int a, int b) {
	return a + b;
}

 int main() {
 	int x, y;
 	cout << "Angka pertama \t\t=  ";
 	cin >> x;
 	cout << "Angka kedua \t\t=  ";
 	cin >> y;
 	
 	// memanggil function tambah
 	int hasil = tambah(x, y);
 	
 	cout << "Hasil Penjumlahan \t=  " << hasil << "\n";
 	
 	return 0;
 }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
