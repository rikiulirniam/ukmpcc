export default function About() {
  const items = [
    { title: 'Belajar Bareng', desc: 'Kelas rutin dari basic hingga advanced, fokus praktik.' },
    { title: 'Kolaborasi Proyek', desc: 'Bangun portofolio lewat proyek internal dan mitra.' },
    { title: 'Kompetisi & Event', desc: 'Ikut lomba, hackathon, dan berbagi di seminar.' },
  ]
  return (
    <section id="tentang" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">Tentang PCC</h2>
          <p className="mt-2 text-gray-600">
            UKM Polytechnic Computer Club yang disingkat UKM PCC merupakan salah satu Unit Kegiatan Mahasiswa di Politeknik Negeri Semarang yang sudah cukup berumur. Dalam kiprahnya UKM PCC memberikan banyak kontribusi kepada institusi POLINES sendiri lewat prestasi-prestasi yang telah diraih oleh UKM PCC.
          </p>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-gray-100 p-5 shadow-sm">
              <h3 className="text-base font-semibold text-gray-900">{it.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
