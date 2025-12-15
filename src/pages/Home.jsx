import Header from '../components/Header';
import Hero from '../components/Hero';
import AdminCard from '../components/AdminCard';
import ContactCard from '../components/ContactCard';
import Facilities from '../components/Facilities';
import Gallery from '../components/Gallery';
import ScheduleTable from '../components/ScheduleTable';
import adminData from '../data/admin.json';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      
      <main>
        {/* Facilities Section */}
        {/* <Facilities /> */}

        {/* Admin Section */}
        <section id="admin" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Tim Lab TMJ
            </h2>
            <p className="text-gray-600 text-lg">
              Kenalan dengan tim kami yang siap membantu Anda
            </p>
          </div>
          
          {/* Kepala Lab - Solo di atas */}
          {adminData.filter(admin => admin.isHead).map((admin, index) => (
            <div key={index} className="max-w-2xl mx-auto mb-16">
              <AdminCard admin={admin} />
            </div>
          ))}

          {/* Admin Lab - 3 berjejjer */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">Admin & Asisten Lab</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {adminData.filter(admin => !admin.isHead).map((admin, index) => (
                <AdminCard key={index} admin={admin} />
              ))}
            </div>
          </div>

          {/* Contact Card */}
          <div className="max-w-lg mx-auto">
            <ContactCard />
          </div>
        </section>

        {/* Galeri Section */}
        <section id="gallery" className="bg-gradient-to-br from-blue-50 to-purple-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Gallery />
          </div>
        </section>

        {/* Jadwal Section */}
        <section id="schedule" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <ScheduleTable />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Lab TMJ</h3>
              <p className="text-blue-100">
                Laboratorium Teknologi Multimedia dan Jaringan
                <br />Jurusan Informatika
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Jam Operasional</h3>
              <p className="text-blue-100">
                Senin - Jumat: 07:00 - 22:00 WIB<br />
                Sabtu - Minggu: 12:00 - 22:00 WIB<br />
              </p>
            </div>
            {/* <div>
              <h3 className="text-xl font-bold mb-4">Sosial Media</h3>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div> */}
          </div>
          <div className="border-t border-white/20 pt-8 text-center">
            <p className="text-blue-100">
              © {new Date().getFullYear()} Lab TMJ - Semua Hak Dilindungi
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
