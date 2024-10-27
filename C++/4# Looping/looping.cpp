#include<iostream>
using namespace std;

int main() {
	// Looping
	/*  +> for
		+> while
		+> do - while
		+> foreach (array)
	*/
	
	// strukture for
	// for (int a = 1; a <= 10; a++) {}
		int awal, akhir;
						
		cout << "Mulai berapa : ";
		cin >> awal;
		cout << "Sampai berapa : ";
		cin >> akhir;
	
		for (int i = awal; i <= akhir; i++) {
			cout << i << " Hello World" << endl;
			}
}
