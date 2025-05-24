Struktur Database LinkID
1. users
Menyimpan informasi dasar pengguna.
LinkedIn

user_id (PK)
email
password_hash
full_name
created_at
last_login

2. profiles
Detail profil profesional pengguna.
profile_id (PK)
user_id (FK)
profile_picture_url

3. posts
Konten yang dibagikan oleh pengguna.

post_id (PK)
user_id (FK)
content
created_at

4. comments

comment_id (PK)
post_id (FK)
user_id (FK)
comment_text
created_at

9. likes

like_id (PK)
post_id (FK)
user_id (FK)
liked_at


1. Autentikasi & Pengguna
POST /api/auth/register
Mendaftarkan pengguna baru.

POST /api/auth/login
Masuk ke akun pengguna.
Postman Blog
+1
Medium
+1

POST /api/auth/logout
Keluar dari akun pengguna.

GET /api/users/me
Mengambil data pengguna yang sedang masuk.

GET /api/users/{user_id}
Mengambil data pengguna berdasarkan ID.

2. Profil
GET /api/profiles/{user_id}
Mengambil profil pengguna.

PUT /api/profiles/{user_id}
Memperbarui profil pengguna.

GET /api/connections
Mengambil daftar koneksi pengguna.

GET /api/connections/requests
Mengambil daftar permintaan koneksi masuk.

4. Postingan
POST /api/posts
Membuat postingan baru.

GET /api/posts
Mengambil daftar postingan (feed).

GET /api/posts/{post_id}
Mengambil detail postingan.

DELETE /api/posts/{post_id}
Menghapus postingan.

5. Komentar
POST /api/posts/{post_id}/comments
Menambahkan komentar pada postingan.

GET /api/posts/{post_id}/comments
Mengambil komentar pada postingan.
Microsoft Learn

DELETE /api/comments/{comment_id}
Menghapus komentar.

6. Suka (Likes)
POST /api/posts/{post_id}/like
Menyukai postingan.

DELETE /api/posts/{post_id}/like
Menghapus suka dari postingan.
Postman API Platform

7. Grup
POST /api/groups
Membuat grup baru.

GET /api/groups
Mengambil daftar grup.

GET /api/groups/{group_id}
Mengambil detail grup.

POST /api/groups/{group_id}/join
Bergabung dengan grup.

POST /api/groups/{group_id}/leave
Keluar dari grup.
Proxycurl

GET /api/groups/{group_id}/members
Mengambil daftar anggota grup.

8. Notifikasi
GET /api/notifications
Mengambil daftar notifikasi pengguna.

POST /api/notifications/{notification_id}/read
Menandai notifikasi sebagai telah dibaca.

1. Autentikasi & Manajemen Pengguna
Registrasi & Login: Formulir untuk mendaftar dan masuk ke akun pengguna.

Manajemen Sesi: Pengelolaan sesi pengguna menggunakan token (misalnya, JWT) untuk menjaga keamanan.

Pemulihan Akun: Fitur untuk mereset kata sandi atau memulihkan akun yang lupa.

2. Profil Pengguna
Tampilan Profil: Menampilkan informasi pengguna seperti nama, foto, headline, dan ringkasan profesional.

Edit Profil: Formulir untuk memperbarui informasi pribadi dan profesional.

Pengalaman & Pendidikan: Menambahkan, mengedit, atau menghapus riwayat pekerjaan dan pendidikan.

Keterampilan & Sertifikasi: Menambahkan daftar keterampilan dan sertifikasi yang dimiliki.
AIO Berdaya

3. Jaringan & Koneksi
Pencarian Pengguna: Mencari pengguna lain berdasarkan nama, industri, atau lokasi.

Permintaan Koneksi: Mengirim dan menerima permintaan koneksi dengan pengguna lain.

Daftar Koneksi: Menampilkan daftar koneksi yang telah terhubung.

4. Beranda & Umpan Berita
Umpan Postingan: Menampilkan postingan dari koneksi dan grup yang diikuti.

Interaksi Postingan: Menyukai, mengomentari, dan membagikan postingan.

Pembuatan Postingan: Membuat postingan baru dengan teks, gambar, atau tautan.

5. Grup & Komunitas
Pencarian & Bergabung Grup: Mencari grup berdasarkan minat dan bergabung dengan grup yang diinginkan.

Diskusi Grup: Berpartisipasi dalam diskusi dan berbagi konten dalam grup.

Manajemen Grup: Membuat, mengedit, dan menghapus grup (untuk admin grup).
AppMaster
AIO Berdaya

6. Pesan & Komunikasi
Pesan Pribadi: Mengirim dan menerima pesan langsung dengan koneksi.

Notifikasi: Menerima pemberitahuan tentang aktivitas penting seperti permintaan koneksi, komentar, atau pesan baru.
LinkedIn
+1
Purwadhika
+1

7. Pencarian & Rekomendasi
Pencarian Global: Mencari pengguna, grup, atau postingan di seluruh platform.

Rekomendasi Koneksi: Menyarankan pengguna lain untuk terhubung berdasarkan minat dan koneksi bersama.

Rekomendasi Grup: Menyarankan grup yang relevan berdasarkan aktivitas dan minat pengguna.

8. Pengaturan & Preferensi
Pengaturan Akun: Mengelola informasi akun seperti email, kata sandi, dan preferensi notifikasi.

Privasi & Keamanan: Mengatur visibilitas profil dan aktivitas, serta mengelola perangkat yang terhubung.

9. Admin & Moderasi
Manajemen Pengguna: Mengelola akun pengguna, termasuk menonaktifkan atau menghapus akun.

Moderasi Konten: Meninjau dan menghapus konten yang melanggar kebijakan platform.

Laporan & Analitik: Melihat statistik penggunaan dan aktivitas di platform.
