"use client";
import {
  Trash2,
  BookOpen,
  Sprout,
  Users,
  CircleQuestionMark,
  Lightbulb, // Icon baru untuk Inovasi
  Target,    // Icon baru untuk Misi
} from "lucide-react";
import { useState } from "react";
import TargetCursor from "../rb/TargetCursor/TargetCursor";

export default function LatarBelakang() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <section
      className="relative w-full py-20 px-4 bg-white"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="max-w-6xl mx-auto">
        {isHovering && (
          <TargetCursor spinDuration={4} hideDefaultCursor={true} />
        )}
        
        {/* Main heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50/50 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-sm border border-blue-100">
            <CircleQuestionMark className="w-5 h-5 text-[#001d47] animate-pulse" />
            <span className="text-[#001d47] font-bold text-sm tracking-wide">
              Latar Belakang
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Mengapa Comdev <span className="text-[#001d47]">Bergerak?</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Berangkat dari kepedulian terhadap lingkungan dan kesenjangan sosial, 
            kami hadir untuk menciptakan solusi terintegrasi berbasis pemberdayaan masyarakat.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          
          {/* 1. URGENCY CARD (Yellow) */}
          <div className="group cursor-target relative cursor-pointer transform rotate-2 hover:rotate-0 transition-transform duration-500 animate-[float_6s_ease-in-out_infinite]">
            <div className="absolute inset-0 bg-yellow-100 border border-yellow-300 rounded-3xl transform translate-x-2 translate-y-2 opacity-0 group-hover:opacity-60 transition-all duration-500 group-hover:translate-x-3 group-hover:translate-y-3"></div>
            <div className="absolute inset-0 bg-yellow-200 border border-yellow-400 rounded-3xl transform translate-x-1 translate-y-1 opacity-0 group-hover:opacity-80 transition-all duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>

            <div className="relative bg-yellow-50 hover:bg-yellow-100 border border-yellow-200 rounded-3xl p-8 shadow-yellow-200 hover:shadow-lg transition-all duration-500 hover:-translate-y-2 z-10">
              <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                <Trash2 className="w-8 h-8 text-white group-hover:animate-pulse" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-700 transition-colors duration-300">
                Urgensi Lingkungan
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                Penumpukan sampah organik dan anorganik yang tidak terkelola menjadi ancaman serius bagi kesehatan masyarakat dan kelestarian desa.
              </p>
            </div>
          </div>

          {/* 2. SOLUTION CARD (Blue) */}
          <div className="group cursor-target relative cursor-pointer transform -rotate-1 hover:rotate-0 transition-transform duration-500 md:translate-y-8 animate-[float_6s_ease-in-out_infinite_1s]">
            <div className="absolute inset-0 bg-blue-100 border border-blue-300 rounded-3xl transform translate-x-2 translate-y-2 opacity-0 group-hover:opacity-60 transition-all duration-500 group-hover:translate-x-3 group-hover:translate-y-3"></div>
            <div className="absolute inset-0 bg-blue-200 border border-blue-400 rounded-3xl transform translate-x-1 translate-y-1 opacity-0 group-hover:opacity-80 transition-all duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>

            <div className="relative bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-3xl p-8 shadow-blue-200 hover:shadow-lg transition-all duration-500 hover:-translate-y-2 z-10">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:-rotate-12 group-hover:scale-110 transition-all duration-300">
                <Lightbulb className="w-8 h-8 text-white group-hover:animate-bounce" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-800 transition-colors duration-300">
                Inovasi Sosial
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                Kami tidak hanya membersihkan, tapi <strong>mengubah sampah menjadi berkah</strong> melalui budidaya maggot, kompos, dan kerajinan daur ulang.
              </p>
            </div>
          </div>

          {/* 3. IMPACT CARD (Green) */}
          <div className="group cursor-target relative cursor-pointer transform -rotate-2 hover:rotate-0 transition-transform duration-500 md:-translate-y-4 animate-[float_6s_ease-in-out_infinite_2s]">
            <div className="absolute inset-0 bg-green-100 border border-green-300 rounded-3xl transform translate-x-2 translate-y-2 opacity-0 group-hover:opacity-60 transition-all duration-500 group-hover:translate-x-3 group-hover:translate-y-3"></div>
            <div className="absolute inset-0 bg-green-200 border border-green-400 rounded-3xl transform translate-x-1 translate-y-1 opacity-0 group-hover:opacity-80 transition-all duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>

            <div className="relative bg-green-50 hover:bg-green-100 border border-green-200 rounded-3xl p-8 shadow-green-200 hover:shadow-lg transition-all duration-500 hover:-translate-y-2 z-10">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-45 group-hover:scale-110 transition-all duration-300">
                <Sprout className="w-8 h-8 text-white group-hover:animate-spin" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-green-800 transition-colors duration-300">
                Ekonomi Sirkular
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                Menciptakan ekosistem di mana limbah diolah menjadi produk bernilai ekonomis yang meningkatkan pendapatan masyarakat desa binaan.
              </p>
            </div>
          </div>

          {/* 4. MISSION CARD (Purple) */}
          <div className="group cursor-target relative cursor-pointer transform rotate-1 hover:rotate-0 transition-transform duration-500 md:translate-y-6 animate-[float_6s_ease-in-out_infinite_3s]">
            <div className="absolute inset-0 bg-purple-100 border border-purple-300 rounded-3xl transform translate-x-2 translate-y-2 opacity-0 group-hover:opacity-60 transition-all duration-500 group-hover:translate-x-3 group-hover:translate-y-3"></div>
            <div className="absolute inset-0 bg-purple-200 border border-purple-400 rounded-3xl transform translate-x-1 translate-y-1 opacity-0 group-hover:opacity-80 transition-all duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>

            <div className="relative bg-purple-50 hover:bg-purple-100 border border-purple-200 rounded-3xl p-8 shadow-purple-200 hover:shadow-lg transition-all duration-500 hover:-translate-y-2 z-10">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:-rotate-6 group-hover:scale-110 transition-all duration-300">
                <Users className="w-8 h-8 text-white group-hover:animate-pulse" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-purple-800 transition-colors duration-300">
                Kolaborasi Mahasiswa
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                Wujud nyata pengabdian mahasiswa KSE UINSU, bersinergi dengan warga lokal untuk membangun desa yang mandiri dan lestari.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </section>
  );
}