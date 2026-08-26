import { MessageCircle } from 'lucide-react';

export default function ContactBanner() {
  return (
    <section className="contact-banner" id="contacto">
      <div className="container contact-banner__inner">
        <img src="/logo-mark.png" alt="" />
        <div><h2>¿Necesitas eliminar una plaga?</h2><p>Contáctanos hoy mismo y recibe asesoría gratis.</p></div>
        <a className="button button--whatsapp" href="https://wa.me/584143909476" target="_blank" rel="noreferrer"><MessageCircle size={20} /> +58 414 390 9476</a>
      </div>
    </section>
  );
}
