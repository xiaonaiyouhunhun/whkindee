import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Shield,
  Users,
  TrendingUp,
  Award,
  CheckCircle2,
  Sparkles,
  Zap,
  BarChart3,
  Globe,
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

/* ===== Intersection Observer Hook ===== */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.unobserve(el) } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, inView }
}

/* ===== Animated Counter ===== */
function Counter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView()
  useEffect(() => {
    if (!inView) return
    let start = 0
    const end = value
    const duration = 2000
    const step = end / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= end) { setCount(end); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [inView, value])
  return <span ref={ref}>{count}{suffix}</span>
}

const stats = [
  { value: 15, suffix: '+', label: '年行业经验' },
  { value: 500, suffix: '+', label: '服务企业客户' },
  { value: 98, suffix: '%', label: '客户满意度' },
  { value: 50, suffix: '+', label: '城市覆盖' },
]

const features = [
  {
    icon: Shield,
    title: '专业可靠',
    description: '拥有行业领先的资质认证与专业团队，为客户提供安全可靠的解决方案。',
    gradient: 'from-blue-500/10 to-cyan-500/10',
    iconColor: 'text-blue-600',
  },
  {
    icon: Users,
    title: '客户至上',
    description: '深入了解客户需求，量身定制最优方案，全程提供一对一专属服务。',
    gradient: 'from-violet-500/10 to-purple-500/10',
    iconColor: 'text-violet-600',
  },
  {
    icon: TrendingUp,
    title: '持续创新',
    description: '紧跟行业发展趋势，持续投入研发创新，助力客户业务持续增长。',
    gradient: 'from-amber-500/10 to-orange-500/10',
    iconColor: 'text-amber-600',
  },
  {
    icon: Zap,
    title: '高效交付',
    description: '标准化流程管理，专业团队高效执行，确保项目按时高质量交付。',
    gradient: 'from-emerald-500/10 to-teal-500/10',
    iconColor: 'text-emerald-600',
  },
]

const advantages = [
  '资质齐全，合规经营，让合作无忧',
  '专业团队全程跟进，响应迅速',
  '标准化流程管理，确保服务质量',
  '灵活的定制方案，满足多样化需求',
  '完善的售后服务体系，长期保障',
  '合理透明的价格体系，性价比高',
]

const trustedBy = [
  '华为', '腾讯', '阿里巴巴', '字节跳动', '京东', '百度',
  '美团', '小米', '网易', '中兴', '联想', '海尔',
]

