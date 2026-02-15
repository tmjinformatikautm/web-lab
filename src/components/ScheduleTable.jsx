import { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';

export default function ScheduleTable() {
  const [schedule, setSchedule] = useState([]);
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
      
      // Ambil sheet pertama
      const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
      
      // Convert ke JSON
      const jsonData = XLSX.utils.sheet_to_json(firstSheet);
      
      setSchedule(jsonData);
      setLoading(false);
    } catch (err) {
      setError('Gagal memuat jadwal. Jadwal belum tersedia / Silakan coba lagi nanti.');
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Jadwal Penggunaan Lab
        </h3>
        <div className="text-center py-8">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
          <p className="mt-2 text-gray-600">Memuat jadwal...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Jadwal Penggunaan Lab
        </h3>
        <div className="text-center py-8">
          <p className="text-red-600">{error}</p>
          <button
            onClick={loadSchedule}
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
          >
            Coba Lagi
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
      <div className="text-center mb-8">
        <div className="inline-block p-3 bg-blue-600 rounded-full mb-4">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 className="text-3xl font-bold bg-blue-600 bg-clip-text text-transparent mb-2">
          Jadwal Penggunaan Lab
        </h3>
        <p className="text-gray-600">Lihat jadwal kegiatan laboratorium semester ini</p>
      </div>
      
      <div className="overflow-x-auto rounded-xl border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">
                Hari
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">
                Jam
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">
                Mata Kuliah
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">
                Dosen
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {schedule.map((item, index) => (
              <tr key={index} className="hover:bg-blue-50 transition-colors duration-150">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    {/* <div className="w-2 h-2 bg-blue-600 rounded-full"></div> */}
                    <span className="text-sm font-bold text-gray-900">{item.Hari}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {item.Jam}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm font-semibold text-gray-900">{item['Mata Kuliah']}</div>
                </td>
                <td className="px-6 py-4">
                  {item.Dosen ? (
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        {item.Dosen.charAt(0).toUpperCase()}
                      </div>
                      <span className="text-sm text-gray-700">{item.Dosen}</span>
                    </div>
                  ) : (
                    <span className="text-sm text-gray-400 italic">Belum ada dosen</span>
                  )}
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {schedule.length === 0 && (
        <div className="text-center py-12">
          <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="text-gray-500 font-medium">Tidak ada jadwal tersedia</p>
        </div>
      )}
    </div>
  );
}
