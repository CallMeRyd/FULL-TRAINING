import tkinter as tk
from tkinter import scrolledtext
from tkinter import simpledialog
import random
import datetime

# --- Database Chatbot (Backend) ---
chatbot_responses = {
    "hai": ["Halo juga! Ada yang bisa saya bantu?", "Hai! Senang bisa berbincang denganmu."],
    "halo": ["Halo juga! Ada yang bisa saya bantu?", "Hai! Senang bisa berbincang denganmu."],
    "apa kabar": ["Saya baik-baik saja, terima kasih sudah bertanya!", "Baik, bagaimana dengan Anda?", "Cukup bagus, selalu siap melayani."],
    "jadwal": "Ini jadwal Anda:\n1. Penjas\n2. Matematika\n3. Bahasa Indonesia\n4. PPKn",
    "terima kasih": ["Sama-sama! Senang bisa membantu.", "Oke!", "Tidak masalah."],
    "makasih": ["Sama-sama! Senang bisa membantu.", "Oke!", "Tidak masalah."],
    "siapa kamu": "Saya adalah chatbot sederhana yang dibuat untuk membantu Anda.",
    "bantuan": "Saya bisa menjawab pertanyaan tentang jadwal, kabar, dan informasi umum lainnya. Ketik 'keluar' untuk mengakhiri.",
    "lokasi": "Saya ada di mana-mana dan tidak di mana-mana pada saat yang sama. Saya adalah program komputer!",
    "cuaca": "Maaf, saya tidak memiliki akses ke data cuaca real-time.",
    "usia": "Saya tidak memiliki usia, saya adalah program komputer.",
    "jam berapa": None
}

# Fungsi untuk mendapatkan respons bot
def get_bot_response(user_input):
    user_input_lower = user_input.lower().strip()

    if "jam berapa" in user_input_lower:
        now = datetime.datetime.now()
        return f"Sekarang jam {now.strftime('%H:%M:%S')} WIB."
    elif "keluar" in user_input_lower or "exit" in user_input_lower:
        return "Sampai jumpa! Semoga harimu menyenangkan."

    if user_input_lower in chatbot_responses:
        response = chatbot_responses[user_input_lower]
        if isinstance(response, list):
            return random.choice(response)
        else:
            return response

    for keyword, response in chatbot_responses.items():
        if keyword in user_input_lower:
            if isinstance(response, list):
                return random.choice(response)
            else:
                return response

    default_responses = [
        "Maaf, saya tidak mengerti. Bisakah Anda mengatakannya dengan cara lain atau menanyakan hal lain?",
        "Saya belum diprogram untuk merespons itu.",
        "Bisakah Anda mengulangi pertanyaan Anda?",
        "Saya adalah chatbot sederhana, mungkin saya tidak bisa menjawab semua pertanyaan."
    ]
    return random.choice(default_responses)

