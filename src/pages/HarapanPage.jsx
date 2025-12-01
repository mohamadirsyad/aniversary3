import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL =
  "https://backend-anive-3-hj97z2wij-icaddds-projects.vercel.app/api/jawaban";

const HarapanPage = () => {
  const navigate = useNavigate();

  const [nama, setNama] = useState("");
  const [harapan, setHarapan] = useState("");
  const [pendapat, setPendapat] = useState("");

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    try {
      const res = await axios.post(API_URL, {
        nama,
        harapan,
        pendapat,
      });

      if (res.data.success) {
        setSuccessMsg("Jawaban kamu berhasil dikirim ❤️");

        // kosongkan form
        setNama("");
        setHarapan("");
        setPendapat("");

        // tunggu 1 detik → redirect ke halaman utama
        setTimeout(() => {
          navigate("/");
        }, 1300);
      }
    } catch (error) {
      console.error(error);
      setErrorMsg("Gagal mengirim jawaban, coba lagi yaa 😢");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-5">
      <h1 className="text-2xl font-bold mb-4">💌 Harapan & Pendapat</h1>

      {successMsg && (
        <p className="bg-green-100 text-green-700 p-2 rounded mb-4">
          {successMsg}
        </p>
      )}

      {errorMsg && (
        <p className="bg-red-100 text-red-700 p-2 rounded mb-4">{errorMsg}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full p-3 border rounded"
          placeholder="Nama kamu"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          required
        />

        <textarea
          className="w-full p-3 border rounded"
          placeholder="Apa harapan kamu ke depannya?"
          value={harapan}
          onChange={(e) => setHarapan(e.target.value)}
          required
        />

        <textarea
          className="w-full p-3 border rounded"
          placeholder="Menurut kamu aku orangnya seperti apa?"
          value={pendapat}
          onChange={(e) => setPendapat(e.target.value)}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-pink-500 text-white px-4 py-2 rounded w-full"
        >
          {loading ? "Mengirim..." : "Kirim Jawaban"}
        </button>
      </form>
    </div>
  );
};

export default HarapanPage;
