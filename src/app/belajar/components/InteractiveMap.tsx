"use client";
import { useState } from "react";
import {
  MapPin,
  Search,
  Filter,
  Navigation,
  Phone,
  Clock,
  Star,
  ExternalLink,
  Map,
} from "lucide-react";

interface WasteBank {
  id: number;
  name: string;
  address: string;
  city: string;
  phone: string;
  hours: string;
  rating: number;
  types: string[];
  coordinates: { lat: number; lng: number };
  distance: string;
  verified: boolean;
}

// DATA BANK SAMPAH MEDAN & UINSU
const wasteBanks: WasteBank[] = [
  {
    id: 1,
    name: "Bank Sampah Induk Sicanang",
    address: "Jl. Pulau Sicanang, Medan Belawan",
    city: "Medan",
    phone: "0812-6000-1234",
    hours: "08:00 - 16:00",
    rating: 4.8,
    types: ["Plastik", "Kertas", "Logam", "Kaca"],
    coordinates: { lat: 3.7855, lng: 98.6611 },
    distance: "12.5 km",
    verified: true,
  },
  {
    id: 2,
    name: "Bank Sampah Unit UINSU",
    address: "Kampus II UINSU, Jl. Willem Iskandar",
    city: "Medan",
    phone: "0821-3456-7890",
    hours: "09:00 - 15:00",
    rating: 4.9,
    types: ["Plastik", "Kertas", "Minyak Jelantah"],
    coordinates: { lat: 3.6195, lng: 98.7148 }, // Koordinat UINSU Pancing
    distance: "0.5 km",
    verified: true,
  },
  {
    id: 3,
    name: "Bank Sampah Mutiara",
    address: "Jl. Karya Jaya, Medan Johor",
    city: "Medan",
    phone: "0813-4567-8901",
    hours: "08:30 - 17:00",
    rating: 4.5,
    types: ["Plastik", "Kertas", "Logam", "Elektronik"],
    coordinates: { lat: 3.5432, lng: 98.6654 },
    distance: "8.2 km",
    verified: true,
  },
  {
    id: 4,
    name: "Bank Sampah Berkah Mandiri",
    address: "Jl. Denai No. 45, Medan Denai",
    city: "Medan",
    phone: "0852-9876-5432",
    hours: "09:00 - 16:30",
    rating: 4.6,
    types: ["Plastik", "Kertas", "Kaca"],
    coordinates: { lat: 3.5789, lng: 98.7012 },
    distance: "5.1 km",
    verified: false,
  },
];

const wasteTypes = [
  "Semua",
  "Plastik",
  "Kertas",
  "Logam",
  "Kaca",
  "Elektronik",
  "Minyak Jelantah",
];