# --- Bagian GUI Chatbot (Frontend) ---
class ChatbotGUI:
    def __init__(self, master):
        self.master = master
        master.title("ChatBot Sederhana")
        master.geometry("500x600")
        master.resizable(False, False)

        self.user_name = "Pengguna"

        # Tampilkan layar sambutan terlebih dahulu
        self.show_welcome_screen()

        # Panggil dialog untuk meminta nama pengguna setelah jendela utama tampil
        self.master.after(100, self.ask_for_name)

    def show_welcome_screen(self):
        # Hapus semua widget yang mungkin sudah ada (untuk memastikan tampilan bersih)
        for widget in self.master.winfo_children():
            widget.destroy()

        # Frame untuk layar sambutan
        self.welcome_frame = tk.Frame(self.master, bg="#E0F2F7")
        self.welcome_frame.pack(fill="both", expand=True)

        # Label besar untuk teks "Welcome {nama_user}"
        self.welcome_label = tk.Label(
            self.welcome_frame,
            text="Selamat Datang!", # Teks awal sebelum nama diisi
            font=("Arial", 24, "bold"),
            bg="#E0F2F7",
            fg="#004D40" # Warna hijau gelap
        )
        self.welcome_label.pack(expand=True) # Pusat di tengah frame

    def ask_for_name(self):
        name = simpledialog.askstring("Selamat Datang", "Masukkan nama Anda:",
                                      parent=self.master)
        if name:
            self.user_name = name.strip()
        else:
            self.user_name = "Pengguna"

        # Update teks di welcome_label
        self.welcome_label.config(text=f"Welcome {self.user_name}!")

        # Tunggu sebentar lalu panggil fungsi untuk setup GUI chatbot
        self.master.after(2000, self.setup_chatbot_gui) # Tunggu 2 detik

    def setup_chatbot_gui(self):
        # Hapus welcome_frame
        self.welcome_frame.destroy()

        # Inisialisasi komponen GUI chatbot yang sebenarnya
        self.main_frame = tk.Frame(self.master, bg="#E0F2F7")
        self.main_frame.pack(fill="both", expand=True)

        self.bot_icon_photo = None
        try:
            self.bot_icon_photo = tk.PhotoImage(file="logo.png")
        except tk.TclError as e:
            print(f"Peringatan: Gagal memuat logo.png. ({e}). Pastikan file ada dan berformat PNG/GIF.")

        self.chat_display = scrolledtext.ScrolledText(
            self.main_frame,
            wrap=tk.WORD,
            state='disabled',
            font=("Arial", 10),
            bg="#FFFFFF",
            fg="#333333",
            padx=10,
            pady=10
        )
        self.chat_display.pack(pady=10, padx=10, fill="both", expand=True)

        self.input_frame = tk.Frame(self.main_frame, bg="#CFEEF7")
        self.input_frame.pack(side="bottom", fill="x", padx=10, pady=10)
        self.input_frame.grid_columnconfigure(0, weight=1)

        self.user_input_entry = tk.Entry(
            self.input_frame,
            font=("Arial", 10),
            bd=2,
            relief="groove"
        )
        self.user_input_entry.grid(row=0, column=0, padx=5, pady=5, sticky="ew")
        self.user_input_entry.bind("<Return>", self.send_message)

        self.send_button = tk.Button(
            self.input_frame,
            text="Kirim",
            command=self.send_message,
            font=("Arial", 10, "bold"),
            bg="#4CAF50",
            fg="white",
            activebackground="#45a049"
        )
        self.send_button.grid(row=0, column=1, padx=5, pady=5)

        # Setelah GUI chatbot terpasang, berikan pesan selamat datang di chat display
        self.display_message("Bot", f"Halo {self.user_name}! Ada yang bisa saya bantu?", "left")
        self.user_input_entry.focus_set() # Langsung fokus ke input entry

    def send_message(self, event=None):
        user_message = self.user_input_entry.get()
        if user_message.strip() == "":
            return

        self.display_message(self.user_name, user_message, "right")
        self.user_input_entry.delete(0, tk.END)

        bot_response = get_bot_response(user_message)

        if "Sampai jumpa!" in bot_response:
            self.master.after(500, lambda: self.display_message("Bot", bot_response, "left"))
            self.master.after(1500, self.master.destroy)
        else:
            self.master.after(500, lambda: self.display_message("Bot", bot_response, "left"))

    def display_message(self, sender, message, align):
        self.chat_display.config(state='normal')

        if align == "right":
            self.chat_display.tag_configure("user_tag", foreground="#007BFF", justify='right')
            self.chat_display.insert(tk.END, f"{sender}: {message}\n", "user_tag")
        else:
            self.chat_display.tag_configure("bot_tag", foreground="#28A745", justify='left')
            if self.bot_icon_photo:
                self.chat_display.image_create(tk.END, image=self.bot_icon_photo)
                self.chat_display.insert(tk.END, " ")
            self.chat_display.insert(tk.END, f"{sender}: {message}\n", "bot_tag")

        self.chat_display.config(state='disabled')
        self.chat_display.yview(tk.END)

# --- Jalankan Aplikasi ---
if __name__ == "__main__":
    root = tk.Tk()
    app = ChatbotGUI(root)
    root.mainloop()