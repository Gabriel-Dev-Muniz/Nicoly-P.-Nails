import { useEffect, useState } from 'react'
import { ArrowDown, ArrowUpRight, Instagram, Menu, MessageCircle, X, Sparkles } from 'lucide-react'
import { siteConfig as config, whatsappLink } from './config'

const navItems = [
  ['Home', '#home'], ['Sobre mim', '#sobre'], ['Trabalhos', '#trabalhos'],
  ['Informações', '#informacoes'], ['Contato', '#contato']
]

function Header() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    return () => document.body.classList.remove('menu-open')
  }, [open])
  return <header className="header">
    <a className="brand" href="#home" onClick={() => setOpen(false)}>
      <span className="brand-mark">{config.monogram}</span>
      <span><strong>{config.brand}</strong><small>{config.role}</small></span>
    </a>
    <button className="menu-toggle" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
      {open ? <X /> : <Menu />}
    </button>
    <nav className={open ? 'nav nav-open' : 'nav'} aria-label="Navegação principal">
      {navItems.map(([label, href], i) => <a key={href} className={i === 0 ? 'nav-link active' : 'nav-link'} href={href} onClick={() => setOpen(false)}>{label}</a>)}
      <a className="nav-book" href={whatsappLink()} target="_blank" rel="noreferrer">Agendar <ArrowUpRight size={15} /></a>
    </nav>
  </header>
}

function Hero() {
  return <section className="hero section-shell" id="home">
    <div className="hero-copy reveal">
      <span className="eyebrow"><span /> UM TEMPO SÓ SEU</span>
      <h1>Suas mãos,<br /><em>sua melhor</em><br />expressão.</h1>
      <p>{config.description}</p>
      <div className="hero-actions">
        <a className="button button-dark" href={whatsappLink()} target="_blank" rel="noreferrer">Agende seu horário <ArrowUpRight size={17} /></a>
        <a className="text-link" href="#trabalhos">Conheça meu trabalho <ArrowDown size={15} /></a>
      </div>
      <div className="hero-note"><span className="note-line" /> CUIDADO QUE SE REVELA NOS DETALHES</div>
    </div>
    <div className="hero-visual reveal">
      <div className="hero-image-wrap"><img src={config.heroImage} alt="Inspiração de unhas com acabamento delicado" /></div>
      <div className="hero-stamp"><Sparkles size={17} /><span>feito com<br /><i>carinho</i></span></div>
      <div className="hero-caption"><span>01 / 04</span><span>BELEZA EM CADA DETALHE</span></div>
    </div>
    <div className="hero-side-label">NAIL ART · AUTOCUIDADO · BELEZA</div>
  </section>
}

function About() {
  return <section className="about section-shell section-pad" id="sobre">
    <div className="section-kicker reveal"><span>01</span><span className="kicker-rule" /> SOBRE MIM</div>
    <div className="about-grid">
      <div className="about-photo reveal">
        <img src={config.profileImage} alt={`Retrato de ${config.brand}`} loading="lazy" />
        <span className="photo-caption">UM POUCO DE QUEM CUIDA DE VOCÊ</span>
      </div>
      <div className="about-copy reveal">
        <span className="eyebrow">OLÁ, QUE BOM TER VOCÊ AQUI</span>
        <h2>{config.aboutTitle.split(',')[0]},<br /><em>{config.aboutTitle.split(',').slice(1).join(',').trim() || 'é um prazer.'}</em></h2>
        <p>{config.about}</p>
        <div className="signature">{config.brand}<span>com carinho,</span></div>
        <a className="text-link" href="#contato">Vamos nos conhecer? <ArrowUpRight size={15} /></a>
      </div>
    </div>
    <div className="about-values">
      <div><span>01</span><strong>Dedicação</strong><small>Cuidado em cada etapa.</small></div>
      <div><span>02</span><strong>Delicadeza</strong><small>Beleza que respeita seu estilo.</small></div>
      <div><span>03</span><strong>Autocuidado</strong><small>Um momento para você.</small></div>
    </div>
  </section>
}

