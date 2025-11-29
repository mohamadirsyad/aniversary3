import { useState } from "react";
import FlowerScene from "../three/FlowerScene";
import { GiftIcon } from "@heroicons/react/24/solid"; // jika pakai heroicons

const Gift = () => {
  const [showFlower, setShowFlower] = useState(false);

  return (
    <section className="py-10 text-center">
      <h2 className="text-3xl font-bold text-pink-500 mb-4">
        Hadiah Kecil buat Kamu 🌸
      </h2>

      {/* Jika bunga belum muncul → tampilkan tombol hadiah */}
      {!showFlower && (
        <button
          onClick={() => setShowFlower(true)}
          className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-4 rounded-full shadow-lg 
                     text-xl font-semibold flex items-center gap-2 mx-auto transition transform 
                     hover:scale-110 active:scale-95"
        >
          🎁 Lihat Hadiah
        </button>
      )}

      {/* Jika tombol diklik → tampilkan bunga 3D */}
      {showFlower && (
        <div className="mt-6">
          <FlowerScene />
        </div>
      )}

      <p className="text-gray-600 mt-4">
        {showFlower
          ? "Bisa Diputer-puter Bunganya Lohh "
          : "Klik hadiahnya dulu ya 💝"}
      </p>
    </section>
  );
};

export default Gift;
