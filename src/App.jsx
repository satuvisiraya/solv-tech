import solvTechLogo from './assets/solvTech.png'

function App() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-95"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,165,0,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,165,0,0.02)_50%,transparent_75%)] bg-[length:20px_20px]"></div>
      <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(255,165,0,0.01)_60deg,transparent_120deg)]"></div>
      
      {/* Navigation */}
      <nav className="bg-black/80 backdrop-blur-md border-b border-orange-500/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src={solvTechLogo} alt="SolvTech Logo" className="h-10 w-auto" />
              <span className="ml-3 text-xl font-bold text-white">SolvTech</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className="text-white hover:text-orange-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Beranda</a>
                <a href="#about" className="text-gray-300 hover:text-orange-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Tentang</a>
                <a href="#services" className="text-gray-300 hover:text-orange-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Layanan</a>
                <a href="#testimonials" className="text-gray-300 hover:text-orange-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Testimoni</a>
                <a href="#contact" className="text-gray-300 hover:text-orange-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Kontak</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 min-h-screen flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,165,0,0.1),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0%,rgba(255,165,0,0.05)_50%,transparent_100%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="text-center">
            <div className="flex justify-center items-center mb-8">
              <div className="animate-float">
                <img 
                  src={solvTechLogo} 
                  className="w-24 h-24 drop-shadow-2xl transition-all duration-300" 
                  alt="SolvTech Logo" 
                />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
              <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                SolvTech, Solving Your Problem
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white max-w-3xl mx-auto drop-shadow-md">
              Kami hadir untuk mendukung bisnis Anda agar dapat berkembang
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-4 px-8 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all transform hover:scale-105 shadow-lg shadow-orange-500/50 text-lg">
                Konsultasi Gratis
              </button>
              <button className="border-2 border-orange-500 text-orange-400 font-semibold py-4 px-8 rounded-lg hover:bg-orange-500 hover:text-black transition-all transform hover:scale-105 hover-lift text-lg">
                Mulai Sekarang
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,165,0,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(60deg,transparent_0%,rgba(255,165,0,0.03)_50%,transparent_100%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Kenapa Memilih Kami
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl border border-orange-500/20 hover:border-orange-500/40 hover:shadow-lg hover:shadow-orange-500/10 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-orange-500/25">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Terpercaya</h3>
              <p className="text-gray-300">Tim profesional dengan pengalaman bertahun-tahun</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl border border-orange-500/20 hover:border-orange-500/40 hover:shadow-lg hover:shadow-orange-500/10 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-orange-500/25">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Fleksibel</h3>
              <p className="text-gray-300">Solusi yang disesuaikan dengan kebutuhan bisnis Anda</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl border border-orange-500/20 hover:border-orange-500/40 hover:shadow-lg hover:shadow-orange-500/10 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-orange-500/25">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Cepat</h3>
              <p className="text-gray-300">Pengerjaan yang efisien dan tepat waktu</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl border border-orange-500/20 hover:border-orange-500/40 hover:shadow-lg hover:shadow-orange-500/10 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-orange-500/25">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Hasil Terbaik</h3>
              <p className="text-gray-300">Kualitas tinggi yang memenuhi standar internasional</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,165,0,0.06),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(255,165,0,0.02)_50%,transparent_100%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Layanan Kami
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm p-6 rounded-xl border border-orange-500/20 hover:border-orange-500/40 hover:shadow-lg hover:shadow-orange-500/10 transition-all hover-lift glass-morphism">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-orange-500/25">
                <span className="text-white text-xl">🌐</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Jasa Pembuatan Website Bisnis</h3>
              <p className="text-gray-300">Website profesional untuk meningkatkan kredibilitas bisnis Anda</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm p-6 rounded-xl border border-orange-500/20 hover:border-orange-500/40 hover:shadow-lg hover:shadow-orange-500/10 transition-all hover-lift glass-morphism">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-orange-500/25">
                <span className="text-white text-xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Jasa Pengelolaan Sosial Media</h3>
              <p className="text-gray-300">Manajemen konten dan strategi marketing di platform sosial</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm p-6 rounded-xl border border-orange-500/20 hover:border-orange-500/40 hover:shadow-lg hover:shadow-orange-500/10 transition-all hover-lift glass-morphism">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-orange-500/25">
                <span className="text-white text-xl">⚙️</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Jasa Pembuatan ERP</h3>
              <p className="text-gray-300">Sistem manajemen terintegrasi untuk efisiensi operasional</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm p-6 rounded-xl border border-orange-500/20 hover:border-orange-500/40 hover:shadow-lg hover:shadow-orange-500/10 transition-all hover-lift glass-morphism">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-orange-500/25">
                <span className="text-white text-xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Jasa Pembuatan Desain Grafis</h3>
              <p className="text-gray-300">Kreasi visual yang menarik untuk branding dan marketing</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm p-6 rounded-xl border border-orange-500/20 hover:border-orange-500/40 hover:shadow-lg hover:shadow-orange-500/10 transition-all hover-lift glass-morphism">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-orange-500/25">
                <span className="text-white text-xl">💌</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Jasa Pembuatan Undangan Digital</h3>
              <p className="text-gray-300">Undangan elektronik yang modern dan interaktif</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm p-6 rounded-xl border border-orange-500/20 hover:border-orange-500/40 hover:shadow-lg hover:shadow-orange-500/10 transition-all hover-lift glass-morphism">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-orange-500/25">
                <span className="text-white text-xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Jasa Pembuatan Aplikasi</h3>
              <p className="text-gray-300">Aplikasi mobile dan web custom sesuai kebutuhan</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm p-6 rounded-xl border border-orange-500/20 hover:border-orange-500/40 hover:shadow-lg hover:shadow-orange-500/10 transition-all md:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-orange-500/25">
                <span className="text-white text-xl">🎓</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Jasa Pelatihan Konten Kreator</h3>
              <p className="text-gray-300">Workshop dan training untuk meningkatkan skill konten kreatif</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,165,0,0.06),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_0%,rgba(255,165,0,0.03)_50%,transparent_100%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Testimoni
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm p-6 rounded-xl border border-orange-500/20 hover:border-orange-500/40 hover:shadow-lg hover:shadow-orange-500/10 transition-all hover-lift glass-morphism">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-orange-500/25">
                  A
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-white">Ahmad Rizki</h4>
                  <p className="text-gray-300 text-sm">CEO, TechStart</p>
                </div>
              </div>
              <p className="text-gray-300 italic">"SolvTech sangat luar biasa! Website yang mereka buat untuk perusahaan kami sangat profesional dan membantu meningkatkan penjualan secara signifikan."</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm p-6 rounded-xl border border-orange-500/20 hover:border-orange-500/40 hover:shadow-lg hover:shadow-orange-500/10 transition-all hover-lift glass-morphism">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-orange-500/25">
                  S
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-white">Sarah Wijaya</h4>
                  <p className="text-gray-300 text-sm">Marketing Manager</p>
                </div>
              </div>
              <p className="text-gray-300 italic">"Pelayanan yang sangat memuaskan! Tim SolvTech sangat responsif dan hasilnya melebihi ekspektasi kami. Highly recommended!"</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm p-6 rounded-xl border border-orange-500/20 hover:border-orange-500/40 hover:shadow-lg hover:shadow-orange-500/10 transition-all hover-lift glass-morphism">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-orange-500/25">
                  M
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-white">Michael Chen</h4>
                  <p className="text-gray-300 text-sm">Founder, Digital Agency</p>
                </div>
              </div>
              <p className="text-gray-300 italic">"Kualitas kerja yang sangat tinggi dan harga yang sangat kompetitif. SolvTech benar-benar memahami kebutuhan bisnis modern."</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-r from-orange-600 via-orange-700 to-orange-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,0,0,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0%,rgba(0,0,0,0.08)_50%,transparent_100%)]"></div>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Siap Mengembangkan Bisnis Anda?
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Hubungi kami sekarang untuk konsultasi gratis dan wujudkan visi bisnis Anda
          </p>
          <button className="bg-black text-orange-400 font-semibold py-4 px-8 rounded-lg text-lg hover:bg-gray-900 hover:text-orange-300 transition-all transform hover:scale-105 shadow-lg shadow-black/25">
            Hubungi Kami
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-black text-white py-16 border-t-2 border-orange-500/30 z-30">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-40">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <img src={solvTechLogo} alt="SolvTech Logo" className="h-12 w-auto drop-shadow-lg" />
                <span className="ml-4 text-2xl font-bold text-white drop-shadow-lg">SolvTech</span>
              </div>
              <p className="text-white mb-6 text-lg leading-relaxed drop-shadow-md">
                Solusi teknologi terdepan untuk mengembangkan bisnis Anda
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center hover:bg-orange-500/30 transition-colors cursor-pointer">
                  <span className="text-orange-400">📞</span>
                </div>
                <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center hover:bg-orange-500/30 transition-colors cursor-pointer">
                  <span className="text-orange-400">📱</span>
                </div>
                <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center hover:bg-orange-500/30 transition-colors cursor-pointer">
                  <span className="text-orange-400">✉️</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6 text-orange-400">Kontak Kami</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">📞</span>
                  </div>
                  <div>
                    <p className="text-orange-300 text-sm font-medium drop-shadow-sm">Telepon</p>
                    <a href="tel:0882003843947" className="text-white font-bold hover:text-orange-400 transition-colors text-lg drop-shadow-md">
                      0882003843947
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">📱</span>
                  </div>
      <div>
                    <p className="text-orange-300 text-sm font-medium drop-shadow-sm">Instagram</p>
                    <a href="https://instagram.com/solvtech.id" target="_blank" rel="noopener noreferrer" className="text-white font-bold hover:text-orange-400 transition-colors text-lg drop-shadow-md">
                      @solvtech.id
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✉️</span>
                  </div>
                  <div>
                    <p className="text-orange-300 text-sm font-medium drop-shadow-sm">Email</p>
                    <a href="mailto:info@solvtech.id" className="text-white font-bold hover:text-orange-400 transition-colors text-lg drop-shadow-md">
                      info@solvtech.id
        </a>
      </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-orange-500/20 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-white text-center md:text-left font-medium drop-shadow-sm">
                © 2024 SolvTech. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="#home" className="text-orange-300 hover:text-orange-400 transition-colors font-medium drop-shadow-sm">Beranda</a>
                <a href="#about" className="text-orange-300 hover:text-orange-400 transition-colors font-medium drop-shadow-sm">Tentang</a>
                <a href="#services" className="text-orange-300 hover:text-orange-400 transition-colors font-medium drop-shadow-sm">Layanan</a>
                <a href="#testimonials" className="text-orange-300 hover:text-orange-400 transition-colors font-medium drop-shadow-sm">Testimoni</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      </div>
  )
}

export default App
