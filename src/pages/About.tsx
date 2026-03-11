const milestones = [
  { year: '2005', title: 'Основање на компанијата', desc: 'Воќаркооп Комерц ги отвора вратите како локален дистрибутер на хартија, опслужувајќи ја непосредната околина.' },
  { year: '2009', title: 'Проширен асортиман', desc: 'Додадени термални ролни и специјални хартии за да се задоволи растечката побарувачка од малопродажните клиенти.' },
  { year: '2013', title: 'Регионален лидер', desc: 'Станавме водечки добавувач на хартија во регионот, со партнерства со главни малопродажни синџири.' },
  { year: '2017', title: 'Проширување на магацинот', desc: 'Отворен нов магацин од 500 м² за поддршка на зголемените залихи и побрза испорака.' },
  { year: '2021', title: 'Лансирање на дигитално нарачување', desc: 'Лансиран систем за онлајн нарачување и понуди за полесен пристап на клиентите.' },
  { year: '2025', title: '20 години силни', desc: 'Прославуваме две децении квалитет и доверливост со 500+ активни клиенти.' },
]

const values = [
  { icon: '✅', title: 'Квалитетот прво', desc: 'Секој производ кој го испорачуваме ги исполнува строгите стандарди за квалитет. Работиме само со сертифицирани производители.' },
  { icon: '🤝', title: 'Доверливи партнерства', desc: 'Градиме долгорочни односи засновани на доверба, транспарентност и доследни перформанси.' },
  { icon: '⚡', title: 'Брза испорака', desc: 'Нашата логистичка мрежа обезбедува навремена испорака, без разлика дали ви треба една кутија или цела палета.' },
  { icon: '💡', title: 'Стручна насока', desc: 'Нашиот тим ви помага да го пронајдете вистинскиот производ за вашите специфични барања за печатење.' },
  { icon: '♻️', title: 'Одржливост', desc: 'Приоритизираме еко-пријателско снабдување со хартија и работиме со добавувачи посветени на одржливо шумарство.' },
  { icon: '📊', title: 'Конкурентни цени', desc: 'Цени засновани на волумен и флексибилни опции за нарачување дизајнирани да одговараат на вашиот буџет.' },
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
              Повеќе од две децении, Воќаркооп Комерц е прв избор за бизниси кои имаат потреба од
              доверливи, висококвалитетни хартиени производи. Нашата посветеност на извонредност не се изменила од самиот почеток.
            </p>
          </div>
          <div className="h-72 rounded-2xl bg-[#4547b0]/40 border border-white/10 flex flex-col items-center justify-center gap-3 text-white/50">
            <span className="text-6xl">🏢</span>
            <span className="text-sm">Место за фотографија на компанијата / тимот</span>
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
          <div className="h-80 rounded-2xl bg-gradient-to-br from-[#e8ecf0] to-[#d0d8e4] flex flex-col items-center justify-center gap-3 text-[#5a6472]">
            <span className="text-5xl">🎯</span>
            <span className="text-sm font-medium">Место за фотографија на мисија / канцеларија</span>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#f5f7fa]">
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

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-[#e8a020] font-semibold tracking-widest text-sm uppercase mb-3 text-center">Историја</p>
          <h2 className="text-4xl font-bold text-[#2e3192] mb-16 text-center">Нашето патување</h2>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#e8ecf0] -translate-x-1/2" />

            <div className="flex flex-col gap-10">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`relative flex items-start gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-[#e8a020] -translate-x-1/2 mt-1.5 z-10" />

                  {/* Content */}
                  <div className={`ml-14 md:ml-0 md:w-5/12 bg-[#f5f7fa] rounded-xl p-5 border border-[#e8ecf0] ${i % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <div className="text-[#e8a020] font-bold text-sm mb-1">{m.year}</div>
                    <h3 className="text-[#2e3192] font-bold text-base mb-2">{m.title}</h3>
                    <p className="text-[#5a6472] text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team placeholder */}
      <section className="py-24 bg-[#f5f7fa]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#e8a020] font-semibold tracking-widest text-sm uppercase mb-3">Луѓето</p>
          <h2 className="text-4xl font-bold text-[#2e3192] mb-14">Запознај го нашиот тим</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'John Vocar', role: 'Основач и извршен директор' },
              { name: 'Maria Stojanovic', role: 'Раководител на продажба' },
              { name: 'Peter Kolar', role: 'Менаџер на логистика' },
              { name: 'Ana Petrovic', role: 'Односи со клиенти' },
            ].map((person) => (
              <div key={person.name} className="text-center">
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#e8ecf0] to-[#d0d8e4] flex items-center justify-center text-4xl mx-auto mb-4">
                  👤
                </div>
                <h3 className="font-bold text-[#2e3192]">{person.name}</h3>
                <p className="text-[#5a6472] text-sm mt-1">{person.role}</p>
              </div>
            ))}
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
