import random


# DataBase
users = {
	"admin": "123",
	"arkon": "plergun"
}

chatbot_db = {
  "hai": "Halo juga! Ada yang bisa saya bantu?",
  "halo": "Hai! Senang bisa berbincang denganmu.",
  "apa kabar": "Saya baik-baik saja, terima kasih sudah bertanya!",
  "jadwal": "Ini jadwal Anda:\n1. Penjas\n2. Matematika\n3. Bahasa Indonesia\n4. PPKn",
  "terima kasih": "Sama-sama! Senang bisa membantu.",
  "siapa kamu": "Saya adalah chatbot sederhana yang dibuat untuk membantu Anda.",
  "bantuan": "Saya bisa menjawab pertanyaan tentang jadwal, kabar, dan informasi umum lainnya. Ketik 'keluar' untuk mengakhiri.",
  "lokasi": "Saya ada di mana-mana dan tidak di mana-mana pada saat yang sama. Saya adalah program komputer!",
  "cuaca": "Maaf, saya tidak memiliki akses ke data cuaca real-time.",
  "usia": "Saya tidak memiliki usia, saya adalah program komputer."
}





# Function
def login():
	print ("===-- Login --===")
	max_percobaan = 3
	percobaan = 0

	while percobaan < max_percobaan :
		username = input("Masukkan Username \t: ")
		password = input("Masukkan Password \t: ")

		if username in users and users[username] == password :
			print (f"\nLogin Berhasil !\nHai '@{username.upper()}' Selamat Datang !\n")
			pilihan()
			return
		else :
			print ("\nUsename atau Password salah !!!")
			percobaan += 1
			print ("sisa Percobaan : ", max_percobaan - percobaan, "\n")

	print ("Percobaan Anda Telah Habis !")




def chatbot():
  print("\n\n====================================")
  print("|   Selamat Datang di Chatbot!     |")
  print("====================================")
  print("Ketik 'keluar' atau 'exit' untuk mengakhiri percakapan.")

  while True:
    user_input = input("\nAnda: ").strip().lower() # Mengambil input, menghapus spasi, dan mengubah ke huruf kecil

    if user_input == "keluar" or user_input == "exit":
      print("Chatbot: \nSampai jumpa! Semoga harimu menyenangkan.\n")
      pilihan()
      break
    elif user_input in chatbot_db:
      print(f"Chatbot: \n{chatbot_db[user_input]}\n")
    else:
      print("Chatbot: \nMaaf, saya tidak mengerti. Bisakah Anda mengatakannya dengan cara lain atau menanyakan hal lain?\n")




def beasiswa():
	nama = input("\nMasukkan Nama Anda \t: ")
	ipk = input("Masukkan IPK Anda \t: ")

	if float(ipk) >= 3 :
		hasil = "berhasil mendapatkan"
	else :
		hasil = "gagal mendapatkan"

	print ("\n\n======================================================")
	print ("Hallo " + nama + ", Anda " + hasil + " Beasiswa !!!")
	print ("======================================================")

	back = input ("\n'Kembali... <y/n>': ")
	if back == "y":
		pilihan()
		return



def average():
	ulang = "y"
	while ulang == "y" :
		nilai1_str = input("\nMasukkan nilai Basis Data \t\t\t\t\t: ")
		nilai2_str = input("Masukkan nilai Komputer Grafis \t\t\t: ")
		nilai3_str = input("Masukkan nilai Pemrogramman Dasar \t: ")

		try:
			nilai1 = float(nilai1_str)
			nilai2 = float(nilai2_str)
			nilai3 = float(nilai3_str)
		except ValueError:
			print ("\nMasukkan Angka !!!")
			continue

		average = (nilai1 + nilai2 + nilai3) / 3

		print (f"\nNilai rata-rata Anda adalah {average:.2f}")

		if float(average) <= 75 :
			print ("\n=======================================================================")
			print (f"Karena nilai rata-rata Anda {average:.2f} maka Anda harus MENGULANG !!!")
			print ("======================================================================")
		else :
			print ("\n======================================")
			print ("Selamat Anda lulus Semester ini !!")
			print ("======================================")

		ulang = input ("\n'Ulang perhitungan <y/n>' : ").lower()

	if ulang == "n":
		pilihan()



