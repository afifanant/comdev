"use client";
import {
  ArrowRight,
  BookOpen, // Saya ganti icon Warning jadi Buku (lebih relevan)
} from "lucide-react";

export default function CTABelajar() {
  return (
    // UBAH: Background jadi Gradient Biru Dongker Comdev
    <section className="relative w-full py-20 px-4 bg-gradient-to-br from-[#001d47] to-[#00337A] overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
          {/* Icon Buku warna kuning biar kontras */}
          <BookOpen className="w-5 h-5 text-yellow-400 animate-pulse" />
          <span className="text-white font-medium text-sm">Pusat Edukasi</span>
        </div>

        {/* Headline: Lebih Intelektual */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Pahami Masalahnya, <br/>
          <span className="text-blue-200">Ciptakan Solusinya</span>
        </h2>

        {/* Body Text: Fokus ke Impact dari Belajar */}
        <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed">
          Perubahan nyata dimulai dari pemahaman yang benar. Pelajari modul 
          pengelolaan sampah, ekonomi sirkular, dan strategi pemberdayaan 
          masyarakat yang telah kami susun.
        </p>

        {/* Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/belajar"
            // Tombol Putih dengan Teks Biru Dongker
            className="bg-white text-[#001d47] font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 justify-center"
          >
            <span>Akses Materi Belajar</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Background decorations (Opacity disesuaikan biar gak nabrak teks) */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-400/20 rounded-full blur-2xl"></div>
    </section>
  );
}