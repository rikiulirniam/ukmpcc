import { SITE_NAME } from '../../utils/env'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-8 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-gray-500">© {year} {SITE_NAME}. All rights reserved.</p>
        <nav className="flex items-center gap-4 text-sm text-gray-500">
          <a href="#produk" className="hover:text-gray-700">Produk</a>
          <a href="#" className="hover:text-gray-700">Kebijakan</a>
          <a href="#" className="hover:text-gray-700">Kontak</a>
        </nav>
      </div>
    </footer>
  )
}
