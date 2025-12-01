"use client"
import { useState, useEffect } from "react"
import Link from "next/link" // IMPORT LINK DARI NEXT.JS
import { Users, Recycle, TreePine, Award, TrendingUp, Globe, Heart, Zap, Leaf } from "lucide-react"

// Helper untuk membersihkan dan mendapatkan nilai target yang benar
const getTargetValue = (value: string): number => {
    // Menghilangkan semua karakter non-digit kecuali tanda desimal (jika perlu)
    const cleaned = value.replace(/[^0-9]/g, ''); 
    return parseInt(cleaned, 10);
};

// Data statistik (SUDAH DISESUAIKAN ULANG AGAR JAUH LEBIH HUMBLE DAN REALISTIS)
const statsData = [
  {
    icon: <Users className="w-8 h-8" />,
    value: "1.000+", // Disesuaikan: Turun dari 10.000+
    label: "Partisipan Kegiatan", 
    description: "Jumlah total peserta yang terlibat dalam webinar, workshop, dan event",
    color: "navy",
    growth: "+8%", // Disesuaikan
    detail: "Target penambahan 100 partisipan baru setiap bulan",
  },
  {
    icon: <Recycle className="w-8 h-8" />,
    value: "40%", // Disesuaikan: Turun dari 85%
    label: "Target Daur Ulang", 
    description: "Persentase kenaikan partisipasi daur ulang di area fokus Comdev",
    color: "blue",
    growth: "+15%", // Disesuaikan
    detail: "Menuju target 50% partisipasi di akhir periode program",
  },
  {
    icon: <TreePine className="w-8 h-8" />,
    value: "100+", // Disesuaikan: Turun dari 500+
    label: "Pohon Tertanam",
    description: "Total kontribusi penanaman pohon dalam program rehabilitasi lingkungan",
    color: "teal",
    growth: "+20%", // Disesuaikan
    detail: "Fokus pada program penghijauan di sekitar lingkungan kampus",
  },
  {
    icon: <Award className="w-8 h-8" />,
    value: "3", // Disesuaikan: Turun dari 12
    label: "Penghargaan Utama",
    description: "Apresiasi atas inovasi sosial dan komitmen lingkungan",
    color: "gold",
    growth: "+10%", // Disesuaikan
    detail: "Termasuk penghargaan di tingkat regional dan nasional",
  },
]

// Array untuk menyimpan target value agar tidak dihitung ulang di render
const targets = statsData.map(stat => getTargetValue(stat.value)); 


