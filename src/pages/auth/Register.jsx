import { useState } from "react";
import { supabase } from "./supabase";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!username || !password || !confirmPassword) {
      toast.error("Username dan password harus diisi.");
      return;
    }

    if (password.length < 6) {
      toast.error("Password minimal 6 karakter.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Password dan konfirmasi tidak cocok.");
      return;
    }

    setLoading(true);

    // Cek apakah username sudah ada
    const { data: existing, error: checkError } = await supabase
      .from("user_profiles")
      .select("*")
      .eq("username", username);

    if (checkError) {
      toast.error("Gagal mengecek pengguna.");
      setLoading(false);
      return;
    }

    if (existing.length > 0) {
      toast.error("Username sudah digunakan.");
      setLoading(false);
      return;
    }

    // Simpan data ke user_profiles
    const { error: insertError } = await supabase.from("user_profiles").insert([
      {
        username,
        email: email || null,
        password,
      },
    ]);

    setLoading(false);

    if (insertError) {
      console.error("Insert error:", insertError);
      toast.error("Registrasi gagal.");
    } else {
      toast.success("Registrasi berhasil!");
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
        Register Akun Baru ✨
      </h2>

      <form onSubmit={handleRegister}>
        <div className="mb-5">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
            Nama Pengguna
          </label>
          <input
            type="text"
            id="username"
            className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm"
            placeholder="masukkan nama"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            disabled={loading}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email 
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm"
            placeholder="contoh@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
            Konfirmasi Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm"
            placeholder="********"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            disabled={loading}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full ${loading ? "bg-yellow-300 cursor-not-allowed" : "bg-yellow-500 hover:bg-yellow-400"
            } text-white font-semibold py-2 px-4 rounded-lg transition duration-300`}
        >
          {loading ? "Mendaftarkan..." : "Daftar"}
        </button>
      </form>

      <NavLink
        to="/login"
        className="mt-4 block text-center w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg transition duration-300"
      >
        Kembali ke Login
      </NavLink>
    </div>
  );
}
