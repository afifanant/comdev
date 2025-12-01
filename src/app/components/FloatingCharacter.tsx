"use client";
import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import Image from "next/image"; 

const FloatingCharacter = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [showDialog, setShowDialog] = useState(false);
  const [currentDialog, setCurrentDialog] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // UBAH: Dialog lebih natural, humble, dan "manusiawi".
  const dialogs = [
    {
      text: "Halo! Selamat datang di rumah Comdev KSE UINSU 👋",
      type: "greeting",
    },
    {
      text: "Kami wadah mahasiswa untuk berbagi dampak ke masyarakat.",
      type: "info",
    },
    {
      text: "Mau tau program terbaru kami? Cek menu Kegiatan ya! 🌿",
      type: "action",
    },
    {
      text: "Yuk, mulai peduli lingkungan dari hal kecil hari ini.",
      type: "impact",
    },
    {
      text: "Ada ide kolaborasi? Kami sangat terbuka lho! 🤝",
      type: "action",
    },
    {
      text: "Jangan lupa follow IG kami untuk update real-time 📸",
      type: "info",
    },
  ];

  // Palet Warna: Konsisten Navy & Biru Profesional
  const getDialogColor = (type: string) => {
    switch (type) {
      case "greeting":
        return "bg-[#001d47]"; // Navy Utama
      case "impact":
        return "bg-teal-600"; // Teal (Nuansa Alam/Segar)
      case "action":
        return "bg-blue-600"; // Biru Action
      case "info":
        return "bg-slate-700"; // Netral
      default:
        return "bg-[#001d47]";
    }
  };

  // Logic: Muncul otomatis sekali saat load, lalu diam sampai diklik
  useEffect(() => {
    const timer = setTimeout(() => {
        setShowDialog(true);
        // Auto hide setelah 5 detik
        setTimeout(() => setShowDialog(false), 5000);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleCharacterClick = () => {
    if (isAnimating) return;

    if (showDialog) {
      setShowDialog(false);
    } else {
      setIsAnimating(true);
      // Random dialog biar gak bosenin
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * dialogs.length);
      } while (randomIndex === currentDialog && dialogs.length > 1); // Hindari dialog sama berturut-turut
      
      setCurrentDialog(randomIndex);
      setShowDialog(true);

      setTimeout(() => setIsAnimating(false), 300);
      
      // Auto close lebih lama dikit (6 detik)
      setTimeout(() => {
        setShowDialog(false);
      }, 6000);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3 font-sans">
      
      {/* Tombol Close (X) Kecil biar user bisa hide kalau keganggu */}
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute -top-8 right-0 text-gray-400 hover:text-red-500 transition-colors text-xs flex items-center gap-1 bg-white/80 px-2 py-1 rounded-full shadow-sm"
      >
        <X className="w-3 h-3" /> Hide
      </button>

      {/* Dialog Bubble */}
      {showDialog && (
        <div
          className={`relative max-w-[250px] sm:max-w-xs animate-in slide-in-from-bottom-2 duration-300 ${
            isAnimating ? "scale-95 opacity-90" : "scale-100 opacity-100"
          }`}
        >
          <div
            className={`${getDialogColor(
              dialogs[currentDialog].type
            )} text-white p-4 rounded-2xl rounded-br-sm shadow-xl relative cursor-pointer hover:shadow-2xl transition-all duration-200 border border-white/10`}
            onClick={handleCharacterClick}
          >
            <p className="text-sm leading-relaxed font-medium">
              {dialogs[currentDialog].text}
            </p>
            {/* Segitiga Bubble */}
            <div
              className={`absolute bottom-0 right-5 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] ${getDialogColor(
                dialogs[currentDialog].type
              ).replace("bg-", "border-t-")} transform translate-y-[8px]`}
            ></div>
          </div>
        </div>
      )}

      {/* Character / Assistant Icon - FIX: Menggunakan fill prop */}
      <div className="relative group">
        <div
          className="cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center"
          onClick={handleCharacterClick}
        >
          <div className="w-16 h-16 relative filter drop-shadow-lg">
             <Image 
                src="/char.png" 
                alt="Comdev Assistant" 
                fill // Menggunakan fill prop untuk mengisi container
                className="object-contain hover:brightness-110 transition-all" // Hanya object-contain, tanpa w-full h-full
                priority
                unoptimized
             />
          </div>
        </div>

        {/* Status Indicator (Pulse) */}
        <span className="absolute bottom-1 right-0 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 border-2 border-white"></span>
        </span>

        {/* Icon Chat Kecil kalau Bubble lagi nutup */}
        {!showDialog && (
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-white text-[#001d47] rounded-full shadow-md flex items-center justify-center animate-bounce border border-gray-100">
            <MessageCircle className="w-3 h-3" />
          </div>
        )}
      </div>
    </div>
  );
};

export default FloatingCharacter;