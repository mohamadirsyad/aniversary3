import vidio from "../assets/vidio-kita.mp4";

const Hero = () => {
  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={vidio} type="video/mp4" />
        Browser kamu tidak mendukung video.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-xl">
          Happy 3rd Anniversary ❤️
        </h1>
      </div>
    </div>
  );
};

export default Hero;
