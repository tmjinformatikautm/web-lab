import { useState } from 'react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  
  // Daftar gambar lab
  const images = [
    { id: 1, src: '/images/lab1.jpeg', alt: 'Ruangan Lab TMJ', category: 'Ruangan' },
    { id: 2, src: '/images/lab2.jpeg', alt: 'Peralatan Lab', category: 'Peralatan' },
    { id: 3, src: '/images/lab3.jpeg', alt: 'Meeting Area Lab', category: 'Suasana' },
    { id: 4, src: '/images/lab4.jpeg', alt: 'Fasilitas Lab', category: 'Fasilitas' },
    { id: 5, src: '/images/lab5.jpeg', alt: 'Ruangan Dosen', category: 'Dosen' },
    { id: 6, src: '/images/lab6.jpeg', alt: 'Admin Area', category: 'Admin' },
  ];

  return (
    <>
      <div className="glass-panel rounded-[2rem] p-8 md:p-12 border border-white/40 shadow-apple">
        <div className="text-center mb-10">
          <h3 className="text-4xl font-bold text-gray-900 tracking-tight mb-3">
            Galeri Lab JAI
          </h3>
          <p className="text-gray-500 font-medium text-lg">Lihat fasilitas dan suasana laboratorium kami</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-apple-hover transition-all duration-500 bg-[#f5f5f7] border border-gray-100/60"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)]"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
              
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <p className="font-semibold text-white text-lg drop-shadow-md">{image.alt}</p>
                <p className="text-sm text-gray-200">{image.category}</p>
              </div>

              <div className="absolute top-4 right-4 bg-white/30 backdrop-blur-md rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-500 border border-white/40 shadow-sm">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modern iOS Modal for Zoomed Image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-xl flex items-center justify-center z-50 p-4 sm:p-10 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-6xl w-full max-h-full relative flex items-center justify-center animate-slideUp">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 sm:-right-4 text-white/70 hover:text-white transition-colors bg-black/20 hover:bg-black/40 rounded-full p-2 backdrop-blur-md"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[85vh] object-contain bg-black/10"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-8">
                <h4 className="text-white text-2xl font-bold tracking-tight">{selectedImage.alt}</h4>
                <p className="text-gray-300 font-medium">{selectedImage.category}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
