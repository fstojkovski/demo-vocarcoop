import { Link } from 'react-router-dom'

const products = [
  {
    id: 1,
    name: 'Термални ролни',
    desc: 'Висококвалитетни термални хартиени ролни за POS системи, банкомати, сметки и уште. Достапни во сите стандардни ширини.',
    icon: '🧻',
  },
  {
    id: 2,
    name: 'Офсет хартија за печатење',
    desc: 'Премиум офсет хартија за професионално печатење. Одлична репродукција на бои и мазна завршна обработка.',
    icon: '📄',
  },
  {
    id: 3,
    name: 'Хартија за копирање',
    desc: 'Повеќенаменска хартија за секојдневна канцелариска употреба. Постојана осветленост и работа без заглавување.',
    icon: '📋',
  },
  {
    id: 4,
    name: 'Специјални ролни',
    desc: 'Термални ролни со прилагодена ширина за медицински, индустриски и апликации за печатење на налепници.',
    icon: '🔖',
  },
]

const stats = [
  { value: '20+', label: 'Години искуство' },
  { value: '500+', label: 'Задоволни клиенти' },
  { value: '50+', label: 'Варијанти на производи' },
  { value: '99%', label: 'Навремена испорака' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen bg-[#2e3192] flex items-center overflow-hidden">
        {/* Background decorative circles */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#4547b0]/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#e8a020]/20 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Text */}
          <div>
            <p className="text-[#e8a020] font-semibold tracking-widest text-sm uppercase mb-4">
              Хартија за печатење и термални ролни
            </p>
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Квалитетна хартија,<br />
              <span className="text-[#e8a020]">Испорачана навреме.</span>
            </h1>
            <p className="text-white/70 text-lg mb-10 max-w-md leading-relaxed">
              Воќаркооп Комерц е ваш доверлив добавувач на премиум хартија за печатење и термални ролни.
              Служиме бизниси од сите големини со постојан квалитет од 2005 година.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-[#e8a020] hover:bg-[#c8881a] text-white font-semibold px-8 py-4 rounded-lg transition-colors"
              >
                Побарај понуда
              </Link>
              <Link
                to="/about"
                className="border-2 border-white/40 hover:border-white text-white font-semibold px-8 py-4 rounded-lg transition-colors"
              >
                Дознај повеќе
              </Link>
            </div>
          </div>

          {/* Hero image placeholder */}
          <div className="w-full h-80 lg:h-[420px] rounded-2xl bg-[#4547b0]/40 border border-white/10 flex flex-col items-center justify-center gap-3 text-white/50">
            <span className="text-6xl">🖨️</span>
            <span className="text-sm">Место за главна слика</span>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-[#e8a020]">
        <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-bold text-white">{s.value}</div>
              <div className="text-white/80 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="py-24 bg-[#f5f7fa]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#e8a020] font-semibold tracking-widest text-sm uppercase mb-3">Нашите производи</p>
          <h2 className="text-4xl font-bold text-[#2e3192] mb-4">Што нудиме</h2>
          <p className="text-[#5a6472] text-lg mb-14 max-w-xl">
            Од термални ролни до премиум хартија за печатење, имаме сè што му е потребно на вашиот бизнис.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-[#e8ecf0]"
              >
                <div className="text-4xl mb-4">{p.icon}</div>
                <h3 className="text-lg font-bold text-[#2e3192] mb-2">{p.name}</h3>
                <p className="text-[#5a6472] text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/contact"
              className="bg-[#2e3192] hover:bg-[#4547b0] text-white font-semibold px-8 py-4 rounded-lg inline-block transition-colors"
            >
              Побарај цена
            </Link>
          </div>
        </div>
      </section>

      {/* Product showcase images */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#e8a020] font-semibold tracking-widest text-sm uppercase mb-3">Галерија</p>
          <h2 className="text-4xl font-bold text-[#2e3192] mb-14">Нашите производи изблизу</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: 'Видови термални ролни', emoji: '🧻' },
              { label: 'Залиха хартија за печатење', emoji: '📦' },
              { label: 'Пакување и испорака', emoji: '🚚' },
            ].map((item) => (
              <div
                key={item.label}
                className="h-64 rounded-2xl bg-gradient-to-br from-[#e8ecf0] to-[#d0d8e4] flex flex-col items-center justify-center gap-3 text-[#5a6472]"
              >
                <span className="text-5xl">{item.emoji}</span>
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History / About snippet */}
      <section className="py-24 bg-[#f5f7fa]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image placeholder */}
          <div className="h-80 rounded-2xl bg-gradient-to-br from-[#e8ecf0] to-[#d0d8e4] flex flex-col items-center justify-center gap-3 text-[#5a6472] order-2 lg:order-1">
            <span className="text-5xl">🏭</span>
            <span className="text-sm font-medium">Фотографија на компанијата / магацин</span>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <p className="text-[#e8a020] font-semibold tracking-widest text-sm uppercase mb-3">Нашата приказна</p>
            <h2 className="text-4xl font-bold text-[#2e3192] mb-6">Две децении извонредност во печатење</h2>
            <p className="text-[#5a6472] leading-relaxed mb-4">
              Основан во 2005 година, Воќаркооп Комерц започна како мал локален дистрибутер на хартија со едноставна цел:
              да испорача квалитетни производи навреме, секогаш. Со текот на годините, пораснавме во доверлив
              регионален добавувач кој служи стотици бизниси во малопродажба, угостителство, здравство и
              корпоративниот сектор.
            </p>
            <p className="text-[#5a6472] leading-relaxed mb-8">
              Длабокото познавање на хартиените производи на нашиот тим ни овозможува да им помогнеме на клиентите
              да го пронајдат точното решение — без разлика дали е тоа специфична GSM тежина, големина на јадро или облога на хартија.
            </p>
            <Link
              to="/about"
              className="text-[#2e3192] font-semibold border-b-2 border-[#e8a020] pb-0.5 hover:text-[#e8a020] transition-colors"
            >
              Прочитај ја нашата целосна приказна →
            </Link>
          </div>
        </div>
      </section>

      {/* Quick contact CTA */}
      <section className="py-20 bg-[#2e3192]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Подготвени да нарачате?</h2>
          <p className="text-white/70 text-lg mb-10">
            Контактирајте не денес за цени на големо, прилагодени нарачки или прашања за нашите производи.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-3 text-white/80">
              <span className="text-2xl">📞</span>
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-3 text-white/80">
              <span className="text-2xl">✉️</span>
              <span>info@vocarkoop.com</span>
            </div>
          </div>
          <Link
            to="/contact"
            className="bg-[#e8a020] hover:bg-[#c8881a] text-white font-semibold px-10 py-4 rounded-lg inline-block transition-colors"
          >
            Контактирај не
          </Link>
        </div>
      </section>
    </>
  )
}
