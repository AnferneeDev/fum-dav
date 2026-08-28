import { ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <section className="about section" id="nosotros">
      <div className="container about__grid">
        <div>
          <p className="eyebrow">SOBRE NOSOTROS</p>
          <h2>Comprometidos con tu <span>bienestar y seguridad</span></h2>
           <p>En Fumigaciones David ofrecemos soluciones integrales de control de plagas en Caracas y el Distrito Capital. Nuestro equipo trabaja con responsabilidad, eficacia y compromiso para garantizar espacios limpios, seguros y saludables.</p>
          <a className="button button--primary" href="#contacto">Conócenos más</a>
        </div>
        <div className="about__visual">
           <img src="/about-technician_upscayl_4x_upscayl-standard-4x.jpg" alt="Técnico de fumigación trabajando en una vivienda en Distrito Capital" loading="lazy" width="900" height="650" />
          <div className="about__badge"><ShieldCheck size={34} /><span>Tu tranquilidad<br />es nuestra misión</span></div>
        </div>
      </div>
    </section>
  );
}
