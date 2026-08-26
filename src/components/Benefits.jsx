import { Award, Clock3, Leaf, ShieldCheck } from 'lucide-react';

const items = [
  [ShieldCheck, 'Eficacia Garantizada', 'Usamos productos de alta calidad y tecnología avanzada.'],
  [Leaf, 'Seguridad Total', 'Productos seguros para personas, mascotas y el medio ambiente.'],
  [Clock3, 'Atención Rápida', 'Respondemos rápido y llegamos cuando más nos necesitas.'],
  [Award, 'Experiencia', 'Años de experiencia ofreciendo servicios de calidad.'],
];

export default function Benefits() {
  return (
    <section className="benefits" aria-label="Ventajas">
      <div className="container benefits__grid">
        {items.map(([Icon, title, text]) => (
          <div className="benefit" key={title}>
            <Icon size={34} strokeWidth={1.65} />
            <div><h3>{title}</h3><p>{text}</p></div>
          </div>
        ))}
      </div>
    </section>
  );
}
