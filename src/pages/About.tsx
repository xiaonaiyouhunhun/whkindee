import { useEffect, useRef, useState } from 'react'
import {
  Target,
  Eye,
  Heart,
  Lightbulb,
  Users,
  Briefcase,
  Award,
  Clock,
  Sparkles,
  ArrowRight,
  Quote,
} from 'lucide-react'

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

const milestones = [
  { year: '2010', icon: Briefcase, title: '公司成立', description: '公司正式成立，开启了在信息技术服务领域的探索之路。' },
  { year: '2013', icon: Users, title: '团队扩展', description: '团队规模突破50人，服务客户超过100家。' },
  { year: '2016', icon: Award, title: '行业认可', description: '荣获行业多项大奖，品牌影响力显著提升。' },
  { year: '2019', icon: Lightbulb, title: '技术创新', description: '推出自主研发的核心产品，引领行业技术变革。' },
  { year: '2022', icon: Clock, title: '全国布局', description: '完成全国主要城市服务网络布局，覆盖50+城市。' },
  { year: '2025', icon: Target, title: '持续发展', description: '服务企业客户突破500家，持续保持行业领先地位。' },
]

const values = [
  { icon: Target, title: '使命', content: '以专业服务创造商业价值，助力客户实现可持续增长，成为行业最值得信赖的合作伙伴。', gradient: 'from-blue-500 to-cyan-500' },
  { icon: Eye, title: '愿景', content: '成为国内领先的信息技术服务商，以创新驱动发展，打造行业标杆品牌。', gradient: 'from-violet-500 to-purple-500' },
  { icon: Heart, title: '价值观', content: '专业诚信、客户至上、持续创新、合作共赢——这是我们坚守的核心价值观。', gradient: 'from-amber-500 to-orange-500' },
]

const teamMembers = [
  { name: '刘某某', title: '创始人 & CEO', description: '拥有20年行业经验，曾任职于多家知名企业，具备深厚的行业洞察力和战略视野。' },
  { name: '李某某', title: '首席技术官', description: '技术领域专家，主导多项核心技术研发，拥有多项发明专利。' },
  { name: '王某某', title: '运营总监', description: '丰富的运营管理经验，擅长流程优化与团队建设，推动公司高效运转。' },
  { name: '赵某某', title: '销售总监', description: '深耕行业多年，拥有广泛的客户资源与市场渠道，业绩卓越。' },
]

const testimonial = {
  quote: '与武汉锦煜合作是我们的明智之选，他们专业的服务团队和高效的交付能力帮助我们实现了业务的快速增长。',
  author: '某上市公司总裁',
  company: '某500强企业',
}

