
const values = [
  { icon: '✅', title: 'Квалитетот на прво место', desc: 'Секој производ кој го испорачуваме ги исполнува строгите стандарди за квалитет. Работиме само со сертифицирани производители.' },
  { icon: '🤝', title: 'Доверливи партнерства', desc: 'Градиме долгорочни односи засновани на доверба, транспарентност и доследни перформанси.' },
  { icon: '⚡', title: 'Брза испорака', desc: 'Нашата логистичка мрежа обезбедува навремена испорака, без разлика дали ви треба една кутија или цела палета.' },
  { icon: '💡', title: 'Стручна насока', desc: 'Нашиот тим ви помага да го пронајдете вистинскиот производ за вашите специфични барања за печатење.' },
  { icon: '♻️', title: 'Одржливост', desc: 'Приоритизираме еко-пријателско снабдување со хартија и работиме со добавувачи посветени на одржливо шумарство.' },
  { icon: '📊', title: 'Конкурентни цени', desc: 'Цени засновани на волумен и флексибилни опции за нарачување, дизајнирани да одговараат на вашиот буџет.' },
]

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#2e3192] pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#e8a020] font-semibold tracking-widest text-sm uppercase mb-4">За нас</p>
            <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
              Страст за хартија,<br />
              <span className="text-[#e8a020]">Изградена на доверба.</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Повеќе од три децении, Воќаркооп Комерц е прв избор за бизниси кои имаат потреба од
              доверливи, висококвалитетни хартиени производи. Нашата посветеност на извонредност не се изменила од самиот почеток.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#e8a020] font-semibold tracking-widest text-sm uppercase mb-3">Нашата мисија</p>
            <h2 className="text-4xl font-bold text-[#2e3192] mb-6">Снабдуваме квалитет, овозможуваме бизнис</h2>
            <p className="text-[#5a6472] leading-relaxed mb-4">
              Нашата мисија е едноставна: да им обезбедиме на бизнисите највисококвалитетна хартија за печатење
              и термални ролни по конкурентни цени, поддржани со исклучителна услуга и стручни совети.
            </p>
            <p className="text-[#5a6472] leading-relaxed mb-4">
              Разбираме дека доверливото снабдување со хартија е критично за секојдневното работење — од сметки до извештаи,
              од пакување до публикации. Затоа одржуваме длабоки нивоа на залихи и повеќе партнерски односи со добавувачи
              за да се осигураме дека никогаш нема да останете без залиха.
            </p>
            <p className="text-[#5a6472] leading-relaxed">
              Нашиот посветен продажен тим е секогаш достапен за да ви помогне да го пронајдете вистинскиот производ,
              да преговарате за цени на волумен или да решите итен проблем со снабдување.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 bg-[#f5f7fa]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#e8a020] font-semibold tracking-widest text-sm uppercase mb-3">Што застапуваме</p>
          <h2 className="text-4xl font-bold text-[#2e3192] mb-14">Нашите основни вредности</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-6 border border-[#e8ecf0] hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="text-lg font-bold text-[#2e3192] mb-2">{v.title}</h3>
                <p className="text-[#5a6472] text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


{/* Leadership */}
      <section className="py-12 bg-[#f5f7fa]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#e8a020] font-semibold tracking-widest text-sm uppercase mb-3">Раководство</p>
          <h2 className="text-4xl font-bold text-[#2e3192] mb-14">Луѓето зад компанијата</h2>

          <div className="flex flex-col sm:flex-row gap-10 justify-center items-start">

            {/* Founder — In Memoriam */}
            <div className="flex flex-col items-center text-center max-w-xs">
              <div className="w-40 h-40 rounded-full border-4 border-[#2e3192]/20 mx-auto mb-5 overflow-hidden">
                <img src="/pavleristov.jpeg" alt="Павле Ристов" className="w-full h-full object-cover" />
              </div>
              <div className="inline-block bg-[#2e3192]/10 text-[#2e3192] text-xs font-semibold px-3 py-1 rounded-full mb-3 tracking-wide uppercase">
                In Memoriam
              </div>
              <h3 className="font-bold text-[#2e3192] text-xl">Павле Ристов</h3>
              <p className="text-[#e8a020] text-sm font-semibold mt-1">Основач</p>
              <p className="text-[#5a6472] text-sm mt-3 leading-relaxed">
                Визионерот кој ја основа Воќаркооп Комерц во 1992 година и ги постави темелите на компанијата врз вредностите на квалитет, доверба и посветеност.
              </p>
            </div>

            {/* Current CEO */}
            <div className="flex flex-col items-center text-center max-w-xs">
              <div className="w-40 h-40 rounded-full bg-[#2e3192] flex items-center justify-center mx-auto mb-5">
                <span className="text-5xl font-bold text-white/60">БК</span>
              </div>
              <div className="inline-block bg-[#e8a020]/15 text-[#e8a020] text-xs font-semibold px-3 py-1 rounded-full mb-3 tracking-wide uppercase">
                Извршен директор
              </div>
              <h3 className="font-bold text-[#2e3192] text-xl">Билјана Карајановска</h3>
              <p className="text-[#5a6472] text-sm font-semibold mt-1">Извршен директор</p>
              <p className="text-[#5a6472] text-sm mt-3 leading-relaxed">
                Билјана го продолжува наследството на основачот водејќи ја компанијата со истата посветеност кон квалитетот и долгорочните партнерства.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#2e3192]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Работете со нас</h2>
          <p className="text-white/70 text-lg mb-8">
            Подготвени да го доживеете Воќаркооп Комерц искуството? Јавете се за да разговараме за вашите потреби за снабдување со хартија.
          </p>
          <a
            href="/contact"
            className="bg-[#e8a020] hover:bg-[#c8881a] text-white font-semibold px-10 py-4 rounded-lg inline-block transition-colors"
          >
            Контактирај не денес
          </a>
        </div>
      </section>
    </>
  )
}
