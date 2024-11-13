#include <iostream>
#include <cstring> // untuk strcpy
using namespace std;

int main() {
	// ChatGPT
		char source[] = "Hello World";
		char destination[50]; // ukuran cukup untuk menampung string source
		
		strcpy(destination, source);
	
	cout << "string yang di salin : " << destination << endl;
	
	// Dosen
		char nama[30];
		char alamat[30];
		strcpy(nama, "Call Me Ryd");
		strcpy(alamat, "Janten, Baran, Klaten");
		
	cout << "1. Nama \t= " << nama << endl;
	cout << "2. Alamat \t= " << alamat << endl;
	return 0;
	
}
