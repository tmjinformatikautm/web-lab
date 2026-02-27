export default function Hero() {
  return (
    <div className="relative bg-[#f5f5f7] overflow-hidden min-h-[90vh] flex items-center justify-center">
      {/* Soft Ambient Backgrounds */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-400/20 rounded-full blur-[120px] mix-blend-multiply opacity-70 animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-400/20 rounded-full blur-[120px] mix-blend-multiply opacity-70 animate-pulse delay-700"></div>
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[40%] bg-cyan-300/20 rounded-full blur-[100px] mix-blend-multiply opacity-60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 text-center">
        {/* Badge - Apple Style */}
        <div className="inline-block mb-8 animate-slideUp">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 glass-panel rounded-full text-xs font-semibold text-gray-600 shadow-sm border border-white/60">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Lab JAI Prodi Teknik Informatika
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900 mb-6 animate-slideUp delay-100">
          Jaringan
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            dan Inovasi
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-2xl text-gray-500 mb-10 max-w-2xl mx-auto font-medium leading-relaxed animate-slideUp delay-200">
          Fasilitas lengkap untuk pembelajaran praktis di bidang jaringan,
          inovasi komputer, dan teknologi informasi terkini.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slideUp delay-300">
          <a
            href="#schedule"
            className="group px-8 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 shadow-apple-hover flex items-center gap-2 text-[15px]"
          >
            Lihat Jadwal
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a
            href="#gallery"
            className="group px-8 py-4 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 shadow-sm border border-gray-200 flex items-center gap-2 text-[15px]"
          >
            Lihat Galeri
          </a>
        </div>

        {/* Stats Grid - Glassy */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 animate-slideUp delay-500 max-w-4xl mx-auto relative z-20">
          <div className="glass-panel rounded-2xl p-6 text-center hover:-translate-y-1 transition-transform duration-300 shadow-sm">
            <div className="text-3xl font-bold text-gray-900 mb-1">36+</div>
            <div className="text-gray-500 text-sm font-medium">Komputer</div>
          </div>
          <div className="glass-panel rounded-2xl p-6 text-center hover:-translate-y-1 transition-transform duration-300 shadow-sm">
            <div className="text-3xl font-bold text-gray-900 mb-1">100 Mbps</div>
            <div className="text-gray-500 text-sm font-medium">Internet</div>
          </div>
          <div className="glass-panel rounded-2xl p-6 text-center hover:-translate-y-1 transition-transform duration-300 shadow-sm">
            <div className="text-3xl font-bold text-gray-900 mb-1">16/7</div>
            <div className="text-gray-500 text-sm font-medium">Akses Lab</div>
          </div>
          <div className="glass-panel rounded-2xl p-6 text-center hover:-translate-y-1 transition-transform duration-300 shadow-sm">
            <div className="text-3xl font-bold text-gray-900 mb-1">3</div>
            <div className="text-gray-500 text-sm font-medium">Admin</div>
          </div>
        </div>
      </div>
    </div>
  );
}
