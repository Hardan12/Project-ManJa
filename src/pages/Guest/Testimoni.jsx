import testimonials from "../../assets/testimoni.json";

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">Apa Kata Mereka?</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 text-left"
            >
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full border-2 border-yellow-400"
                />
                <div>
                  <h4 className="text-md font-semibold text-gray-700">{t.name}</h4>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">"{t.review}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
