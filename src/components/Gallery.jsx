import { useEffect, useState, useRef } from "react";
import img1 from "../assets/gallery1.jpg";
import img2 from "../assets/gallery2.JPG";
import img3 from "../assets/gallery3.jpeg";
import img4 from "../assets/gallery4.jpeg";
import img5 from "../assets/gallery5.jpeg";
import img6 from "../assets/gallery6.jpg";
import img7 from "../assets/gallery7.jpg";

const Gallery = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7];
  const [current, setCurrent] = useState(0);
  const [zoomIndex, setZoomIndex] = useState(null);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // SWIPE DETECTION
  const touchStartX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - endX;

    if (diff > 50) nextImg();
    if (diff < -50) prevImg();
  };

  const nextImg = () => {
    setZoomIndex((prev) => (prev + 1) % images.length);
  };

  const prevImg = () => {
    setZoomIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="gallery" className="mt-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Galeri Foto</h2>

      {/* Carousel */}
      <div className="relative w-full overflow-hidden rounded-xl shadow-lg h-64 md:h-80">
        <div
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              onClick={() => setZoomIndex(i)}
              className="w-full h-64 md:h-80 object-cover flex-shrink-0 cursor-pointer hover:scale-[1.02] transition"
            />
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-3 gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition 
              ${i === current ? "bg-rose-500 scale-110" : "bg-rose-300"}
            `}
          />
        ))}
      </div>

      {/* FULLSCREEN LIGHTBOX */}
      {zoomIndex !== null && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
          {/* Close Area */}
          <div
            className="absolute inset-0"
            onClick={() => setZoomIndex(null)}
          />

          {/* Image */}
          <img
            src={images[zoomIndex]}
            className="relative max-w-[90%] max-h-[90%] rounded-xl shadow-2xl z-10"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          />

          {/* PREV BUTTON */}
          <button
            onClick={prevImg}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/40 p-3 rounded-full text-xl z-20 hover:bg-black/60"
          >
            ❮
          </button>

          {/* NEXT BUTTON */}
          <button
            onClick={nextImg}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/40 p-3 rounded-full text-xl z-20 hover:bg-black/60"
          >
            ❯
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
