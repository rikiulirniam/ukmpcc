import { SITE_NAME } from '../../utils/env'

export default function Footer() {
  const year = new Date().getFullYear()
  const socials = [
    { href: 'https://www.instagram.com/pccpolines', label: 'Instagram', svg: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.5-.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z"/></svg>
    ) },
    { href: 'https://www.facebook.com/ukmpcc', label: 'Facebook', svg: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M13 22v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2h-3a5 5 0 0 0-5 5v3H6v4h3v8h4z"/></svg>
    ) },
    { href: 'https://x.com/ukmpcc', label: 'X', svg: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M3 3h4.5l4.2 6.2L16.5 3H21l-7.2 9.2L21 21h-4.5l-4.5-6.5L7.5 21H3l7.7-8.9L3 3z"/></svg>
    ) },
    { href: 'https://www.youtube.com/@UKMPCCPOLINES', label: 'YouTube', svg: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M23 7.5a4 4 0 0 0-2.8-2.8C18.4 4 12 4 12 4s-6.4 0-8.2.7A4 4 0 0 0 1 7.5 41.5 41.5 0 0 0 1 12a41.5 41.5 0 0 0 1 4.5 4 4 0 0 0 2.8 2.8C5.6 20 12 20 12 20s6.4 0 8.2-.7a4 4 0 0 0 2.8-2.8 41.5 41.5 0 0 0 1-4.5 41.5 41.5 0 0 0-1-4.5zM10 15.5v-7l6 3.5-6 3.5z"/></svg>
    ) },
    { href: 'https://www.tiktok.com/@pcc.polines', label: 'TikTok', svg: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M21 8.5a6.6 6.6 0 0 1-4.4-1.6V16a6 6 0 1 1-6-6c.2 0 .4 0 .6.1V13a2.5 2.5 0 1 0 2.5 2.5V2h3.1A6.6 6.6 0 0 0 21 5.8V8.5z"/></svg>
    ) },
  ]
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-8 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-gray-500">
          Site by <a className='underline' href="https://github.com/rikiulirniam">Riki Ulir Niam</a>
        </p>
        <p className="text-sm text-gray-500">© {year} {SITE_NAME}. All rights reserved.</p>
        <div className="flex items-center gap-3">
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="text-gray-500 hover:text-primary">
              {s.svg}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
