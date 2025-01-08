// testting

#include <iostream>
#include <vector>
#include <string>
using namespace std;

struct Barang {
    string nama;
    int harga;
    string kategori;
    double diskonBarang;
};

struct Account {
	string username;
	string password;
};

struct Keranjang {
	string nama;
	int harga;
    double diskonBarang;
};

int cariBarang(vector<Barang> barang, string kataKunci, int jumlahBarang) {
    for (int i = 0; i < jumlahBarang; i++) {
        if (barang[i].nama.find(kataKunci) != std::string::npos) {
            return i; // Barang ditemukan
        }
    }
    return -1; // Barang tidak ditemukan
}

int main () {
	vector<Account> account = {
		// Username 		Password
		{"Susup", 			"****"},
	};
	
	string lanjut, usr, pass;
	vector<Barang> barang = {
	    //	Nama					Harga		Kategori		Diskon
	    {"Pemrograman C++	", 		100000, 	"Buku",			50		},
	    {"Potatos Balado	",	 	10000, 		"Makanan", 		0		},
	    {"Abon Sapi		",			35000, 		"Makanan", 		0		},
	    {"Pilus Barbaque	", 		5000, 		"Makanan", 		0		},
	    {"Fanta Stroberi	", 		5000, 		"Minuman", 		0		},
	    {"Fanta Leci		",		5000, 		"Minuman", 		0		},
	    {"Good Day		", 			6000, 		"Minuman", 		0		},
	    {"Infinix Hot 11	",		1800000, 	"Elektronik", 	0		},
	    {"Redmi NOX 12		",		2500000, 	"Elektronik", 	0		},
	    {"Obeng Multi task	",		5000, 		"Alat", 		0		},
	    {"Kaos Polos		", 		50000, 		"Pakaian", 		0		},
	};
	int jumlahBarang = barang.size();
	
	vector<Keranjang> keranjang;
	
	
	bool val; 
	system("cls");
	do {
		cout << "Masukkan Username : "; cin >> usr;
		cout << "Masukkan Password : "; cin >> pass;
	
		for (int i = 0; i < account.size(); i++) {
			if (usr == account[i].username && pass == account[i].password) {
				do {
				    cout << "Daftar Barang : " << endl;
				    
				    for (int i = 0; i < barang.size(); i++) {
				    	cout << i + 1 << ". " << barang[i].nama << "\t\tRp." << barang[i].harga;
				    	if (barang[i].diskonBarang != 0) {
				    		cout << "\t\t" << barang[i].diskonBarang << "%" << endl;
						} else {
							cout << endl;
						}
					}
					
					string kataKunci;
					
					cout << "Masukkan kata kunci pencarian	: "; cin >> kataKunci;
					int indeks = cariBarang(barang, kataKunci, jumlahBarang);					
					Keranjang keranjangBaru;					
					if (indeks != -1) {
					    cout << "Barang ditemukan: " << endl;
				        cout << "Nama		: " << barang[indeks].nama << endl;
				        cout << "Harga		: Rp." << barang[indeks].harga << endl;
						if (barang[indeks].diskonBarang != 0) {
							barang[indeks].harga -= (barang[indeks].harga * (barang[indeks].diskonBarang/100));	
				        	cout << "Harga		: Rp." << barang[indeks].harga << " (DISKON " << barang[indeks].diskonBarang << "% )" << endl;	
						}
				        cout << "Kategori	: " << barang[indeks].kategori << endl;
				        
				        if (keranjang.size() == 0) {
					        keranjang[0].nama = keranjang[indeks].nama;
							keranjang[0].harga = keranjang[indeks].harga;
							keranjang[0].diskonBarang = keranjang[indeks].diskonBarang;	
						} else {
							keranjangBaru.nama = keranjang[indeks].nama;
							keranjangBaru.harga = keranjang[indeks].harga;
							keranjangBaru.diskonBarang = keranjang[indeks].diskonBarang;
							keranjang.push_back(keranjangBaru); 
						}
				        			
						for (int i = 0; i < keranjang.size(); i++) {
							cout << i + 1 << ". " << keranjang[i].nama << endl;
						}
						
				    } else {
				        cout << "Barang tidak ditemukan." << endl;
				    }
					
					cout << "Lanjutkan <y/n> : "; cin >> lanjut;
					val = true;
				} while (lanjut == "y");
			} else {
				cout << "Username / Password Anda salah !" << endl;
				val = false;
			}
		}    
	} while (val == false);
		
	return 0;
}













