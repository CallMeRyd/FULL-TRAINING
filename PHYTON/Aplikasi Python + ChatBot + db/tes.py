import tkinter as tk

root = tk.Tk()
root.title("Contoh Grid")

root.resizable(False, False)

# Label untuk Username
label_user = tk.Label(root, text="Username:")
label_user.grid(row=0, column=0, padx=1, pady=5, sticky='W') # Baris 0, Kolom 0, padding, menempel ke Barat

# Entry untuk Username
entry_user = tk.Entry(root)
entry_user.grid(row=0, column=1, padx=10, pady=5, sticky='EW') # Baris 0, Kolom 1, padding, menempel ke Timur-Barat (mengisi)

# Label untuk Password
label_pass = tk.Label(root, text="Password:")
label_pass.grid(row=1, column=0, padx=10, pady=5, sticky='W') # Baris 1, Kolom 0

# Entry untuk Password
entry_pass = tk.Entry(root, show="*")
entry_pass.grid(row=1, column=1, padx=10, pady=5, sticky='EW') # Baris 1, Kolom 1

# Tombol Login
button_login = tk.Button(root, text="Login")
button_login.grid(row=2, column=0, columnspan=2, pady=10, sticky='SN') # Baris 2, Kolom 0, gabung 2 kolom

# Membuat kolom 1 bisa mengembang (responsif)
root.grid_columnconfigure(1, weight=1)

root.mainloop()


