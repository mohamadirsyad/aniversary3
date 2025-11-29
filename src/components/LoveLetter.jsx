import { useState } from "react";

const LoveLetter = () => {
  const [open, setOpen] = useState(false);
  return (
    <section>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Love Letter 💌
      </h2>
      <div className="bg-rose-50 p-6 rounded-lg shadow">
        <p className="text-gray-700">Hai Hany❤️, Dibaca Yaa😊.</p>

        <button
          onClick={() => setOpen((s) => !s)}
          className="mt-4 inline-block px-4 py-2 bg-rose-600 text-white rounded-lg"
        >
          {open ? "Tutup" : "Baca Surat "}
        </button>

        {open && (
          <div className="mt-4 text-gray-700 space-y-3">
            <p>
              Hai sayang… makasih ya sudah bertahan sama aku selama ini. Kita
              sudah lewat banyak hal, dari yang lucu sampai yang bikin pusing,
              tapi semuanya tetap berarti buat aku karena ada kamu.
            </p>

            <p>
              Aku nggak selalu sempurna, dan kita juga nggak selalu mulus, tapi
              aku selalu bangga karena kita selalu bisa balik baik–baik lagi.
              Itu yang bikin aku yakin kalau hubungan ini kuat.
            </p>

            <p>
              Aku bikin website kecil ini cuma buat ngasih tahu satu hal: aku
              sayang sama kamu, dan aku nggak mau berhenti buat milih kamu
              setiap hari.
            </p>

            <p>
              Semoga kita bisa terus tumbuh bareng, saling ngerti, saling
              jagain, dan tetap jadi tim yang baik.
            </p>

            <p>Love you, always in a simple but real way. ❤️</p>
          </div>
        )}
      </div>
    </section>
  );
};
export default LoveLetter;
