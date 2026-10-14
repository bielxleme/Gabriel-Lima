import { useEffect, useState } from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Instagram,
  Menu,
  MessageCircle,
  Scissors,
  Sparkles,
  X,
} from 'lucide-react';

const whatsappUrl =
  'https://wa.me/5516996495427?text=Ol%C3%A1%2C%20Gabriel!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio.';

const images = {
  hero: 'https://images.pexels.com/photos/20218971/pexels-photo-20218971.jpeg?auto=compress&cs=tinysrgb&w=1200',
  blonde: 'https://images.pexels.com/photos/7440131/pexels-photo-7440131.jpeg?auto=compress&cs=tinysrgb&w=1200',
  bridal: 'https://images.pexels.com/photos/33466163/pexels-photo-33466163.jpeg?auto=compress&cs=tinysrgb&w=1200',
  stylist: 'https://images.pexels.com/photos/8834017/pexels-photo-8834017.jpeg?auto=compress&cs=tinysrgb&w=1200',
  makeup: 'https://images.pexels.com/photos/12891495/pexels-photo-12891495.jpeg?auto=compress&cs=tinysrgb&w=1200',
};

const services = [
  {
    number: '01',
    title: 'Loiros &\nIluminados',
    description: 'Técnicas modernas de clareamento e tratamento capilar para um resultado luminoso, saudável e feito para você.',
    image: images.blonde,
  },
  {
    number: '02',
    title: 'Hair Design\n& Cortes',
    description: 'Cortes personalizados que valorizam o formato do rosto, a textura dos fios e a sua identidade.',
    image: images.stylist,
  },
  {
    number: '03',
    title: 'Make-up &\nPenteados',
    description: 'Produções impecáveis para festas, formaturas e ocasiões que pedem uma beleza inesquecível.',
    image: images.makeup,
  },
  {
    number: '04',
    title: 'Noivas &\nGrandes Eventos',
    description: 'O cuidado especial para o dia mais importante — do primeiro encontro ao último detalhe da produção.',
    image: images.bridal,
  },
];

