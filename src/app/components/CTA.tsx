"use client";
import { ArrowRight, Sparkles, Download } from "lucide-react";

export default function CTA() {
  return (
    // UBAH: Background gradient jadi Biru Dongker (#001d47 ke #00337A)
    <section className="relative w-full py-20 px-4 bg-gradient-to-br from-[#001d47] to-[#00337A] overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
          {/* Sparkles warna kuning biar kontras di background biru */}
          <Sparkles className="w-5 h-5 text-yellow-300 animate-pulse" />
          <span className="text-white font-medium text-sm">Open Recruitment</span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Siap Bergerak untuk <br />
          {/* Highlight teks jadi biru muda */}
          <span className="text-blue-200">Lingkungan Lebih Baik?</span>
        </h2>

        {/* Subtitle */}
        <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed">
          Bergabunglah dengan gerakan Community Development KSE UINSU. 
          Ciptakan dampak nyata bagi masyarakat dan lingkungan sekitar.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          
          {/* Tombol Utama (Putih dengan Teks Biru Dongker) */}
          <button 
            onClick={() => window.location.href = "/komunitas"}
            className="bg-white text-[#001d47] font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 justify-center"
          >
            <span>Gabung Sekarang</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          {/* Tombol Sekunder (Outline Putih, Hover jadi Biru Dongker) */}
          <button className="border-2 border-white/30 text-white hover:bg-white hover:text-[#001d47] font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center gap-2 justify-center">
            <Download className="w-5 h-5" />
            <span>Download Profil</span>
          </button>
        </div>
      </div>

      {/* Background decorations (Disesuaikan opacity-nya biar elegan) */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-400/20 rounded-full blur-2xl"></div>
    </section>
  );
}