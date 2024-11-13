// Konversi Rupiah ke Dollar

#include <iostream>
using namespace std;

// var
double rupiah, dollar, ringgit, yen, pound;

// Function
double rupDol(double rupiah) {
	double dollar = rupiah / 15000;
	return dollar;
}
double rupRing(double rupiah) {
	double ringgit = rupiah / 3300;
	return ringgit;
}
double rupYen(double rupiah) {
	double yen = rupiah / 130;
	return yen;
}
double rupPound(double rupiah) {
	double pound = rupiah / 19000;
	return pound;
}

// Menampilkan Function
void viewRupDol (double rupiah) {
	dollar = rupDol(rupiah);
	cout << dollar << " $" << endl;
}
void viewRupRing (double rupiah) {
	ringgit = rupRing(rupiah);
	cout << ringgit << " Ringgit" << endl;
}
void viewRupYen (double rupiah) {
	yen = rupYen(rupiah);
	cout << yen << " Yen" << endl;
}
void viewRupPound (double rupiah) {
	pound = rupPound(rupiah);
	cout << pound << " Pound" << endl;
}


int main() {
	int pilihan;
	string ulang = "y";
	
	// Menampilkan
	while (ulang == "y") {
		cout << "\n=========================================" << endl;
		cout << "======= Konversi Rupiah Ke Dollar =======" << endl;
		cout << "=========================================" << endl;
		
		cout << "+> 1 $ \t\t= Rp. 15.000,00" << endl;
		cout << "+> 1 Ringgit \t= Rp. 3.300,00" << endl;
		cout << "+> 1 yen \t= Rp. 130,00" << endl;
		cout << "+> 1 Ringgit \t= Rp. 19.000,00" << endl;
		
		cout << "=========================================" << endl;
		
		cout << "1. Rupiah -> Dollar." << endl;
		cout << "2. Rupiah -> Ringgit." << endl;
		cout << "3. Rupiah -> Yen." << endl;
		cout << "4. Rupiah -> Pound.\n" << endl;
		cout << "pilih konversi : "; cin >> pilihan;
		
		if (pilihan == 1) {
			cout << "\n======= Rupiah ke Dollar =======" << endl;
			cout << "Masukkan Rupiah : Rp. "; cin >> rupiah;
			viewRupDol(rupiah);		
		} else if (pilihan == 2) {
			cout << "\n======= Rupiah ke Ringgit =======" << endl;
			cout << "Masukkan Rupiah : Rp. "; cin >> rupiah;
			viewRupRing(rupiah);		
		} else if (pilihan == 3) {
			cout << "\n======= Rupiah ke Yen =======" << endl;
			cout << "Masukkan Rupiah : Rp. "; cin >> rupiah;
			viewRupYen(rupiah);
		} else if (pilihan == 4) {
			cout << "\n======= Rupiah ke Pound =======" << endl;
			cout << "Masukkan Rupiah : Rp. "; cin >> rupiah;
			viewRupPound(rupiah);
		} else {
			cout << "\nAngka Yang Anda Pilih Tidak Ada!!" << endl;
		}
		cout << "\n Ulangi konversi <y/n> : "; cin >> ulang;
	}
	cout << "\n\n     ==================================     " << endl;
	cout << " ============================================ " << endl;
	cout << "==== Thanks for using this simple Program ====" << endl;
	cout << " ============================================ " << endl;
	cout << "     ==================================     \n\n\n" << endl;

	return 0;
}
