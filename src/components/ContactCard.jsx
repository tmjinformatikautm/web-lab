export default function ContactCard() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-lg p-8 border border-blue-100">
      <div className="text-center mb-6">
        <div className="inline-block p-3 bg-blue-600 rounded-full mb-4">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold bg-blue-600 bg-clip-text text-transparent mb-2">
          Email Kontak lab JAI
        </h3>
       
      </div>

      <div className="space-y-4">
        {/* QR Code */}
        <div className="bg-white rounded-xl p-6 shadow-md">
          <p className="text-gray-700 font-medium text-center mb-4">
            Scan QR Code untuk chat langsung
          </p>
          <div className="flex justify-center">
            <div className="w-48 h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center overflow-hidden shadow-inner">
              <img
                src="/images/qr-email.png"
                alt="QR Email"
                className="w-full h-full object-contain p-2"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div class="text-gray-400 text-sm text-center p-4"><svg class="w-12 h-12 mx-auto mb-2 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" /></svg>QR Code<br/><span class="text-xs">Tambahkan qr-wa.png</span></div>';
                }}
              />
            </div>
          </div>
        </div>

        {/* Info Text */}
        <div className="bg-white rounded-xl p-6 shadow-md">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Jam Operasional</h4>
              <p className="text-sm text-gray-600">Senin - Jumat: 07:00 - 22:00 WIB</p>
              <p className="text-sm text-gray-600">Sabtu - Minggu: 12:00 - 22:00 WIB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
