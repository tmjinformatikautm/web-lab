export default function ContactCard() {
  return (
    <div className="bg-[#fbfbfd]/80 backdrop-blur-xl rounded-[2rem] p-8 lg:p-10 border border-gray-200/60 relative overflow-hidden transition-all duration-300 group">
      
      <div className="relative z-10 text-center mb-8">
        <div className="inline-flex p-3.5 bg-gray-100 rounded-2xl mb-5">
          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">
          Hubungi Kami
        </h3>
        <p className="text-[15px] text-gray-500 font-medium">Jangan ragu untuk bertanya atau berkolaborasi</p>
      </div>

      <div className="space-y-4">
        {/* QR Code Section */}
        <div className="bg-white/60 rounded-2xl p-6 border border-gray-200/50 transition-colors duration-300">
          <p className="text-gray-500 text-xs font-bold text-center mb-4 uppercase tracking-widest">
            Scan QR Code Email
          </p>
          <div className="flex justify-center">
            <div className="w-44 h-44 bg-white rounded-2xl flex items-center justify-center border border-gray-100 p-3 transition-opacity">
              <img
                src="/images/qr-email.png"
                alt="QR Email"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div class="text-gray-400 text-xs text-center p-2"><svg class="w-8 h-8 mx-auto mb-2 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" /></svg><span class="font-medium">QR Code<br/>Belum tersedia</span></div>';
                }}
              />
            </div>
          </div>
        </div>

        {/* Operational Hours Section */}
        <div className="bg-white/60 rounded-2xl p-6 border border-gray-200/50 transition-colors duration-300 relative overflow-hidden group/hours">
          <div className="flex items-center gap-5 relative z-10">
            <div className="flex-shrink-0 w-14 h-14 bg-[#f2f2f7] rounded-[1.15rem] flex items-center justify-center border border-gray-100">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1 tracking-tight">Jam Operasional</h4>
              <div className="space-y-0.5">
                <p className="text-[13px] text-gray-600 font-medium"><span className="text-gray-400 mr-1">Sen - Jum:</span> 07:00 - 22:00 WIB</p>
                <p className="text-[13px] text-gray-600 font-medium"><span className="text-gray-400 mr-2">Sab - Min:</span> 12:00 - 22:00 WIB</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
