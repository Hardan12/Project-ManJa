import Header from "../components/Header";

const posts = [
  {
    caption: "Ayam bakar khas nusantara dengan sambal segar dan lalapan.",
    image: "/Img/semur.png",
    likes: "24k",
    userId: 1,
  },
  {
    caption: "Ayam pedas manis, cocok untuk makan malam keluarga.",
    image: "/Img/semur.png",
    likes: "19k",
    userId: 2,
  },
  {
    caption: "Soto ayam dengan kuah bening yang gurih dan nikmat.",
    image: "/Img/semur.png",
    likes: "15k",
    userId: 3,
  },
  {
    caption: "Rendang daging sapi empuk, rempah meresap sempurna.",
    image: "/Img/semur.png",
    likes: "31k",
    userId: 4,
  },
  {
    caption: "Bakso urat kuah kaldu dengan sambal dan seledri segar.",
    image: "/Img/semur.png",
    likes: "22k",
    userId: 5,
  },
  {
    caption: "Nasi goreng kampung pedas, cocok untuk sarapan.",
    image: "/Img/semur.png",
    likes: "18k",
    userId: 6,
  },
];

export default function Dashboard() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Header khusus Dashboard */}
      <Header />

      {/* Konten utama */}
      <div className="flex flex-1 overflow-hidden px-6 py-4 gap-6 bg-[#f9f4e8]">
        {/* Konten Tengah */}
        <div className="flex-1 overflow-y-auto pr-2 space-y-8">
          {posts.map((post, idx) => (
            <article
              key={idx}
              className="bg-white p-6 rounded-xl shadow transition hover:shadow-lg"
            >
              {/* User Info */}
              <div className="flex items-center mb-4">
                <img
                  src={`https://avatar.iran.liara.run/public/${post.userId}`}
                  alt="User"
                  className="h-10 w-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-semibold">Wulanita Sinayi</p>
                  <p className="text-sm text-gray-400">You</p>
                </div>
              </div>

              {/* Caption */}
              <p className="mb-4 text-gray-700">{post.caption}</p>

              {/* Gambar */}
              <img
                src={post.image}
                alt="Makanan"
                className="w-full max-h-[250px] object-cover rounded-lg mb-4"
              />

              {/* Info Like */}
              <div className="text-sm text-gray-500 mb-2">
                ❤️ {post.likes} Suka • 12 Komentar
              </div>

              {/* Komentar */}
              <div className="space-y-3">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <p className="text-sm">
                    <strong>Neo Juki:</strong> Mantap, bumbunya dapet banget!
                  </p>
                </div>
                <div className="bg-gray-100 p-3 rounded-lg ml-4">
                  <p className="text-sm">
                    <strong>Shaan Atom:</strong> Makasih ya! 😊
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Sidebar Kanan */}
        <aside className="w-64 overflow-y-auto max-h-full">
          <div className="bg-[#fdf8eb] p-4 rounded-lg shadow">
            <p className="text-sm font-bold mb-3 text-[#d2694f]">Shaan Atom</p>
            <hr className="mb-3" />
            <p className="text-sm font-bold mb-2">Based on your community:</p>
            <ul className="space-y-2 text-sm">
              {[7, 8, 9].map((userId, i) => (
                <li key={i} className="flex items-center gap-2">
                  <img
                    src={`https://avatar.iran.liara.run/public/${userId}`}
                    className="h-6 w-6 rounded-full"
                    alt="user"
                  />
                  Wulanita Sinayi
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