function Gallery() {
  const images = [...config.gallery, ...config.gallery]
  return <section className="gallery-section section-pad" id="trabalhos">
    <div className="section-shell">
      <div className="gallery-heading reveal">
        <div><div className="section-kicker"><span>02</span><span className="kicker-rule" /> PORTFÓLIO</div><h2>Um pouco do<br /><em>meu trabalho.</em></h2></div>
        <p>Cada detalhe importa. Explore algumas inspirações e encontre o estilo que combina com você.</p>
      </div>
    </div>
    <div className="marquee" aria-label="Galeria de inspirações de unhas">
      <div className="marquee-track">
        {images.map((item, i) => <figure className="gallery-card" key={`${item.src}-${i}`}>
          <img src={item.src} alt={item.alt} loading="lazy" />
          <figcaption><span>{String((i % config.gallery.length) + 1).padStart(2, '0')}</span>{item.alt}</figcaption>
        </figure>)}
      </div>
    </div>
    <div className="gallery-bottom section-shell"><span>INSPIRAÇÕES PARA O SEU PRÓXIMO MOMENTO</span><a href={config.instagram} target="_blank" rel="noreferrer">Veja mais no Instagram <ArrowUpRight size={15} /></a></div>
  </section>
}

function Pricing() {
  return <section className="pricing section-shell section-pad" id="informacoes">
    <div className="section-kicker reveal"><span>03</span><span className="kicker-rule" /> INFORMAÇÕES</div>
    <div className="pricing-grid">
      <div className="pricing-copy reveal">
        <span className="eyebrow">TRANSPARÊNCIA E CUIDADO</span>
        <h2>Um cuidado<br /><em>feito para você.</em></h2>
        <p>Confira os serviços e valores. Se tiver dúvidas sobre qual opção escolher, fale comigo — vou ajudar você a encontrar o cuidado ideal.</p>
        <div className="price-callout"><Sparkles size={18} /><span>Os valores podem ser atualizados. Consulte a disponibilidade antes de agendar.</span></div>
      </div>
      <div className="price-image-card reveal">
        <span className="price-image-label">SERVIÇOS & VALORES</span>
        <img src={config.priceImage} alt="Tabela de serviços e valores da profissional" />
      </div>
    </div>
    <div className="pricing-cta"><p>Gostou de algum dos meus trabalhos? <em>Vamos deixar suas unhas ainda mais lindas!</em></p><a className="button button-dark" href={whatsappLink('Olá! Vi seu trabalho e gostaria de saber mais sobre os serviços e valores.')} target="_blank" rel="noreferrer">Consultar pelo WhatsApp <ArrowUpRight size={17} /></a></div>
  </section>
}

function Contact() {
  return <section className="contact section-pad" id="contato">
    <div className="contact-inner section-shell reveal">
      <div className="contact-flower">✳</div>
      <span className="eyebrow">SEU MOMENTO COMEÇA AQUI</span>
      <h2>Vamos agendar<br /><em>seu horário?</em></h2>
      <p>Será um prazer receber você. Entre em contato para tirar dúvidas e encontrar o melhor horário.</p>
      <div className="contact-actions">
        <a className="button button-light" href={whatsappLink()} target="_blank" rel="noreferrer"><MessageCircle size={17} /> Conversar pelo WhatsApp <ArrowUpRight size={16} /></a>
        <a className="social-link" href={config.instagram} target="_blank" rel="noreferrer"><Instagram size={18} /> {config.instagramHandle}</a>
      </div>
      <span className="contact-bottom">ATENDIMENTO COM HORA MARCADA · CUIDADO EM CADA DETALHE</span>
    </div>
  </section>
}

function Footer() {
  return <footer className="footer">
    <div className="footer-main section-shell">
      <a className="brand footer-brand" href="#home"><span className="brand-mark">{config.monogram}</span><span><strong>{config.brand}</strong><small>{config.role}</small></span></a>
      <p>Beleza é se sentir bem<br />em cada detalhe.</p>
      <div className="footer-links"><a href={config.instagram} target="_blank" rel="noreferrer"><Instagram size={16} /> Instagram</a><a href={whatsappLink()} target="_blank" rel="noreferrer"><MessageCircle size={16} /> WhatsApp</a></div>
    </div>
    <div className="footer-legal section-shell"><span>© {new Date().getFullYear()} {config.brand}. Todos os direitos reservados.</span><a href="#home">Voltar ao topo ↑</a><span>FEITO COM CUIDADO</span></div>
  </footer>
}

function App() {
  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window)) { nodes.forEach(n => n.classList.add('visible')); return }
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target) }
    }), { threshold: 0.12 })
    nodes.forEach(node => observer.observe(node))
    return () => observer.disconnect()
  }, [])
  return <><Header /><main><Hero /><About /><Gallery /><Pricing /><Contact /></main><Footer /></>
}

export default App
