import { useState, useEffect, useRef } from 'react'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Globe,
  Sparkles,
  CheckCircle2,
  ChevronDown,
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

const contactInfo = [
  { icon: Phone, title: '电话咨询', content: '400-XXX-XXXX', subContent: '周一至周五 9:00-18:00', gradient: 'from-blue-500 to-cyan-500', iconBg: 'bg-blue-50', iconColor: 'text-blue-600' },
  { icon: Mail, title: '电子邮箱', content: '18571942761@163.com', subContent: '24小时内回复', gradient: 'from-violet-500 to-purple-500', iconBg: 'bg-violet-50', iconColor: 'text-violet-600' },
  { icon: MapPin, title: '公司地址', content: '武汉市青山区', subContent: '欢迎来访参观', gradient: 'from-emerald-500 to-teal-500', iconBg: 'bg-emerald-50', iconColor: 'text-emerald-600' },
  { icon: Clock, title: '工作时间', content: '周一至周五 9:00-18:00', subContent: '周末及法定节假日休息', gradient: 'from-amber-500 to-orange-500', iconBg: 'bg-amber-50', iconColor: 'text-amber-600' },
]

const faqItems = [
  { question: '如何获取免费的咨询服务？', answer: '您可以通过页面上的表单提交咨询需求，或直接拨打我们的热线电话400-XXX-XXXX。我们的专业顾问将在24小时内与您取得联系，为您安排免费咨询。' },
  { question: '服务的一般周期是多久？', answer: '根据项目的复杂程度不同，服务周期也有所差异。通常简单咨询服务可在1-2周内完成，定制化解决方案项目一般为1-3个月。我们会在初步沟通后为您提供详细的时间规划。' },
  { question: '是否支持远程协作？', answer: '支持。我们拥有完善的远程协作工具和流程，可以高效地进行线上沟通、方案评审和项目交付，确保远程合作的效果与线下一致。' },
  { question: '售后服务的保障措施有哪些？', answer: '我们提供完善的售后服务体系，包括项目验收后的质保期支持、定期回访、问题响应SLA保障等，确保您的业务持续稳定运行。' },
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

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', company: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div>
      {/* ===== Page Hero ===== */}
      <section className="relative overflow-hidden bg-primary pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/8 border border-white/10 rounded-full text-sm font-medium text-accent-light mb-6 animate-fade-in-up">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              联系我们
            </span>
            <h1 className="animate-fade-in-up delay-100 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
              让我们开始
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-400">
                对话
              </span>
            </h1>
            <p className="animate-fade-in-up delay-200 text-lg text-slate-300 leading-relaxed max-w-xl">
              无论您有任何疑问或合作需求，都欢迎随时与我们取得联系。
            </p>
          </div>
        </div>
      </section>

      {/* ===== Contact Info Cards ===== */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 -mt-24 relative z-10">
            {contactInfo.map((item, i) => (
              <ContactCard key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== Contact Form + Map ===== */}
      <section className="section-padding pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-card border border-border rounded-3xl p-8 lg:p-10">
              <h2 className="text-2xl font-bold text-primary mb-2">在线留言</h2>
              <p className="text-muted-foreground mb-8 text-sm">填写以下表单，我们的顾问将在24小时内与您联系</p>

              {submitted ? (
                <div className="py-12 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-50 rounded-2xl mb-5">
                    <CheckCircle2 className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">提交成功！</h3>
                  <p className="text-sm text-muted-foreground">感谢您的留言，我们的顾问将在24小时内与您联系。</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField label="您的姓名" name="name" required value={formData.name} onChange={handleChange} placeholder="请输入您的姓名" />
                    <FormField label="联系电话" name="phone" required type="tel" value={formData.phone} onChange={handleChange} placeholder="请输入联系电话" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField label="电子邮箱" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="请输入电子邮箱" />
                    <FormField label="公司名称" name="company" value={formData.company} onChange={handleChange} placeholder="请输入公司名称" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-1.5">留言内容 <span className="text-red-500">*</span></label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="请描述您的需求或问题..."
                      className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl text-sm text-primary placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-accent text-white font-semibold rounded-xl hover:bg-accent-light transition-all duration-300 shadow-lg shadow-accent/20 hover:shadow-accent/30 cursor-pointer"
                  >
                    <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    提交留言
                  </button>
                </form>
              )}
            </div>

            {/* Map / Info */}
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-3xl overflow-hidden">
                <div className="bg-muted/50 h-72 lg:h-80 flex items-center justify-center dot-pattern">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4">
                      <MapPin className="w-8 h-8 text-accent" />
                    </div>
                    <p className="text-sm font-semibold text-primary">武汉锦煜信息技术有限公司</p>
                    <p className="text-xs text-muted-foreground mt-1">武汉市青山区</p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-3xl p-8">
                <h3 className="text-base font-bold text-primary mb-5">来访须知</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MessageSquare className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-primary">提前预约</p>
                      <p className="text-xs text-muted-foreground mt-0.5">来访前请提前电话预约，我们将安排专人接待</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Phone className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-primary">预约热线</p>
                      <p className="text-xs text-muted-foreground mt-0.5">400-XXX-XXXX（周一至周五 9:00-18:00）</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Globe className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-primary">交通指引</p>
                      <p className="text-xs text-muted-foreground mt-0.5">地铁X号线XX站B出口，步行5分钟即达</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ Section ===== */}
      <section className="section-padding mesh-gradient">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="常见问题"
            title="您可能想了解"
            description="以下是客户经常咨询的问题，希望对您有所帮助"
          />

          <div className="space-y-3">
            {faqItems.map((item, index) => (
              <FaqItem key={index} item={item} index={index} isOpen={openFaq === index} onToggle={() => setOpenFaq(openFaq === index ? null : index)} />
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
            还有其他问题？
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed mb-10 max-w-xl mx-auto">
            我们随时准备为您解答疑问，提供最专业的建议和方案。
          </p>
          <a href="tel:400XXXXXXX" className="group inline-flex items-center gap-2.5 px-10 py-4 bg-accent text-white font-semibold rounded-2xl hover:bg-accent-light transition-all duration-300 shadow-xl shadow-accent/25 hover:shadow-accent/40 hover:-translate-y-0.5 cursor-pointer text-lg">
            <Phone className="w-5 h-5" />
            400-XXX-XXXX
          </a>
        </div>
      </section>
    </div>
  )
}

/* ===== Sub-components ===== */

function ContactCard({ item, index }: { item: typeof contactInfo[0]; index: number }) {
  const { ref, inView } = useInView()
  return (
    <div
      ref={ref}
      className={`bg-card border border-border rounded-2xl p-6 hover-lift ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className={`w-12 h-12 ${item.iconBg} rounded-xl flex items-center justify-center mb-4`}>
        <item.icon className={`w-6 h-6 ${item.iconColor}`} />
      </div>
      <h3 className="text-sm font-semibold text-primary mb-1">{item.title}</h3>
      <p className="text-sm text-primary font-medium">{item.content}</p>
      <p className="text-xs text-muted-foreground mt-1">{item.subContent}</p>
    </div>
  )
}

function FormField({ label, name, required, type = 'text', value, onChange, placeholder }: {
  label: string; name: string; required?: boolean; type?: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; placeholder: string
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-primary mb-1.5">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl text-sm text-primary placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
      />
    </div>
  )
}

function FaqItem({ item, index, isOpen, onToggle }: { item: typeof faqItems[0]; index: number; isOpen: boolean; onToggle: () => void }) {
  const { ref, inView } = useInView()
  return (
    <div
      ref={ref}
      className={`bg-card border border-border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'shadow-md border-accent/20' : ''} ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <button
        className="w-full flex items-center justify-between p-6 text-left cursor-pointer hover:bg-muted/30 transition-colors"
        onClick={onToggle}
      >
        <span className="text-base font-semibold text-primary pr-4">{item.question}</span>
        <div className={`w-8 h-8 rounded-lg ${isOpen ? 'bg-accent text-white' : 'bg-muted text-muted-foreground'} flex items-center justify-center flex-shrink-0 transition-all duration-300`}>
          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-60 pb-6' : 'max-h-0'}`}>
        <p className="px-6 text-sm text-muted-foreground leading-relaxed">{item.answer}</p>
      </div>
    </div>
  )
}
