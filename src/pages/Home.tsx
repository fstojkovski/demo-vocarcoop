import { Link } from 'react-router-dom'

const products = [
  {
    id: 1,
    name: 'Thermal Rolls',
    desc: 'High-quality thermal paper rolls for POS systems, ATMs, receipts, and more. Available in all standard widths.',
    icon: '🧻',
  },
  {
    id: 2,
    name: 'Offset Print Paper',
    desc: 'Premium offset paper for professional printing. Excellent color reproduction and smooth surface finish.',
    icon: '📄',
  },
  {
    id: 3,
    name: 'Copy Paper',
    desc: 'Multipurpose copy paper for everyday office use. Consistent brightness and jam-free performance.',
    icon: '📋',
  },
  {
    id: 4,
    name: 'Specialty Rolls',
    desc: 'Custom-width and specialty thermal rolls for medical, industrial, and label printing applications.',
    icon: '🔖',
  },
]

const stats = [
  { value: '20+', label: 'Years of Experience' },
  { value: '500+', label: 'Happy Clients' },
  { value: '50+', label: 'Product Variants' },
  { value: '99%', label: 'On-Time Delivery' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen bg-[#1a3a5c] flex items-center overflow-hidden">
        {/* Background decorative circles */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#2d6a9f]/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#e8a020]/20 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Text */}
          <div>
            <p className="text-[#e8a020] font-semibold tracking-widest text-sm uppercase mb-4">
              Print Paper & Thermal Rolls
            </p>
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Quality Paper,<br />
              <span className="text-[#e8a020]">Delivered Right.</span>
            </h1>
            <p className="text-white/70 text-lg mb-10 max-w-md leading-relaxed">
              Vocar Koop is your reliable supplier of premium print paper and thermal rolls.
              Serving businesses of all sizes with consistent quality since 2005.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-[#e8a020] hover:bg-[#c8881a] text-white font-semibold px-8 py-4 rounded-lg transition-colors"
              >
                Get a Quote
              </Link>
              <Link
                to="/about"
                className="border-2 border-white/40 hover:border-white text-white font-semibold px-8 py-4 rounded-lg transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Hero image placeholder */}
          <div className="w-full h-80 lg:h-[420px] rounded-2xl bg-[#2d6a9f]/40 border border-white/10 flex flex-col items-center justify-center gap-3 text-white/50">
            <span className="text-6xl">🖨️</span>
            <span className="text-sm">Hero Image Placeholder</span>
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
          <p className="text-[#e8a020] font-semibold tracking-widest text-sm uppercase mb-3">Our Products</p>
          <h2 className="text-4xl font-bold text-[#1a3a5c] mb-4">What We Supply</h2>
          <p className="text-[#5a6472] text-lg mb-14 max-w-xl">
            From high-volume thermal rolls to premium print paper, we carry everything your business needs.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-[#e8ecf0]"
              >
                <div className="text-4xl mb-4">{p.icon}</div>
                <h3 className="text-lg font-bold text-[#1a3a5c] mb-2">{p.name}</h3>
                <p className="text-[#5a6472] text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/contact"
              className="bg-[#1a3a5c] hover:bg-[#2d6a9f] text-white font-semibold px-8 py-4 rounded-lg inline-block transition-colors"
            >
              Request Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Product showcase images */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#e8a020] font-semibold tracking-widest text-sm uppercase mb-3">Gallery</p>
          <h2 className="text-4xl font-bold text-[#1a3a5c] mb-14">Our Products Up Close</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: 'Thermal Roll Varieties', emoji: '🧻' },
              { label: 'Print Paper Stock', emoji: '📦' },
              { label: 'Packaging & Delivery', emoji: '🚚' },
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
            <span className="text-sm font-medium">Company / Warehouse Photo</span>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <p className="text-[#e8a020] font-semibold tracking-widest text-sm uppercase mb-3">Our Story</p>
            <h2 className="text-4xl font-bold text-[#1a3a5c] mb-6">Two Decades of Print Excellence</h2>
            <p className="text-[#5a6472] leading-relaxed mb-4">
              Founded in 2005, Vocar Koop started as a small local paper distributor with a simple goal:
              deliver quality products on time, every time. Over the years, we have grown into a trusted
              regional supplier serving hundreds of businesses across retail, hospitality, healthcare, and
              corporate sectors.
            </p>
            <p className="text-[#5a6472] leading-relaxed mb-8">
              Our team's deep expertise in paper products allows us to help clients find exactly the
              right solution — whether that's a specific GSM weight, roll core size, or paper coating.
            </p>
            <Link
              to="/about"
              className="text-[#1a3a5c] font-semibold border-b-2 border-[#e8a020] pb-0.5 hover:text-[#e8a020] transition-colors"
            >
              Read Our Full Story →
            </Link>
          </div>
        </div>
      </section>

      {/* Quick contact CTA */}
      <section className="py-20 bg-[#1a3a5c]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Order?</h2>
          <p className="text-white/70 text-lg mb-10">
            Contact us today for bulk pricing, custom orders, or any questions about our products.
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
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}
