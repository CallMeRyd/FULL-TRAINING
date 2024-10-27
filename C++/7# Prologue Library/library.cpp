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

using namespace huruf; // bisa menggunakan ini

int main() {
	bill::cetak(100); // bisa seperti ini juga
	cetak("Hello World!!");
	
	return 0;
}

