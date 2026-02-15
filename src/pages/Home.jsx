import Header from "../components/Header";
import Hero from "../components/Hero";
import AdminCard from "../components/AdminCard";
import ContactCard from "../components/ContactCard";
import Facilities from "../components/Facilities";
import Gallery from "../components/Gallery";
import ScheduleTable from "../components/ScheduleTable";
import ScrollToTop from "../components/ScrollToTop";
import adminData from "../data/admin.json";

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <Hero />
            <ScrollToTop />

            <main>
                {/* Facilities Section */}
                {/* <Facilities /> */}

                {/* Admin Section */}
                <section
                    id="admin"
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold bg-blue-600 bg-clip-text text-transparent mb-4">
                            Tim Lab JAI
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Kenalan dengan tim kami yang siap membantu Anda
                        </p>
                    </div>

                    {/* Kepala Lab - Solo di atas */}
                    {adminData
                        .filter((admin) => admin.isHead)
                        .map((admin, index) => (
                            <div
                                key={index}
                                className="max-w-2xl mx-auto mb-16"
                            >
                                <AdminCard admin={admin} />
                            </div>
                        ))}

                    {/* Admin Lab - 3 berjejjer */}
                    <div className="mb-12">
                        <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">
                            Admin & Asisten Lab
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {adminData
                                .filter((admin) => !admin.isHead)
                                .map((admin, index) => (
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
                <section
                    id="gallery"
                    className="bg-gradient-to-br from-blue-50 to-purple-50 py-16"
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <Gallery />
                    </div>
                </section>

                {/* Jadwal Section */}
                <section
                    id="schedule"
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
                >
                    <ScheduleTable />
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
                    {/* Top Section */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                        {/* Logo / About */}
                        <div>
                            <h3 className="text-2xl font-bold mb-4 tracking-wide">
                                Lab JAI
                            </h3>
                            <p className="text-blue-100 leading-relaxed text-sm">
                                Laboratorium Jaringan dan Inovasi <br />
                                Jurusan Informatika
                            </p>
                        </div>

                        {/* Jam Operasional */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4">
                                Jam Operasional
                            </h4>
                            <ul className="text-blue-100 text-sm space-y-2">
                                <li>Senin - Jumat: 07:00 - 22:00 WIB</li>
                                <li>Sabtu - Minggu: 12:00 - 22:00 WIB</li>
                            </ul>
                        </div>

                        {/* Kontak */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4">
                                Kontak
                            </h4>
                            <ul className="text-blue-100 text-sm space-y-2">
                                <li>Email: tmj.informatikautm@gmail.com</li>
                                <li>
                                    Lokasi: Gedung Laboratutium EKSAK Lt. 3
                                    Belakang
                                </li>
                            </ul>
                        </div>

                        {/* Sosial Media */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4">
                                Sosial Media
                            </h4>
                            <div className="flex gap-4">
                                <a
                                    href="#"
                                    className="w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-white/20 mt-12 pt-6 text-center text-sm text-blue-100">
                        © {new Date().getFullYear()} Lab JAI | All Rights
                        Reserved
                    </div>
                </div>
            </footer>
        </div>
    );
}
