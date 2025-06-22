import { useState } from "react";

export default function TambahResep() {
  const [bahan, setBahan] = useState([""]);
  const [langkah, setLangkah] = useState([""]);

  const handleAddBahan = () => setBahan([...bahan, ""]);
  const handleRemoveBahan = (index) => setBahan(bahan.filter((_, i) => i !== index));

  const handleAddLangkah = () => setLangkah([...langkah, ""]);
  const handleRemoveLangkah = (index) => setLangkah(langkah.filter((_, i) => i !== index));

  return (
    <div className="h-full overflow-y-auto p-6 bg-[#fffefc] space-y-6">
      {/* Header Action Buttons */}
      <div className="flex justify-end gap-3">
        <button className="text-red-500 border border-red-500 px-4 py-1 rounded">Hapus</button>
        <button className="text-blue-500 border border-blue-500 px-4 py-1 rounded">Arsip</button>
        <button className="bg-green-500 text-white px-4 py-1 rounded">Unggah</button>
      </div>

      {/* Form Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Kiri */}
        <div className="space-y-4">
          <div className="bg-[#f5f1e8] h-64 flex items-center justify-center rounded-xl">
            <span className="text-gray-500">Tambahkan foto masakan</span>
          </div>

          <input
            type="text"
            placeholder="Cantumkan Judul Masakan"
            className="w-full p-3 rounded bg-[#f5f1e8] text-lg font-semibold"
          />

          <div className="flex items-center gap-3">
            <img
              src="https://avatar.iran.liara.run/public/boy?username=saturn"
              alt="user"
              className="w-10 h-10 rounded-full"
            />
            <span className="font-medium">@admin_manja</span>
          </div>

          <textarea
            placeholder="[Deskripsi] Cerita balik dimasakan ini"
            className="w-full p-3 h-24 rounded bg-[#f5f1e8]"
          />
        </div>

        {/* Kanan */}
        <div className="grid grid-cols-2 gap-6">
          {/* Bahan Section */}
          <div>
            <h3 className="text-lg font-bold">Bahan</h3>
            <p className="text-sm text-gray-500 mb-2">Porsi</p>
            <input
              disabled
              value="2 Orang"
              className="mb-4 p-2 rounded bg-[#f5f1e8] w-full"
            />

            {bahan.map((val, i) => (
              <div key={i} className="flex items-center gap-2 mb-2">
                <input
                  placeholder="1/2 ekor ayam"
                  value={val}
                  onChange={(e) =>
                    setBahan(bahan.map((b, idx) => (idx === i ? e.target.value : b)))
                  }
                  className="flex-1 p-2 rounded bg-[#f5f1e8]"
                />
                <button
                  onClick={() => handleRemoveBahan(i)}
                  className="text-red-500"
                >
                  🗑️
                </button>
              </div>
            ))}

            <button
              onClick={handleAddBahan}
              className="text-sm mt-2 text-[#d2694f]"
            >
              + Bahan
            </button>
          </div>

          {/* Langkah Section */}
          <div>
            <h3 className="text-lg font-bold">Langkah Langkah</h3>
            <p className="text-sm text-gray-500 mb-2">Durasi</p>
            <input
              disabled
              value="1 Jam 30 Menit"
              className="mb-4 p-2 rounded bg-[#f5f1e8] w-full"
            />

            {langkah.map((val, i) => (
              <div key={i} className="mb-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-5 text-center">{i + 1}</span>
                  <input
                    placeholder="Potong ayam jadi beberapa bagian"
                    value={val}
                    onChange={(e) =>
                      setLangkah(langkah.map((l, idx) => (idx === i ? e.target.value : l)))
                    }
                    className="flex-1 p-2 rounded bg-[#f5f1e8]"
                  />
                  <button
                    onClick={() => handleRemoveLangkah(i)}
                    className="text-red-500"
                  >
                    🗑️
                  </button>
                </div>
                <div className="bg-[#f5f1e8] h-20 rounded flex items-center justify-center text-gray-400">
                  📷 Tambahkan gambar
                </div>
              </div>
            ))}

            <button
              onClick={handleAddLangkah}
              className="text-sm mt-2 text-[#d2694f]"
            >
              + Langkah
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
