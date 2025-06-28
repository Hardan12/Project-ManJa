import Banner from "../../components/Guest/Banner";
import Footer from "../../components/Guest/Footer";

export default function Home() {
    return (
        <div>
            <Banner />

            {/* Section: Tentang */}
            <section className="py-16 px-6 max-w-6xl mx-auto">
                <div className="md:flex items-start gap-8">
                    <img
                        src="/Img/makan3d.png"
                        alt="Makanan"
                        className="w-full md:w-1/2 rounded-lg"
                    />
                    <div className="mt-6 md:mt-0">
                        <h2 className="text-2xl font-bold mb-4">Tentang</h2>
                        <p className="text-gray-700 leading-relaxed">
                            ManJa (Makan Aja!) adalah komunitas kuliner berbasis web yang hadir untuk menjawab kebingungan sederhana sehari-hari: "Hari ini mau makan apa ya?".<br /><br />
                            Melalui platform ini, kamu bisa menemukan rekomendasi tempat makan terbaik, membaca ulasan dari pengguna lain, dan membagikan pengalaman kulinermu sendiri.<br /><br />
                            Lebih dari sekadar mencari makanan, ManJa adalah ruang untuk mengeksplorasi rasa dan mengenal kekayaan kuliner lewat interaksi komunitas.
                        </p>
                    </div>
                </div>
            </section>

            {/* Section: Apa yang Bisa Kamu Lakukan */}
            <section className="py-16 bg-gray-50 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl font-bold mb-6">
                        Apa yang Bisa Kamu <br /> Lakukan di ManJa?
                    </h2>
                    <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
                        Di ManJa, kamu bisa menemukan tempat makan favorit berdasarkan lokasi, suasana, atau jenis makanan,
                        membaca dan menulis ulasan dari sesama pecinta kuliner, membagikan cerita dan foto pengalaman kulinermu,
                        hingga menjelajahi berbagai resep dan tips memasak khas Nusantara—semua dalam satu komunitas yang hangat dan penuh rasa.
                    </p>
                </div>
            </section>

            {/* Section: Testimoni */}
            <section className="py-16 px-6 max-w-6xl mx-auto">
                <h2 className="text-2xl font-bold mb-6">Testimoni</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                    {[1, 2, 3, 4].map((i) => (
                        <div
                            key={i}
                            className="bg-gray-200 h-40 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
                        >
                            {/* Placeholder 3D-style box */}
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
}
