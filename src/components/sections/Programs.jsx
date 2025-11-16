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
        <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">Program & Divisi</h2>
        <p className="mt-2 max-w-2xl text-gray-600">Ikuti kelas dan praktik sesuai minatmu. Mentoring dan kurikulum bertahap.</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-2xl border border-gray-100 shadow-sm transition hover:shadow-md">
              <img
                src={p.img}
                alt={p.title}
                className="h-44 w-full object-cover transition group-hover:scale-[1.02]"
                loading="lazy"
                srcSet={`${p.img} 640w`}
                sizes="(max-width: 640px) 100vw, 33vw"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
