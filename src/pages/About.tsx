const milestones = [
  { year: '2005', title: 'Company Founded', desc: 'Vocar Koop opens its doors as a local paper distributor, serving the immediate region.' },
  { year: '2009', title: 'Expanded Product Range', desc: 'Added thermal rolls and specialty papers to meet growing demand from retail clients.' },
  { year: '2013', title: 'Regional Leader', desc: 'Became the top paper supplier in the region, partnering with major retail chains.' },
  { year: '2017', title: 'Warehouse Expansion', desc: 'Opened a new 5,000 sq. ft. warehouse to support increased inventory and faster delivery.' },
  { year: '2021', title: 'Digital Ordering Launch', desc: 'Launched online ordering and quote system for easier client access.' },
  { year: '2025', title: '20 Years Strong', desc: 'Celebrating two decades of quality and reliability with 500+ active clients.' },
]

const values = [
  { icon: '✅', title: 'Quality First', desc: 'Every product we supply meets strict quality standards. We work only with certified manufacturers.' },
  { icon: '🤝', title: 'Reliable Partnerships', desc: 'We build long-term relationships built on trust, transparency, and consistent performance.' },
  { icon: '⚡', title: 'Fast Delivery', desc: 'Our logistics network ensures on-time delivery, whether you need a single box or a full pallet.' },
  { icon: '💡', title: 'Expert Guidance', desc: 'Our team helps you find the right product for your specific printing requirements.' },
  { icon: '♻️', title: 'Sustainability', desc: 'We prioritize eco-friendly paper sourcing and work with suppliers committed to sustainable forestry.' },
  { icon: '📊', title: 'Competitive Pricing', desc: 'Volume-based pricing and flexible ordering options designed to fit your budget.' },
]

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1a3a5c] pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#e8a020] font-semibold tracking-widest text-sm uppercase mb-4">About Us</p>
            <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
              Passion for Paper,<br />
              <span className="text-[#e8a020]">Built on Trust.</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              For over two decades, Vocar Koop has been the go-to supplier for businesses that need
              reliable, high-quality paper products. Our commitment to excellence hasn't changed since day one.
            </p>
          </div>
          <div className="h-72 rounded-2xl bg-[#2d6a9f]/40 border border-white/10 flex flex-col items-center justify-center gap-3 text-white/50">
            <span className="text-6xl">🏢</span>
            <span className="text-sm">Company / Team Photo Placeholder</span>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#e8a020] font-semibold tracking-widest text-sm uppercase mb-3">Our Mission</p>
            <h2 className="text-4xl font-bold text-[#1a3a5c] mb-6">Supplying Quality, Enabling Business</h2>
            <p className="text-[#5a6472] leading-relaxed mb-4">
              Our mission is simple: provide businesses with the highest quality print paper and thermal rolls
              at competitive prices, backed by exceptional service and expert advice.
            </p>
            <p className="text-[#5a6472] leading-relaxed mb-4">
              We understand that reliable paper supply is critical to daily operations — from receipts to reports,
              from packaging to publication. That's why we maintain deep inventory levels and multiple supplier
              relationships to ensure you never run out.
            </p>
            <p className="text-[#5a6472] leading-relaxed">
              Our dedicated sales team is always available to help you find the right product, negotiate
              volume pricing, or solve a last-minute supply challenge.
            </p>
          </div>
          <div className="h-80 rounded-2xl bg-gradient-to-br from-[#e8ecf0] to-[#d0d8e4] flex flex-col items-center justify-center gap-3 text-[#5a6472]">
            <span className="text-5xl">🎯</span>
            <span className="text-sm font-medium">Mission / Office Photo</span>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#f5f7fa]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#e8a020] font-semibold tracking-widest text-sm uppercase mb-3">What We Stand For</p>
          <h2 className="text-4xl font-bold text-[#1a3a5c] mb-14">Our Core Values</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-6 border border-[#e8ecf0] hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="text-lg font-bold text-[#1a3a5c] mb-2">{v.title}</h3>
                <p className="text-[#5a6472] text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-[#e8a020] font-semibold tracking-widest text-sm uppercase mb-3 text-center">History</p>
          <h2 className="text-4xl font-bold text-[#1a3a5c] mb-16 text-center">Our Journey</h2>

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
                    <h3 className="text-[#1a3a5c] font-bold text-base mb-2">{m.title}</h3>
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
          <p className="text-[#e8a020] font-semibold tracking-widest text-sm uppercase mb-3">The People</p>
          <h2 className="text-4xl font-bold text-[#1a3a5c] mb-14">Meet Our Team</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'John Vocar', role: 'Founder & CEO' },
              { name: 'Maria Stojanovic', role: 'Head of Sales' },
              { name: 'Peter Kolar', role: 'Logistics Manager' },
              { name: 'Ana Petrovic', role: 'Customer Relations' },
            ].map((person) => (
              <div key={person.name} className="text-center">
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#e8ecf0] to-[#d0d8e4] flex items-center justify-center text-4xl mx-auto mb-4">
                  👤
                </div>
                <h3 className="font-bold text-[#1a3a5c]">{person.name}</h3>
                <p className="text-[#5a6472] text-sm mt-1">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1a3a5c]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Work With Us</h2>
          <p className="text-white/70 text-lg mb-8">
            Ready to experience the Vocar Koop difference? Reach out to discuss your paper supply needs.
          </p>
          <a
            href="/contact"
            className="bg-[#e8a020] hover:bg-[#c8881a] text-white font-semibold px-10 py-4 rounded-lg inline-block transition-colors"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </>
  )
}
