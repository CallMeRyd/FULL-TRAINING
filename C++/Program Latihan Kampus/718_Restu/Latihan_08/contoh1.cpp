// Contoh 1
// Struct / Object

#include <iostream>
#include <sstream>
#include <string>
using namespace std;

struct movies_t {
	string title;
	int year;
} mine, yours; // Sebagai variabel

void printMovie (movies_t movie) { // sebagai argument
	cout << movie.title;
	cout << " (" << movie.year << ") \n";
}

int main () {
	string mystr;
	mine.title = "Avenger Infinity War";
	mine.year = 2021;
	
	cout << "Enter title : "; getline (cin, yours.title);
	cout << "Enter year : "; getline (cin, mystr);
	stringstream(mystr) >> yours.year;
	
	cout << "My favorite movie is : \n";
	printMovie (mine);
	cout << "And yours is : \n";
	printMovie (yours);
	
	return 0;
}


















