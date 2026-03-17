import { Link } from 'react-router-dom'
import HeroCarousel from '../components/HeroCarousel'

const products = [
  {
    id: 1,
    name: 'Термални ролни',
    desc: 'Висококвалитетни термални хартиени ролни за POS системи, банкомати, сметки и уште. Достапни во сите стандардни ширини.',
    image: '/product-galery/thermal_roll.jpg',
  },
  {
    id: 2,
    name: 'Фотокопирна хартија',
    desc: 'Повеќенаменска хартија за секојдневна канцелариска употреба. Постојана осветленост и работа без заглавување.',
    image: '/product-galery/printingpaper.png',
  },
  {
    id: 3,
    name: 'Специјални ролни',
    desc: 'Термални ролни со прилагодена ширина за медицински, индустриски и апликации за печатење на налепници.',
    image: '/product-galery/atm_full.jpg',
  },
]

const stats = [
  { value: '30+', label: 'Години искуство' },
  { value: '200+', label: 'Задоволни клиенти' },
  { value: '30+', label: 'Варијанти на производи' },
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
              Фотокопирна хартија и термални ролни
            </p>
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Квалитетна хартија,<br />
              <span className="text-[#e8a020]">Испорачана навреме.</span>
            </h1>
            <p className="text-white/70 text-lg mb-10 max-w-md leading-relaxed">
              Воќаркооп Комерц е ваш доверлив добавувач на премиум хартија за печатење и термални ролни.
              Служиме бизниси од сите големини со постојан квалитет од 1992 година.
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

          {/* Hero carousel */}
          <HeroCarousel />
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
      <section className="py-12 bg-[#f5f7fa]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#e8a020] font-semibold tracking-widest text-sm uppercase mb-3">Нашите производи</p>
          <h2 className="text-4xl font-bold text-[#2e3192] mb-4">Што нудиме</h2>
          <p className="text-[#5a6472] text-lg mb-14 max-w-xl">
            Од термални ролни до премиум хартија за печатење, имаме сè што му е потребно на вашиот бизнис.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-[#e8ecf0]"
              >
                <div className="mb-4 rounded-lg overflow-hidden h-52">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                </div>
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

      {/* History / About snippet */}
      <section className="py-12 bg-[#f5f7fa]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image placeholder */}
          <div className="h-80 rounded-2xl overflow-hidden order-2 lg:order-1">
            <img src="/warehouse.png" alt="Магацин на Воќаркооп Комерц" className="w-full h-full object-cover" />
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <p className="text-[#e8a020] font-semibold tracking-widest text-sm uppercase mb-3">Нашата приказна</p>
            <h2 className="text-4xl font-bold text-[#2e3192] mb-6">Три децении извонредност во печатење</h2>
            <p className="text-[#5a6472] leading-relaxed mb-4">
              Основана во 1992 година, Воќаркооп Комерц започна како мал локален дистрибутер на хартија со едноставна цел:
              да испорача квалитетни производи навреме, секогаш. Со текот на годините, пораснавме во доверлив
              регионален добавувач кој служи стотици бизниси во малопродажба, угостителство, здравство и
              корпоративниот сектор.
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
              <a href="tel:+38923127109">+389 23 127 109</a>
            </div>
            <div className="flex items-center gap-3 text-white/80">
              <span className="text-2xl">📞</span>
              <a href="tel:+38970380220">+389 70 380 220</a>
            </div>
            <div className="flex items-center gap-3 text-white/80">
              <span className="text-2xl">✉️</span>
              <a href="mailto:vocarcoop@gmail.com">vocarcoop@gmail.com</a>
            </div>
            <div className="flex items-center gap-3 text-white/80">
              <span className="text-2xl">📍</span>
              <span>Ул."519" бр.38, Автокоманда, 1000 Скопје</span>
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
