import { useState, useEffect } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { name: '首页', path: '/' },
  { name: '关于我们', path: '/about' },
  { name: '产品服务', path: '/services' },
  { name: '联系我们', path: '/contact' },
]

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    setMobileMenuOpen(false)
    window.scrollTo(0, 0)
  }, [location])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Navbar */}
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled || !isHome
            ? 'glass shadow-sm border-b border-border/50'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 cursor-pointer group">
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center shadow-lg shadow-accent/25 group-hover:shadow-accent/40 transition-shadow">
                <span className="text-accent-foreground font-bold text-lg">G</span>
              </div>
              <span className={cn(
                'text-xl font-bold tracking-tight transition-colors',
                scrolled || !isHome ? 'text-primary' : 'text-white'
              )}>
                武汉锦煜信息
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer',
                    location.pathname === link.path
                      ? scrolled || !isHome
                        ? 'text-accent bg-accent/8'
                        : 'text-white bg-white/15'
                      : scrolled || !isHome
                        ? 'text-muted-foreground hover:text-primary hover:bg-muted'
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center">
              <Link
                to="/contact"
                className={cn(
                  'inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 cursor-pointer',
                  scrolled || !isHome
                    ? 'bg-accent text-accent-foreground hover:bg-accent-light shadow-lg shadow-accent/20 hover:shadow-accent/30'
                    : 'bg-white text-primary hover:bg-white/90 shadow-lg shadow-black/10'
                )}
              >
                联系我们
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={cn(
                'lg:hidden p-2.5 rounded-xl transition-all cursor-pointer',
                scrolled || !isHome
                  ? 'hover:bg-muted text-primary'
                  : 'hover:bg-white/10 text-white'
              )}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            'lg:hidden overflow-hidden transition-all duration-400 glass-dark',
            mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <div className="px-6 py-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'block px-4 py-3 rounded-xl text-sm font-medium transition-colors cursor-pointer',
                  location.pathname === link.path
                    ? 'text-accent bg-accent/10'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-3 mt-2 border-t border-white/10">
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-accent text-accent-foreground text-sm font-semibold rounded-xl hover:bg-accent-light transition-colors cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                联系我们
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-primary relative overflow-hidden">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
            {/* Brand */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center">
                  <span className="text-accent-foreground font-bold text-lg">G</span>
                </div>
                <span className="text-xl font-bold text-white tracking-tight">武汉锦煜信息</span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-xs">
                专业从事信息技术服务，致力于为客户提供卓越的解决方案与服务，是企业最值得信赖的合作伙伴。
              </p>
              <div className="flex items-center gap-3">
                <a className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-accent hover:border-accent/30 transition-all cursor-pointer text-xs font-bold">微</a>
                <a className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-accent hover:border-accent/30 transition-all cursor-pointer text-xs font-bold">抖</a>
                <a className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-accent hover:border-accent/30 transition-all cursor-pointer text-xs font-bold">领</a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2">
              <h3 className="text-sm font-semibold text-white mb-5 tracking-wide">快速导航</h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm text-slate-400 hover:text-white transition-colors cursor-pointer link-underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="lg:col-span-3">
              <h3 className="text-sm font-semibold text-white mb-5 tracking-wide">核心服务</h3>
              <ul className="space-y-3">
                <li><span className="text-sm text-slate-400 hover:text-white transition-colors cursor-pointer link-underline">金蝶系统实施</span></li>
                <li><span className="text-sm text-slate-400 hover:text-white transition-colors cursor-pointer link-underline">金蝶二次开发</span></li>
                <li><span className="text-sm text-slate-400 hover:text-white transition-colors cursor-pointer link-underline">系统部署运维</span></li>
                <li><span className="text-sm text-slate-400 hover:text-white transition-colors cursor-pointer link-underline">数据集成对接</span></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:col-span-3">
              <h3 className="text-sm font-semibold text-white mb-5 tracking-wide">联系方式</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-400">400-XXX-XXXX</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <span className="text-sm text-slate-400">contact@example.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <span className="text-sm text-slate-400">XX省XX市XX区XX路XX号</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-16 pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500">
              &copy; {new Date().getFullYear()} 武汉锦煜信息技术有限公司. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-xs text-slate-500 hover:text-slate-300 transition-colors cursor-pointer">隐私政策</span>
              <span className="text-xs text-slate-500 hover:text-slate-300 transition-colors cursor-pointer">服务条款</span>
              <span className="text-xs text-slate-500 hover:text-slate-300 transition-colors cursor-pointer">京ICP备XXXXXXXX号</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
