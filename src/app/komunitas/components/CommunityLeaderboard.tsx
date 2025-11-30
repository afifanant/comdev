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

// DATA RELAWAN TERBAIK (COMDEV)
const leaderboardData: LeaderboardUser[] = [
  {
    id: 1,
    rank: 1,
    name: "Sarah Amalia",
    role: "Koord. Lingkungan",
    avatar: "https://i.pravatar.cc/150?u=sarah",
    points: 450, // Skor Kontribusi
    level: 12, // Program diikuti
    badges: ["👑", "🌱", "🔥"],
    streak: 120, // Jam Pengabdian
    completedChallenges: 8,
    joinDate: "Jan 2024",
  },
  {
    id: 2,
    name: "Budi Santoso",
    rank: 2,
    role: "Divisi Pendidikan",
    avatar: "https://i.pravatar.cc/150?u=budi",
    points: 380,
    level: 10,
    badges: ["🥈", "📚", "⚡"],
    streak: 98,
    completedChallenges: 6,
    joinDate: "Feb 2024",
  },
  {
    id: 3,
    rank: 3,
    name: "Rina Kartika",
    role: "Anggota Aktif",
    avatar: "https://i.pravatar.cc/150?u=rina",
    points: 350,
    level: 9,
    badges: ["🥉", "♻️", "⭐"],
    streak: 85,
    completedChallenges: 5,
    joinDate: "Jan 2024",
  },
  {
    id: 4,
    rank: 4,
    name: "Andi Pratama",
    role: "Relawan Magang",
    avatar: "https://i.pravatar.cc/150?u=andi",
    points: 210,
    level: 5,
    badges: ["🌟", "💻"],
    streak: 40,
    completedChallenges: 3,
    joinDate: "Mar 2024",
  },
  {
    id: 5,
    rank: 12,
    name: "Kamu",
    role: "Relawan Baru",
    avatar: "https://i.pravatar.cc/150?u=me",
    points: 50,
    level: 1,
    badges: ["🌱"],
    streak: 5,
    completedChallenges: 1,
    joinDate: "Apr 2024",
    isCurrentUser: true,
  },
];

const achievements = [
  {
    title: "Relawan Teladan",
    description: "Kontribusi jam sosial tertinggi bulan ini",
    icon: "👑",
    winner: "Sarah Amalia",
    points: "120 Jam",
  },
  {
    title: "Inisiator Program",
    description: "Pengusul ide program terbanyak",
    icon: "💡",
    winner: "Budi Santoso",
    points: "3 Proposal",
  },
  {
    title: "Penggerak Massa",
    description: "Mengajak relawan baru terbanyak",
    icon: "🔥",
    winner: "Rina Kartika",
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
              Hall of Fame
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Relawan <span className="text-emerald-600">Terbaik</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Apresiasi untuk para penggerak perubahan yang konsisten memberikan dampak 
            bagi masyarakat dan lingkungan.
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
                  Top Kontributor
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

            {/* Quick Actions - Warna Hijau */}
            <div className="bg-emerald-600 rounded-3xl p-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2 relative z-10">
                    <Users className="w-5 h-5 text-yellow-300" />
                    Gabung Relawan
                </h3>
                <p className="text-sm text-emerald-100 mb-4 relative z-10">
                    Ingin nama kamu ada di papan peringkat? Mulai kontribusi sekarang!
                </p>

                <div className="space-y-2 relative z-10">
                    <button className="w-full bg-white text-emerald-700 py-2.5 px-4 rounded-xl font-bold hover:bg-emerald-50 transition-colors text-sm shadow-lg">
                        Daftar Kegiatan
                    </button>
                    <button className="w-full bg-transparent border border-white/30 text-white py-2.5 px-4 rounded-xl font-medium hover:bg-white/10 transition-colors text-sm">
                        Lihat Poin Saya
                    </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}