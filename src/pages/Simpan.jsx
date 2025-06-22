import { useState } from "react";
import { FiSearch } from "react-icons/fi";

const mockData = [
  {
    title: "Kue bolu mocha panggang lezat",
    image: "/images/bolu.jpg",
    author: "Saturn",
  },
  {
    title: "Mochi gulung rasa pasta pandan wijen",
    image: "/images/mochi.jpg",
    author: "Saturn",
  },
  {
    title: "Mochi coklat lumer dengan tekstur lembut",
    image: "/images/mochi-coklat.jpg",
    author: "Saturn",
  },
  {
    title: "Onde onde kacang merah",
    image: "/images/onde.jpg",
    author: "Saturn",
  },
];

export default function Simpan() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("tersimpan");

  const filteredData = mockData
    .concat(mockData) // Duplikat buat demo
    .filter((item) => item.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="flex-1 px-8 py-10 bg-white">
      {/* Search & Profile */}
      <div className="flex justify-between items-center mb-10 flex-wrap gap-4">
        <div className="relative w-full max-w-xl">
          <input
            type="text"
            placeholder="cari masakan simpanan kamu..."
            className="w-full rounded-full border border-gray-300 px-5 py-3 pl-12 shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FiSearch className="absolute top-3.5 left-4 text-gray-500 text-lg" />
        </div>
        <div className="flex items-center gap-3">
          <img
            src="/images/avatar.png"
            className="w-10 h-10 rounded-full"
            alt="avatar"
          />
          <div className="text-sm">
            <p className="font-semibold">Admin ManJa</p>
            <p className="text-xs text-gray-400">@Admin ManJa</p>
          </div>
          <button className="text-sm text-blue-600 border border-blue-600 px-3 py-1 rounded-full hover:bg-blue-50 transition">
            View profile
          </button>
        </div>
      </div>

      {/* Title & Tabs */}
      <h2 className="text-2xl font-bold mb-4">Masakan Simpanan Kamu</h2>
      <div className="flex gap-4 mb-8 border-b border-gray-200">
        <button
          className={`pb-2 border-b-2 ${
            activeTab === "tersimpan"
              ? "border-orange-500 text-orange-600 font-semibold"
              : "border-transparent text-gray-400 hover:text-orange-400"
          }`}
          onClick={() => setActiveTab("tersimpan")}
        >
          Tersimpan
        </button>
        <button
          className={`pb-2 border-b-2 ${
            activeTab === "koleksi"
              ? "border-orange-500 text-orange-600 font-semibold"
              : "border-transparent text-gray-400 hover:text-orange-400"
          }`}
          onClick={() => setActiveTab("koleksi")}
        >
          Koleksi
        </button>
      </div>

      {/* Grid Card */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredData.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-32 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-sm line-clamp-2">
                {item.title}
              </h3>
              <p className="text-xs text-gray-500 mt-1">oleh {item.author}</p>
              <div className="mt-2 flex -space-x-2">
                {[...Array(5)].map((_, idx) => (
                  <img
                    key={idx}
                    src="/images/avatar.png"
                    className="w-6 h-6 rounded-full border border-white"
                    alt="user"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
