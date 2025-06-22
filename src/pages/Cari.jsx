import { Link } from "react-router-dom";

export default function Cari() {
  const populer = [
    { title: "Tongseng sapi", image: "/Img/tongseng.jpg" },
    { title: "Rendang daging", image: "/Img/rendang.jpg" },
    { title: "Soto betawi", image: "/Img/soto.jpg" },
    { title: "Pancake", image: "/Img/pancake.jpg" },
    { title: "Bolu pisang", image: "/Img/bolu.jpg" },
    { title: "Tumis kangkung", image: "/Img/kangkung.jpg" },
    { title: "Semur daging sapi", image: "/Img/semur.png" },
    { title: "Dendeng balado", image: "/Img/dendeng.jpg" },
  ];

  const kategori = {
    "Ayam": "/Img/ayam.jpg",
    "Daging Sapi": "/Img/rendang.jpg",
    "Ikan": "/Img/ikan.jpg",
    "Udang": "/Img/udang.jpg",
    "Cumi": "/Img/cumi.jpg",
    "Tahu": "/Img/tahu.jpg",
    "Tempe": "/Img/tempe.jpg",
    "Sayuran": "/Img/sayur.jpg",
    "Telur": "/Img/telur.jpg",
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Konten scrollable */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-10 bg-[#f9f4e8]">
        
        {/* Logo & Search */}
        <div className="text-center">
          <img
            src="/Img/Logo.png"
            alt="Logo Manja"
            className="mx-auto h-16 object-contain mb-4"
          />
          <div className="flex justify-center items-center gap-4">
            <input
              type="text"
              placeholder="Lagi cari apa sayang…"
              className="w-[400px] px-4 py-2 rounded-full border border-gray-300 shadow-sm focus:outline-none"
            />
            <button className="bg-[#e07a5f] text-white px-6 py-2 rounded-full shadow">
              cari
            </button>
          </div>
        </div>

        {/* Banner Gambar */}
        <div className="rounded-xl overflow-hidden">
          <img
            src="/Img/banner.jpg" // ← Ganti sesuai file banner kamu
            alt="Banner"
            className="w-full h-48 object-cover"
          />
        </div>

        {/* Pencarian Populer */}
        <section>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Pencarian populer
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {populer.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl overflow-hidden shadow hover:shadow-md transition"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-24 w-full object-cover"
                />
                <div className="p-2 text-sm font-medium">{item.title}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Kategori */}
        <section>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Kategori: Masakan Rumah Sehari-hari
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {Object.entries(kategori).map(([title, img], i) => (
              <Link
                key={i}
                to={`/kategori/${title.toLowerCase().replace(/\s+/g, "-")}`}
                className="relative group bg-white rounded-xl overflow-hidden shadow hover:shadow-md transition"
              >
                <img
                  src={img}
                  alt={title}
                  className="h-28 w-full object-cover"
                />
                <div className="p-2 text-sm font-medium">{title}</div>
                {/* Selengkapnya Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white font-semibold text-sm transition">
                  Selengkapnya →
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
