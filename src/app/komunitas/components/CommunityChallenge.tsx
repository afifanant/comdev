"use client";
import { useState } from "react";
import {
  Target,
  Calendar,
  Users,
  Trophy,
  Clock,
  Filter,
  Lightbulb,
} from "lucide-react";

interface Challenge {
  id: number;
  title: string;
  description: string;
  category: string;
  difficulty: "Mudah" | "Sedang" | "Kompleks";
  duration: string;
  participants: number;
  maxParticipants: number;
  reward: string;
  deadline: string;
  progress: number;
  status: "active" | "completed" | "upcoming";
  icon: string;
  color: string;
  tags: string[];
}

// DATA PROGRAM COMDEV - SUDAH DISESUAIKAN
const challenges: Challenge[] = [
  {
    id: 1,
    title: "Budidaya Maggot Terintegrasi",
    description:
      "Program pengelolaan sampah organik pasar menggunakan Maggot BSF untuk pakan ternak warga.",
    category: "Ekonomi",
    difficulty: "Kompleks",
    duration: "3 Bulan",
    participants: 12,
    maxParticipants: 15,
    reward: "Sertifikat + Profit Sharing",
    deadline: "2025-12-20",
    progress: 75,
    status: "active",
    icon: "🐛",
    color: "emerald", // Main color
    tags: ["Desa Binaan", "Wirausaha", "Eco-Farming"],
  },
  {
    id: 2,
    title: "KSE Mengajar: Literasi",
    description:
      "Relawan pengajar baca-tulis dan bahasa Inggris dasar untuk anak-anak di desa binaan.",
    category: "Pendidikan",
    difficulty: "Sedang",
    duration: "4 Minggu",
    participants: 45,
    maxParticipants: 50,
    reward: "SKKM Pengabdian",
    deadline: "2025-11-30",
    progress: 90,
    status: "active",
    icon: "📚",
    color: "teal",
    tags: ["Teaching", "Social", "Charity"],
  },
  {
    id: 3,
    title: "Instalasi Bank Sampah",
    description:
      "Pembentukan unit bank sampah baru di Fakultas Saintek untuk pengelolaan limbah plastik.",
    category: "Lingkungan",
    difficulty: "Sedang",
    duration: "2 Bulan",
    participants: 20,
    maxParticipants: 20,
    reward: "Poin Keaktifan",
    deadline: "2025-10-15",
    progress: 100,
    status: "completed",
    icon: "♻️",
    color: "green",
    tags: ["Recycle", "Kampus", "Manajemen"],
  },
  {
    id: 4,
    title: "Pelatihan Digital UMKM",
    description:
      "Mentoring pemasaran digital untuk ibu-ibu pengrajin daur ulang di komunitas sasaran.",
    category: "Teknologi",
    difficulty: "Mudah",
    duration: "2 Hari",
    participants: 0,
    maxParticipants: 100,
    reward: "E-Sertifikat",
    deadline: "2025-12-05",
    progress: 0,
    status: "upcoming",
    icon: "💻",
    color: "yellow",
    tags: ["Workshop", "Digital", "Pemberdayaan"],
  },
  {
    id: 5,
    title: "Aksi Bersih Pesisir",
    description:
      "Gerakan volunteer massal membersihkan area pesisir pantai dari sampah plastik kiriman.",
    category: "Aksi",
    difficulty: "Mudah",
    duration: "1 Hari",
    participants: 120,
    maxParticipants: 200,
    reward: "Merchandise + Makan Siang",
    deadline: "2025-12-10",
    progress: 30,
    status: "upcoming",
    icon: "🌊",
    color: "cyan",
    tags: ["Cleanup", "Mass Action", "Lingkungan"],
  },
  {
    id: 6,
    title: "Riset Sampah Kampus",
    description:
      "Pengumpulan data timbulan sampah harian di kantin UINSU untuk dasar kebijakan zero waste.",
    category: "Riset",
    difficulty: "Sedang",
    duration: "1 Minggu",
    participants: 10,
    maxParticipants: 10,
    reward: "Kredit Riset",
    deadline: "2025-09-01",
    progress: 100,
    status: "completed",
    icon: "📊",
    color: "lime",
    tags: ["Data", "Analysis", "Policy"],
  },
];

