"use client";
import { useState } from "react";
import {
  Trophy,
  Medal,
  Crown,
  Star,
  TrendingUp,
  Award,
  Users,
  Target,
  Zap,
  Calendar,
} from "lucide-react";

interface LeaderboardUser {
  id: number;
  rank: number;
  name: string;
  role: string; // Tambahan role/divisi
  avatar: string;
  points: number;
  level: number; // Jumlah Program
  badges: string[];
  streak: number; // Jam Sosial
  completedChallenges: number;
  joinDate: string;
  isCurrentUser?: boolean;
}

// DATA RELAWAN TERBAIK (COMDEV) - DISESUAIKAN DENGAN STRUKTUR BARU
const leaderboardData: LeaderboardUser[] = [
  {
    id: 1,
    rank: 1,
    name: "Afif Ananta", // Ketua - Rank 1
    role: "Ketua Comdev",
    avatar: "https://i.pravatar.cc/150?u=afifananta",
    points: 1000, // Skor tertinggi untuk Ketua
    level: 20,
    badges: ["👑", "🔥", "💡"],
    streak: 200, 
    completedChallenges: 15,
    joinDate: "KSE.2490.14748",
  },
  {
    id: 2,
    rank: 2,
    name: "Hany Arifya", // Sekretaris
    role: "Sekretaris Comdev",
    avatar: "https://i.pravatar.cc/150?u=hany",
    points: 850,
    level: 18,
    badges: ["🥈", "📝", "⚡"],
    streak: 160,
    completedChallenges: 12,
    joinDate: "KSE.249014753",
  },
  {
    id: 3,
    rank: 3,
    name: "Nazar Alwi Yahya", // Bendahara
    role: "Bendahara Comdev",
    avatar: "https://i.pravatar.cc/150?u=nazar",
    points: 750,
    level: 16,
    badges: ["🥉", "💰", "⭐"],
    streak: 140,
    completedChallenges: 10,
    joinDate: "KSE.2490.14771",
  },
  {
    id: 4,
    rank: 4,
    name: "Angga Wardana Yansuri Sirait",
    role: "PIC Eco Lele",
    avatar: "https://i.pravatar.cc/150?u=angga",
    points: 680,
    level: 14,
    badges: ["🐟", "🌱", "🛠️"],
    streak: 120,
    completedChallenges: 9,
    joinDate: "KSE.2590.15883",
  },
  {
    id: 5,
    rank: 5,
    name: "Esti Kurnia Dara",
    role: "PIC Eco Lele",
    avatar: "https://i.pravatar.cc/150?u=esti",
    points: 620,
    level: 13,
    badges: ["🐟", "📸", "⚡"],
    streak: 105,
    completedChallenges: 8,
    joinDate: "KSE.2590.15881",
  },
  {
    id: 6,
    rank: 6,
    name: "Muhammad Akbar Randhika Defi",
    role: "PIC Bank Sampah",
    avatar: "https://i.pravatar.cc/150?u=akbar",
    points: 550,
    level: 11,
    badges: ["♻️", "💻", "💡"],
    streak: 90,
    completedChallenges: 7,
    joinDate: "KSE.2590.15882",
  },
  {
    id: 7,
    rank: 7,
    name: "Anissya Fahira Pasaribu",
    role: "PIC Bank Sampah",
    avatar: "https://i.pravatar.cc/150?u=anissya",
    points: 500,
    level: 10,
    badges: ["♻️", "📚", "⭐"],
    streak: 85,
    completedChallenges: 6,
    joinDate: "KSE.2590.15876",
  },
  {
    id: 8,
    rank: 8,
    name: "Ayu Aida Fitri",
    role: "Anggota Berkomdev", // FIX: Diganti dari PIC Berkomdev
    avatar: "https://i.pravatar.cc/150?u=ayu",
    points: 400,
    level: 8,
    badges: ["🌟", "🤝"],
    streak: 70,
    completedChallenges: 5,
    joinDate: "KSE.2590.15866",
  },
  {
    id: 9,
    rank: 9,
    name: "Fatimah Syam BR. Sibarani",
    role: "Anggota Berkomdev", // FIX: Diganti dari PIC Berkomdev
    avatar: "https://i.pravatar.cc/150?u=fatimah",
    points: 350,
    level: 7,
    badges: ["🌱", "📚"],
    streak: 60,
    completedChallenges: 4,
    joinDate: "KSE.2590.1588",
  },
  {
    id: 10,
    rank: 10,
    name: "Lidya Rosnoviana",
    role: "Anggota Berkomdev", // FIX: Diganti dari PIC Berkomdev
    avatar: "https://i.pravatar.cc/150?u=lidya",
    points: 250,
    level: 5,
    badges: ["✨"],
    streak: 40,
    completedChallenges: 3,
    joinDate: "KSE.2590.16462",
  },
  {
    id: 11,
    rank: 11,
    name: "Relawan Lain",
    role: "Anggota Berkomdev",
    avatar: "https://i.pravatar.cc/150?u=current",
    points: 50,
    level: 1,
    badges: ["👋"],
    streak: 5,
    completedChallenges: 0,
    joinDate: "Mei 2024",
    isCurrentUser: true, 
  },
];

