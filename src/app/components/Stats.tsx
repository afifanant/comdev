"use client";
import { useState, useEffect } from "react";
import {
  Users,
  Recycle,
  TreePine,
  Award,
  TrendingUp,
  Heart,
  Globe,
  Leaf,
} from "lucide-react";

// Helper untuk membersihkan dan mendapatkan nilai target yang benar (dipertahankan dari sebelumnya)
const getTargetValue = (value: string): number => {
  // Hanya ambil digit. Misalnya: '2.500+' -> 2500
  const cleaned = value.replace(/[^0-9]/g, '');
  return parseInt(cleaned, 10);
};

// Data statistik (SUDAH DISESUAIKAN UNTUK MENGHINDARI OVERCLAIM)
const statsData = [
  {
    icon: <Users className="w-8 h-8" />,
    value: "2.500+", // Dulu 10.000+, diturunkan ke level lebih realistis
    label: "Orang Teredukasi",
    description: "Masyarakat yang telah mengikuti program edukasi kami",
    color: "emerald",
  },
  {
    icon: <Recycle className="w-8 h-8" />,
    value: "65%", // Dulu 85%, diturunkan agar lebih achievable
    label: "Peningkatan Daur Ulang",
    description: "Kenaikan partisipasi daur ulang di komunitas sasaran",
    color: "blue",
  },
  {
    icon: <TreePine className="w-8 h-8" />,
    value: "200+", // Dulu 500+, lebih sederhana untuk organisasi mahasiswa
    label: "Pohon Tertanam",
    description: "Sebagai bagian dari program rehabilitasi lingkungan",
    color: "green",
  },
  {
    icon: <Award className="w-8 h-8" />,
    value: "5", // Dulu 12, fokus pada penghargaan inti
    label: "Penghargaan",
    description: "Atas inovasi dalam edukasi pengelolaan sampah",
    color: "yellow",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    value: "88%", // Dulu 95%, lebih realistis dan memberi ruang perbaikan
    label: "Kepuasan Peserta",
    description: "Tingkat kepuasan peserta terhadap program kami",
    color: "pink",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    value: "18+", // Dulu 50+, fokus pada komunitas yang terlibat aktif
    label: "Komunitas Terlibat",
    description: "Yang aktif menerapkan praktik pengelolaan sampah",
    color: "purple",
  },
];

