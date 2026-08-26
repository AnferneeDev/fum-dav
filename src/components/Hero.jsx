import { BadgeCheck, MessageCircle, ShieldCheck, UserRoundCheck } from 'lucide-react';

const trustItems = [
  [ShieldCheck, 'Productos', 'Certificados'],
  [UserRoundCheck, 'Técnicos', 'Capacitados'],
  [BadgeCheck, 'Garantía de', 'Satisfacción'],
];

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="eyebrow">PROTEGEMOS LO QUE MÁS IMPORTA</p>
          <h1>Soluciones profesionales <span>contra plagas</span></h1>
          <p className="hero__lead">Brindamos servicios de fumigación eficientes, seguros y garantizados para hogares, negocios e industrias.</p>
          <div className="hero__actions">
            <a className="button button--whatsapp" href="https://wa.me/584143909476" target="_blank" rel="noreferrer"><MessageCircle size={19} /> Pedir cotización</a>
            <a className="button button--outline" href="#servicios">Nuestros servicios</a>
          </div>
          <div className="hero__trust">
            {trustItems.map(([Icon, top, bottom]) => (
              <div className="trust-card" key={top}>
                <Icon className="trust-card__icon" size={31} strokeWidth={1.8} />
                <span>{top}<b>{bottom}</b></span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero__visual" aria-hidden="true">
          <img src="/hero-technician.jpg" alt="" />
        </div>
      </div>
      <div className="wave wave--red" />
      <div className="wave wave--blue" />
    </section>
  );
}
