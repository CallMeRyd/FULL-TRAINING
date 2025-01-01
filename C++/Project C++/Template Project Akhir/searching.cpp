// Searching

#include <iostream>
#include <string>

using namespace std;

struct Barang {
    string nama;
    int harga;
    string kategori;
    double diskonBarang;
};

int cariKategori(Barang barang[], string kategori, int jumlahBarang) {
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

int cariBarang(Barang barang[], string kataKunci, int jumlahBarang) {
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


int main() {
    Barang barang[] = {
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
    int jumlahBarang = sizeof(barang) / sizeof(barang[0]);
    int amount;
	double persenanDiskon, diskon = 0;
    string cpPremium, kataKunci, kategori;
    
    cout << "Masukkan Kategori	: "; cin >> kategori; // Plan GetLine
    
    cariKategori(barang, kategori, jumlahBarang);

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
              
        cout << "Masukkan Jenis Langganan Anda (tidak ada Langganan ketik 0) : "; cin >> cpPremium; // Plan GetLine
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
    

    return 0;
}
