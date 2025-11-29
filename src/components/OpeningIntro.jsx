const OpeningIntro = () => {
  return (
    <div
      className="h-screen flex flex-col items-center justify-center text-center px-6 
      bg-gradient-to-b from-rose-50 via-pink-50 to-rose-100 
      animate-fade"
    >
      {/* Heart Icon */}
      <h1
        className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-rose-500 to-pink-500 
        bg-clip-text text-transparent animate-pulse drop-shadow-sm"
      >
        ❤️
      </h1>

      {/* Divider */}
      <div className="h-1 w-20 bg-rose-300/50 rounded-full mb-6"></div>

      {/* Main Text */}
      <p
        className="text-gray-700 max-w-2xl text-xl leading-relaxed 
        tracking-wide font-light 
        animate-[slideUp_1.2s_ease]"
      >
        Website ini aku buat untuk Memperingati perjalanan kita selama tiga
        tahun. Tiga tahun yang penuh tawa, cerita, harapan, dan semua hal kecil
        yang selalu membuatku bersyukur punya kamu.
        <br />
        <br />
        Semoga halaman kecil ini menjadi hadiah sederhana… tapi tulus, dari
        hatiku untuk kamu. 🌸
      </p>

      {/* Subtle decoration */}
      <div className="mt-8 text-2xl animate-bounce text-rose-400">✨</div>
    </div>
  );
};

export default OpeningIntro;