const categories = [
  "Semua",
  "Ekonomi",
  "Pendidikan",
  "Lingkungan",
  "Teknologi",
  "Aksi",
  "Riset",
];
const difficulties = ["Semua", "Mudah", "Sedang", "Kompleks"];

export default function CommunityChallenge() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [selectedDifficulty, setSelectedDifficulty] = useState("Semua");
  const [selectedStatus, setSelectedStatus] = useState<
    "all" | "active" | "upcoming" | "completed"
  >("all");

  const filteredChallenges = challenges.filter((challenge) => {
    const categoryMatch =
      selectedCategory === "Semua" || challenge.category === selectedCategory;
    const difficultyMatch =
      selectedDifficulty === "Semua" ||
      challenge.difficulty === selectedDifficulty;
    const statusMatch =
      selectedStatus === "all" || challenge.status === selectedStatus;
    return categoryMatch && difficultyMatch && statusMatch;
  });

  // MAP WARNA (TEMA HIJAU/EMERALD)
  const getColorClasses = (color: string) => {
    const colorMap = {
      emerald: {
        bg: "bg-emerald-600",
        light: "bg-emerald-50",
        text: "text-emerald-700",
        border: "border-emerald-200",
        bar: "bg-emerald-600",
      },
      teal: {
        bg: "bg-teal-600",
        light: "bg-teal-50",
        text: "text-teal-700",
        border: "border-teal-200",
        bar: "bg-teal-600",
      },
      green: {
        bg: "bg-green-600",
        light: "bg-green-50",
        text: "text-green-700",
        border: "border-green-200",
        bar: "bg-green-600",
      },
      yellow: {
        bg: "bg-yellow-500",
        light: "bg-yellow-50",
        text: "text-yellow-700",
        border: "border-yellow-200",
        bar: "bg-yellow-500",
      },
      cyan: {
        bg: "bg-cyan-500",
        light: "bg-cyan-50",
        text: "text-cyan-700",
        border: "border-cyan-200",
        bar: "bg-cyan-500",
      },
      lime: {
        bg: "bg-lime-500",
        light: "bg-lime-50",
        text: "text-lime-700",
        border: "border-lime-200",
        bar: "bg-lime-500",
      },
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.emerald;
  };

  const getStatusColor = (status: string) => {
    const colors = {
      active: "bg-emerald-100 text-emerald-700 border-emerald-200",
      upcoming: "bg-blue-100 text-blue-700 border-blue-200",
      completed: "bg-gray-100 text-gray-700 border-gray-200",
    };
    return colors[status as keyof typeof colors];
  };

  return (
    <section className="w-full py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-full mb-6 border border-emerald-100">
            <Target className="w-5 h-5 text-emerald-600 animate-pulse" />
            <span className="text-emerald-700 font-bold text-sm">
              Program Unggulan
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Proyek & Aksi <span className="text-emerald-600">Nyata</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Pilih program partisipasi yang sesuai dengan minatmu. Mari berkontribusi langsung 
            bersama Comdev KSE UINSU.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Filter className="w-5 h-5 text-emerald-600" />
            <span className="font-bold text-gray-800">
              Filter Program
            </span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Kategori
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm bg-gray-50"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Difficulty Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Tingkat Kerumitan
              </label>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm bg-gray-50"
              >
                {difficulties.map((difficulty) => (
                  <option key={difficulty} value={difficulty}>
                    {difficulty}
                  </option>
                ))}
              </select>
            </div>

            {/* Status Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Status
              </label>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value as any)}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm bg-gray-50"
              >
                <option value="all">Semua Status</option>
                <option value="active">Sedang Berjalan</option>
                <option value="upcoming">Akan Datang</option>
                <option value="completed">Selesai</option>
              </select>
            </div>

            {/* Quick Stats Badge */}
            <div className="flex items-end">
                <div className="w-full bg-emerald-600 text-white rounded-xl p-2.5 flex items-center justify-between shadow-md">
                    <span className="text-sm font-medium pl-2">Total Program</span>
                    <span className="bg-white text-emerald-700 px-3 py-1 rounded-lg font-bold text-sm">
                        {filteredChallenges.length}
                    </span>
                </div>
            </div>
          </div>
        </div>

        {/* Challenges Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredChallenges.map((challenge) => {
            const colors = getColorClasses(challenge.color);
            const participationRate =
              (challenge.participants / challenge.maxParticipants) * 100;

            return (
              <div
                key={challenge.id}
                className={`bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                  challenge.status === "completed" ? "opacity-80 grayscale-[0.5]" : ""
                }`}
              >
                {/* Card Header */}
                <div
                  className={`${colors.light} p-6 border-b ${colors.border}`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl bg-white w-12 h-12 flex items-center justify-center rounded-xl shadow-sm">
                        {challenge.icon}
                      </span>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1 leading-tight line-clamp-1">
                          {challenge.title}
                        </h3>
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider border ${getStatusColor(
                            challenge.status
                          )}`}
                        >
                          {challenge.status === "active" && "Sedang Berjalan"}
                          {challenge.status === "upcoming" && "Segera Hadir"}
                          {challenge.status === "completed" && "Selesai"}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2 h-10">
                    {challenge.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {challenge.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-white text-gray-600 rounded-md text-xs border border-gray-200 font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  {/* Info Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    <div className="p-2.5 bg-gray-50 rounded-xl border border-gray-100">
                      <div className="flex items-center gap-1.5 mb-1 text-gray-500">
                        <Clock className="w-3.5 h-3.5" />
                        <span className="text-xs">Durasi</span>
                      </div>
                      <div className="text-sm font-bold text-gray-800">
                        {challenge.duration}
                      </div>
                    </div>
                    <div className="p-2.5 bg-gray-50 rounded-xl border border-gray-100">
                      <div className="flex items-center gap-1.5 mb-1 text-gray-500">
                        <Users className="w-3.5 h-3.5" />
                        <span className="text-xs">Partisipan</span>
                      </div>
                      <div className="text-sm font-bold text-gray-800">
                        {challenge.participants}/{challenge.maxParticipants}
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar (Hanya jika aktif) */}
                  {challenge.status === "active" && (
                    <div className="mb-5">
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-xs font-medium text-gray-500">Progress</span>
                        <span className={`text-xs font-bold ${colors.text}`}>
                          {challenge.progress}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                        <div
                          className={`${colors.bar} h-2 rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${challenge.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}

                  {/* Benefit / Reward */}
                  <div className="mb-5 flex items-start gap-2.5 p-3 bg-amber-50 border border-amber-100 rounded-xl">
                    <Trophy className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div>
                        <span className="block text-xs font-bold text-amber-800 uppercase tracking-wide mb-0.5">
                            Benefit
                        </span>
                        <p className="text-xs text-amber-700 font-medium leading-snug">
                            {challenge.reward}
                        </p>
                    </div>
                  </div>

                  {/* Deadline & Button */}
                  <div className="flex items-center justify-between gap-4 mt-auto">
                    <div className="text-xs text-gray-500 flex flex-col">
                        <span>Batas Daftar:</span>
                        <span className="font-semibold text-gray-700">
                            {new Date(challenge.deadline).toLocaleDateString("id-ID", { day: 'numeric', month: 'short' })}
                        </span>
                    </div>
                    
                    <button
                        className={`flex-1 py-2.5 px-4 rounded-xl font-bold text-sm transition-all duration-300 shadow-sm ${
                        challenge.status === "active"
                            ? "bg-emerald-600 text-white hover:bg-emerald-700 hover:shadow-md"
                            : challenge.status === "upcoming"
                            ? "bg-blue-600 text-white hover:bg-blue-700"
                            : "bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200"
                        }`}
                        disabled={challenge.status === "completed"}
                    >
                        {challenge.status === "active" && "Ikut Serta"}
                        {challenge.status === "upcoming" && "Ingatkan"}
                        {challenge.status === "completed" && "Selesai"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action Bottom */}
        <div className="text-center">
          <div className="bg-emerald-600 rounded-3xl p-8 max-w-4xl mx-auto shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-left">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 flex items-center gap-2">
                        <Lightbulb className="w-6 h-6 text-yellow-300" />
                        Punya Ide Proyek?
                    </h3>
                    <p className="text-emerald-50 text-sm md:text-base max-w-lg">
                        Kami terbuka untuk kolaborasi! Usulkan ide kreatifmu untuk kemajuan desa binaan atau lingkungan kampus.
                    </p>
                </div>
                <button className="bg-white text-emerald-700 px-6 py-3 rounded-xl font-bold hover:bg-emerald-50 transition-all duration-300 shadow-lg whitespace-nowrap">
                    Ajukan Proposal
                </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}