import { useState, useEffect } from 'react'

const carouselImages = [
  '/homepage-carousel/image1.png',
  '/homepage-carousel/image2.jpg',
  '/homepage-carousel/image3.png',
  '/homepage-carousel/image4.png',
  '/homepage-carousel/image5.png',
]

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const prev = () => setCurrent((c) => (c - 1 + carouselImages.length) % carouselImages.length)
  const next = () => setCurrent((c) => (c + 1) % carouselImages.length)

  return (
    <div className="relative w-full h-80 lg:h-[420px] rounded-2xl overflow-hidden">
      {carouselImages.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`Слика ${i + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === current ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}

      {/* Prev / Next buttons */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-9 h-9 flex items-center justify-center transition-colors z-10"
        aria-label="Претходна"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-9 h-9 flex items-center justify-center transition-colors z-10"
        aria-label="Следна"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {carouselImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-colors ${i === current ? 'bg-white' : 'bg-white/40'}`}
            aria-label={`Слика ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
