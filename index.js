const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;  1
const cors = require('cors');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
app.use(cors());
// app.js atau file utama server Anda



// const mysql = require('mysql');

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'buku_tamu'
  // database: 'buku_tamu',
});

connection.connect((err) => {
  if (err) {
    console.error('Gagal terhubung ke MySQL:', err);
    return;
  }
  console.log('Berhasil terhubung ke MySQL!');
});

connection.query('SELECT * FROM users', (err, results) => {
  if (err) throw err;
  console.log(results);
});
// const connection = mysql.createConnection({
//   host:

app.use(express.json());

app.get('/users', (req, res) => {
  connection.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.error('Kesalahan saat mengambil data pengguna:', err);
      return res.status(500).json({ error: 'Gagal mengambil data pengguna' });
    }
    res.json(results);
  });
});

// Contoh endpoint GET
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Halo dari mantap!' });
});

app.get('/', (req, res) => {
  res.send('Welcome to my web the User API!');
});

// Contoh endpoint POST
app.post('/api/data', (req, res) => {
  const data = req.body;
  res.status(201).json({ received: data });
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});

app.get('/api/hello', (req, res) => {
  console.log('Endpoint /api/hello diakses');
  res.json({ message: 'Halo dari REST API Node.js!' });
});

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.post('/users', (req, res) => {
  const { username, email, Kota, password } = req.body;

  // Validasi input
  if (!username || !email || !Kota || !password) {
    return res.status(400).json({ error: 'Semua field wajib diisi' });
  }

  // Enkripsi password
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      console.error('Kesalahan saat mengenkripsi password:', err);
      return res.status(500).json({ error: 'Terjadi kesalahan pada server' });
    }

    const query = 'INSERT INTO users (username, email, Kota, password) VALUES (?, ?, ?, ?)';
    connection.query(query, [username, email, Kota, hashedPassword], (err, result) => {
      if (err) {
        console.error('Gagal menyimpan data pengguna:', err);
        return res.status(500).json({ error: 'Gagal menyimpan data pengguna' });
      }

      res.status(201).json({
        message: 'Pengguna berhasil ditambahkan',
        userId: result.insertId,
      });
    });
  });
});


app.delete('/users/:id', (req, res) => {
  const userId = req.params.id;

  const query = 'DELETE FROM users WHERE id = ?';
  connection.query(query, [userId], (err, result) => {
    if (err) {
      console.error('Gagal menghapus pengguna:', err);
      return res.status(500).json({ error: 'Gagal menghapus pengguna' });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Pengguna tidak ditemukan' });
    }

    res.status(200).json({ message: 'Pengguna berhasil dihapus' });
  });
});

app.put('/users/:id', (req, res) => {
  const userId = req.params.id;
  const { username, email, Kota, password } = req.body;

  if (!username || !email || !Kota) {
    return res.status(400).json({ error: 'Username, email, dan Kota wajib diisi' });
  }

  let query = 'UPDATE users SET username = ?, email = ?, Kota = ?';
  const params = [username, email, Kota];

  if (password) {
    const hashedPassword = bcrypt.hashSync(password, 10);
    query += ', password = ?';
    params.push(hashedPassword);
  }

  query += ' WHERE id = ?';
  params.push(userId);

  connection.query(query, params, (err, result) => {
    if (err) {
      console.error('Gagal memperbarui data pengguna:', err);
      return res.status(500).json({ error: 'Gagal memperbarui data pengguna' });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Pengguna tidak ditemukan' });
    }

    res.status(200).json({ message: 'Data pengguna berhasil diperbarui' });
  });
});




// Endpoint login
app.post('/auth/login', (req, res) => {
  const { email, password } = req.body;

  // Validasi input
  if (!email || !password) {
    return res.status(400).json({ message: 'Email dan password wajib diisi' });
  }

  // Cari pengguna berdasarkan email
  const query = 'SELECT * FROM users WHERE email = ?';
  connection.query(query, [email], (err, results) => {
    if (err) {
      console.error('Kesalahan saat mencari pengguna:', err);
      return res.status(500).json({ message: 'Terjadi kesalahan pada server' });
    }

    if (results.length === 0) {
      return res.status(401).json({ message: 'Email tidak ditemukan' });
    }

    const user = results[0];

    // Bandingkan password
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        console.error('Kesalahan saat membandingkan password:', err);
        return res.status(500).json({ message: 'Terjadi kesalahan pada server' });
      }

      if (!isMatch) {
        return res.status(401).json({ message: 'Password salah' });
      }

      // Buat token JWT
      const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );

      // Kembalikan token dan data pengguna (tanpa password)
      const { password, ...userData } = user;
      res.json({ token, user: userData });
    });
  });
});

// Endpoint POST /posts
app.post('/postss', (req, res) => {
  const { judul, konten } = req.body;
  const query = 'INSERT INTO postss (judul, konten) VALUES (?, ?)';
  connection.query(query, [judul, konten], (err, results) => {
    if (err) {
      console.error('Gagal menyimpan postingan:', err);
      res.status(500).json({ error: 'Gagal menyimpan postingan.' });
      return;
    }
    res.status(201).json({ id: results.insertId, judul, konten });
  });
});

app.get('/postss', (req, res) => {
  const query = 'SELECT * FROM postss ORDER BY created_at DESC';
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Gagal mengambil postingan:', err);
      res.status(500).json({ error: 'Gagal mengambil postingan.' });
      return;
    }
    res.json(results);
  });
});



// http://localhost:3000/api/hello
// get token jwt random jwt

