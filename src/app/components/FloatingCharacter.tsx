"use client";
import { useState } from "react";
import { MessageCircle, Info, Calendar, Users } from "lucide-react";
import Image from "next/image"; // Pakai Image component biar optimal

const FloatingCharacter = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [showDialog, setShowDialog] = useState(false);
  const [currentDialog, setCurrentDialog] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // UBAH: Dialog disesuaikan dengan konteks Organisasi Comdev
  const dialogs = [
    {
      text: "Selamat datang di Comdev KSE UINSU! 👋",
      type: "greeting",
    },
    {
      text: "Tertarik bergabung? Cek halaman Komunitas ya! 🚀",
      type: "action",
    },
    {
      text: "Kami sudah menanam 500+ pohon tahun ini. 🌱",
      type: "impact",
    },
    {
      text: "Program Desa Binaan kami fokus pada Ekonomi Sirkular. ♻️",
      type: "info",
    },
    {
      text: "Ada pertanyaan soal kerjasama? Hubungi kami di menu Kontak. 📞",
      type: "action",
    },
    {
      text: "Misi kami: Memberdayakan masyarakat melalui aksi nyata. 💪",
      type: "info",
    },
    {
      text: "Jangan lupa download profil organisasi kami di bawah! 📥",
      type: "action",
    },
    {
      text: "Ingin berkolaborasi? Kami terbuka untuk partnership! 🤝",
      type: "greeting",
    },
  ];

  // UBAH: Warna disesuaikan jadi Palet Biru Profesional
  const getDialogColor = (type: string) => {
    switch (type) {
      case "greeting":
        return "bg-[#001d47]"; // Navy Comdev
      case "impact":
        return "bg-blue-600"; // Biru Terang
      case "action":
        return "bg-sky-600"; // Sky Blue
      case "info":
        return "bg-slate-700"; // Abu Tua Profesional
      default:
        return "bg-[#001d47]";
    }
  };

  const handleCharacterClick = () => {
    if (isAnimating) return;

    if (showDialog) {
      setShowDialog(false);
    } else {
      setIsAnimating(true);
      const randomIndex = Math.floor(Math.random() * dialogs.length);
      setCurrentDialog(randomIndex);
      setShowDialog(true);

      setTimeout(() => setIsAnimating(false), 300);
      setTimeout(() => {
        setShowDialog(false);
      }, 8000);
    }
  };

  if (!isVisible) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsVisible(true)}
          // Tombol jadi Biru Dongker
          className="bg-[#001d47] hover:bg-blue-900 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Show Assistant"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3">
      {/* Dialog Bubble */}
      {showDialog && (
        <div
          className={`relative max-w-xs sm:max-w-sm animate-in slide-in-from-bottom-2 duration-300 ${
            isAnimating ? "animate-pulse" : ""
          }`}
        >
          <div
            className={`${getDialogColor(
              dialogs[currentDialog].type
            )} text-white p-4 rounded-2xl rounded-br-sm shadow-xl relative cursor-pointer hover:shadow-2xl transition-shadow duration-200 border border-white/10`}
            onClick={handleCharacterClick}
          >
            <p className="text-sm sm:text-base font-medium leading-relaxed">
              {dialogs[currentDialog].text}
            </p>
            {/* Speech bubble tail */}
            <div
              className={`absolute bottom-0 right-4 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] ${getDialogColor(
                dialogs[currentDialog].type
              ).replace("bg-", "border-t-")} transform translate-y-full`}
            ></div>
          </div>
        </div>
      )}

      {/* Character / Assistant Icon */}
      <div className="relative">
        <div
          className={`cursor-pointer transition-all hover:scale-105 flex items-center justify-center group`}
          onClick={handleCharacterClick}
        >
          {/* SARAN KERAS: Ganti gambar '/char.png' (kartun) dengan Foto Ketua, 
             Logo Comdev, atau ilustrasi 3D yang lebih bersih.
             Sementara gue tetep pake img tag biar gak error kalau lu belum ganti file.
          */}
          <img 
            src="/char.png" 
            alt="Assistant" 
            className="w-16 h-auto drop-shadow-xl" // Batasi ukuran biar gak kegedean
          />
        </div>

        {/* Particles jadi Biru/Putih */}
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-white rounded-full animate-pulse delay-700 opacity-40"></div>

        {/* Click indicator */}
        {!showDialog && (
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center animate-bounce">
            <MessageCircle className="w-3 h-3 text-[#001d47]" />
          </div>
        )}
      </div>
    </div>
  );
};

export default FloatingCharacter;