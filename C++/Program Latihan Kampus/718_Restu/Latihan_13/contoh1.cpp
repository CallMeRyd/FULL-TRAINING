// Latihan 13
// Bubble Sort

#include <iostream>
using namespace std;

int data[10],data2[10];
int n;
void tukar(int a, int b) {
	int t;
	t = data[b];
	data[b] = data[a];
	data[a] = t;
}

void bubble_sort() {
	for (int i = 1; i < n; i++) {
		cout << "\nTahap : " << (i) << "\n";
		cout << "=================================\n";
		
		for (int j = 0; j < n - i; j++)	{
			if(data[j] > data[j + 1]) tukar(j, j + 1);
			
			// mencetak data
			for (int x = 0; x < n; x++) {
				cout << data[x] << "\t";
			}
			cout << endl;
		}
	}
}

int main () {
	cout << "===PROGRAM BUBBLE SORT===" << endl;
	
	// Input data
	cout << "Masukkan Jumlah Data : "; cin >> n;
	for(int i = 0; i < n; i++) {
		cout << "Masukkan data ke-" << (i + 1) << " : "; cin >> data[i];
		data2[i] = data[i];
	}
	
	bubble_sort();
	
	return 0;
}
