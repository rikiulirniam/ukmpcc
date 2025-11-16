import Button from '../common/Button'
import { SITE_NAME } from '../../utils/env'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 to-white" style={{backgroundImage: "/assets/pendas.jpg"}}>
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-16 text-center sm:py-24">
        <img
          src="/assets/logopcc.png"
          alt={`${SITE_NAME} logo`}
          className="h-16 w-auto opacity-90"
          loading="lazy"
        />
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
          Polytechnic Computer Club
        </h1>
        <p className="max-w-2xl text-gray-600">
          Komunitas pemrograman di Politeknik Negeri Semarang (Polines) yang belajar, berkarya,
          dan berkolaborasi lewat kegiatan rutin, pelatihan, dan proyek nyata.
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <Button href="#program" className="w-full sm:w-auto">Lihat Program</Button>
          <Button href="#daftar" variant="outline" className="w-full sm:w-auto">Gabung Sekarang</Button>
        </div>
      </div>
    </section>
  )
}
