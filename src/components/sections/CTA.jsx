import Button from '../common/Button'

export default function CTA() {
  return (
    <section id="daftar" className="bg-gradient-to-br from-sky-600 to-sky-500">
      <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:py-20">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">Siap tumbuh bareng komunitas?</h2>
        <p className="mx-auto mt-2 max-w-2xl text-sky-100">
          Daftar ke PCC Polines dan mulai bangun portofolio melalui kelas, proyek, dan komunitas yang suportif.
        </p>
        <div className="mt-6 flex items-center justify-center">
          <Button href="#" className="bg-white px-5 py-2 text-sky-700 hover:bg-slate-50">Isi Form Pendaftaran</Button>
        </div>
      </div>
    </section>
  )
}
