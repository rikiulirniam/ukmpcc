export default function About() {
  const items = [
    { title: 'Belajar Bareng', desc: 'Kelas rutin dari basic hingga advanced, fokus praktik.' },
    { title: 'Kolaborasi Proyek', desc: 'Bangun portofolio lewat proyek internal dan mitra.' },
    { title: 'Kompetisi & Event', desc: 'Ikut lomba, hackathon, dan berbagi di seminar.' },
  ]
  return (
    <section id="tentang" className="relative bg-blue-diagonal text-white">
      {/* Smooth wave divider to blend with Hero */}
      <div aria-hidden="true" className="absolute -top-8 left-0 right-0 h-8 overflow-hidden">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="h-full w-full">
          <defs>
            <linearGradient id="aboutGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#0ea5e9" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
          </defs>
          <path d="M0,32 C240,64 480,64 720,32 C960,0 1200,0 1440,32 L1440,80 L0,80 Z" fill="url(#aboutGradient)" fillOpacity="0.9" />
        </svg>
      </div>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold sm:text-3xl">Tentang PCC</h2>
          <p className="mt-2 text-white/90">
            UKM Polytechnic Computer Club (PCC) di Politeknik Negeri Semarang berfokus pada pengembangan kompetensi
            mahasiswa di bidang pemrograman, jaringan, desain, dan multimedia melalui kegiatan yang konsisten dan
            kolaboratif.
          </p>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="relative overflow-hidden rounded-2xl border border-primary/30 bg-white p-5 shadow-sm transition hover:shadow-md">
              <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary via-accent-blue to-accent-indigo" />
              <h3 className="text-base font-semibold text-gray-900">{it.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
