// Searching

#include <iostream>
#include <string>

using namespace std;

struct Barang {
    string nama;
    int harga;
    string kategori;
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


int main() {
    Barang barang[] = {
        {"Buku Pemrograman C++", 	100000, 	"Buku"},
        {"Potatos Balado",	 		10000, 		"Makanan"},
        {"Abon Sapi",		 		35000, 		"Makanan"},
        {"Pilus Barbaque",	 		5000, 		"Makanan"},
        {"Fanta Stroberi",	 		5000, 		"Minuman"},
        {"Fanta Leci",	 			5000, 		"Minuman"},
        {"Good Day",		 		6000, 		"Minuman"},
        {"Infinix Hot 11",			1800000, 	"Elektronik"},
        {"Redmi NOX 12",			2500000, 	"Elektronik"},
        {"Obeng Multi task",		5000, 		"Alat"},
        {"Kaos Polos", 				50000, 		"Pakaian"}
    };
    int jumlahBarang = sizeof(barang) / sizeof(barang[0]);
    
    string kategori;
    cout << "Masukkan Kategori	: ";
    cin >> kategori;

    cariKategori(barang, kategori, jumlahBarang);

    string kataKunci;
    cout << "Masukkan kata kunci pencarian	: ";
    cin >> kataKunci;
	
    int indeks = cariBarang(barang, kataKunci, jumlahBarang);

    if (indeks != -1) {
        cout << "Barang ditemukan: " << endl;
        cout << "Nama		: " << barang[indeks].nama << endl;
        cout << "Harga		: Rp." << barang[indeks].harga << endl;
        cout << "Kategori	: " << barang[indeks].kategori << endl;
   		
		int amount;
        cout << "Banyak Barang : "; cin >> amount;
        
        string cpPremium;
        cout << "Masukkan Jenis Langganan Anda : "; cin >> cpPremium;
        
		// Diskon
		// Gold & Silver
		/* 
		Gold
			Jumlah Brang : 20 => Diskon 25%  
			Jumlah Brang : 15 => Diskon 15%
			Jumlah Brang : 13 => Diskon 10%
		
		Silver
			Jumlah Brang : 20 => Diskon 15%
			Jumlah Brang : 15 => Diskon 10%
			Jumlah Brang : 13 => Diskon 5%
		*/
		
		double diskon = 0;
		if (cpPremium == "Gold") {
			if (amount >= 20) {
				diskon += 25;
			} else if (amount < 14 && amount >= 15) {
				diskon += 15;
			} else if (amount <= 13) {
				diskon += 10;
			}
		} else if (cpPremium == "Silver") {
			if (amount >= 20) {
				diskon += 15;
			} else if (amount < 14 && amount >= 15) {
				diskon += 10;
			} else if (amount <= 13) {
				diskon += 5;
			}
		}		
        
        // harga barang * jumlah barang
        int priceAmount = barang[indeks].harga * amount;
        cout << "Harga awal barang \t: " << priceAmount << endl;
        
        // Diskon
        cout << "Diskon yang didapat \t: " << diskon << "%" << endl;
        
        int totalAkhir;
		double totalDiskon;
		diskon /= 100;
		
		totalDiskon = diskon * priceAmount;
		totalAkhir = priceAmount - totalDiskon;
		
		cout << endl;
		cout << "Harga Akhir \t\t: " << totalAkhir << endl;
        
    } else {
        cout << "Barang tidak ditemukan." << endl;
    }
    

    return 0;
}
