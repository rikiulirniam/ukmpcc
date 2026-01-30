export default function Button({ children, href, onClick, variant = 'primary', className = '' }) {
  const base = 'inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.97]'
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-dark focus-visible:ring-primary',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50 focus-visible:ring-primary',
    secondary: 'bg-accent-blue text-white hover:bg-accent-indigo focus-visible:ring-accent-blue',
    ghost: 'text-primary hover:bg-primary/10 focus-visible:ring-primary',
    white: 'bg-white text-primary hover:bg-primary/10 focus-visible:ring-primary shadow-sm',
  }
  const Comp = href ? 'a' : 'button'
  const props = href ? { href } : { onClick, type: 'button' }
  return (
    <Comp className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Comp>
  )
}
