const mainEvent = { 
  title: 'TechComFest', 
  desc: 'Techcomfest adalah salah satu wujud misi dan peran aktif UKM Polytechnic Computer Club dalam mengikuti perkembangan teknologi dalam bidang IT.',
  image: '/assets/event/techcomfest.jpg'
}

const otherEvents = [
  { 
    title: 'CAKRA', 
    desc: 'Pengenalan UKM PCC kepada mahasiswa baru pada saat acara WaRNA.',
    image: '/assets/event/cakra.jpg'
  },
  { 
    title: 'GTP (Goes To Public)', 
    desc: 'Program sosialisasi dan pengenalan teknologi kepada masyarakat umum.',
    image: '/assets/event/gtp.jpg'
  },
  { 
    title: 'HUT PCC', 
    desc: 'Perayaan hari ulang tahun Polytechnic Computer Club.',
    image: '/assets/event/hut.jpg'
  },
  { 
    title: 'Open House', 
    desc: 'Pengenalan UKM PCC secara mendalam kepada mahasiswa.',
    image: '/assets/event/openhouse.jpg'
  },
]

export default function Events() {
  return (
    <section id="event" aria-labelledby="events-heading" className="bg-primary-softer">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <h2 id="events-heading" className="bg-gradient-to-r from-primary-dark to-accent-indigo bg-clip-text text-2xl font-semibold text-transparent sm:text-3xl">Event</h2>
        <p className="mt-2 max-w-2xl text-gray-700">Agenda kegiatan terstruktur untuk meningkatkan skill dan kolaborasi anggota.</p>
        
        {/* Main Event - TechComFest */}
        <article className="group relative mt-8 overflow-hidden rounded-2xl border-2 border-primary/40 bg-white shadow-lg transition hover:shadow-2xl">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="aspect-video overflow-hidden md:aspect-auto">
              <img
                src={mainEvent.image}
                alt={mainEvent.title}
                loading="lazy"
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center p-6 md:p-8">
              <h3 className="text-3xl font-bold text-gray-900 md:text-4xl">{mainEvent.title}</h3>
              <p className="mt-3 text-base text-gray-600 md:text-lg">{mainEvent.desc}</p>
            </div>
          </div>
        </article>

        {/* Other Events */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {otherEvents.map(e => (
            <article key={e.title} className="group relative overflow-hidden rounded-lg border border-primary/20 bg-white shadow-sm transition hover:shadow-md">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={e.image}
                  alt={e.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-3">
                <h3 className="text-sm font-semibold text-gray-900">{e.title}</h3>
                <p className="mt-1 text-xs text-gray-600">{e.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
