import { Bug, Building2, CalendarCheck2, Factory, House } from 'lucide-react';

const services = [
  { icon: House, title: 'Fumigación Residencial', text: 'Protegemos tu hogar y a tu familia de todo tipo de plagas.' },
  { icon: Building2, title: 'Fumigación Comercial', text: 'Ambientes libres de plagas para tu negocio o empresa.' },
  { icon: Factory, title: 'Fumigación Industrial', text: 'Soluciones efectivas para industrias, almacenes y plantas.' },
  { icon: Bug, title: 'Control de Plagas Específicas', text: 'Tratamientos especializados para termitas, cucarachas, roedores y más.' },
  { icon: CalendarCheck2, title: 'Mantenimiento Preventivo', text: 'Planes periódicos para mantener tus espacios siempre protegidos.' },
];

export default function Services() {
  return (
    <section className="services section" id="servicios">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">¿QUÉ HACEMOS?</p>
          <h2>Control de plagas y <span>fumigación</span></h2>
        </div>
        <div className="services__grid">
          {services.map(({ icon: Icon, title, text }) => (
            <article className="service-card" key={title}>
              <div className="service-card__icon"><Icon size={38} strokeWidth={1.8} /></div>
              <h3>{title}</h3>
              <div className="service-card__line" />
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div className="services__cta"><a href="#contacto" className="button button--primary">Solicitar servicio en Distrito Capital</a></div>
      </div>
    </section>
  );
}