/* ===== Section Heading ===== */
function SectionHeading({ badge, title, description }: { badge: string; title: string; description: string }) {
  const { ref, inView } = useInView()
  return (
    <div ref={ref} className={`text-center max-w-2xl mx-auto mb-16 lg:mb-20 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
      <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/8 rounded-full text-accent text-xs font-semibold tracking-wide uppercase mb-5">
        <Sparkles className="w-3.5 h-3.5" />
        {badge}
      </span>
      <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4 tracking-tight">{title}</h2>
      <p className="text-muted-foreground leading-relaxed text-base">{description}</p>
    </div>
  )
}

export default function Home() {
  return (
    <div>
      {/* ===== Hero Section ===== */}
      <section className="relative min-h-[100vh] flex items-center overflow-hidden bg-primary">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          {/* Grid pattern */}
          <div className="absolute inset-0 grid-pattern opacity-30" />
          {/* Gradient orbs */}
          <div className="absolute top-1/4 left-1/6 w-[600px] h-[600px] bg-accent/15 rounded-full blur-[120px] animate-float" />
          <div className="absolute bottom-1/4 right-1/6 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: '3s' }} />
          <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-cyan-500/8 rounded-full blur-[100px] animate-float" style={{ animationDelay: '1.5s' }} />
          {/* Gradient overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Content */}
            <div>
              <div className="animate-fade-in-up">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/8 border border-white/10 rounded-full text-sm font-medium text-accent-light mb-8">
                  <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  值得信赖的业务伙伴
                </span>
              </div>

              <h1 className="animate-fade-in-up delay-100 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
                专业{' '}
                <span className="relative">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-400">
                    信息技术服务
                  </span>
                  <span className="absolute bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-blue-400/20 to-violet-400/20 rounded-full blur-sm" />
                </span>
                <br />
                助力企业腾飞
              </h1>

              <p className="animate-fade-in-up delay-200 text-lg text-slate-300 leading-relaxed mb-10 max-w-xl">
                我们深耕信息技术服务领域十余载，凭借丰富的行业经验和专业的服务团队，
                为超过500家企业客户提供了卓越的解决方案。
              </p>

              <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link
                  to="/services"
                  className="group inline-flex items-center gap-2.5 px-8 py-4 bg-accent text-white font-semibold rounded-2xl hover:bg-accent-light transition-all duration-300 shadow-xl shadow-accent/25 hover:shadow-accent/40 hover:-translate-y-0.5 cursor-pointer"
                >
                  了解我们的服务
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2.5 px-8 py-4 border border-white/15 text-white font-medium rounded-2xl hover:bg-white/8 hover:border-white/25 transition-all duration-300 cursor-pointer"
                >
                  免费咨询
                </Link>
              </div>

              {/* Mini stats */}
              <div className="animate-fade-in-up delay-500 mt-14 flex items-center gap-8 lg:gap-12">
                <div>
                  <div className="text-2xl lg:text-3xl font-bold text-white">500<span className="text-accent-light">+</span></div>
                  <div className="text-xs text-slate-400 mt-0.5">企业客户</div>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div>
                  <div className="text-2xl lg:text-3xl font-bold text-white">15<span className="text-accent-light">年</span></div>
                  <div className="text-xs text-slate-400 mt-0.5">行业深耕</div>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div>
                  <div className="text-2xl lg:text-3xl font-bold text-white">98<span className="text-accent-light">%</span></div>
                  <div className="text-xs text-slate-400 mt-0.5">客户满意度</div>
                </div>
              </div>
            </div>

            {/* Right - Decorative Card */}
            <div className="hidden lg:block animate-fade-in-up delay-400">
              <div className="relative">
                {/* Main card */}
                <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-400/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                    <div className="w-3 h-3 rounded-full bg-green-400/80" />
                    <span className="ml-2 text-xs text-slate-500">Dashboard</span>
                  </div>
                  <div className="space-y-4">
                    {/* Stat cards */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/5 rounded-2xl p-5">
                        <div className="flex items-center gap-2 mb-3">
                          <BarChart3 className="w-4 h-4 text-accent-light" />
                          <span className="text-xs text-slate-400">营收增长</span>
                        </div>
                        <div className="text-2xl font-bold text-white">+42%</div>
                        <div className="mt-2 h-1.5 bg-white/5 rounded-full overflow-hidden">
                          <div className="h-full w-3/4 bg-gradient-to-r from-accent to-cyan-400 rounded-full" />
                        </div>
                      </div>
                      <div className="bg-white/5 rounded-2xl p-5">
                        <div className="flex items-center gap-2 mb-3">
                          <Globe className="w-4 h-4 text-violet-400" />
                          <span className="text-xs text-slate-400">客户覆盖</span>
                        </div>
                        <div className="text-2xl font-bold text-white">50+</div>
                        <div className="mt-2 h-1.5 bg-white/5 rounded-full overflow-hidden">
                          <div className="h-full w-2/3 bg-gradient-to-r from-violet-500 to-purple-400 rounded-full" />
                        </div>
                      </div>
                    </div>
                    {/* Chart placeholder */}
                    <div className="bg-white/5 rounded-2xl p-5">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs text-slate-400 font-medium">服务满意度趋势</span>
                        <span className="text-xs text-green-400">+5.2%</span>
                      </div>
                      <div className="flex items-end gap-2 h-20">
                        {[40, 65, 50, 80, 60, 90, 75, 95, 85, 98].map((h, i) => (
                          <div key={i} className="flex-1 rounded-t-sm bg-gradient-to-t from-accent/40 to-accent/80 transition-all duration-500"
                            style={{ height: `${h}%`, animationDelay: `${i * 100}ms` }} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-accent to-violet-500 text-white px-5 py-3 rounded-2xl shadow-2xl shadow-accent/25 animate-float" style={{ animationDelay: '2s' }}>
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    <div>
                      <div className="text-xs opacity-80">行业认证</div>
                      <div className="text-sm font-bold">AAAA级</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Trusted By ===== */}
      <section className="py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-10">
            受到众多知名企业的信赖
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {trustedBy.map((name) => (
              <span key={name} className="text-lg font-bold text-slate-300/60 hover:text-slate-400 transition-colors cursor-default">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Stats Bar ===== */}
      <section className="section-padding mesh-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="relative group">
                <div className="bg-card border border-border rounded-2xl p-8 text-center hover-lift cursor-default">
                  <div className="text-4xl lg:text-5xl font-extrabold gradient-text mb-2">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Features Section ===== */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="核心优势"
            title="为什么选择我们"
            description="我们以专业、诚信、创新为核心价值观，致力于为客户创造可衡量的商业价值"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <FeatureCard key={feature.title} feature={feature} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== Advantages Section ===== */}
      <section className="section-padding mesh-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AdvantagesLeft />
            <AdvantagesRight />
          </div>
        </div>
      </section>

      {/* ===== CTA Section ===== */}
      <section className="relative overflow-hidden">
        <div className="bg-primary py-24 lg:py-32">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-violet-500/8 rounded-full blur-[100px]" />
          </div>
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
              准备好开始合作了吗？
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-10 max-w-xl mx-auto">
              无论您有任何业务需求或疑问，都欢迎随时与我们联系。我们的专业团队将竭诚为您服务。
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2.5 px-10 py-4 bg-accent text-white font-semibold rounded-2xl hover:bg-accent-light transition-all duration-300 shadow-xl shadow-accent/25 hover:shadow-accent/40 hover:-translate-y-0.5 cursor-pointer text-lg"
            >
              立即联系我们
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ===== Feature Card ===== */
function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const { ref, inView } = useInView()
  return (
    <div
      ref={ref}
      className={`group relative bg-card border border-border rounded-2xl p-8 lg:p-10 hover-lift overflow-hidden ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Hover gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      <div className="relative">
        <div className="w-14 h-14 bg-muted rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
        </div>
        <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
        <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
      </div>
    </div>
  )
}

/* ===== Advantages Left ===== */
function AdvantagesLeft() {
  const { ref, inView } = useInView()
  return (
    <div ref={ref} className={inView ? 'animate-slide-left' : 'opacity-0'}>
      <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/8 rounded-full text-accent text-xs font-semibold tracking-wide uppercase mb-5">
        <Sparkles className="w-3.5 h-3.5" />
        企业实力
      </span>
      <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6 tracking-tight">
        我们的<span className="gradient-text">核心优势</span>
      </h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        多年来，我们始终坚持以客户需求为导向，不断提升服务质量与专业水平，
        在行业内树立了良好的口碑与品牌形象。
      </p>
      <Link
        to="/about"
        className="group inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all duration-300 cursor-pointer"
      >
        了解更多关于我们
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  )
}

/* ===== Advantages Right ===== */
function AdvantagesRight() {
  const { ref, inView } = useInView()
  return (
    <div ref={ref} className={inView ? 'animate-slide-right' : 'opacity-0'}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {advantages.map((item, i) => (
          <div
            key={item}
            className="flex items-start gap-3.5 p-5 bg-card border border-border rounded-xl hover:border-accent/20 hover:shadow-md transition-all duration-300"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="w-6 h-6 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
            </div>
            <span className="text-sm text-secondary leading-relaxed font-medium">{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
