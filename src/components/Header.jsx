import { Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';
import Brand from './Brand';

const links = [
  ['Inicio', '#inicio'],
  ['Nosotros', '#nosotros'],
  ['Servicios', '#servicios'],
  ['Blog', '#blog'],
  ['Contacto', '#contacto'],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header__inner">
        <Brand />
        <nav className={`nav ${open ? 'nav--open' : ''}`} aria-label="Navegación principal">
          {links.map(([label, href], index) => (
            <a key={label} className={index === 0 ? 'nav__link nav__link--active' : 'nav__link'} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a className="header__phone header__phone--mobile" href="tel:+18091234567">
            <Phone size={18} /> 809 123 4567
          </a>
        </nav>
        <a className="header__phone" href="https://wa.me/18091234567" target="_blank" rel="noreferrer">
          <Phone size={18} /> 809 123 4567
        </a>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
