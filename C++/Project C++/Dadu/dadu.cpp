// Dadu

#include <iostream>
#include <cstdlib>
using namespace std;

int main () {
	int player, bot;
	string result, ulang = "y", pil;
	
	cout << "Mulai Bermain <y/n> : "; cin >> pil;
	
	if (pil == "y") {
		system("cls");
		while (ulang == "y") {
			player = (rand() % 6) + 1;
			bot = (rand() % 6) + 1;	
			if (player == bot) {
				result = "Hasil Seri !";
			} else {
				result = (player > bot) ? "kamu Menang !" : "Kamu Kalah !";
			}
				
			system("cls");
			cout << "Player \t: " << player << endl;
			cout << "bot \t: " << bot << endl;
			cout << result << endl;
			cout << "\nUlangi Lagi <y/n> : "; cin >> ulang;	
		}
	}
	system("cls");
	cout << "Semoga hari mu menegangkan !!!" << endl;
}
