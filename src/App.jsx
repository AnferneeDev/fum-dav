import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Benefits from './components/Benefits';
import About from './components/About';
import ContactBanner from './components/ContactBanner';
import Footer from './components/Footer';

const faqs = [
  ['¿Qué servicios de fumigación ofrecen?', 'Realizamos fumigación residencial, comercial e industrial, control de cucarachas, termitas y roedores, además de planes de mantenimiento preventivo.'],
  ['¿En qué zonas trabajan?', 'Atendemos Caracas y las distintas zonas del Distrito Capital, Venezuela. Confirma la disponibilidad de tu dirección por WhatsApp.'],
  ['¿Los productos son seguros para personas y mascotas?', 'Usamos productos certificados y aplicamos protocolos profesionales. Antes del servicio te indicamos las medidas de seguridad y el tiempo de reingreso.'],
];

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Benefits />
        <About />
        <section className="faq section" id="preguntas">
          <div className="container">
            <div className="section-heading"><p className="eyebrow">RESPUESTAS RÁPIDAS</p><h2>Preguntas <span>frecuentes</span></h2></div>
            <div className="faq__list">
              {faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}
            </div>
          </div>
        </section>
        <ContactBanner />
      </main>
      <Footer />
    </>
  );
}
