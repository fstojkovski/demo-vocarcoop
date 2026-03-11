import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#1a3a5c] text-white/80">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 bg-[#e8a020] rounded flex items-center justify-center font-bold text-white text-lg">
              V
            </div>
            <span className="text-white font-bold text-xl">Vocar Koop</span>
          </div>
          <p className="text-sm leading-relaxed">
            Your trusted partner for premium print paper and thermal rolls. Quality and reliability since 2005.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="flex flex-col gap-2 text-sm">
            <li><Link to="/" className="hover:text-[#e8a020] transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-[#e8a020] transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-[#e8a020] transition-colors">Contact & Quotes</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="flex flex-col gap-2 text-sm">
            <li className="flex items-center gap-2">
              <span>📍</span> 123 Industrial Ave, City, Country
            </li>
            <li className="flex items-center gap-2">
              <span>📞</span> +1 (555) 123-4567
            </li>
            <li className="flex items-center gap-2">
              <span>✉️</span> info@vocarkoop.com
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Vocar Koop. All rights reserved.
      </div>
    </footer>
  )
}
