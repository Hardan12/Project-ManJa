import { useState } from "react";
import { toast } from "react-toastify";
import { supabase } from "./supabase"; // sesuaikan path jika perlu
import { NavLink } from "react-router-dom";

export default function Forgot() {
  const [email, setEmail] = useState("");

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      toast.error("Masukkan email yang valid!");
      return;
    }

    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: "http://localhost:5173/update-password", // ganti dengan URL aplikasi kamu
    });

    if (error) {
      toast.error("Gagal mengirim email reset password: " + error.message);
    } else {
      toast.success("Link reset password telah dikirim ke email kamu.");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-700 mb-2 text-center">
        Forgot Your Password?
      </h2>

      <p className="text-sm text-gray-500 mb-6 text-center">
        Enter your email address and we'll send you a link to reset your password.
      </p>

      <form onSubmit={handleResetPassword}>
        <div className="mb-5">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-300 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
        >
          Send Reset Link
        </button>
         <NavLink
        to="/login"
        className="mt-4 block text-center w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg transition duration-300"
      >
        Back to Login
      </NavLink>
      </form>
    </div>
  );
}
