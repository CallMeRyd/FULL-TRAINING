// Readable

#include <iostream>
#include <string>
#include <vector>
using namespace std;

struct Account {
	string username;
	string password;
};

struct Barang {
    string nama;
    int harga;
    string kategori;
    double diskonBarang;
};

int cariKategori(vector<Barang> barang, string kategori, int jumlahBarang) {
    bool ditemukan = false;
    for (int i = 0; i < jumlahBarang; i++) {
        if (barang[i].kategori.find(kategori) != string::npos) {
            cout << "Kategori ditemukan : " << endl;
            cout << "Nama		: " << barang[i].nama << endl;
            cout << "Harga		: Rp." << barang[i].harga << endl;
            cout << "Kategori	: " << barang[i].kategori << endl << endl;
            ditemukan = true;
        }
    }
    if (!ditemukan) {
        cout << "Kategori tidak ditemukan." << endl;
    }
}

int cariBarang(vector<Barang> barang, string kataKunci, int jumlahBarang) {
    for (int i = 0; i < jumlahBarang; i++) {
        if (barang[i].nama.find(kataKunci) != std::string::npos) {
            return i; // Barang ditemukan
        }
    }
    return -1; // Barang tidak ditemukan
}

void totalBelanja(int priceAmount, double diskon) {
	// Harga Awal			
	cout << "Harga awal barang \t: Rp." << priceAmount << endl;
	        
	// Diskon
	cout << "Diskon yang didapat \t: " << diskon << "%" << endl; 			   
	diskon /= 100;
	double totalDiskon = diskon * priceAmount;
	int totalAkhir = priceAmount - totalDiskon;			
	cout << endl;
	cout << "Harga Akhir \t\t: Rp." << totalAkhir << endl;
}

void prosesPilihanMenu(vector<Barang> barang, vector<Barang> keranjang, int pilihan, int jumlahBarang, double diskon) {
	int amount;
	string cpPremium, kataKunci, kategori;
	if (pilihan == 1) {
		cout << "Masukkan Kategori	: "; cin >> kategori; // Plan GetLine  
    	cariKategori(barang, kategori, jumlahBarang);	
	} else if (pilihan == 2) {
		cout << "Masukkan kata kunci pencarian	: "; cin >> kataKunci; // Plan GetLine
		int indeks = cariBarang(barang, kataKunci, jumlahBarang);
		
		if (indeks != -1) {
	        cout << "Barang ditemukan: " << endl;
	        cout << "Nama		: " << barang[indeks].nama << endl;
	        cout << "Harga		: Rp." << barang[indeks].harga << endl;
			if (barang[indeks].diskonBarang != 0) {
				barang[indeks].harga -= (barang[indeks].harga * (barang[indeks].diskonBarang/100));	
	        	cout << "Harga		: Rp." << barang[indeks].harga << " (DISKON " << barang[indeks].diskonBarang << "% )" << endl;	
			}
	        cout << "Kategori	: " << barang[indeks].kategori << endl;
	        cout << "Banyak Barang 	: "; cin >> amount;
	        int priceAmount = barang[indeks].harga * amount;
	              
	        cout << "Masukkan Jenis Langganan Anda (tidak ada Langganan ketik 0) : "; cin >> cpPremium;
	        cout << endl;
			if (cpPremium == "Gold") {
				if (amount >= 20) {
					diskon += 25;
				} else if (amount < 14 && amount >= 15) {
					diskon += 15;
				} else if (amount <= 13) {
					diskon += 10;
				}
				totalBelanja(priceAmount, diskon);
			} else if (cpPremium == "Silver") {
				if (amount >= 20) {
					diskon += 15;
				} else if (amount < 14 && amount >= 15) {
					diskon += 10;
				} else if (amount <= 13) {
					diskon += 5;
				}			
				totalBelanja(priceAmount, diskon);
			} 		     
	    } else {
	        cout << "Barang tidak ditemukan." << endl;
	    }	
	}
}


int main() {
	vector<Account> account = {
		// Username					Password
		{"Admin", 					"admin123"},
	};
	
	vector<Barang> keranjang;
	
    vector<Barang> barang = {
    	//	Nama					Harga		Kategori		Diskon
        {"Pemrograman C++", 		100000, 	"Buku",			50		},
        {"Potatos Balado",	 		10000, 		"Makanan", 		0		},
        {"Abon Sapi",		 		35000, 		"Makanan", 		0		},
        {"Pilus Barbaque",	 		5000, 		"Makanan", 		0		},
        {"Fanta Stroberi",	 		5000, 		"Minuman", 		0		},
        {"Fanta Leci",	 			5000, 		"Minuman", 		0		},
        {"Good Day",		 		6000, 		"Minuman", 		0		},
        {"Infinix Hot 11",			1800000, 	"Elektronik", 	0		},
        {"Redmi NOX 12",			2500000, 	"Elektronik", 	0		},
        {"Obeng Multi task",		5000, 		"Alat", 		0		},
        {"Kaos Polos", 				50000, 		"Pakaian", 		0		}
    };
    
    int pilihan, jumlahBarang = barang.size();   
	double persenanDiskon, diskon = 0;
    string lanjut, usr, pass;
    char ulangi;
    
    bool val; 
	system("cls");
	do {
		cout << "Masukkan Username : "; cin >> usr;
		cout << "Masukkan Password : "; cin >> pass;
	
		for (int i = 0; i < account.size(); i++) {
			if (usr == account[i].username && pass == account[i].password) {
				val = true;
				do {
					system("cls");
					cout << "==============================================" << endl;
				    cout << "Daftar Barang : " << endl;
				    
				    // Menampilkan Daftar Barang
				    for (int i = 0; i < barang.size(); i++) {
				    	cout << i + 1 << ". " << barang[i].nama << "\t\tRp." << barang[i].harga;
				    	if (barang[i].diskonBarang != 0) {
				    		cout << "\t\t" << barang[i].diskonBarang << "%" << endl;
						} else {
							cout << endl;
						}
					}
					cout << "==============================================" << endl;
					cout << endl;
					
					// Pilihan 1 / 2 (Kategori / Pilih barang)
					cout << "1. Cari Kategori." << endl;
					cout << "2. Pilih Barang." << endl;
					
					/* Keranjang (Soon) */
					
					cout << "Pilih Menu : "; cin >> pilihan;
					prosesPilihanMenu(barang, keranjang, pilihan, jumlahBarang, diskon);					
					cout << "Ulangi Berbelanja : "; cin >> lanjut;
					
				} while (lanjut == "y");
			} else {
				cout << "Username / Password Anda salah !" << endl;
				cout << "Ulangi <y/n> : "; cin >> ulangi;
				if (ulangi == 'y') {
					val = false;
				}
			}
		}    
	} while (val == false);
    

    return 0;
}