const achievements = [
  {
    title: "Ketua Teladan",
    description: "Kontribusi jam sosial tertinggi bulan ini",
    icon: "👑",
    winner: "Afif Ananta",
    points: "200 Jam",
  },
  {
    title: "PIC Terbaik (Eco Lele)",
    description: "Program dengan dampak lingkungan tertinggi",
    icon: "🐟",
    winner: "Angga Wardana Yansuri Sirait & Esti Kurnia Dara",
    points: "Pencapaian 90%",
  },
  {
    title: "Penggerak Relawan Baru",
    description: "Anggota dengan rekrutmen relawan terbanyak",
    icon: "🔥",
    winner: "Hany Arifya",
    points: "15 Orang",
  },
];

const formatNumber = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export default function CommunityLeaderboard() {
  const [activeTab, setActiveTab] = useState<"monthly" | "weekly" | "alltime">(
    "monthly"
  );
  const [hoveredUser, setHoveredUser] = useState<number | null>(null);

  // WA Link Configuration
  const WA_NUMBER = "6282361464415";
  const WA_MESSAGE_ENCODED = encodeURIComponent(
    "Halo Admin Comdev KSE UINSU, saya tertarik untuk gabung/berkolaborasi setelah melihat daftar Tim Inti di website. Mohon info pendaftarannya. Terima kasih!"
  );
  const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE_ENCODED}`;


  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-6 h-6 text-yellow-500" />;
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />;
      case 3:
        return <Award className="w-6 h-6 text-amber-600" />;
      default:
        return (
          <span className="w-6 h-6 flex items-center justify-center text-gray-500 font-bold">
            {rank}
          </span>
        );
    }
  };

  const getRankBg = (rank: number, isCurrentUser?: boolean) => {
    if (isCurrentUser) {
      return "bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-200";
    }
    switch (rank) {
      case 1:
        return "bg-gradient-to-r from-yellow-50 to-amber-50 border-yellow-200";
      case 2:
        return "bg-gradient-to-r from-gray-50 to-slate-50 border-gray-200";
      case 3:
        return "bg-gradient-to-r from-orange-50 to-red-50 border-orange-200";
      default:
        return "bg-white border-gray-100";
    }
  };

  return (
    <section className="w-full py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100 px-4 py-2 rounded-full mb-6 border border-emerald-200">
            <Trophy className="w-5 h-5 text-emerald-600 animate-pulse" />
            <span className="text-emerald-700 font-bold text-sm">
              Tim Komunitas
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Tim Inti <span className="text-emerald-600">Comdev</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Daftar pengurus dan kontributor utama Comdev KSE UINSU beserta skor apresiasi
            atas peran aktif mereka dalam setiap program.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl p-1.5 shadow-sm border border-gray-200">
            <div className="flex gap-1">
              {[
                { id: "monthly", label: "Bulan Ini", icon: TrendingUp },
                { id: "weekly", label: "Minggu Ini", icon: Zap },
                { id: "alltime", label: "Sepanjang Masa", icon: Crown },
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold transition-all duration-300 text-xs md:text-sm ${
                      activeTab === tab.id
                        ? "bg-emerald-600 text-white shadow-md"
                        : "text-gray-500 hover:text-emerald-600 hover:bg-emerald-50"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Main Leaderboard */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-6 border-b border-gray-100 bg-emerald-50/30">
                <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-yellow-500" />
                  Daftar Pengurus & Kontributor
                </h3>
              </div>

              <div className="divide-y divide-gray-100">
                {leaderboardData.map((user) => (
                  <div
                    key={user.id}
                    className={`p-4 md:p-6 transition-all duration-300 cursor-pointer border-l-4 ${
                        hoveredUser === user.id ? "scale-[1.01] shadow-lg z-10" : ""
                    } ${getRankBg(user.rank, user.isCurrentUser)} ${
                        user.rank === 1 ? "border-l-yellow-400" : 
                        user.rank === 2 ? "border-l-gray-400" :
                        user.rank === 3 ? "border-l-orange-400" : "border-l-transparent"
                    }`}
                    onMouseEnter={() => setHoveredUser(user.id)}
                    onMouseLeave={() => setHoveredUser(null)}
                  >
                    <div className="flex items-center gap-4">
                      {/* Rank */}
                      <div className="flex-shrink-0 w-8 text-center">
                        {getRankIcon(user.rank)}
                      </div>

                      {/* Avatar */}
                      <div className="relative">
                        <img
                          src={user.avatar || "/placeholder.svg"}
                          alt={user.name}
                          className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-white shadow-sm"
                        />
                        <div className="absolute -bottom-1 -right-1 bg-emerald-600 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold border border-white">
                          Lv.{user.level}
                        </div>
                      </div>

                      {/* User Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <h4 className="font-bold text-gray-900 text-sm md:text-base truncate">
                            {user.name}
                          </h4>
                          {user.isCurrentUser && (
                            <span className="bg-emerald-100 text-emerald-700 text-[10px] px-1.5 py-0.5 rounded-md font-bold">
                              Anda
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-gray-500 font-medium mb-1.5">{user.role}</p>

                        <div className="flex items-center gap-3 text-xs text-gray-500">
                          <span className="flex items-center gap-1 bg-white px-1.5 py-0.5 rounded-md shadow-sm border border-gray-100">
                            <Star className="w-3 h-3 text-yellow-500" />
                            {formatNumber(user.points)} Poin
                          </span>
                          <span className="flex items-center gap-1 bg-white px-1.5 py-0.5 rounded-md shadow-sm border border-gray-100">
                            <Calendar className="w-3 h-3 text-emerald-600" />
                            {user.streak} Jam
                          </span>
                        </div>
                      </div>

                      {/* Badges (Desktop Only) */}
                      <div className="hidden md:flex gap-1">
                        {user.badges.map((badge, badgeIndex) => (
                          <span
                            key={badgeIndex}
                            className="text-lg hover:scale-125 transition-transform cursor-help"
                            title="Achievement Badge"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-emerald-600" />
                Penghargaan Bulan Ini
              </h3>

              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gradient-to-r from-emerald-50 to-white rounded-xl border border-emerald-100 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-3xl bg-white w-10 h-10 flex items-center justify-center rounded-lg shadow-sm">
                        {achievement.icon}
                      </span>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-gray-800 text-sm mb-0.5">
                          {achievement.title}
                        </h4>
                        <p className="text-xs text-gray-500 mb-2 leading-snug">
                          {achievement.description}
                        </p>
                        <div className="flex items-center justify-between text-xs border-t border-gray-200 pt-2">
                          <span className="font-semibold text-emerald-700">
                              {achievement.winner}
                          </span>
                          <span className="text-gray-500 font-medium bg-gray-100 px-1.5 py-0.5 rounded">
                            {achievement.points}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions - FIX: Diubah menjadi link WA */}
            <div className="bg-emerald-600 rounded-3xl p-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2 relative z-10">
                  <Users className="w-5 h-5 text-yellow-300" />
                  Ayo Berkolaborasi
                </h3>
                <p className="text-sm text-emerald-100 mb-4 relative z-10">
                  Tertarik gabung tim inti atau menjadi relawan umum? Hubungi kami sekarang!
                </p>

                <div className="space-y-2 relative z-10">
                  {/* Link WhatsApp */}
                  <a 
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-white text-emerald-700 py-2.5 px-4 rounded-xl font-bold hover:bg-emerald-50 transition-colors text-sm shadow-lg flex items-center justify-center"
                  >
                    Kontak Rekrutmen via WhatsApp
                  </a>
                  {/* Link Lihat Daftar Program (Tombol sekunder diubah jadi link) */}
                  <a 
                    href="/komunitas#challenge-section" // Mengarah ke section program di halaman Komunitas
                    className="w-full bg-transparent border border-white/30 text-white py-2.5 px-4 rounded-xl font-medium hover:bg-white/10 transition-colors text-sm flex items-center justify-center"
                  >
                      Lihat Daftar Program
                  </a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}