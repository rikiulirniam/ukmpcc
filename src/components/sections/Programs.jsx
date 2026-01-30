const programs = [
  {
    title: 'Web & Mobile Dev',
    desc: 'Belajar React, Node.js, dan dasar mobile. Bangun aplikasi end-to-end.',
    img: '/assets/training-basic-software.jpg',
  },
  {
    title: 'Desain & Multimedia',
    desc: 'UI/UX, desain grafis, dan konten multimedia untuk produk digital.',
    img: '/assets/cakra.jpg',
  },
  {
    title: 'Jaringan & Keamanan',
    desc: 'Fundamental jaringan, server, dan pengenalan keamanan sistem.',
    img: '/assets/training-basic-network.jpg',
  },
]

export default function Programs() {
  return (
    <section id="program" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <h2 className="bg-gradient-to-r from-primary-dark to-accent-blue bg-clip-text text-2xl font-semibold text-transparent sm:text-3xl">Program & Divisi</h2>
        <p className="mt-2 max-w-2xl text-gray-700">Ikuti kelas dan praktik sesuai minatmu. Mentoring dan kurikulum bertahap.</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <article key={p.title} className="group relative overflow-hidden rounded-2xl border border-primary/30 bg-white shadow-sm transition hover:shadow-md">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/10 opacity-0 transition group-hover:opacity-100" />
              <img
                src={p.img}
                alt={p.title}
                className="h-44 w-full object-cover transition group-hover:scale-[1.03]"
                loading="lazy"
                srcSet={`${p.img} 640w`}
                sizes="(max-width: 640px) 100vw, 33vw"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{p.desc}</p>
              </div>
              <span className="pointer-events-none absolute right-2 top-2 rounded-full bg-primary/15 px-2 py-1 text-[10px] font-medium text-primary">TRACK</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