function SectionHeading({ badge, title, description }: { badge: string; title: string; description: string }) {
  const { ref, inView } = useInView()
  return (
    <div ref={ref} className={`text-center max-w-2xl mx-auto mb-16 lg:mb-20 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
      <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/8 rounded-full text-accent text-xs font-semibold tracking-wide uppercase mb-5">
        <Sparkles className="w-3.5 h-3.5" />
        {badge}
      </span>
      <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4 tracking-tight">{title}</h2>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  )
}

export default function About() {
  return (
    <div>
      {/* ===== Page Hero ===== */}
      <section className="relative overflow-hidden bg-primary pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-500/8 rounded-full blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/8 border border-white/10 rounded-full text-sm font-medium text-accent-light mb-6 animate-fade-in-up">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              关于我们
            </span>
            <h1 className="animate-fade-in-up delay-100 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
              十五年匠心<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-400">
                铸就品牌
              </span>
            </h1>
            <p className="animate-fade-in-up delay-200 text-lg text-slate-300 leading-relaxed max-w-xl">
              了解武汉锦煜的发展历程、企业文化和专业团队，探索我们持续成长的故事。
            </p>
          </div>
        </div>
      </section>

      {/* ===== Company Intro ===== */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <IntroLeft />
            <IntroRight />
          </div>
        </div>
      </section>

      {/* ===== Mission, Vision, Values ===== */}
      <section className="section-padding mesh-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="企业文化"
            title="使命 · 愿景 · 价值观"
            description="我们的企业文化是我们最宝贵的资产，它指引着每一位员工的行动与决策"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((item, i) => (
              <ValueCard key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== Testimonial ===== */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <TestimonialBlock />
        </div>
      </section>

      {/* ===== Timeline ===== */}
      <section className="section-padding mesh-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="发展历程"
            title="一路走来"
            description="每一个里程碑都承载着我们的奋斗与成长，记录着公司前行的坚实步伐"
          />

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent/30 to-transparent lg:-translate-x-px" />

            <div className="space-y-8 lg:space-y-12">
              {milestones.map((m, i) => (
                <TimelineItem key={m.year} milestone={m} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Team ===== */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="核心团队"
            title="行业精英汇聚"
            description="汇聚行业顶尖人才，以专业能力和敬业精神推动公司持续发展"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, i) => (
              <TeamCard key={member.name} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-primary py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-6 tracking-tight">
            加入我们，共创未来
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed mb-10 max-w-xl mx-auto">
            我们始终在寻找志同道合的伙伴，如果你认同我们的价值观，欢迎加入我们。
          </p>
          <a className="group inline-flex items-center gap-2.5 px-8 py-4 bg-accent text-white font-semibold rounded-2xl hover:bg-accent-light transition-all duration-300 shadow-xl shadow-accent/25 hover:shadow-accent/40 hover:-translate-y-0.5 cursor-pointer">
            查看招聘信息
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </div>
  )
}

/* ===== Sub-components ===== */

function IntroLeft() {
  const { ref, inView } = useInView()
  return (
    <div ref={ref} className={inView ? 'animate-slide-left' : 'opacity-0'}>
      <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6 tracking-tight leading-snug">
        始于初心，<br />
        <span className="gradient-text">成于匠心</span>
      </h2>
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>武汉锦煜信息技术有限公司成立于2010年，是一家专注于信息技术服务的综合性企业。自成立以来，我们始终坚持"专业、诚信、创新、共赢"的经营理念，为客户提供全方位、高品质的解决方案。</p>
        <p>经过十五年的深耕发展，公司已汇聚了一批行业顶尖的专业人才，建立了完善的运营管理体系和质量控制标准，在业内赢得了广泛的认可与信赖。</p>
        <p>未来，我们将继续秉承初心，以客户需求为导向，以技术创新为驱动，不断提升服务品质，为客户创造更大的价值。</p>
      </div>
    </div>
  )
}

function IntroRight() {
  const { ref, inView } = useInView()
  const data = [
    { value: '15+', label: '年行业深耕', icon: '📊' },
    { value: '200+', label: '专业团队成员', icon: '👥' },
    { value: '500+', label: '企业客户', icon: '🏢' },
    { value: '50+', label: '城市覆盖', icon: '🌍' },
  ]
  return (
    <div ref={ref} className={inView ? 'animate-slide-right' : 'opacity-0'}>
      <div className="grid grid-cols-2 gap-5">
        {data.map((item) => (
          <div key={item.label} className="bg-card border border-border rounded-2xl p-6 hover-lift cursor-default">
            <div className="text-3xl font-extrabold gradient-text mb-1">{item.value}</div>
            <div className="text-sm text-muted-foreground font-medium">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ValueCard({ item, index }: { item: typeof values[0]; index: number }) {
  const { ref, inView } = useInView()
  return (
    <div
      ref={ref}
      className={`group relative bg-card border border-border rounded-2xl p-8 hover-lift overflow-hidden ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      <div className="w-14 h-14 bg-muted rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <item.icon className="w-7 h-7 text-accent" />
      </div>
      <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
      <p className="text-muted-foreground leading-relaxed">{item.content}</p>
    </div>
  )
}

function TestimonialBlock() {
  const { ref, inView } = useInView()
  return (
    <div ref={ref} className={`text-center ${inView ? 'animate-scale-in' : 'opacity-0'}`}>
      <div className="bg-card border border-border rounded-3xl p-10 lg:p-14 relative">
        <Quote className="w-12 h-12 text-accent/15 absolute top-8 left-8" />
        <div className="relative">
          <p className="text-xl lg:text-2xl text-primary font-medium leading-relaxed mb-8 italic">
            "{testimonial.quote}"
          </p>
          <div>
            <div className="text-base font-bold text-primary">{testimonial.author}</div>
            <div className="text-sm text-muted-foreground">{testimonial.company}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function TimelineItem({ milestone, index }: { milestone: typeof milestones[0]; index: number }) {
  const { ref, inView } = useInView()
  const isLeft = index % 2 === 0
  return (
    <div
      ref={ref}
      className={`relative flex items-start gap-6 lg:gap-0 ${isLeft ? '' : ''} ${inView ? (isLeft ? 'animate-slide-left' : 'animate-slide-right') : 'opacity-0'}`}
    >
      {/* Dot */}
      <div className="absolute left-4 lg:left-1/2 w-4 h-4 bg-accent rounded-full -translate-x-1/2 mt-6 z-10 ring-4 ring-background shadow-lg shadow-accent/20" />

      {/* Content */}
      <div className={`ml-12 lg:ml-0 ${isLeft ? 'lg:w-1/2 lg:pr-12 lg:text-right' : 'lg:w-1/2 lg:pl-12 lg:ml-auto'}`}>
        <div className="bg-card border border-border rounded-2xl p-6 hover-lift">
          <span className="text-xs font-bold text-accent uppercase tracking-wider">{milestone.year}</span>
          <h3 className="text-lg font-bold text-primary mt-2 mb-2 flex items-center gap-2.5" style={{ justifyContent: isLeft ? undefined : undefined }}>
            {isLeft && <><milestone.icon className="w-5 h-5 text-accent hidden lg:block" /></>}
            {milestone.title}
            {!isLeft && <><milestone.icon className="w-5 h-5 text-accent hidden lg:block" /></>}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{milestone.description}</p>
        </div>
      </div>
    </div>
  )
}

function TeamCard({ member, index }: { member: typeof teamMembers[0]; index: number }) {
  const { ref, inView } = useInView()
  const gradients = ['from-blue-400 to-cyan-400', 'from-violet-400 to-purple-400', 'from-amber-400 to-orange-400', 'from-emerald-400 to-teal-400']
  return (
    <div
      ref={ref}
      className={`group bg-card border border-border rounded-2xl p-6 hover-lift overflow-hidden ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className={`w-20 h-20 bg-gradient-to-br ${gradients[index]} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300 shadow-lg`}>
        <span className="text-2xl font-bold text-white">{member.name[0]}</span>
      </div>
      <h3 className="text-lg font-bold text-primary">{member.name}</h3>
      <p className="text-sm text-accent font-semibold mb-3">{member.title}</p>
      <p className="text-sm text-muted-foreground leading-relaxed">{member.description}</p>
    </div>
  )
}