export default function InteractiveMap() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("Semua");
  const [selectedBank, setSelectedBank] = useState<WasteBank | null>(null);
  const [showMap, setShowMap] = useState(true);

  const filteredBanks = wasteBanks.filter((bank) => {
    const matchesSearch =
      bank.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bank.address.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType =
      selectedType === "Semua" || bank.types.includes(selectedType);
    return matchesSearch && matchesType;
  });

  const getTypeColor = (type: string) => {
    const colors = {
      Plastik: "bg-red-100 text-red-700 border-red-200",
      Kertas: "bg-blue-100 text-blue-700 border-blue-200",
      Logam: "bg-gray-100 text-gray-700 border-gray-200",
      Kaca: "bg-green-100 text-green-700 border-green-200",
      Elektronik: "bg-purple-100 text-purple-700 border-purple-200",
      "Minyak Jelantah": "bg-yellow-100 text-yellow-700 border-yellow-200",
    };
    return (
      colors[type as keyof typeof colors] ||
      "bg-gray-100 text-gray-700 border-gray-200"
    );
  };

  // INTEGRASI GOOGLE MAPS
  const handleOpenRoute = (lat: number, lng: number) => {
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`,
      "_blank"
    );
  };

  return (
    <section className="w-full py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Warna Kuning */}
          <div className="inline-flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full mb-6 border border-yellow-200">
            <MapPin className="w-5 h-5 text-yellow-600 animate-bounce" />
            <span className="text-yellow-700 font-bold text-sm">
              Lokasi Penyetoran
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Peta <span className="text-yellow-600">Bank Sampah</span> Medan
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Temukan bank sampah terdekat di Medan dan UINSU. Ubah sampahmu
            menjadi rupiah di lokasi terpercaya ini.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Search & Filter */}
          <div className="lg:col-span-1 space-y-6">
            {/* Search */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Cari lokasi..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>

              <button
                onClick={() => setShowMap(!showMap)}
                // Tombol Kuning
                className="w-full bg-yellow-500 text-white py-3 px-4 rounded-xl font-medium hover:bg-yellow-600 transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                <Map className="w-4 h-4" />
                {showMap ? "Sembunyikan Peta" : "Tampilkan Peta"}
              </button>
            </div>

            {/* Filter */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Filter className="w-4 h-4 text-yellow-600" />
                Jenis Sampah
              </h3>
              <div className="space-y-2">
                {wasteTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors text-sm ${
                      selectedType === type
                        ? "bg-yellow-50 text-yellow-700 border border-yellow-200 font-medium"
                        : "hover:bg-gray-50 text-gray-600"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Stats - Gradient Kuning/Amber */}
            <div className="bg-gradient-to-br from-yellow-500 to-amber-600 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
              <h3 className="font-bold mb-4 relative z-10">Statistik Area</h3>
              <div className="space-y-3 relative z-10">
                <div className="flex items-center justify-between border-b border-white/20 pb-2">
                  <span className="text-yellow-50 text-sm">
                    Total Lokasi
                  </span>
                  <span className="font-bold">{wasteBanks.length}</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/20 pb-2">
                  <span className="text-yellow-50 text-sm">Terverifikasi</span>
                  <span className="font-bold">
                    {wasteBanks.filter((bank) => bank.verified).length}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-yellow-50 text-sm">
                    Rating Rata-rata
                  </span>
                  <span className="font-bold text-white">
                    {(
                      wasteBanks.reduce((sum, bank) => sum + bank.rating, 0) /
                      wasteBanks.length
                    ).toFixed(1)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Map & Results */}
          <div className="lg:col-span-2 space-y-6">
            {/* Map Placeholder / Container */}
            {showMap && (
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200">
                <div className="aspect-video bg-slate-100 rounded-xl relative overflow-hidden border border-gray-200 group">
                  {/* Background Map Image */}
                  <div 
                    className="absolute inset-0 opacity-50"
                    style={{
                        backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/e/ec/Medan_Indonesia_Map.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}
                  ></div>
                  
                  {/* Overlay Grid */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                  {/* Center Label */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-sm text-xs font-medium text-gray-600 z-20">
                    📍 Area Medan & Sekitarnya
                  </div>

                  {/* Map Pins */}
                  {filteredBanks.map((bank, index) => (
                    <div
                      key={bank.id}
                      className="absolute cursor-pointer transform hover:scale-110 transition-transform z-10 group/pin"
                      style={{
                        // Simulasi posisi pin
                        left: `${20 + (bank.id * 15) % 60}%`,
                        top: `${30 + (bank.id * 10) % 50}%`,
                      }}
                      onClick={() => setSelectedBank(bank)}
                    >
                      <div className="relative flex flex-col items-center">
                        {/* Tooltip on Hover */}
                        <div className="absolute -top-8 bg-gray-900 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover/pin:opacity-100 transition-opacity">
                            {bank.name}
                        </div>
                        
                        {/* Pin Warna Kuning saat dipilih */}
                        <div className={`w-8 h-8 ${selectedBank?.id === bank.id ? 'bg-yellow-500 scale-125' : 'bg-red-500'} rounded-full flex items-center justify-center shadow-lg border-2 border-white transition-all`}>
                          <MapPin className="w-4 h-4 text-white" />
                        </div>
                        {/* Shadow Pin */}
                        <div className="w-4 h-1 bg-black/20 rounded-full blur-sm mt-1"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Results List */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-gray-800">
                  Hasil Pencarian ({filteredBanks.length})
                </h3>
                <span className="text-xs text-gray-500">
                  Diurutkan berdasarkan relevansi
                </span>
              </div>

              {filteredBanks.map((bank) => (
                <div
                  key={bank.id}
                  className={`bg-white rounded-2xl p-6 shadow-sm border-2 transition-all duration-300 cursor-pointer hover:shadow-md ${
                    selectedBank?.id === bank.id
                      ? "border-yellow-400 bg-yellow-50/30"
                      : "border-gray-100 hover:border-yellow-200"
                  }`}
                  onClick={() =>
                    setSelectedBank(selectedBank?.id === bank.id ? null : bank)
                  }
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-lg font-bold text-gray-900">
                          {bank.name}
                        </h4>
                        {bank.verified && (
                          <div className="bg-blue-100 text-blue-700 p-0.5 rounded-full" title="Terverifikasi">
                            <div className="w-4 h-4 flex items-center justify-center">
                                <span className="text-[10px]">✓</span>
                            </div>
                          </div>
                        )}
                      </div>
                      <p className="text-gray-600 mb-3 text-sm">{bank.address}</p>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1.5">
                          <Navigation className="w-3.5 h-3.5 text-yellow-600" />
                          {bank.distance} dari UINSU
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                          {bank.rating}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-gray-400" />
                          {bank.hours}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {bank.types.map((type) => (
                      <span
                        key={type}
                        className={`px-2.5 py-1 rounded-full text-[10px] font-medium border ${getTypeColor(
                          type
                        )}`}
                      >
                        {type}
                      </span>
                    ))}
                  </div>

                  {/* Expanded Details / Actions */}
                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-100">
                      <button 
                        onClick={(e) => {
                            e.stopPropagation();
                            handleOpenRoute(bank.coordinates.lat, bank.coordinates.lng);
                        }}
                        // Tombol Aksi Kuning
                        className="flex items-center justify-center gap-2 bg-yellow-500 text-white py-2.5 px-4 rounded-xl text-sm font-medium hover:bg-yellow-600 transition-colors shadow-sm hover:shadow"
                      >
                        <Navigation className="w-4 h-4" />
                        Rute Google Maps
                      </button>
                      
                      <button className="flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 py-2.5 px-4 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors">
                        <ExternalLink className="w-4 h-4" />
                        Lihat Detail
                      </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA - Gradient Kuning */}
        <div className="mt-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl p-8 text-center text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">
                    Punya Info Bank Sampah Baru?
                </h3>
                <p className="text-yellow-50 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                    Bantu kami melengkapi data peta ini. Daftarkan bank sampah di daerahmu agar lebih banyak orang yang terbantu!
                </p>
                <button className="bg-white text-yellow-700 px-8 py-3 rounded-full font-bold hover:bg-yellow-50 transition-all duration-300 hover:scale-105 shadow-lg">
                    Daftarkan Lokasi Baru
                </button>
            </div>
        </div>
      </div>
    </section>
  );
}