def pilihan():
  while True: # Menggunakan loop tak terbatas, akan dihentikan dengan 'break' atau 'exit()'
    print ("\n=======================")
    print ("=====-- Pilihan --=====")
    print ("=======================")
    print ("1. Beasiswa")
    print ("2. Rata-rata")
    print ("3. Hitung luas geometri")
    print ("4. ChatBot")
    print ("5. Kalkulator")
    print ("6. Games")
    print ("7. Exit")
        
    pil = input("Pilihlah nomer yang ingin di pilih : ")
        
    try:
      pil_int = int(pil)
            
      if pil_int == 1:
        beasiswa()
        break
      elif pil_int == 2:
        average()
        break
      elif pil_int == 3:
        hitungLuas()
        break
      elif pil_int == 4:
        chatbot()
        break
      elif pil_int == 5:
        kalkulator()
        break
      elif pil_int == 6:
        games()
        break
      elif pil_int == 7:
        print ("============ Selamat Jalan ============")
        break
      else:
        print("\nPilihan tidak valid. Silakan masukkan nomer.")
    except ValueError:
      print("\nMasukan tidak valid. Harap masukkan nomer.")



def games():
	while True:
		print ("\n\n============= Selamat Datang Di G A M E S =============")
		print ("1. Tebak Angka")
		print ("2. Batu, Gunting, Kertas")
		print ("3. Back...")

		pil_str = input("Pilihlas nomer yang Anda pilih : ")
		try:
			pil = int(pil_str)
		except ValueError:
			print("Input tidak VALID!!! Masukkan Nomer yang Anda inginkan.")

		if pil == 1:
			games_tebakAngka()
			break
		elif pil == 2:
			games_suit()
			break
		elif pil == 3:
			pilihan()
			break



def games_suit():
	while True:
		com_pil = random.randint(1, 3)

		if com_pil == 1:
			com = "Gunting"
		if com_pil == 2:
			com = "Kertas"
		if com_pil == 3:
			com = "Batu"

		print("\n============== Batu Gunting Kertas ==============")
		print("Ketik 'q' untuk Keluar.")
		print(f"[system]: Computer sudah memilih pilihan !")
		print(f"[cheat]: {com}")
		player = input("Pilihlah ['Batu', 'Gunting', 'Kertas'] <q>: ").lower()

		if player == "q":
			games()
			break

		if com.lower() == player:
			result = "'S E R I'"
		elif com == "Batu" and player == "kertas":
			result = "'M E N A N G'"
		elif com == "Kertas" and player == "gunting":
			result = "'M E N A N G'"
		elif com == "Gunting" and player == "batu":
			result = "'M E N A N G'"
		else:
			result = "'K A L A H'"

		print(f"Kamu {result} !!!")



def games_tebakAngka():
	com = random.randint(1, 10)
	ulang = 3

	# petunjuk
	clue_rand = random.randint(1, 2)
	if com <= 5 and clue_rand == 1:
		clue = "[clue]: Diantara 1 sampai 5"
	elif com >= 5 and clue_rand == 1:
		clue = "[clue]: Diantara 5 sampai 10"
	elif com % 2 == 0 and clue_rand == 2:
		clue = "[clue]: Angka ini Genap"
	elif com % 2 == 1 and clue_rand == 2:
		clue = "[clue]: Angka ini Genap"

	while ulang >= 0:
		print("\n======================== Tebak Angka ========================")
		print(f"Pilihlah salah satu angka dari '1 sampai 10' Anda memiliki {ulang} percobaan")
		print(clue)
		print(f"[cheat]: {com}")
		player_str = input("Masukkan Angka : ")

		try:
			player = int(player_str)
		except ValueError:
			print("ERROR")
			continue

		if player != com:
			ulang -= 1 
			print(f"Salah, Sisa percobaan {ulang}")
			continue
		else:
			print("BENAR, selamat Anda M E N A N G")

			ulangi = input("Ulang '<y/n>': ")
			if ulangi == "y":
				ulang = 3
				continue
			else:
				games()
				break



