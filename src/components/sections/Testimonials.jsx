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
    <section id="testimoni" className="bg-sky-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">Testimoni</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((t) => (
            <figure key={t.name} className="rounded-2xl border border-sky-100 bg-white p-5 shadow-sm">
              <blockquote className="text-gray-700">“{t.quote}”</blockquote>
              <figcaption className="mt-3 text-sm text-gray-500">
                <span className="font-medium text-gray-800">{t.name}</span> — {t.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
