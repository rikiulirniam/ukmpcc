import Button from '../common/Button'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <a href="#" className="flex items-center gap-2">
          <img src="/assets/logopcc.png" alt="Logo PCC" className="h-8 w-8" loading="lazy" />
          <span className="text-sm font-semibold text-gray-900">Polytechnic Computer Club</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-gray-600 sm:flex">
          <a href="#tentang" className="hover:text-gray-900">Tentang</a>
          <a href="#program" className="hover:text-gray-900">Program</a>
          <a href="#testimoni" className="hover:text-gray-900">Testimoni</a>
          <Button href="#daftar" className="px-3 py-1.5">Daftar</Button>
        </nav>
      </div>
    </header>
  )
}
