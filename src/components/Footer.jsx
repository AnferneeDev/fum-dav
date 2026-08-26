import { Facebook, Instagram, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import Brand from './Brand';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Brand compact inverse />
          <p>Soluciones profesionales en fumigación y control de plagas para hogares, negocios e industrias.</p>
          <div className="socials"><a href="#" aria-label="Facebook"><Facebook size={18} /></a><a href="#" aria-label="Instagram"><Instagram size={18} /></a><a href="https://wa.me/18091234567" aria-label="WhatsApp"><MessageCircle size={18} /></a></div>
        </div>
        <div><h3>Enlaces</h3><a href="#inicio">Inicio</a><a href="#nosotros">Nosotros</a><a href="#servicios">Servicios</a><a href="#blog">Blog</a><a href="#contacto">Contacto</a></div>
        <div><h3>Servicios</h3><a href="#servicios">Fumigación Residencial</a><a href="#servicios">Fumigación Comercial</a><a href="#servicios">Fumigación Industrial</a><a href="#servicios">Control de Plagas</a><a href="#servicios">Mantenimiento Preventivo</a></div>
        <div><h3>Contacto</h3><p><Phone size={17} /> 809 123 4567</p><p><Mail size={17} /> info@fumigacionesdavid.com</p><p><MapPin size={17} /> Santo Domingo, Rep. Dom.</p></div>
      </div>
      <div className="container footer__bottom">© 2026 Fumigaciones David. Todos los derechos reservados.</div>
    </footer>
  );
}
