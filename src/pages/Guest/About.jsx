import PageHeader from "../../components/Guest/PageHeader";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-white" id="dashboard-container">
      <PageHeader title="About" breadcrumb="Dashboard / About" />

      {/* Hero Section */}
      <div className="relative w-full h-64 md:h-80 overflow-hidden">
        <img
          src="/img/m11.jpg"
          alt="Tentang Sedap"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            Tentang Kami
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6 md:py-16 md:px-10 max-w-5xl mx-auto space-y-10 text-gray-700">
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Sedap - Cita Rasa Indonesia</h2>
          <p>
            <strong>Sedap</strong> adalah platform kuliner yang menghadirkan pengalaman tak terlupakan bagi para pencinta makanan.
            Kami menyuguhkan berbagai menu autentik dari penjuru Nusantara, siap memanjakan lidah Anda dengan kualitas terbaik.
          </p>
        </section>

        {/* Misi & Visi */}
        <section className="bg-gray-50 p-6 rounded-xl shadow-inner">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Misi & Visi</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>📌 Menghubungkan pelanggan dengan makanan lokal berkualitas.</li>
            <li>🍱 Memberdayakan UMKM kuliner melalui platform digital.</li>
            <li>💡 Menjadi sumber inspirasi gaya hidup sehat dan lezat.</li>
          </ul>
        </section>

        {/* Keunggulan Sedap */}
        <section>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Kenapa Memilih Sedap?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Bahan Berkualitas", icon: "🍃", desc: "Kami hanya menggunakan bahan terbaik dan segar." },
              { title: "Cepat & Praktis", icon: "⚡", desc: "Proses pemesanan dan pengiriman cepat & efisien." },
              { title: "Dukungan Lokal", icon: "🤝", desc: "Mendukung produk dan pengusaha kuliner lokal." },
            ].map((item, idx) => (
              <div key={idx} className="bg-white border p-6 rounded-lg shadow hover:shadow-lg transition">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="text-lg font-bold mb-2 text-gray-800">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
