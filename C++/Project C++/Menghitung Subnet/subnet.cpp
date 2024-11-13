#include <iostream>
#include <cmath>
using namespace std;

int main () {
	int bit = 32, prefix, host, bitHost, jmlIP;
	
	// prefix C class
	cout << "Maks (/32) & Min (/8)\nMasukkan prefix : /"; cin >> prefix;
	
	bitHost = bit - prefix;
	jmlIP = pow(2, bitHost);
	host = pow(2, bitHost) - 2;
	
	cout << jmlIP;
}
