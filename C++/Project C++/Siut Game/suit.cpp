// Suit

#include <iostream>
#include <cstdlib>
using namespace std;

int main () {
	int botR;
	string result, pil, player, bot, ulang = "y";
	
	system("cls");
	cout << "Mulai Game Suit <y/n> : "; cin >> pil;
	while (ulang == "y") {
		if (pil == "y") {
			system("cls");
			
			// Player Choose
			cout << "Pilih <semut/orang/gajah> \t: "; cin >> player;
			
			// Bot Choose
			botR = rand() % 3;		
			if (botR == 0) {
				bot = "semut";
			} else if (botR == 1) {
				bot = "orang";
			} else if (botR == 2) {
				bot = "gajah";
			}
			
			// system
			if (player == bot) {
				result = "SERI !";
			} else if (player == "semut") {
				result = (bot == "orang") ? "KALAH !" : "MENANG !";
			} else if (player == "gajah") {
				result = (bot == "semut") ? "KALAH !" : "MENANG !";
			} else if (player == "orang") {
				result = (bot == "gajah") ? "KALAH !" : "MENANG !";
			}
			
			system("cls");
			
			// output
			cout << "Player \t\t: " << player << endl;
			cout << "Computer \t: " << bot << endl;
			cout << "\tHasil " << result << endl;
			
			// ulang
			cout << "\nUlangi Permainan <y/n> : "; cin >> ulang;
		}
		system("cls");
		cout << "\n\nAMBATUKAAAAAAMMM !!!" << endl;
		cout << "  _______________   " << endl;
		cout << " / 	       |  _\\ " << endl;
		cout << "|	_______|__ / " << endl;
		cout << " \\_/\\_/          	" << endl;
	}
}











