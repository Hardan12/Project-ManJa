import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ImSpinner2 } from "react-icons/im";
import { BsFillExclamationDiamondFill } from "react-icons/bs";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm({ ...dataForm, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!dataForm.email || !dataForm.password) {
      setError("Email dan password harus diisi.");
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post("https://dummyjson.com/user/login", {
        username: dataForm.email,
        password: dataForm.password,
      });

      if (res.status === 200) {
        navigate("/");
      } else {
        setError("Login gagal.");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Terjadi kesalahan.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto font-poppins">
      <h1 className="text-5xl font-bold text-orange-500 text-center mb-12">
        Login
      </h1>

      {error && (
        <div className="bg-red-100 text-sm text-gray-700 rounded flex items-center p-4 mb-5">
          <BsFillExclamationDiamondFill className="text-red-600 mr-2" />
          {error}
        </div>
      )}

      {loading && (
        <div className="bg-gray-100 text-sm text-gray-600 rounded flex items-center p-4 mb-5">
          <ImSpinner2 className="mr-2 animate-spin" />
          Mohon tunggu...
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-800 text-sm font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Contoh: manja@mail.com"
            value={dataForm.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder:text-gray-400"
          />
        </div>

        <div>
          <label className="block text-gray-800 text-sm font-semibold mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="********"
            value={dataForm.password}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder:text-gray-400"
          />
        </div>

        <div className="text-sm text-right">
          <button
            type="button"
            onClick={() => navigate("/forgot")}
            className="text-orange-500 hover:underline"
          >
            Lupa Password?
          </button>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-full font-semibold transition duration-300 ${
            loading
              ? "bg-orange-300 cursor-not-allowed text-white"
              : "bg-orange-500 hover:bg-orange-600 text-white"
          }`}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}