def kalkulator():
	while True:
		print ("\n=========== Kalkulator ===========")
		
		angka1_bfr = input("\nMasukkan Angka Pertama atau 'q' untuk Keluar \t: ")
		if str(angka1_bfr).lower() == "q":
			pilihan()
			break
		try:
			angka1 = float(angka1_bfr)
		except ValueError:
			print ("Input tidak valid !! Harap masukkan Angka !!!")
			continue
		except Exception as e:
			print ("Terjadi Kesalahan !!!")
			continue

		operator = input ("Masukkan Operator (+, -, *, /) \t\t\t\t\t\t\t\t: ")
		if operator not in ['+','-','*','/']:
			print ("Input tidak valid !! Ketik operator (+, -, *, /) !!!")
			continue

		angka2_bfr = input("Masukkan Angka kedua \t\t\t\t\t\t\t\t\t\t\t\t\t: ")
		try:
			angka2 = float(angka2_bfr)
		except ValueError:
			print ("Input tidak valid !! Harap masukkan Angka !!!")
			continue
		except Exception as e:
			print ("Terjadi Kesalahan !!!")
			continue
		if angka2 == 0:
			print ("Tidak ada angka yang dapat di bagi dengan 0.")
			continue

		if operator == "+":
			result = angka1 + angka2
		elif operator == "-":
			result = angka1 - angka2
		elif operator == "*":
			result = angka1 * angka2
		elif operator == "/":
			result = angka1 / angka2

		print ("-----------------------------------------------------------")
		print (f"Hasil \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t: {result}")
			
		ulang = input ("Ulangi '<y/n>': ")
		if str(ulang) == "n":
			pilihan()
			break


		

def lpersegi():
	ulang = "y"
	while ulang == "y":
		print ("\n============== Hitung Luas Segitiga ==============")
		sisi_str = input ("\nMasukkan panjang sisi \t: ")

		try:
			sisi = int(sisi_str)
		except ValueError:
			print ("\nMasukkan Angka !!")
			continue

		luas = sisi * sisi

		print (f"\nLuas Persegi adalah \t: {luas:.0f}")
		ulang = input ("\nUlang perhitungan <y/n> : ").lower()

	if ulang == "n":
		pilihan()



def lsegitiga():
	ulang = "y"
	while ulang == "y":
		print ("\n============== Hitung Luas Segitiga ==============")
		alas_str = input ("\nMasukkan panjang alas \t\t: ")
		tinggi_str = input ("Masukkan panjang tinggi \t: ")

		try:
			alas = int(alas_str)
			tinggi = int(tinggi_str)
		except ValueError:
			print ("\nMasukkan Angka !!")
			continue

		luas = (alas * tinggi) / 2

		print (f"\nLuas Segitiga adalah : {luas:.0f}")
		ulang = input ("\n'Ulang perhitungan <y/n>' : ").lower()

	if ulang == "n":
		pilihan()



def hitungLuas():
	pil = input ("\n======= Pilihan Geometri =======\n1. Persegi\n2. Segitiga\n3. Back...\nPilihlah nomer yang ingin di pilih : ")
	if int(pil) == 1 :
		lpersegi()
		return
	elif int(pil) == 2 :
		lsegitiga()
		return
	elif int(pil) == 3 :
		pilihan()
		return
	else :
		print ("Pilihlah nomer yang ingin Anda pilih !")



# Execute
print ("============== SELAMAT DATANG ==============\n")
login()