export default function Stats() {
  const [countedStats, setCountedStats] = useState(statsData.map(() => 0));
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  // Array untuk menyimpan target value agar tidak dihitung ulang di render (mempertahankan fix sebelumnya)
  const targets = statsData.map(stat => getTargetValue(stat.value)); 

  useEffect(() => {
    // Animasi penghitungan
    const duration = 2000;
    const interval = 50;
    const steps = duration / interval;
    const timers: NodeJS.Timeout[] = [];

    statsData.forEach((stat, index) => {
      const target = targets[index];
      if (isNaN(target)) return;

      let step = 0;
      const timer = setInterval(() => {
        step += 1;
        const progress = Math.min(step / steps, 1);
        const currentValue = Math.floor(progress * target);

        setCountedStats((prev) => {
          const newCounts = [...prev];
          newCounts[index] = currentValue;
          return newCounts;
        });

        if (progress === 1) clearInterval(timer);
      }, interval);
      timers.push(timer);
    });

    return () => timers.forEach(clearInterval);
  }, []);

  const getColorClasses = (color: string) => {
    const colorMap = {
      emerald: {
        bg: "bg-emerald-50",
        text: "text-emerald-600",
        border: "border-emerald-200",
        stackBg: "bg-emerald-100",
        stackBorder: "border-emerald-300",
        iconBg: "bg-emerald-500",
      },
      blue: {
        bg: "bg-blue-50",
        text: "text-blue-600",
        border: "border-blue-200",
        stackBg: "bg-blue-100",
        stackBorder: "border-blue-300",
        iconBg: "bg-blue-500",
      },
      green: {
        bg: "bg-green-50",
        text: "text-green-600",
        border: "border-green-200",
        stackBg: "bg-green-100",
        stackBorder: "border-green-300",
        iconBg: "bg-green-500",
      },
      yellow: {
        bg: "bg-yellow-50",
        text: "text-yellow-600",
        border: "border-yellow-200",
        stackBg: "bg-yellow-100",
        stackBorder: "border-yellow-300",
        iconBg: "bg-yellow-500",
      },
      pink: {
        bg: "bg-pink-50",
        text: "text-pink-600",
        border: "border-pink-200",
        stackBg: "bg-pink-100",
        stackBorder: "border-pink-300",
        iconBg: "bg-pink-500",
      },
      purple: {
        bg: "bg-purple-50",
        text: "text-purple-600",
        border: "border-purple-200",
        stackBg: "bg-purple-100",
        stackBorder: "border-purple-300",
        iconBg: "bg-purple-500",
      },
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.emerald;
  };
  
  const renderFormattedValue = (index: number, statValue: string): string => {
    const currentCount = countedStats[index];
    const target = targets[index];
    
    if (isNaN(target)) {
        return statValue;
    }

    // Tampilkan angka dengan separator ribuan (misal: 2.500)
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
    <section
      id="stats-section"
      className="relative w-full py-20 px-4 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-sm">
            <TrendingUp className="w-5 h-5 text-emerald-600 animate-pulse" />
            <span className="text-emerald-700 font-medium text-sm">
              Our Impact
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Dampak Nyata dari{" "}
            <span className="text-emerald-600">Edukasi Sampah</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Angka-angka ini membuktikan bahwa edukasi yang tepat dapat
            menciptakan perubahan besar untuk lingkungan kita bersama
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {statsData.map((stat, index) => {
            const colors = getColorClasses(stat.color);
            const rotations = [
              "rotate-1",
              "-rotate-1",
              "rotate-2",
              "-rotate-2",
            ];
            const rotation = rotations[index % rotations.length];
            const floatDelay = `${index * 0.5}s`;

            return (
              <div
                key={index}
                className={`group relative cursor-pointer transform ${rotation} hover:rotate-0 transition-transform duration-500`}
                style={{
                  animation: `float 6s ease-in-out infinite ${floatDelay}`,
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Stack effect layers */}
                <div
                  className={`absolute inset-0 ${colors.stackBg} border ${colors.stackBorder} rounded-3xl transform translate-x-2 translate-y-2 opacity-0 group-hover:opacity-60 transition-all duration-500 group-hover:translate-x-3 group-hover:translate-y-3`}
                ></div>
                <div
                  className={`absolute inset-0 ${colors.stackBg} border ${colors.stackBorder} rounded-3xl transform translate-x-1 translate-y-1 opacity-0 group-hover:opacity-80 transition-all duration-300 group-hover:translate-x-2 group-hover:translate-y-2`}
                ></div>

                {/* Main card */}
                <div
                  className={`relative ${colors.bg} border ${colors.border} rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 z-10`}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5 rounded-3xl overflow-hidden">
                    <div
                      className={`absolute -top-4 -right-4 w-20 h-20 ${colors.iconBg} rounded-full blur-xl`}
                    ></div>
                    <div
                      className={`absolute -bottom-4 -left-4 w-16 h-16 ${colors.iconBg} rounded-full blur-xl`}
                    ></div>
                  </div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <div
                      className={`w-16 h-16 ${colors.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300`}
                    >
                      <div className="text-white">{stat.icon}</div>
                    </div>

                    {/* Stats Number (Rendered with correct formatting) */}
                    <h3 className="text-4xl font-bold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors duration-300">
                      {renderFormattedValue(index, stat.value)}
                    </h3>

                    {/* Label */}
                    <h4
                      className={`text-xl font-bold mb-3 ${colors.text} transition-colors duration-300`}
                    >
                      {stat.label}
                    </h4>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {stat.description}
                    </p>

                    {/* Hover indicator */}
                    <div
                      className={`mt-4 w-full h-1 ${colors.iconBg} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                    ></div>
                  </div>

                  {/* Hover Effect Border */}
                  <div
                    className={`absolute inset-0 rounded-3xl border-2 ${
                      colors.stackBorder
                    } transition-opacity duration-300 ${
                      hoveredIndex === index ? "opacity-100" : "opacity-0"
                    }`}
                  ></div>
                </div>
              </div>
            );
          })}
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