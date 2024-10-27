#include<iostream>
#include<string>

struct Mahasiswa {
	std::string nama;
	std::string nim;
	int nilai;
};

Mahasiswa createMhs(std::string nama, std::string nim, int nilai) {
	Mahasiswa ke1;
	ke1.nama = nama;
	ke1.nim = nim;
	ke1.nilai = nilai;
	return ke1;
}


int main() {
	Mahasiswa ke2;
	ke2.nama = "Rydd";
	ke2.nim = "0213244524";
	ke2.nilai = 85;
	
	Mahasiswa ke3 = createMhs("Danu", "32453257", 65);
	Mahasiswa ke4 = createMhs("Keysya", "32453546", 80);
	
	std::cout << "nama \t= " << ke3.nama << "\n";
	std::cout << "nim \t= " << ke3.nim << "\n";
	std::cout << "nilai \t= " << ke3.nilai << "\n";
	
	// pemisah
	std::cout << "===================================" << "\n";
	// pemisah
	
	
	
	return 0;
}
