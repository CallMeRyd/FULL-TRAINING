#include <iostream>
// Membuat namespace & Menampilkannya

namespace bill {
	// Menampilkan function
	void cetak(int a) {
		std::cout << a << std::endl;
	}
}
namespace huruf {
	// Menampilkan function
	void cetak(std::string a) {
		std::cout << a << std::endl;
	}
}

using namespace huruf; 
using namespace bill;

int main() {
	cetak(100);
	cetak("Hello World!!");
	// Catatan :
		/* 
		cetak() disini jadi bisa di isi dengan 
		string / integer.
		*/
		
	return 0;
}



// Catatan :
	/*
	Jika ingin mengtahui lebih tentang Library bisa kunjungi 
	Website di bawah ini 
	
	cplusplus.com
	 > reference > clibrary > ...
	*/












