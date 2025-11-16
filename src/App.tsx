import React, { useState } from 'react'

// ==== TIPE DATA ====

type ProductCategory = 'Semua' | 'Aki' | 'Oli'

interface Product {
  id: number
  name: string
  category: Exclude<ProductCategory, 'Semua'>
  description: string
  image: string // path logo
}

interface Service {
  id: number
  name: string
  description: string
  duration: string
}

// ==== IMPORT LOGO (tinggal siapkan file di src/asset sesuai nama ini) ====
// Aki
import logoGsAstra from './asset/aki-gs-astra.png'
import logoIncoe from './asset/aki-incoe.png'
import logoFurukawa from './asset/aki-furukawa.png'
import logoYuasa from './asset/aki-yuasa.png'
import logoRcaBatt from './asset/aki-rca-batt.png'
import logoTitan from './asset/aki-titan.png'
import logoMotobatt from './asset/aki-motobatt.png'
import logoAmaron from './asset/aki-amaron.png'
import logoGforce from './asset/aki-gforce.png'
import logoDynavolt from './asset/aki-dynavolt.png'

// Oli
import logoFederal from './asset/oli-federal.png'
import logoEvalube from './asset/oli-evalube.png'
import logoShellAdvance from './asset/oli-shell-advance.png'
import logoCastrol from './asset/oli-castrol.png'
import logoIdemitsu from './asset/oli-idemitsu.png'
import logoEcstar from './asset/oli-ecstar.png'
import logoAhm from './asset/oli-ahm.png'
import logoYamalube from './asset/oli-yamalube.png'

// ==== DATA PRODUK & LAYANAN ====

const products: Product[] = [
  // === MERK AKI ===
  {
    id: 1,
    name: 'GS Astra',
    category: 'Aki',
    description: 'Merk aki GS Astra yang sudah terbukti kuat, awet dan bergaransi resmi.',
    image: logoGsAstra
  },
  {
    id: 2,
    name: 'Incoe',
    category: 'Aki',
    description: 'Aki Incoe terkenal dengan kualitas stabil dan mudah didapatkan.',
    image: logoIncoe
  },
  {
    id: 3,
    name: 'Furukawa Battery',
    category: 'Aki',
    description: 'Aki Furukawa Battery dengan teknologi Jepang untuk performa tinggi.',
    image: logoFurukawa
  },
  {
    id: 4,
    name: 'Yuasa',
    category: 'Aki',
    description: 'Yuasa sudah lama dikenal sebagai aki yang tangguh dan tahan lama.',
    image: logoYuasa
  },
  {
    id: 5,
    name: 'RCA Batt',
    category: 'Aki',
    description: 'RCA Batt sebagai pilihan aki ekonomis dengan kualitas bersaing.',
    image: logoRcaBatt
  },
  {
    id: 6,
    name: 'Titan',
    category: 'Aki',
    description:
      'Aki Titan mendukung kebutuhan listrik lebih besar untuk aksesoris kendaraan.',
    image: logoTitan
  },
  {
    id: 7,
    name: 'Motobatt',
    category: 'Aki',
    description:
      'Motobatt dikenal sebagai aki motor berkualitas tinggi dengan daya stabil.',
    image: logoMotobatt
  },
  {
    id: 8,
    name: 'Amaron',
    category: 'Aki',
    description: 'Aki Amaron dengan umur pakai panjang dan perawatan minim.',
    image: logoAmaron
  },
  {
    id: 9,
    name: 'Gforce',
    category: 'Aki',
    description: 'Gforce sebagai pilihan aki yang kuat dan terjangkau.',
    image: logoGforce
  },
  {
    id: 10,
    name: 'Dynavolt',
    category: 'Aki',
    description:
      'Aki Dynavolt terkenal dengan kualitas untuk motor dan kendaraan performa.',
    image: logoDynavolt
  },

  // === MERK OLI ===
  {
    id: 11,
    name: 'Federal Oil',
    category: 'Oli',
    description:
      'Federal Oil untuk performa mesin motor yang lebih halus dan bertenaga.',
    image: logoFederal
  },
  {
    id: 12,
    name: 'Evalube',
    category: 'Oli',
    description:
      'Evalube dengan formula yang menjaga kebersihan mesin dan mengurangi gesekan.',
    image: logoEvalube
  },
  {
    id: 13,
    name: 'Shell Advance',
    category: 'Oli',
    description: 'Shell Advance melindungi mesin pada suhu tinggi dan kondisi berat.',
    image: logoShellAdvance
  },
  {
    id: 14,
    name: 'Castrol',
    category: 'Oli',
    description:
      'Castrol terkenal dengan pelumasan maksimal untuk performa mesin optimal.',
    image: logoCastrol
  },
  {
    id: 15,
    name: 'Idemitsu',
    category: 'Oli',
    description:
      'Idemitsu digunakan oleh banyak pabrikan Jepang sebagai oli rekomendasi.',
    image: logoIdemitsu
  },
  {
    id: 16,
    name: 'Ecstar',
    category: 'Oli',
    description: 'Ecstar adalah oli resmi yang banyak digunakan untuk kendaraan Suzuki.',
    image: logoEcstar
  },
  {
    id: 18,
    name: 'AHM Oil',
    category: 'Oli',
    description: 'AHM Oil adalah oli resmi Honda untuk menjaga performa motor tetap prima.',
    image: logoAhm
  },
  {
    id: 19,
    name: 'Yamalube',
    category: 'Oli',
    description:
      'Yamalube adalah oli resmi Yamaha yang diformulasikan khusus untuk mesin Yamaha.',
    image: logoYamalube
  }
]

