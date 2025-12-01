import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://backend-anive-3.vercel.app/api/jawaban";

const AdminPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchJawaban = async () => {
    try {
      const res = await axios.get(API_URL);
      setData(res.data.data);
    } catch (error) {
      console.error("Gagal mengambil data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJawaban();
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Loading data...</p>;
  }

  return (
    <div className="max-w-2xl mx-auto p-5">
      <h1 className="text-2xl font-bold mb-4">📄 Data Jawaban</h1>

      {data.length === 0 ? (
        <p className="text-gray-500">Belum ada jawaban yang masuk.</p>
      ) : (
        <div className="space-y-4">
          {data.map((item) => (
            <div key={item.id} className="p-4 border rounded shadow-sm">
              <p>
                <b>Nama:</b> {item.nama}
              </p>
              <p>
                <b>Harapan:</b> {item.harapan}
              </p>
              <p>
                <b>Pendapat:</b> {item.pendapat}
              </p>
              <p className="text-sm text-gray-500">
                {new Date(item.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminPage;
