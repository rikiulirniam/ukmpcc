import { useState } from 'react'

const images = [
  { src: '/assets/openhouse.jpg', alt: 'Open House PCC', label: 'Open House' },
  { src: '/assets/hut.jpg', alt: 'Perayaan HUT PCC', label: 'HUT PCC' },
  { src: '/assets/training-basic-software.jpg', alt: 'Training Software Dasar', label: 'Training Software' },
  { src: '/assets/training-basic-network.jpg', alt: 'Training Network Dasar', label: 'Training Network' },
  { src: '/assets/training-basic-mulmed.jpg', alt: 'Sesi Multimedia Dasar', label: 'Training Multimedia' },
  { src: '/assets/cakra.jpg', alt: 'Tim PCC berkolaborasi', label: 'Kolaborasi Tim' },
]

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0)

  const goToSlide = (index) => {
    setActiveIndex(index)
  }

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <section id="galeri" aria-labelledby="gallery-heading" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <h2 id="gallery-heading" className="bg-gradient-to-r from-primary-dark to-accent-indigo bg-clip-text text-2xl font-semibold text-transparent sm:text-3xl">Gallery</h2>
        <p className="mt-2 max-w-2xl text-gray-600">Dokumentasi kegiatan dan momen penting PCC Polines.</p>
        
        {/* Carousel */}
        <div className="relative mt-8 overflow-hidden rounded-xl">
          <div className="relative aspect-video bg-gray-900">
            <img
              src={images[activeIndex].src}
              alt={images[activeIndex].alt}
              className="h-full w-full object-contain"
            />
            
            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-lg transition hover:bg-white"
              aria-label="Previous image"
            >
              <svg className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-lg transition hover:bg-white"
              aria-label="Next image"
            >
              <svg className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image Label */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <p className="text-sm font-medium text-white">{images[activeIndex].label}</p>
            </div>
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="mt-4 grid grid-cols-6 gap-2">
          {images.map((img, index) => (
            <button
              key={img.src}
              onClick={() => goToSlide(index)}
              className={`group relative aspect-video overflow-hidden rounded-lg transition ${
                index === activeIndex
                  ? 'ring-2 ring-primary ring-offset-2'
                  : 'opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>

        <div className="mt-6 text-center">
          <a
            href="https://drive.google.com/drive/folders/17xodvFftoLA4afo3UmT3rMFzgD5R5ABs?usp=drive_link"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-lg bg-white px-4 py-2 text-sm font-medium text-primary shadow-sm ring-1 ring-primary/30 hover:bg-primary/5"
          >
            More Photos
          </a>
        </div>
      </div>
    </section>
  )
}
