const items = [
  {
    name: 'Rina',
    role: 'Anggota 2024',
    quote: 'Kurikulum bertahap dan komunitas suportif bikin belajar konsisten. Dapat proyek nyata pertama di semester 3!'
  },
  {
    name: 'Budi',
    role: 'Alumni',
    quote: 'Sharing dan mentoring-nya membantu saya dapat magang sebagai Frontend di startup lokal.'
  },
  {
    name: 'Dewi',
    role: 'Anggota 2025',
    quote: 'Kelas jaringan dan keamanan membuka wawasan dasar yang solid untuk karier IT.'
  },
]

export default function Testimonials() {
  return (
    <section id="testimoni" className="bg-primary-softer">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <h2 className="bg-gradient-to-r from-primary-dark to-accent-indigo bg-clip-text text-2xl font-semibold text-transparent sm:text-3xl">Testimoni</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((t) => (
            <figure key={t.name} className="relative overflow-hidden rounded-2xl border border-primary/30 bg-white p-5 shadow-sm transition hover:shadow-md">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent-blue/5 to-accent-indigo/5 opacity-0 transition group-hover:opacity-100" />
              <blockquote className="text-gray-700">“{t.quote}”</blockquote>
              <figcaption className="mt-3 text-sm text-gray-500">
                <span className="font-medium text-primary-dark">{t.name}</span> — {t.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