const testimonials = [
  {
    quote: 'O Gabriel entendeu exatamente o que eu queria e entregou muito mais. Me senti linda, segura e completamente eu mesma.',
    name: 'Mariana S.',
    detail: 'Noiva · Borborema — SP',
  },
  {
    quote: 'Cada atendimento é uma experiência. Saio renovada, com o cabelo impecável e a certeza de estar em mãos excelentes.',
    name: 'Ana Beatriz R.',
    detail: 'Cliente há 4 anos',
  },
  {
    quote: 'A técnica, o cuidado e o olhar para os detalhes fazem toda a diferença. Meu loiro nunca esteve tão bonito.',
    name: 'Juliana M.',
    detail: 'Loiros & Iluminados',
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [testimonial, setTestimonial] = useState(0);

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));
    return () => revealObserver.disconnect();
  }, []);

  const moveTestimonial = (direction: number) => {
    setTestimonial((current) => (current + direction + testimonials.length) % testimonials.length);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#inicio" onClick={closeMenu} aria-label="Gabriel Lima Hair Stylist - início">
          <span className="brand-mark">G</span>
          <span className="brand-copy">
            <strong>Gabriel Lima</strong>
            <small>Hair Stylist</small>
          </span>
        </a>

        <button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-label="Abrir menu">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`}>
          <a href="#inicio" onClick={closeMenu}>Início</a>
          <a href="#especialidades" onClick={closeMenu}>Especialidades</a>
          <a href="#noivas" onClick={closeMenu}>Noivas & Eventos</a>
          <a href="#sobre" onClick={closeMenu}>Sobre</a>
          <a href="#contato" onClick={closeMenu}>Contato</a>
          <a className="nav-cta" href={whatsappUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>
            Agendar horário <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-texture" />
          <div className="hero-content">
            <p className="eyebrow hero-eyebrow reveal">Hair Designer · Borborema — SP</p>
            <h1 className="hero-title reveal">
              A arte de <em>realçar</em><br />
              a sua melhor versão.
            </h1>
            <p className="hero-description reveal">
              Especialista em loiros iluminados, visagismo, maquiagem e produção exclusiva para noivas e grandes eventos.
            </p>
            <div className="hero-actions reveal">
              <a className="button button-gold" href={whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle size={17} /> Agendar via WhatsApp
              </a>
              <a className="text-link" href="#especialidades">
                Explorar portfólio <ArrowDown size={16} />
              </a>
            </div>
          </div>
          <div className="hero-image-wrap reveal">
            <div className="hero-image-frame">
              <img src={images.hero} alt="Mulher com cabelo loiro elegante em um retrato editorial" />
            </div>
            <div className="hero-note"><Sparkles size={15} /> Beleza com intenção</div>
          </div>
          <div className="hero-scroll"><span>Scroll para descobrir</span><div className="scroll-line" /></div>
          <div className="hero-side-label">GABRIEL LIMA <span>·</span> 2024</div>
        </section>

        <section className="intro-section content-width reveal">
          <div className="section-kicker"><span className="kicker-line" /> 01 — A essência</div>
          <div className="intro-grid">
            <h2>Mais do que um visual.<br /><em>Uma assinatura.</em></h2>
            <div className="intro-copy">
              <p>Beleza é individual. Por isso, cada criação nasce de uma conversa, um olhar atento e a técnica certa para revelar aquilo que já existe de mais bonito em você.</p>
              <a className="underlined-link" href="#sobre">Conheça o meu trabalho <ArrowUpRight size={15} /></a>
            </div>
          </div>
        </section>

        <section className="services-section" id="especialidades">
          <div className="content-width">
            <div className="section-heading reveal">
              <div className="section-kicker"><span className="kicker-line" /> 02 — Especialidades</div>
              <h2>O seu momento,<br /><em>do seu jeito.</em></h2>
              <p>Serviços pensados para traduzir a sua personalidade em beleza, com técnica, cuidado e um olhar contemporâneo.</p>
            </div>
            <div className="services-grid">
              {services.map((service) => (
                <article className="service-card reveal" key={service.number}>
                  <div className="service-image"><img src={service.image} alt={service.title.replace('\n', ' ')} /><span className="service-number">{service.number}</span></div>
                  <div className="service-info">
                    <h3>{service.title.split('\n').map((line) => <span key={line}>{line}<br /></span>)}</h3>
                    <p>{service.description}</p>
                    <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label={`Agendar ${service.title.replace('\n', ' ')}`}><ArrowUpRight size={19} /></a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="feature-section" id="noivas">
          <div className="feature-image reveal"><img src={images.bridal} alt="Noiva com maquiagem elegante e véu" /><span className="image-caption">Bridal editorial · 2024</span></div>
          <div className="feature-content reveal">
            <div className="section-kicker"><span className="kicker-line" /> 03 — Noivas & Eventos</div>
            <h2>O seu dia.<br /><em>O nosso ritual.</em></h2>
            <p>Para momentos que merecem ser lembrados em cada detalhe. Criamos uma experiência completa de beleza para noivas, madrinhas e grandes celebrações.</p>
            <div className="feature-list">
              <div><span>01</span><strong>Atendimento personalizado</strong></div>
              <div><span>02</span><strong>Prévia e planejamento</strong></div>
              <div><span>03</span><strong>Produção no seu local</strong></div>
            </div>
            <a className="button button-outline" href={whatsappUrl} target="_blank" rel="noreferrer">Conversar sobre o seu evento <ArrowUpRight size={16} /></a>
          </div>
        </section>

        <section className="about-section content-width" id="sobre">
          <div className="about-copy reveal">
            <div className="section-kicker"><span className="kicker-line" /> 04 — O estilista</div>
            <h2>Precisão na técnica.<br /><em>Leveza no olhar.</em></h2>
            <p>Gabriel Lima acredita que o melhor resultado é aquele que parece naturalmente seu. Sua trajetória é construída com paixão pela arte capilar, busca constante por excelência e uma escuta atenta a cada pessoa que passa pela cadeira.</p>
            <p>Em Borborema, seu atendimento se tornou sinônimo de cuidado, sofisticação e confiança — uma pausa para você se reconectar com a sua própria beleza.</p>
            <div className="signature">Gabriel Lima</div>
          </div>
          <div className="about-portrait reveal"><img src={images.stylist} alt="Profissional de beleza em um salão sofisticado" /><div className="portrait-badge"><Scissors size={18} /><span>Arte<br />& cuidado</span></div></div>
        </section>

        <section className="testimonial-section">
          <div className="testimonial-inner content-width reveal">
            <div className="section-kicker light"><span className="kicker-line" /> 05 — Quem viveu</div>
            <div className="testimonial-layout">
              <div><h2>Palavras que<br /><em>ficam.</em></h2><div className="testimonial-controls"><button onClick={() => moveTestimonial(-1)} aria-label="Depoimento anterior"><ChevronLeft size={19} /></button><button onClick={() => moveTestimonial(1)} aria-label="Próximo depoimento"><ChevronRight size={19} /></button><span>{String(testimonial + 1).padStart(2, '0')} <i>/</i> {String(testimonials.length).padStart(2, '0')}</span></div></div>
              <div className="quote-wrap"><div className="quote-mark">“</div><blockquote key={testimonials[testimonial].quote}>{testimonials[testimonial].quote}</blockquote><div className="quote-author"><strong>{testimonials[testimonial].name}</strong><span>{testimonials[testimonial].detail}</span></div></div>
            </div>
          </div>
        </section>

        <section className="contact-section content-width" id="contato">
          <div className="contact-card reveal">
            <div className="contact-kicker">Vamos criar algo especial?</div>
            <h2>Seu próximo capítulo<br /><em>começa aqui.</em></h2>
            <p>Agende seu horário e descubra uma beleza pensada para você.</p>
            <a className="button button-gold" href={whatsappUrl} target="_blank" rel="noreferrer"><CalendarDays size={17} /> Agendar atendimento</a>
          </div>
          <div className="contact-details reveal">
            <div><span>Atendimento</span><strong>Borborema — SP</strong></div>
            <div><span>WhatsApp</span><strong>(16) 99649-5427</strong></div>
            <div><span>Redes sociais</span><strong>@limaiigabriel</strong></div>
            <a className="circle-arrow" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Falar no WhatsApp"><ArrowUpRight size={21} /></a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand"><span className="brand-mark">G</span><span>Gabriel Lima<br /><small>Hair Stylist</small></span></div>
        <span>© 2024 Gabriel Lima Hair Stylist</span>
        <div className="footer-socials"><a href="https://www.instagram.com/limaiigabriel/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={17} /></a><a href="https://www.facebook.com/gabriel.lima.967812/" target="_blank" rel="noreferrer" aria-label="Facebook"><span className="facebook-icon">f</span></a></div>
        <span className="footer-credit">Digital excellence by <strong>studio.</strong></span>
      </footer>

      <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Agendar pelo WhatsApp"><MessageCircle size={21} /><span>Agendar</span></a>
    </div>
  );
}

export default App;
