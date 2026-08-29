import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import Brand from './Brand';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Brand compact inverse />
          <p>Soluciones profesionales en fumigación y control de plagas para hogares, negocios e industrias.</p>
           <div className="socials"><a href="https://wa.me/584143909476" target="_blank" rel="noreferrer" aria-label="Contactar por WhatsApp"><MessageCircle size={18} /></a></div>
        </div>
          <div><h3>Enlaces</h3><a href="#inicio">Inicio</a><a href="#nosotros">Nosotros</a><a href="#servicios">Servicios</a><a href="#preguntas">Preguntas frecuentes</a><a href="#contacto">Contacto</a></div>
        <div><h3>Servicios</h3><a href="#servicios">Fumigación Residencial</a><a href="#servicios">Fumigación Comercial</a><a href="#servicios">Fumigación Industrial</a><a href="#servicios">Control de Plagas</a><a href="#servicios">Mantenimiento Preventivo</a></div>
           <div><h3>Contacto</h3><p><Phone size={17} /><a href="tel:+584143909476">+58 414 390 9476</a></p><p><Mail size={17} /> info@fumigacionesdavid.com</p><p><MapPin size={17} /> Distrito Capital, Venezuela</p></div>
      </div>
      <div className="container footer__bottom">© 2026 Fumigaciones David. Todos los derechos reservados.</div>
    </footer>
  );
}
