import { useState } from 'react'

const products = [
  'Thermal Rolls (57mm)',
  'Thermal Rolls (80mm)',
  'Thermal Rolls (Custom Width)',
  'Offset Print Paper (A4)',
  'Offset Print Paper (A3)',
  'Copy Paper (80gsm)',
  'Copy Paper (70gsm)',
  'Specialty / Label Rolls',
  'Other',
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
    alert('Quote request submitted! We will get back to you within 24 hours.')
  }

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Message sent! We will be in touch shortly.')
  }

  const inputClass = 'w-full border border-[#e8ecf0] rounded-lg px-4 py-3 text-sm text-[#222831] placeholder-[#aab0ba] focus:outline-none focus:border-[#2d6a9f] focus:ring-1 focus:ring-[#2d6a9f] transition'

  return (
    <>
      {/* Hero */}
      <section className="bg-[#1a3a5c] pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#e8a020] font-semibold tracking-widest text-sm uppercase mb-4">Contact & Quotes</p>
          <h1 className="text-5xl font-bold text-white mb-6">Let's Talk Paper</h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Request a custom quote, ask a product question, or simply get in touch. Our team usually
            responds within one business day.
          </p>
        </div>
      </section>

      {/* Contact info cards */}
      <section className="py-16 bg-[#f5f7fa]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: '📞', title: 'Phone', info: '+1 (555) 123-4567', sub: 'Mon–Fri, 8am–5pm' },
            { icon: '✉️', title: 'Email', info: 'info@vocarkoop.com', sub: 'We reply within 24h' },
            { icon: '📍', title: 'Address', info: '123 Industrial Ave', sub: 'City, Country, 10000' },
          ].map((c) => (
            <div key={c.title} className="bg-white rounded-2xl p-6 text-center border border-[#e8ecf0] shadow-sm">
              <div className="text-4xl mb-3">{c.icon}</div>
              <h3 className="text-[#1a3a5c] font-bold mb-1">{c.title}</h3>
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
            <p className="text-[#e8a020] font-semibold tracking-widest text-sm uppercase mb-3">Pricing</p>
            <h2 className="text-3xl font-bold text-[#1a3a5c] mb-2">Request a Quote</h2>
            <p className="text-[#5a6472] text-sm mb-8">
              Fill in the details below and we'll send you a custom quote with pricing and availability.
            </p>

            <form onSubmit={handleQuoteSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#5a6472] mb-1.5 uppercase tracking-wide">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    value={quoteForm.name}
                    onChange={handleQuoteChange}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#5a6472] mb-1.5 uppercase tracking-wide">Company</label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Company name"
                    value={quoteForm.company}
                    onChange={handleQuoteChange}
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#5a6472] mb-1.5 uppercase tracking-wide">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@company.com"
                    value={quoteForm.email}
                    onChange={handleQuoteChange}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#5a6472] mb-1.5 uppercase tracking-wide">Phone</label>
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
                <label className="block text-xs font-semibold text-[#5a6472] mb-1.5 uppercase tracking-wide">Product *</label>
                <select
                  name="product"
                  required
                  value={quoteForm.product}
                  onChange={handleQuoteChange}
                  className={inputClass}
                >
                  <option value="">Select a product</option>
                  {products.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#5a6472] mb-1.5 uppercase tracking-wide">Quantity / Volume</label>
                <input
                  type="text"
                  name="quantity"
                  placeholder="e.g. 500 rolls / 10 boxes / 1 pallet"
                  value={quoteForm.quantity}
                  onChange={handleQuoteChange}
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#5a6472] mb-1.5 uppercase tracking-wide">Additional Notes</label>
                <textarea
                  name="notes"
                  rows={4}
                  placeholder="Specific requirements, delivery details, etc."
                  value={quoteForm.notes}
                  onChange={handleQuoteChange}
                  className={inputClass + ' resize-none'}
                />
              </div>

              <button
                type="submit"
                className="bg-[#e8a020] hover:bg-[#c8881a] text-white font-semibold py-3.5 rounded-lg transition-colors mt-2"
              >
                Submit Quote Request
              </button>
            </form>
          </div>

          {/* General Contact */}
          <div>
            <p className="text-[#e8a020] font-semibold tracking-widest text-sm uppercase mb-3">Get in Touch</p>
            <h2 className="text-3xl font-bold text-[#1a3a5c] mb-2">Send Us a Message</h2>
            <p className="text-[#5a6472] text-sm mb-8">
              Have a general question or want to discuss a partnership? We'd love to hear from you.
            </p>

            <form onSubmit={handleContactSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#5a6472] mb-1.5 uppercase tracking-wide">Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  value={contactForm.name}
                  onChange={handleContactChange}
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#5a6472] mb-1.5 uppercase tracking-wide">Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@email.com"
                  value={contactForm.email}
                  onChange={handleContactChange}
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#5a6472] mb-1.5 uppercase tracking-wide">Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="What's this about?"
                  value={contactForm.subject}
                  onChange={handleContactChange}
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#5a6472] mb-1.5 uppercase tracking-wide">Message *</label>
                <textarea
                  name="message"
                  required
                  rows={8}
                  placeholder="Write your message here..."
                  value={contactForm.message}
                  onChange={handleContactChange}
                  className={inputClass + ' resize-none'}
                />
              </div>

              <button
                type="submit"
                className="bg-[#1a3a5c] hover:bg-[#2d6a9f] text-white font-semibold py-3.5 rounded-lg transition-colors mt-2"
              >
                Send Message
              </button>
            </form>

            {/* Map placeholder */}
            <div className="mt-10 h-52 rounded-2xl bg-gradient-to-br from-[#e8ecf0] to-[#d0d8e4] flex flex-col items-center justify-center gap-3 text-[#5a6472]">
              <span className="text-4xl">🗺️</span>
              <span className="text-sm font-medium">Map Embed Placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#f5f7fa]">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[#e8a020] font-semibold tracking-widest text-sm uppercase mb-3 text-center">FAQ</p>
          <h2 className="text-3xl font-bold text-[#1a3a5c] mb-12 text-center">Common Questions</h2>

          <div className="flex flex-col gap-4">
            {[
              {
                q: 'What is the minimum order quantity?',
                a: 'We accept orders of all sizes. For bulk pricing, we recommend ordering a minimum of 100 rolls or 5 boxes. Contact us for details.',
              },
              {
                q: 'Do you offer custom thermal roll widths?',
                a: 'Yes! We can source custom widths and core sizes. Lead times for custom orders are typically 2–4 weeks.',
              },
              {
                q: 'How long does delivery take?',
                a: 'Standard orders ship within 2–3 business days. Expedited options are available. Large pallets may require additional lead time.',
              },
              {
                q: 'Can I request product samples?',
                a: 'Absolutely. We are happy to provide samples of our thermal rolls and paper products before you commit to a bulk order.',
              },
            ].map((item) => (
              <div key={item.q} className="bg-white rounded-xl p-6 border border-[#e8ecf0]">
                <h4 className="font-bold text-[#1a3a5c] mb-2">{item.q}</h4>
                <p className="text-[#5a6472] text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
