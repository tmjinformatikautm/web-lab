import { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';

export default function ScheduleTable() {
  const [schedules, setSchedules] = useState([]); // [{ sheetName, data: [] }]
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadSchedule();
  }, []);

  const loadSchedule = async () => {
    try {
      const response = await fetch('/data/jadwal.xlsx');
      const arrayBuffer = await response.arrayBuffer();
      const workbook = XLSX.read(arrayBuffer, { type: 'array' });
      
      // Ambil hingga 2 sheet pertama
      const sheetsToLoad = workbook.SheetNames.slice(0, 2);
      
      const parsedSchedules = sheetsToLoad.map(sheetName => {
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet);
        return {
          sheetName,
          data: jsonData
        };
      });
      
      setSchedules(parsedSchedules);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError('Gagal memuat jadwal. Jadwal belum tersedia / Silakan coba lagi nanti.');
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="glass-panel rounded-3xl p-10 max-w-3xl mx-auto flex flex-col items-center justify-center min-h-[300px]">
        <div className="inline-block animate-spin rounded-full h-10 w-10 border-4 border-gray-200 border-t-blue-600 mb-4"></div>
        <p className="text-gray-500 font-medium animate-pulse">Memuat jadwal laboratorium...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="glass-panel rounded-3xl p-10 max-w-2xl mx-auto text-center border-red-100 shadow-sm">
        <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <p className="text-gray-900 font-medium mb-6">{error}</p>
        <button
          onClick={loadSchedule}
          className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-apple-hover"
        >
          Coba Lagi
        </button>
      </div>
    );
  }

  if (schedules.length === 0 || schedules.every(s => s.data.length === 0)) {
    return (
      <div className="glass-panel rounded-3xl p-16 max-w-3xl mx-auto text-center border border-gray-100 shadow-sm">
        <svg className="w-20 h-20 text-gray-300 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <p className="text-gray-500 font-medium text-lg">Tidak ada jadwal tersedia saat ini</p>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
          Jadwal Penggunaan Lab
        </h2>
        <p className="text-gray-500 text-lg">
          Informasi jadwal praktikum dan kegiatan laboratorium semester ini
        </p>
      </div>
      
      <div className="relative group max-w-3xl mx-auto">
        {/* Carousel Container */}
        <div 
          className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-6 pt-4 scroll-smooth" 
          id="schedule-carousel"
          onScroll={(e) => {
            const scrollLeft = e.target.scrollLeft;
            const width = e.target.offsetWidth;
            const newIndex = Math.round(scrollLeft / width);
            // Optionally could add React state for active index here if needed 
            // but for simplicity we'll just let native scroll-snap handle it
          }}
        >
          {schedules.map((scheduleObj, sheetIdx) => (
            <div 
              key={sheetIdx} 
              className="glass-panel rounded-3xl border border-gray-100 shadow-apple overflow-hidden flex flex-col min-w-full snap-center shrink-0"
            >
              <div className="bg-[#f5f5f7]/80 backdrop-blur-md px-8 py-5 border-b border-gray-200/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-sm shadow-blue-400"></div>
                  <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                    {scheduleObj.sheetName}
                  </h3>
                </div>
                
                {/* Internal Slide Controls - Top Right on Desktop */}
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-gray-500 mr-2">
                    {sheetIdx + 1} dari {schedules.length}
                  </span>
                  
                  <button 
                    onClick={() => {
                      const container = document.getElementById('schedule-carousel');
                      container.scrollBy({ left: -container.offsetWidth, behavior: 'smooth' });
                    }}
                    className="p-1.5 rounded-full bg-white/80 hover:bg-white shadow-sm border border-gray-200 text-gray-600 hover:text-black transition-all disabled:opacity-50"
                    disabled={sheetIdx === 0}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                  </button>
                  <button 
                    onClick={() => {
                      const container = document.getElementById('schedule-carousel');
                      container.scrollBy({ left: container.offsetWidth, behavior: 'smooth' });
                    }}
                    className="p-1.5 rounded-full bg-white/80 hover:bg-white shadow-sm border border-gray-200 text-gray-600 hover:text-black transition-all disabled:opacity-50"
                    disabled={sheetIdx === schedules.length - 1}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </button>
                </div>
              </div>
              
              <div className="overflow-x-auto flex-grow max-h-[500px] overflow-y-auto custom-scrollbar border-x border-b border-gray-800 rounded-b-3xl">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-gray-100 sticky top-0 z-10 shadow-sm">
                    <tr className="border-b border-gray-800">
                      <th className="px-6 py-3 text-[12px] font-bold text-gray-800 uppercase tracking-wider border border-gray-800 text-center">Hari</th>
                      <th className="px-6 py-3 text-[12px] font-bold text-gray-800 uppercase tracking-wider border border-gray-800 text-center">Jam</th>
                      <th className="px-6 py-3 text-[12px] font-bold text-gray-800 uppercase tracking-wider border border-gray-800 text-center">Mata Kuliah</th>
                      <th className="px-6 py-3 text-[12px] font-bold text-gray-800 uppercase tracking-wider border border-gray-800 text-center">Dosen</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {scheduleObj.data.length === 0 ? (
                      <tr>
                        <td colSpan="4" className="px-6 py-20 text-center text-gray-400 text-sm">
                          <svg className="w-12 h-12 mx-auto mb-3 text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          Jadwal kosong untuk sheet ini
                        </td>
                      </tr>
                    ) : (
                      (() => {
                        // 1. Fill down Hari agar terbaca di semua baris, termasuk istirahat
                        let currentHari = '';
                        const filledData = scheduleObj.data.map((item) => {
                          if (item.Hari && item.Hari.toString().trim() !== '') {
                            currentHari = item.Hari.toString().trim();
                          }
                          return { ...item, Hari: currentHari };
                        });

                        // 2. Dapatkan list unik Hari untuk pewarnaan selang-seling
                        const uniqueDays = [...new Set(filledData.map(d => d.Hari).filter(Boolean))];

                        const processedRows = [];
                        let i = 0;
                        while(i < filledData.length) {
                          const iterHari = filledData[i].Hari;
                          let rowSpan = 0;
                          
                          // Hitung berapa baris beruntun yang punya Hari yang sama
                          while(i + rowSpan < filledData.length && filledData[i + rowSpan].Hari === iterHari) {
                            rowSpan++;
                          }

                          const dayIndex = uniqueDays.indexOf(iterHari);
                          const isEvenDay = dayIndex % 2 === 0;
                          const rowBgColor = isEvenDay ? '#e2efff' : '#e4f8dd'; // Excel blue / excel green

                          // Generate baris untuk grup hari ini
                          for (let j = 0; j < rowSpan; j++) {
                            const item = filledData[i + j];
                            const isIstirahat = Object.values(item).some(val => 
                              val && val.toString().toLowerCase().includes('istirahat')
                            );
                            const isFirstOfDay = j === 0;

                            processedRows.push(
                              <tr key={i + j} style={{ backgroundColor: rowBgColor, color: '#000000' }} className="border-b border-gray-800">
                                {isFirstOfDay && (
                                  <td 
                                    rowSpan={rowSpan} 
                                    className="px-4 py-3 align-middle text-center border-r border-gray-800 bg-opacity-100"
                                  >
                                    <span className="text-sm font-semibold block uppercase tracking-wide">
                                      {item.Hari}
                                    </span>
                                  </td>
                                )}
                                
                                {isIstirahat ? (
                                  <td colSpan="3" className="px-4 py-2 text-center border-r border-gray-800 bg-red-500">
                                    <span className="text-xs font-bold text-white uppercase tracking-widest drop-shadow-sm">
                                      ISTIRAHAT
                                    </span>
                                  </td>
                                ) : (
                                  <>
                                    <td className="px-4 py-2 text-center whitespace-nowrap border-r border-gray-800">
                                      <span className="text-sm font-medium">
                                        {item.Jam || ''}
                                      </span>
                                    </td>
                                    
                                    <td className="px-5 py-3 border-r border-gray-800">
                                      <div className="text-sm font-medium leading-snug max-w-[200px] whitespace-normal" title={item['Mata Kuliah'] || ''}>
                                        {item['Mata Kuliah'] || ''}
                                      </div>
                                    </td>
                                    
                                    <td className="px-4 py-3">
                                      {item.Dosen ? (
                                        <div className="flex items-center gap-3">
                                          <div className="w-7 h-7 bg-white/60 rounded-full flex items-center justify-center text-gray-800 text-[10px] font-bold border border-gray-400 shrink-0">
                                            {item.Dosen.charAt(0).toUpperCase()}
                                          </div>
                                          <span className="text-sm font-medium truncate max-w-[150px]" title={item.Dosen}>
                                            {item.Dosen}
                                          </span>
                                        </div>
                                      ) : (
                                        <span className="text-xs text-gray-500 font-medium opacity-50">
                                          -
                                        </span>
                                      )}
                                    </td>
                                  </>
                                )}
                              </tr>
                            );
                          }

                          i += rowSpan;
                        }

                        return processedRows;
                      })()
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