const services: Service[] = [
  {
    id: 1,
    name: 'Cas Aki (Charging)',
    description:
      'Jasa cas aki dengan alat khusus untuk mengembalikan daya aki yang lemah atau drop.',
    duration: '± 10 – 30 menit'
  },
  {
    id: 2,
    name: 'Ganti Aki di Toko',
    description:
      'Penggantian aki lama ke aki baru di lokasi toko, termasuk pengecekan arus dan pemasangan rapi.',
    duration: '± 10 – 20 menit'
  },
  {
    id: 3,
    name: 'Ganti Aki ke Lokasi (Area Payakumbuh)',
    description:
      'Layanan ganti aki ke lokasi Anda (sekitar Payakumbuh). Cocok saat kendaraan mogok di rumah/kantor.',
    duration: 'Durasi menyesuaikan jarak & kondisi (hubungi via WhatsApp).'
  },
  {
    id: 4,
    name: 'Ganti Oli',
    description:
      'Penggantian oli mesin dengan merk pilihan Anda, plus pengecekan kondisi dasar kendaraan.',
    duration: '± 10 – 20 menit'
  }
]

// ==== KOMPONEN APP ====

const App: React.FC = () => {
  const [categoryFilter, setCategoryFilter] = useState<ProductCategory>('Semua')
  const [productPage, setProductPage] = useState(0)
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  const filteredProducts =
    categoryFilter === 'Semua'
      ? products
      : products.filter((p) => p.category === categoryFilter)

  const ITEMS_PER_PAGE = 5
  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / ITEMS_PER_PAGE))
  const currentPage = Math.min(productPage, totalPages - 1)
  const startIndex = currentPage * ITEMS_PER_PAGE
  const pageProducts = filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div className={`app ${theme}`}>
      <header className="navbar">
        <div className="container navbar-inner">
          <div className="logo">
            <span className="logo-main">GADING</span>
            <span className="logo-sub">BATTERY</span>
          </div>
          <nav className="nav-links">
            <button onClick={() => handleScrollTo('home')}>Beranda</button>
            <button onClick={() => handleScrollTo('products')}>Produk</button>
            <button onClick={() => handleScrollTo('services')}>Layanan</button>
            <button onClick={() => handleScrollTo('about')}>Tentang</button>
            <button onClick={() => handleScrollTo('contact')}>Kontak</button>
          </nav>
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="container hero-inner">
          <div className="hero-text">
            <h1>
              Solusi Aki & Oli
              <br />
              <span className="accent">Lengkap untuk Kendaraan Anda</span>
            </h1>
            <p>
              GADING BATTERY melayani penjualan aki, oli, dan jasa cas aki untuk
              mobil dan motor. Konsultasi gratis, pemasangan rapi, dan harga
              bersahabat.
            </p>
            <div className="hero-actions">
              <button
                className="btn-primary"
                onClick={() => handleScrollTo('products')}
              >
                Lihat Produk
              </button>
              <a
                className="btn-outline"
                href="https://wa.me/6281266192488"
                target="_blank"
                rel="noreferrer"
              >
                Chat WhatsApp
              </a>
            </div>
            <div className="hero-badges">
              <span>✔ Pemasangan Cepat</span>
              <span>✔ Garansi Resmi</span>
              <span>✔ Bisa Cas Aki</span>
            </div>
          </div>
          <div className="hero-card">
            <h2>Cek Kebutuhan Aki & Oli</h2>
            <p>Punya kendala aki sering tekor atau mesin kasar?</p>
            <ul>
              <li>🔋 Aki sering drop saat pagi hari</li>
              <li>🚗 Mesin terasa berat saat akselerasi</li>
              <li>🔌 Lampu dan audio melemah</li>
            </ul>
            <p className="hero-card-bottom">
              Konsultasikan ke kami dan dapatkan rekomendasi aki & oli yang
              tepat.
            </p>
          </div>
        </div>
      </section>

      <section id="products" className="section">
        <div className="container">
          <div className="section-header">
            <h2>Produk Unggulan</h2>
            <p>
              Kami menyediakan berbagai merk aki dan oli terkenal, lengkap
              dengan pilihan tipe untuk berbagai jenis kendaraan.
            </p>
          </div>

          <div className="filter-row">
            <span>Filter:</span>
            {(['Semua', 'Aki', 'Oli'] as ProductCategory[]).map((cat) => (
              <button
                key={cat}
                className={`chip ${cat === categoryFilter ? 'chip-active' : ''}`}
                onClick={() => {
                  setCategoryFilter(cat)
                  setProductPage(0)
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="slider">
            <div className="slider-track">
              {pageProducts.map((product) => (
                <div key={product.id} className="card card-product">
                  <div className="product-logo-wrapper">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-logo"
                    />
                  </div>
                  <h3>{product.name}</h3>
                  <span className="badge">{product.category}</span>
                  <p className="card-desc">{product.description}</p>
                </div>
              ))}
            </div>

            <div className="slider-controls">
              <button
                className="slider-btn"
                onClick={() =>
                  setProductPage((p) => Math.max(0, p - 1))
                }
                disabled={currentPage === 0}
              >
                ‹
              </button>
              <span className="slider-page">
                {currentPage + 1} / {totalPages}
              </span>
              <button
                className="slider-btn"
                onClick={() =>
                  setProductPage((p) => Math.min(totalPages - 1, p + 1))
                }
                disabled={currentPage === totalPages - 1}
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2>Layanan GADING BATTERY</h2>
            <p>
              Tidak hanya jual produk, kami juga menyediakan layanan perawatan
              aki dan oli untuk kendaraan Anda.
            </p>
          </div>

          <div className="grid">
            {services.map((service) => (
              <div key={service.id} className="card">
                <h3>{service.name}</h3>
                <p className="card-desc">{service.description}</p>
                <p className="card-meta">
                  <strong>Estimasi durasi:</strong> {service.duration}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container about-layout">
          <div>
            <h2>Tentang GADING BATTERY</h2>
            <p>
              GADING BATTERY sudah buka sejak tahun <strong>1978</strong> dan
              menjadi salah satu toko aki dan oli <strong>nomor 1 di Kota Payakumbuh</strong>.
            </p>
            <p>
              Kami menyediakan aki dan oli yang <strong>lengkap</strong>,
              <strong> bergaransi resmi</strong>, serta tetap <strong>murah dan berkualitas</strong>.
              Fokus kami adalah memberikan solusi kelistrikan dan perawatan mesin
              yang membuat kendaraan Anda selalu siap jalan.
            </p>
            <p>
              Dengan pengalaman puluhan tahun, kami memahami kebutuhan pelanggan
              mulai dari mobil keluarga, kendaraan niaga, hingga motor harian.
            </p>
          </div>
          <div className="about-highlights">
            <div className="stat">
              <span className="stat-number">150.000+</span>
              <span className="stat-label">Aki terpasang</span>
            </div>
            <div className="stat">
              <span className="stat-number">50.000+</span>
              <span className="stat-label">Ganti oli</span>
            </div>
            <div className="stat">
              <span className="stat-number">Sejak 1978</span>
              <span className="stat-label">Pengalaman melayani Anda</span>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section section-alt">
        <div className="container contact-layout">
          <div>
            <h2>Hubungi Kami</h2>
            <p>
              Ingin tanya stok, harga, atau butuh bantuan darurat aki? Silakan
              hubungi kami melalui WhatsApp atau datang langsung ke salah satu
              cabang toko GADING BATTERY.
            </p>
            <div className="contact-info">
              <p>
                📍 <strong>Alamat 1 – Toko Aki Gading Battery Simpang Piliang</strong>
                <br />
                Jl. Dahlia, Parik Rantang, Kec. Payakumbuh Bar., Kota Payakumbuh,
                Sumatera Barat 26219
                <br />
                <a
                  href="https://www.google.com/maps/place/Toko+Aki+Gading+Battery+Simpang+Piliang/@-0.2281437,100.6227644,17z/data=!3m1!4b1!4m6!3m5!1s0x2e2ab4ae77efc9ed:0x44efb12230a5fa1e!8m2!3d-0.2281491!4d100.6253393!16s%2Fg%2F11c60kbdkh?entry=ttu"
                  target="_blank"
                  rel="noreferrer"
                >
                  Lihat di Google Maps
                </a>
              </p>

              <p>
                📍 <strong>Alamat 2 – Toko Aki Gading Battery Napar</strong>
                <br />
                Jl. Tan Malaka, Napar, Kec. Payakumbuh Utara, Kota Payakumbuh,
                Sumatera Barat 26219
                <br />
                <a
                  href="https://www.google.com/maps/place/Toko+Aki+Gading+Battery+Napar/@-0.2098003,100.6116625,16z/data=!4m10!1m2!2m1!1sgading+battery+napah!3m6!1s0x2e2ab34d3b7a2799:0x8ff8ae05744af293!8m2!3d-0.2098003!4d100.6206747!15sChRnYWRpbmcgYmF0dGVyeSBuYXBhaJIBEWNhcl9iYXR0ZXJ5X3N0b3JlqgFXCg0vZy8xMXRoZDBnenI2EAEqCSIFbmFwYWgoADIfEAEiGy1TI4QnHL-X35Qrj0r0Fn4FCbK30_i_MlSGjDIYEAIiFGdhZGluZyBiYXR0ZXJ5IG5hcGFo4AEA!16s%2Fg%2F11y5f6fc_g?entry=ttu"
                  target="_blank"
                  rel="noreferrer"
                >
                  Lihat di Google Maps
                </a>
              </p>

              <p>
                📞 <strong>Telepon / WhatsApp</strong>
                <br />
                <a
                  href="https://wa.me/6281266192488"
                  target="_blank"
                  rel="noreferrer"
                >
                  0812 6619 2488
                </a>
              </p>

              <p>
                ⏰ <strong>Jam Operasional</strong>
                <br />
                Setiap hari: 07.00 – 18.00
                <br />
                Hari libur: menyesuaikan
              </p>
            </div>
          </div>

          <div className="contact-card">
            <h3>Kirim Pesan Singkat</h3>
            <ContactForm />
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <p>
            © {new Date().getFullYear()} GADING BATTERY. All rights reserved.
          </p>
          <p className="footer-sub">
            Aki • Oli • Cas Aki • Solusi kelistrikan kendaraan Anda
          </p>
        </div>
      </footer>
    </div>
  )
}

const ContactForm: React.FC = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const handleSendWhatsApp = () => {
    const baseUrl = 'https://wa.me/6281266192488'
    const text =
      `Halo GADING BATTERY, saya ${name || '-'}.\n` +
      `No. HP: ${phone || '-'}\n` +
      `Pesan: ${message || '-'}`
    const url = `${baseUrl}?text=${encodeURIComponent(text)}`
    window.open(url, '_blank')
  }

  return (
    <div className="form">
      <div className="form-group">
        <label>Nama</label>
        <input
          type="text"
          placeholder="Nama Anda"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>No. HP</label>
        <input
          type="tel"
          placeholder="08xxxxxxxxxx"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Pesan</label>
        <textarea
          rows={4}
          placeholder="Tulis kebutuhan aki / oli / keluhan kendaraan Anda…"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button className="btn-primary full-width" onClick={handleSendWhatsApp}>
        Kirim via WhatsApp
      </button>
    </div>
  )
}

export default App
