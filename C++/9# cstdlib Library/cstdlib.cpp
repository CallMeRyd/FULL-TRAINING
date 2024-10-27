#include <iostream>
#include <cstdlib>

int main() {
	// rand (Random Angka)
		int v1 = rand() % 100; // v1 jangkauan 0 sampai 99
		int v2 = rand() % 100 + 1; // v2 jangkauan 1 sampai 100
		int v3 = rand() % 30 + 1985; // v3 jangkauan 1985-2014
		
		std::string ulang = "y";
		while (ulang == "y") {
			std::cout << rand() % 100 << "\n";
			std::cout << "<y/n>"; std::
			
			cin >> ulang;
		}
		
		for (int i = 0; i <= 5; i++) {
			std::cout << rand() % 20 << "\n";
		}
		
	// ME TIME ::	
	int s = 100;
	std::string c;
	
	c = (s == 100) ? "Yes" : "No";
	std::cout << c << "\n";
}
