import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Settings,
  HeadphonesIcon,
  LineChart,
  GraduationCap,
  CheckCircle2,
  MessageSquare,
  Zap,
  Search,
  Sparkles,
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

const services = [
  {
    icon: Settings,
    title: '金蝶系统实施',
    description: '提供金蝶K/3 Cloud、星空、KIS等产品的全流程实施服务，确保系统平稳上线，业务无缝衔接。',
    features: ['需求调研与蓝图设计', '系统配置与参数设置', '数据迁移与初始化', 'UAT测试与上线验收'],
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-500/8 to-cyan-500/8',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    icon: Zap,
    title: '金蝶二次开发',
    description: '根据客户个性化业务需求，进行金蝶系统的定制化开发，包括表单、报表、流程和工作流等深度定制。',
    features: ['表单与字段定制开发', '自定义报表开发', '业务流程与审批流定制', '接口与数据集成开发'],
    gradient: 'from-violet-500 to-purple-500',
    bgGradient: 'from-violet-500/8 to-purple-500/8',
    iconBg: 'bg-violet-50',
    iconColor: 'text-violet-600',
  },
  {
    icon: HeadphonesIcon,
    title: '系统部署与运维',
    description: '提供金蝶系统的私有化部署、云端部署及日常运维服务，保障系统7×24小时稳定运行。',
    features: ['私有云与公有云部署', '服务器环境搭建与优化', '系统备份与容灾方案', '日常监控与性能调优'],
    gradient: 'from-amber-500 to-orange-500',
    bgGradient: 'from-amber-500/8 to-orange-500/8',
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-600',
  },
  {
    icon: LineChart,
    title: '数据集成与对接',
    description: '打通金蝶系统与企业现有IT生态，实现ERP、OA、CRM、MES等多系统间的数据互通与业务协同。',
    features: ['第三方系统接口开发', '数据同步与清洗', 'API网关与中间件对接', '数据一致性与完整性保障'],
    gradient: 'from-emerald-500 to-teal-500',
    bgGradient: 'from-emerald-500/8 to-teal-500/8',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
  },
  {
    icon: GraduationCap,
    title: '用户培训与赋能',
    description: '提供系统化的金蝶产品培训服务，帮助客户团队快速掌握系统操作，提升数字化管理能力。',
    features: ['管理员与关键用户培训', '终端用户操作培训', '培训手册与视频制作', '上线后持续辅导与答疑'],
    gradient: 'from-rose-500 to-pink-500',
    bgGradient: 'from-rose-500/8 to-pink-500/8',
    iconBg: 'bg-rose-50',
    iconColor: 'text-rose-600',
  },
  {
    icon: Search,
    title: '系统升级与优化',
    description: '为已上线的金蝶系统提供版本升级、补丁更新、功能优化等服务，确保系统持续保持最佳状态。',
    features: ['版本升级与补丁管理', '功能优化与流程改进', '性能诊断与瓶颈消除', '新功能适配与验证'],
    gradient: 'from-sky-500 to-indigo-500',
    bgGradient: 'from-sky-500/8 to-indigo-500/8',
    iconBg: 'bg-sky-50',
    iconColor: 'text-sky-600',
  },
]

const process = [
  { step: '01', title: '需求调研', description: '深入了解客户的业务流程和金蝶系统使用场景', icon: MessageSquare },
  { step: '02', title: '方案设计', description: '基于业务需求，制定实施或开发方案', icon: Settings },
  { step: '03', title: '实施交付', description: '专业金蝶顾问团队高效执行，确保交付质量', icon: Zap },
  { step: '04', title: '持续支持', description: '上线后跟踪运维，持续优化改进', icon: LineChart },
]

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

export default function Services() {
  return (
    <div>
      {/* ===== Page Hero ===== */}
      <section className="relative overflow-hidden bg-primary pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/8 border border-white/10 rounded-full text-sm font-medium text-accent-light mb-6 animate-fade-in-up">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              产品服务
            </span>
            <h1 className="animate-fade-in-up delay-100 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
              全方位
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-400">
                专业服务
              </span>
              <br />体系
            </h1>
            <p className="animate-fade-in-up delay-200 text-lg text-slate-300 leading-relaxed max-w-xl">
              从实施到开发，从部署到培训，六大金蝶服务模块全面满足您的数字化管理需求。
            </p>
          </div>
        </div>
      </section>

      {/* ===== Services Grid ===== */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="核心服务"
            title="六大金蝶专业服务"
            description="覆盖金蝶系统全生命周期，助力企业数字化管理升级"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.title} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== Process Section ===== */}
      <section className="section-padding mesh-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="服务流程"
            title="标准化交付流程"
            description="确保每一环节都高效可控，为客户提供可预期的服务体验"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connector line (desktop) */}
            <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-accent/30 via-accent/10 to-accent/30" />

            {process.map((item, index) => (
              <ProcessCard key={item.step} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA Section ===== */}
      <section className="bg-primary py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-violet-500/8 rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 border border-accent/20 rounded-2xl mb-8">
            <MessageSquare className="w-8 h-8 text-accent-light" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-6 tracking-tight">
            需要定制化解决方案？
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed mb-10 max-w-xl mx-auto">
            每个企业的需求都是独特的。告诉我们您的具体需求，我们的专家团队将为您量身打造专属方案。
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2.5 px-10 py-4 bg-accent text-white font-semibold rounded-2xl hover:bg-accent-light transition-all duration-300 shadow-xl shadow-accent/25 hover:shadow-accent/40 hover:-translate-y-0.5 cursor-pointer text-lg"
          >
            获取免费方案
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}

/* ===== Service Card ===== */
function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const { ref, inView } = useInView()
  return (
    <div
      ref={ref}
      className={`group relative bg-card border border-border rounded-2xl p-8 hover-lift overflow-hidden ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Hover gradient bg */}
      <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      {/* Top gradient line */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

      <div className="relative">
        <div className={`w-14 h-14 ${service.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
          <service.icon className={`w-7 h-7 ${service.iconColor}`} />
        </div>
        <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-6">{service.description}</p>
        <ul className="space-y-3">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2.5">
              <div className={`w-5 h-5 rounded-md ${service.iconBg} flex items-center justify-center flex-shrink-0`}>
                <CheckCircle2 className={`w-3 h-3 ${service.iconColor}`} />
              </div>
              <span className="text-sm text-secondary">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

/* ===== Process Card ===== */
function ProcessCard({ item, index }: { item: typeof process[0]; index: number }) {
  const { ref, inView } = useInView()
  return (
    <div
      ref={ref}
      className={`relative ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="bg-card border border-border rounded-2xl p-8 text-center hover-lift relative z-10">
        <div className="relative inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-2xl mb-5">
          <item.icon className="w-7 h-7 text-accent" />
          <span className="absolute -top-2 -right-2 w-7 h-7 bg-accent text-white text-xs font-bold rounded-lg flex items-center justify-center shadow-lg shadow-accent/30">
            {item.step}
          </span>
        </div>
        <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
      </div>
    </div>
  )
}
