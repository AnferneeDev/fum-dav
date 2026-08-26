import { MessageCircle } from 'lucide-react';

export default function ContactBanner() {
  return (
    <section className="contact-banner" id="contacto">
      <div className="container contact-banner__inner">
        <img src="/logo-mark.png" alt="" />
        <div><h2>¿Necesitas eliminar una plaga?</h2><p>Contáctanos hoy mismo y recibe asesoría gratis.</p></div>
        <a className="button button--danger" href="https://wa.me/18091234567" target="_blank" rel="noreferrer"><MessageCircle size={20} /> 809 123 4567</a>
      </div>
    </section>
  );
}
