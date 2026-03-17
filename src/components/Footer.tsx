import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'

export default function Footer() {
  return (
    <footer className="bg-[#2e3192] text-white/80">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div className="mb-4">
            <img src={logo} alt="Воќаркооп Комерц" className="h-10 w-auto brightness-0 invert" />
          </div>
          <p className="text-sm leading-relaxed">
            Ваш доверлив партнер за фотокопирна хартија и термални ролни. Квалитет и доверливост од 1992 година.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Брзи линкови</h4>
          <ul className="flex flex-col gap-2 text-sm">
            <li><Link to="/" className="hover:text-[#e8a020] transition-colors">Почетна</Link></li>
            <li><Link to="/about" className="hover:text-[#e8a020] transition-colors">За нас</Link></li>
            <li><Link to="/contact" className="hover:text-[#e8a020] transition-colors">Контакт и понуди</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">Контакт</h4>
          <ul className="flex flex-col gap-2 text-sm">
            <li className="flex items-start gap-2">
              <span>📍</span> Ул."519" бр.38, Автокоманда, 1000 Скопје
            </li>
            <li className="flex items-center gap-2">
              <span>📞</span>
              <a href="tel:+38923127109" className="hover:text-[#e8a020] transition-colors">+389 23 127 109</a>
            </li>
            <li className="flex items-center gap-2">
              <span>📞</span>
              <a href="tel:+38970380220" className="hover:text-[#e8a020] transition-colors">+389 70 380 220</a>
            </li>
            <li className="flex items-center gap-2">
              <span>✉️</span>
              <a href="mailto:vocarcoop@gmail.com" className="hover:text-[#e8a020] transition-colors">vocarcoop@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Воќаркооп Комерц. Сите права се задржани.
      </div>
    </footer>
  )
}
