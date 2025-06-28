import { useState } from "react";
import members from "../../assets/members.json";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

export default function MembershipCheck() {
  const [email, setEmail] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleCheck = () => {
    setError("");
    setResult(null);

    if (!email.trim()) {
      return setError("Email tidak boleh kosong.");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return setError("Format email tidak valid.");
    }

    const member = members.find((m) => m.email === email.trim());
    if (member) {
      setResult(member);
    } else {
      setResult("not_found");
    }
  };

  const memberColors = {
    silver: "bg-gray-200 text-gray-700",
    gold: "bg-yellow-300 text-yellow-900",
    platinum: "bg-purple-300 text-purple-900"
  };

  const memberIcons = {
    silver: "🥈",
    gold: "🥇",
    platinum: "💎"
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">🔍 Cek Keanggotaan</h2>
      <input
        type="email"
        placeholder="Masukkan email"
        className="w-full px-4 py-2 border border-gray-300 rounded-md mb-2 focus:outline-yellow-400"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        onClick={handleCheck}
        className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 rounded-md transition"
      >
        Cek Sekarang
      </button>

      {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}

      {result && result !== "not_found" && (
        <div className={`mt-4 p-4 rounded-md ${memberColors[result.tipe_member]} flex items-center space-x-3`}>
          <span className="text-2xl">{memberIcons[result.tipe_member]}</span>
          <div>
            <p className="font-semibold text-lg">
              🧾 Selamat datang, {result.nama}!
            </p>
            <p>Anda adalah member <strong className="capitalize">{result.tipe_member}</strong>.</p>
          </div>
        </div>
      )}

      {result === "not_found" && (
        <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-md flex items-center space-x-2">
          <AiOutlineCloseCircle className="text-2xl" />
          <span>❌ Email tidak terdaftar sebagai member.</span>
        </div>
      )}
    </div>
  );
}
