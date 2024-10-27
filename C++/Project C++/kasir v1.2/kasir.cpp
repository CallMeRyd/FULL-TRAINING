#include<iostream>
using namespace std;

int main() {
	int jml_item;
	int total;	
	
	cout << "Isikan jumlah item : ";
	cin >> jml_item;
	int harga[jml_item];
	
	// pembatas
	cout << "=====================================" << endl;
	// pembatas
	
	for (int a = 0; a < jml_item; a++) {
		cout << "Harga item  ke-" << a + 1 << " : Rp. ";
		cin >> harga[a];
	}
	
	// pembatas
	cout << "=====================================" << endl;
	// pembatas
			
	for (int i = 0; i < jml_item; i++) {
		cout << "Item " << i + 1 << " : Rp. " << harga[i] << endl;
		total += harga[i];
	}
	
	// pembatas
	cout << "=====================================" << endl;
	// pembatas
	
	cout << "Total Harga = Rp. " << total << endl;
}