export default function EnhancedStats() {
  const [countedStats, setCountedStats] = useState(statsData.map(() => 0))
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("stats-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const interval = 50
    const steps = duration / interval

    statsData.forEach((stat, index) => {
      // Menggunakan targets yang sudah dihitung sebelumnya
      const target = targets[index] 
      if (isNaN(target)) return

      let step = 0
      const timer = setInterval(() => {
        step += 1
        const progress = Math.min(step / steps, 1)
        const currentValue = Math.floor(progress * target)

        setCountedStats((prev) => {
          const newCounts = [...prev]
          newCounts[index] = currentValue
          return newCounts
        })

        if (progress === 1) clearInterval(timer)
      }, interval)
    })
  }, [isVisible])

  const getColorClasses = (color: string) => {
    const colorMap = {
      navy: {
        bg: "bg-blue-50",
        text: "text-[#001d47]",
        border: "border-blue-200",
        iconBg: "bg-[#001d47]",
        gradient: "from-[#001d47] to-[#00337A]",
        glow: "shadow-blue-900/20",
      },
      blue: {
        bg: "bg-sky-50",
        text: "text-sky-700",
        border: "border-sky-200",
        iconBg: "bg-sky-600",
        gradient: "from-sky-100 to-sky-200",
        glow: "shadow-sky-200",
      },
      teal: {
        bg: "bg-teal-50",
        text: "text-teal-700",
        border: "border-teal-200",
        iconBg: "bg-teal-600",
        gradient: "from-teal-100 to-teal-200",
        glow: "shadow-teal-200",
      },
      gold: {
        bg: "bg-amber-50",
        text: "text-amber-700",
        border: "border-amber-200",
        iconBg: "bg-amber-500",
        gradient: "from-amber-100 to-amber-200",
        glow: "shadow-amber-200",
      },
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.navy
  }

  // Fungsi untuk merender nilai yang sudah diformat dengan benar (separator ribuan + suffix)
  const renderFormattedValue = (index: number, statValue: string): string => {
    const currentCount = countedStats[index];
    const target = targets[index];
    
    if (isNaN(target)) {
        return statValue;
    }

    // Tampilkan angka dengan separator ribuan (misal: 1.000)
    let display = currentCount.toLocaleString('id-ID');

    // Tambahkan suffix jika perhitungan sudah selesai
    if (currentCount === target) {
        if (statValue.includes('+')) {
            display += '+';
        } else if (statValue.includes('%')) {
            display += '%';
        }
    }
    return display;
  };

  return (
    <section id="stats-section" className="relative w-full py-20 px-4 overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full mb-8 shadow-md border border-gray-100">
            <TrendingUp className="w-5 h-5 text-[#001d47] animate-pulse" />
            <span className="text-[#001d47] font-semibold text-sm">Our Impact</span>
            <div className="w-2 h-2 bg-[#001d47] rounded-full animate-ping"></div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Dampak Nyata dari{" "}
            <span className="bg-gradient-to-r from-[#001d47] to-blue-600 bg-clip-text text-transparent">
              Aksi Bersama
            </span>
          </h1>

          {/* FIX: Pesan diubah agar tidak absolut/overclaim */}
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Angka-angka ini menunjukkan potensi perubahan yang dapat kita ciptakan 
            melalui gerakan kolektif Comdev KSE UINSU.
          </p>

          <div className="flex justify-center gap-2 mb-8">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-500 ${
                  isVisible ? "bg-[#001d47]" : "bg-gray-300"
                }`}
                style={{ animationDelay: `${i * 200}ms` }}
              />
            ))}
          </div>
        </div>

        {/* Enhanced Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => {
            const colors = getColorClasses(stat.color)
            const floatDelay = `${index * 0.3}s`

            return (
              <div
                key={index}
                className={`group relative cursor-pointer transform transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{
                  animation: isVisible ? `float 6s ease-in-out infinite ${floatDelay}` : "none",
                  transitionDelay: `${index * 150}ms`,
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className={`absolute inset-0 rounded-3xl ${colors.glow} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}
                ></div>

                <div
                  className={`relative ${colors.bg} border ${colors.border} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 z-10 overflow-hidden`}
                >
                  <div className="absolute inset-0 opacity-5 rounded-3xl overflow-hidden">
                    <div className={`absolute -top-4 -right-4 w-24 h-24 ${colors.iconBg} rounded-full blur-2xl`}></div>
                    <div className={`absolute -bottom-4 -left-4 w-20 h-20 ${colors.iconBg} rounded-full blur-xl`}></div>
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`w-16 h-16 ${colors.iconBg} rounded-2xl flex items-center justify-center group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-lg`}
                      >
                        <div className="text-white">{stat.icon}</div>
                      </div>

                      <div className="bg-white/80 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-sm border border-gray-100">
                        <TrendingUp className="w-3 h-3 text-green-600" />
                        {stat.growth}
                      </div>
                    </div>

                    <div className="mb-4">
                      {/* FIX: Menggunakan fungsi renderFormattedValue */}
                      <h3 className="text-4xl font-bold text-gray-800 mb-2 group-hover:text-[#001d47] transition-colors duration-300">
                        {renderFormattedValue(index, stat.value)}
                      </h3>

                      <div className="w-full bg-gray-200 rounded-full h-1 mb-3">
                        <div
                          className={`h-1 rounded-full ${colors.iconBg} transition-all duration-2000`}
                          style={{
                            width: isVisible ? "100%" : "0%",
                            transitionDelay: `${index * 200}ms`,
                          }}
                        ></div>
                      </div>
                    </div>

                    <h4 className={`text-lg font-bold mb-3 ${colors.text} transition-colors duration-300`}>
                      {stat.label}
                    </h4>

                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 text-sm mb-4">
                      {stat.description}
                    </p>

                    {hoveredIndex === index && (
                      <div className="mt-4 p-3 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50 animate-in slide-in-from-bottom duration-300">
                        <p className="text-xs text-gray-600 font-medium">{stat.detail}</p>
                      </div>
                    )}

                    <div
                      className={`mt-4 w-full h-1 ${colors.iconBg} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                    ></div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Enhanced Bottom Section */}
        <div className="mt-20 grid md:grid-cols-2 gap-8">
          
          {/* Join Community CTA - DARK NAVY THEME */}
          <div className="bg-[#001d47] rounded-3xl p-8 relative overflow-hidden shadow-xl transform transition-transform hover:scale-[1.01]">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-4 right-4 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
              <div className="absolute bottom-4 left-4 w-24 h-24 bg-cyan-400 rounded-full blur-2xl"></div>
            </div>

            <div className="relative z-10 text-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Bergabung Sekarang!</h3>
                  <p className="text-blue-200 font-medium">Gratis dan Terbuka</p>
                </div>
              </div>

              <p className="text-blue-100 mb-8 leading-relaxed">
                Jadilah bagian dari komunitas Comdev KSE UINSU. Dapatkan akses ke forum diskusi, project sosial, dan
                sertifikat kegiatan!
              </p>

              {/* PERUBAHAN DI SINI: Ganti teks tombol dari "Daftar Member" menjadi "Ayo Berkolaborasi" */}
              <Link
                href="/komunitas"
                className="bg-white text-[#001d47] px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2 inline-flex"
              >
                <span>Ayo Berkolaborasi</span>
                <TrendingUp className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Real-time Activity */}
          <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Zap className="w-6 h-6 text-[#001d47]" />
              Aktivitas Real-time
            </h3>

            {/* Catatan: Karena data ini statis, gue biarin di sini. 
               Kalau mau real-time, perlu integrasi Firestore. */}
            <div className="space-y-4">
              {[
                {
                  icon: <Globe className="w-5 h-5 text-blue-600" />,
                  label: "Pengunjung Online",
                  value: "1,247",
                  trend: "+12%",
                },
                {
                  icon: <Heart className="w-5 h-5 text-red-500" />,
                  label: "Donasi / Support",
                  value: "89",
                  trend: "+23%",
                },
                {
                  icon: <Leaf className="w-5 h-5 text-teal-600" />,
                  label: "Sampah Terpilah",
                  value: "156kg",
                  trend: "+8%",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors border border-transparent hover:border-blue-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-gray-700">
                      {item.icon}
                    </div>
                    <span className="font-medium text-gray-800">{item.label}</span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-[#001d47]">{item.value}</div>
                    <div className="text-xs text-green-600 font-medium">{item.trend}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-20 left-10 w-32 h-32 bg-[#001d47] rounded-full opacity-5 animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-24 h-24 bg-blue-300 rounded-full opacity-10 animate-bounce"></div>
      <div className="absolute top-1/2 left-8 w-16 h-16 bg-teal-200 rounded-full opacity-20 animate-ping"></div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </section>
  )
}