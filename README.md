# Projek D3.js - Visualisasi Kota Uni Eropa

Nama    : Tasya Zahrani
NPM     : 2308107010006
Kelas   : Visualisasi Data B

## Deskripsi
Projek ini menggunakan D3.js untuk membuat elemen SVG berupa lingkaran berdasarkan dataset kota-kota di Uni Eropa. Setiap lingkaran memiliki properti dinamis seperti ukuran, warna, dan posisi berdasarkan informasi yang terdapat dalam dataset.

## Struktur Folder
```
/Projek D3-2
│── /css
│   └── style.css
│── /js
│   └── script.js
│── /data
│   └── cities_and_population.csv
│── LatihanModul2.html
│── README.md
```

## Perangkat yang Digunakan
- **HTML** untuk membangun struktur utama halaman web.
- **CSS** untuk mengatur tampilan dan gaya elemen.
- **D3.js** untuk mengelola dan memvisualisasikan data dalam bentuk elemen SVG.
- **CSV** sebagai sumber data kota-kota di Uni Eropa.

## Cara Menjalankan Projek
- Pastikan Anda memiliki browser modern yang mendukung D3.js.
- Unduh atau clone repositori ini.
- Buka file index.html di browser.

## Penjelasan Kode
1. index.html: Memuat elemen <svg> untuk menampilkan visualisasi serta paragraf untuk menampilkan jumlah kota.
2. style.css:
    - Mengatur tampilan dasar halaman.
    - Menentukan gaya teks untuk label kota.
3. script.js:
    - Membaca dataset dari file CSV.
    - Memfilter kota yang merupakan bagian dari Uni Eropa.
    - Mengonversi nilai numerik dalam dataset.
    - Menampilkan jumlah kota yang telah difilter pada halaman.
    - Menambahkan lingkaran ke dalam SVG berdasarkan koordinat kota.
    - Menyesuaikan ukuran lingkaran berdasarkan populasi kota.
    - Menampilkan label hanya untuk kota dengan populasi lebih dari 1 juta.

## Contoh Data dalam cities.csv
```
city,population,x,y,eu
Berlin,3769000,250,300,true
Madrid,3223000,400,350,true
Warsaw,1794000,300,250,true
Lisbon,506000,450,400,true
```

## Hasil Akhir
Visualisasi lingkaran yang berbeda ukuran dan warna, dengan distribusi yang rapi sesuai data kota di Uni Eropa. Jumlah total kota ditampilkan sebagai teks di halaman web.

Dapat juga dilihat di github melalui link berikut ini https://github.com/tasyazahrani/2306_Visdat_D3-VisualisasiKotaUniEropra.git 

(c) 2025 - tasyazahrani