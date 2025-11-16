const services = [
  {
    title: 'Pengembangan Aplikasi',
    desc: 'Web dan mobile, cepat dan scalable untuk kebutuhan Anda.',
    img: '/assets/openhouse.jpg',
  },
  {
    title: 'Desain & Multimedia',
    desc: 'Identitas visual, UI, dan konten kreatif yang engaging.',
    img: '/assets/cakra.jpg',
  },
  {
    title: 'Jaringan & Infrastruktur',
    desc: 'Instalasi, konfigurasi, dan optimasi jaringan yang andal.',
    img: '/assets/training-basic-network.jpg',
  },
]

export default function Products() {
  return (
    <section id="produk" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">Produk & Layanan</h2>
        <p className="mt-2 max-w-2xl text-gray-600">Paket layanan praktis yang bisa dikustom sesuai kebutuhan.</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article key={s.title} className="group overflow-hidden rounded-2xl border border-gray-100 shadow-sm transition hover:shadow-md">
              <img
                src={s.img}
                alt={s.title}
                className="h-44 w-full object-cover transition group-hover:scale-[1.02]"
                loading="lazy"
                srcSet={`${s.img} 640w`}
                sizes="(max-width: 640px) 100vw, 33vw"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
