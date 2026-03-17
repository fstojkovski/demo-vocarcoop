import { useState } from 'react'

const products = [
  'Термални ролни (57mm)',
  'Термални ролни (79mm)',
  'Термални ролни (прилагодена ширина)',
  'Фотокопирна хартија (A4)',
  'Фотокопирна хартија (A3)',
  'Фотокопирна хартија (90gsm)',
  'Фотокопирна хартија (80gsm)',
  'Специјални / налепница ролни',
  'Друго',
]

export default function Contact() {
  const [quoteForm, setQuoteForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: '',
    quantity: '',
    notes: '',
  })

  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleQuoteChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setQuoteForm({ ...quoteForm, [e.target.name]: e.target.value })
  }

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value })
  }

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Барањето за понуда е поднесено! Ќе ви одговориме во рок од 24 часа.')
  }

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Пораката е испратена! Наскоро ќе ве контактираме.')
  }

  const inputClass = 'w-full border border-[#e8ecf0] rounded-lg px-4 py-3 text-sm text-[#222831] placeholder-[#aab0ba] focus:outline-none focus:border-[#4547b0] focus:ring-1 focus:ring-[#4547b0] transition'

  return (
    <>
      {/* Hero */}
      <section className="bg-[#2e3192] pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#e8a020] font-semibold tracking-widest text-sm uppercase mb-4">Контакт и понуди</p>
          <h1 className="text-5xl font-bold text-white mb-6">Ајде да зборуваме за хартија</h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Побарајте прилагодена понуда, поставете прашање за производ или едноставно стапете во контакт. Нашиот тим
            обично одговара во рок од еден работен ден.
          </p>
        </div>
      </section>

      {/* Contact info cards */}
      <section className="py-16 bg-[#f5f7fa]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: '📞', title: 'Телефон', info: '+1 (555) 123-4567', sub: 'Пон–Пет, 8:00–17:00' },
            { icon: '✉️', title: 'Е-пошта', info: 'info@vocarkoop.com', sub: 'Одговараме во 24 часа' },
            { icon: '📍', title: 'Адреса', info: '123 Индустриска ул.', sub: 'Град, Земја, 10000' },
          ].map((c) => (
            <div key={c.title} className="bg-white rounded-2xl p-6 text-center border border-[#e8ecf0] shadow-sm">
              <div className="text-4xl mb-3">{c.icon}</div>
              <h3 className="text-[#2e3192] font-bold mb-1">{c.title}</h3>
              <p className="text-[#222831] font-medium text-sm">{c.info}</p>
              <p className="text-[#5a6472] text-xs mt-1">{c.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Forms grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Quote Request */}
          <div>
            <p className="text-[#e8a020] font-semibold tracking-widest text-sm uppercase mb-3">Цени</p>
            <h2 className="text-3xl font-bold text-[#2e3192] mb-2">Побарај понуда</h2>
            <p className="text-[#5a6472] text-sm mb-8">
              Пополнете ги деталите подолу и ќе ви испратиме прилагодена понуда со цени и достапност.
            </p>

            <form onSubmit={handleQuoteSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#5a6472] mb-1.5 uppercase tracking-wide">Име и презиме *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Вашето ime"
                    value={quoteForm.name}
                    onChange={handleQuoteChange}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#5a6472] mb-1.5 uppercase tracking-wide">Компанија</label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Ime на компанијата"
                    value={quoteForm.company}
                    onChange={handleQuoteChange}
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#5a6472] mb-1.5 uppercase tracking-wide">Е-пошта *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="vas@kompanija.com"
                    value={quoteForm.email}
                    onChange={handleQuoteChange}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#5a6472] mb-1.5 uppercase tracking-wide">Телефон</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+1 (555) 000-0000"
                    value={quoteForm.phone}
                    onChange={handleQuoteChange}
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#5a6472] mb-1.5 uppercase tracking-wide">Производ *</label>
                <select
                  name="product"
                  required
                  value={quoteForm.product}
                  onChange={handleQuoteChange}
                  className={inputClass}
                >
                  <option value="">Изберете производ</option>
                  {products.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#5a6472] mb-1.5 uppercase tracking-wide">Количина / Волумен</label>
                <input
                  type="text"
                  name="quantity"
                  placeholder="пр. 500 ролни / 10 кутии / 1 палета"
                  value={quoteForm.quantity}
                  onChange={handleQuoteChange}
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#5a6472] mb-1.5 uppercase tracking-wide">Дополнителни забелешки</label>
                <textarea
                  name="notes"
                  rows={4}
                  placeholder="Специфични барања, детали за испорака, итн."
                  value={quoteForm.notes}
                  onChange={handleQuoteChange}
                  className={inputClass + ' resize-none'}
                />
              </div>

              <button
                type="submit"
                className="bg-[#e8a020] hover:bg-[#c8881a] text-white font-semibold py-3.5 rounded-lg transition-colors mt-2"
              >
                Поднеси барање за понуда
              </button>
            </form>
          </div>

          {/* General Contact */}
          <div>
            <p className="text-[#e8a020] font-semibold tracking-widest text-sm uppercase mb-3">Стапете во контакт</p>
            <h2 className="text-3xl font-bold text-[#2e3192] mb-2">Испратете ни порака</h2>
            <p className="text-[#5a6472] text-sm mb-8">
              Имате општо прашање или сакате да разговарате за партнерство? Со задоволство ќе ве слушнеме.
            </p>

            <form onSubmit={handleContactSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#5a6472] mb-1.5 uppercase tracking-wide">Ime *</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Vашето ime"
                  value={contactForm.name}
                  onChange={handleContactChange}
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#5a6472] mb-1.5 uppercase tracking-wide">Е-пошта *</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="vas@email.com"
                  value={contactForm.email}
                  onChange={handleContactChange}
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#5a6472] mb-1.5 uppercase tracking-wide">Тема</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="За што се работи?"
                  value={contactForm.subject}
                  onChange={handleContactChange}
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#5a6472] mb-1.5 uppercase tracking-wide">Порака *</label>
                <textarea
                  name="message"
                  required
                  rows={8}
                  placeholder="Напишете ја вашата порака овде..."
                  value={contactForm.message}
                  onChange={handleContactChange}
                  className={inputClass + ' resize-none'}
                />
              </div>

              <button
                type="submit"
                className="bg-[#2e3192] hover:bg-[#4547b0] text-white font-semibold py-3.5 rounded-lg transition-colors mt-2"
              >
                Испрати порака
              </button>
            </form>

            {/* Map placeholder */}
            <div className="mt-10 h-52 rounded-2xl bg-gradient-to-br from-[#e8ecf0] to-[#d0d8e4] flex flex-col items-center justify-center gap-3 text-[#5a6472]">
              <span className="text-4xl">🗺️</span>
              <span className="text-sm font-medium">Место за вградена карта</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#f5f7fa]">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[#e8a020] font-semibold tracking-widest text-sm uppercase mb-3 text-center">ЧПП</p>
          <h2 className="text-3xl font-bold text-[#2e3192] mb-12 text-center">Чести прашања</h2>

          <div className="flex flex-col gap-4">
            {[
              {
                q: 'Која е минималната количина за нарачка?',
                a: 'Прифаќаме нарачки од сите големини. За цени на големо, препорачуваме минимална нарачка од 100 ролни или 5 кутии. Контактирајте не за детали.',
              },
              {
                q: 'Дали нудите термални ролни со прилагодена ширина?',
                a: 'Да! Можеме да набавиме прилагодени ширини и големини на јадра. Роковите за прилагодени нарачки обично се 2–4 недели.',
              },
              {
                q: 'Колку трае испораката?',
                a: 'Стандардните нарачки се испраќаат во рок од 2–3 работни дена. Достапни се и забрзани опции. Поголемите палети може да бараат дополнително време.',
              },
              {
                q: 'Може ли да побарам примероци од производи?',
                a: 'Секако. Со задоволство обезбедуваме примероци од нашите термални ролни и хартиени производи пред да се обврзете на голема нарачка.',
              },
            ].map((item) => (
              <div key={item.q} className="bg-white rounded-xl p-6 border border-[#e8ecf0]">
                <h4 className="font-bold text-[#2e3192] mb-2">{item.q}</h4>
                <p className="text-[#5a6472] text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
