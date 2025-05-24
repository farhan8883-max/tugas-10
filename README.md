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
Traveloka
+1
LinkedIn
+1

profile_id (PK)

user_id (FK)

headline

summary

location

industry

profile_picture_url

3. experiences
Riwayat pengalaman kerja pengguna.
LinkedIn
+2
liputan6.com
+2
ION Network Blog
+2

experience_id (PK)

user_id (FK)

company_name

job_title

start_date

end_date

description

4. educations
Riwayat pendidikan pengguna.

education_id (PK)

user_id (FK)

school_name

degree

field_of_study

start_year

end_year

5. skills
Daftar keterampilan pengguna.
LinkedIn
+1
ION Network Blog
+1

skill_id (PK)

user_id (FK)

skill_name

proficiency_level

6. connections
Relasi antar pengguna.

connection_id (PK)

user_id (FK)

connected_user_id (FK)

status (e.g., pending, accepted)

connected_at

7. posts
Konten yang dibagikan oleh pengguna.
liputan6.com
+3
Purwadhika
+3
LinkedIn
+3

post_id (PK)

user_id (FK)

content

created_at

8. comments
Komentar pada postingan.
LinkedIn
+11
liputan6.com
+11
LinkedIn
+11

comment_id (PK)

post_id (FK)

user_id (FK)

comment_text

created_at

9. likes
Suka pada postingan.
LinkedIn
+4
LinkedIn
+4
LinkedIn
+4

like_id (PK)

post_id (FK)

user_id (FK)

liked_at

10. groups
Grup diskusi atau komunitas.

group_id (PK)

name

description

creator_user_id (FK)

created_at

11. group_members
Keanggotaan pengguna dalam grup.

group_member_id (PK)

group_id (FK)

user_id (FK)

joined_at

role (e.g., member, admin)

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

POST /api/profiles/{user_id}/experience
Menambahkan pengalaman kerja.
Medium
+10
Medium
+10
GitHub
+10

PUT /api/profiles/{user_id}/experience/{experience_id}
Memperbarui pengalaman kerja.

DELETE /api/profiles/{user_id}/experience/{experience_id}
Menghapus pengalaman kerja.

POST /api/profiles/{user_id}/education
Menambahkan riwayat pendidikan.

PUT /api/profiles/{user_id}/education/{education_id}
Memperbarui riwayat pendidikan.

DELETE /api/profiles/{user_id}/education/{education_id}
Menghapus riwayat pendidikan.
Software Engineering Stack Exchange
+10
Proxycurl
+10
Amazon Web Services, Inc.
+10

POST /api/profiles/{user_id}/skills
Menambahkan keterampilan.

DELETE /api/profiles/{user_id}/skills/{skill_id}
Menghapus keterampilan.

3. Koneksi
POST /api/connections/request/{target_user_id}
Mengirim permintaan koneksi.

POST /api/connections/accept/{request_id}
Menerima permintaan koneksi.
Amazon Web Services, Inc.
+3
Buildfire
+3
drmowinckels.io
+3

POST /api/connections/reject/{request_id}
Menolak permintaan koneksi.

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
LinkedIn
+4
Microsoft Learn
+4
Kong Inc.
+4

5. Komentar
POST /api/posts/{post_id}/comments
Menambahkan komentar pada postingan.

GET /api/posts/{post_id}/comments
Mengambil komentar pada postingan.
Microsoft Learn
+3
Kong Inc.
+3
Proxycurl
+3

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
