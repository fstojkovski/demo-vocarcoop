export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#2e3192] pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#e8a020] font-semibold tracking-widest text-sm uppercase mb-4">Контакт</p>
          <h1 className="text-5xl font-bold text-white mb-6">Ајде да зборуваме за хартија</h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Поставете прашање за производ или едноставно стапете во контакт. Нашиот тим
            обично одговара во рок од еден работен ден.
          </p>
        </div>
      </section>

      {/* Contact info cards */}
      <section className="py-16 bg-[#f5f7fa]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: '📞', title: 'Телефон', info: '+389 23 127 109 / +389 70 380 220', sub: 'Пон–Пет, 07:00–15:00' },
            { icon: '✉️', title: 'Е-пошта', info: 'vocarcoop@gmail.com', sub: 'Одговараме во 24 часа' },
            { icon: '📍', title: 'Адреса', info: 'Ул."519" бр.38, Автокоманда', sub: '1000 Скопје' },
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

      {/* Contact form */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-[#e8a020] font-semibold tracking-widest text-sm uppercase mb-3">Стапете во контакт</p>
          <h2 className="text-3xl font-bold text-[#2e3192] mb-2">Испратете ни порака</h2>
          <p className="text-[#5a6472] text-sm mb-8">
            Имате општо прашање или сакате да разговарате за партнерство? Со задоволство ќе ве слушнеме.
          </p>

          {/* Map */}
          <div className="mt-10 rounded-2xl overflow-hidden border border-[#e8ecf0] shadow-sm h-64">
            <iframe
              title="Вокаркооп локација"
              src="https://maps.google.com/maps?q=41.9966393,21.4611784&z=18&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
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
                a: 'Прифаќаме нарачки од сите големини. Препорачуваме минимална нарачка од 5 кутии за достава. Контактирајте нѐ за детали.',
              },
              {
                q: 'Дали нудите термални ролни со прилагодена ширина?',
                a: 'Да! Можеме да набавиме прилагодени ширини. Роковите за прилагодени нарачки обично се 2–4 недели.',
              },
              {
                q: 'Колку трае испораката?',
                a: 'Стандардните нарачки се доставуваат во рок од 1-2 работни дена во Скопје. За достава надвор од Скопје, контактирајте нѐ.',
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
