"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const projects = [
  { number: "01", type: "DIGITAL PRODUCT", title: "The thoughtful\ninterface", className: "project--lime" },
  { number: "02", type: "PRODUCT SYSTEM", title: "Less noise.\nMore signal.", className: "project--blue" },
  { number: "03", type: "OPEN EXPLORATION", title: "Room for\nwhat’s next.", className: "project--pink" },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">{diagonal ? "↗" : "→"}</span>;
}

function ProjectArtwork({ index }: { index: number }) {
  if (index === 0) {
    return <div className="artwork artwork--interface"><div className="mini-window"><div className="mini-window__top"><span /><span /><span /><b>studio / today</b></div><div className="mini-window__body"><div className="mini-label">A CLEARER WAY FORWARD</div><div className="mini-title">Make space<br /><i>for better.</i></div><div className="mini-line" /><div className="mini-cta">EXPLORE <span>↗</span></div></div></div><span className="art-orbit" /></div>;
  }
  if (index === 1) {
    return <div className="artwork artwork--system"><div className="system-sheet system-sheet--back"><span>MONDAY / 09:41</span><i>↗</i></div><div className="system-sheet system-sheet--front"><div className="system-dots"><i /><i /><i /></div><span className="system-label">A LITTLE MORE CLARITY</span><b>Focus<br />on the<br /><em>signal.</em></b><div className="signal-bars"><i /><i /><i /><i /><i /><i /><i /></div></div></div>;
  }
  return <div className="artwork artwork--playground"><div className="playground-grid" /><div className="playground-type">WHAT<br />IF<span>?</span></div><div className="playground-orbit playground-orbit--a" /><div className="playground-orbit playground-orbit--b" /><div className="playground-star">✳</div><div className="playground-note">AN OPEN<br />QUESTION</div></div>;
}

export default function SiteExperience() {
  const [menuOpen, setMenuOpen] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);
  const journeyRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

    document.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element));
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const journey = journeyRef.current;
      const journeyDistance = journey ? journey.offsetHeight - window.innerHeight : 0;
      const journeyProgress = journey && journeyDistance > 0
        ? Math.min(1, Math.max(0, (window.scrollY - journey.offsetTop) / journeyDistance))
        : 0;
      journey?.style.setProperty("--journey-progress", journeyProgress.toFixed(3));
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${scrollable > 0 ? window.scrollY / scrollable : 0})`;
      }
    };
    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="scroll-progress" ref={progressRef} />
      <header className="site-header">
        <a className="wordmark group" href="#top" aria-label="Alp Yağız Pala, başa dön">ALP</a>
        <div className="header-middle"><span className="status-dot" /> KİŞİSEL PORTFOLYO <i>·</i> 2026</div>
        <button className="menu-button" type="button" aria-expanded={menuOpen} aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
        <nav className={`site-nav ${menuOpen ? "site-nav--open" : ""}`} aria-label="Ana menü">
          <a href="#about" onClick={closeMenu}>Kim olduğum</a><a href="#skills" onClick={closeMenu}>Beceriler</a><a href="#work" onClick={closeMenu}>Seçili işler</a><a href="#approach" onClick={closeMenu}>Yaklaşım</a>
          <a href="#contact" className="nav-cta group" onClick={closeMenu}>İletişim <Arrow diagonal /></a>
        </nav>
      </header>

      <main>
        <section className="name-journey" id="top" ref={journeyRef} aria-label="Alp Yağız Pala isim animasyonu">
          <div className="journey-sticky">
            <div className="journey-atmosphere" aria-hidden="true" />
            <div className="journey-meta"><span>ALP YAĞIZ PALA</span><span>TED ÜNİVERSİTESİ · BİLGİSAYAR MÜHENDİSLİĞİ</span></div>
            <div className="journey-mountain" aria-hidden="true"><Image src="/images/alp-ski-film.jpg" alt="" fill priority sizes="(max-width: 700px) 110vw, 58vw" /></div>
            <div className="journey-stack" aria-hidden="true">
              <div className="journey-word journey-word--alp">ALP <small>by</small></div>
              <div className="journey-word journey-word--yagiz">YAĞIZ</div>
              <div className="journey-word journey-word--pala">PALA</div>
            </div>
            <h1 className="journey-fullname"><span>ALP</span><span>YAĞIZ</span><span>PALA</span></h1>
            <div className="journey-scroll-cue"><span>AŞAĞI KAYDIR</span><i /></div>
            <a className="journey-next" href="#about"><span>SONRAKİ BÖLÜM</span><i /> KİM OLDUĞUM</a>
            <div className="journey-location"><span>LOCATION · EUROPE</span><strong>ALP MOUNTAINS</strong><small>THE ALPINE RANGE</small></div>
          </div>
        </section>

        <section className="intro-section page-gutter" id="about">
          <div className="section-label" data-reveal><span>01 / KİM OLDUĞUM</span><span className="label-rule" /><span>ALP YAĞIZ PALA</span></div>
          <div className="intro-layout">
            <h2 data-reveal>Merakla<br /><em>kodluyor,</em><br />öğreniyorum.</h2>
            <div className="intro-copy" data-reveal><span className="intro-aside-mark">✳</span><p className="intro-lead">Ben Alp Yağız Pala. TED Üniversitesi Bilgisayar Mühendisliği öğrencisiyim.</p><p>C#, Java ve Python ile programlama yapıyor; PostgreSQL ve MS SQL Server ile veritabanları üzerinde çalışıyorum. Google Cloud Run, Vercel ve RESTful API’lerle projelerimi geliştirmeyi seviyorum.</p><a className="underlined-link group" href="#skills">Becerilerimi keşfet <Arrow /></a></div>
          </div>
        </section>

        <section className="skills-section page-gutter" id="skills">
          <div className="section-label" data-reveal><span>02 / SKILLS &amp; ABILITIES</span><span className="label-rule" /><span>ARAÇLARIM</span></div>
          <div className="skills-heading" data-reveal><h2>Biriktirdiğim<br /><em>araç kutusu.</em></h2><p>Her projede yeni bir şey öğreniyor, bildiklerimi kullanarak fikirleri çalışan ürünlere dönüştürüyorum.</p></div>
          <div className="skills-grid">
            <article data-reveal><span>01</span><h3>Programming</h3><p>C# <i>·</i> Java <i>·</i> Python</p></article>
            <article data-reveal><span>02</span><h3>Databases</h3><p>PostgreSQL <i>·</i> MS SQL Server</p></article>
            <article data-reveal><span>03</span><h3>Cloud &amp; DevOps</h3><p>Google Cloud Run <i>·</i> Vercel <i>·</i> RESTful API</p></article>
            <article data-reveal><span>04</span><h3>Tools &amp; Design</h3><p>Git <i>·</i> GitHub <i>·</i> Figma <i>·</i> JavaFX</p></article>
          </div>
        </section>

        <section className="work-section page-gutter" id="work">
          <div className="section-label" data-reveal><span>03 / SEÇİLİ İŞLER</span><span className="label-rule" /><span>FİKİRLERİN İZİ</span></div>
          <div className="work-intro" data-reveal><h2>Biraz <em>merak.</em><br />Biraz üretim.</h2><p>Bir portfolyo kadar bir çalışma günlüğü.<br />Burada fikirlerin ilk hâlini de seviyorum.</p></div>
          <div className="project-grid">
            {projects.map((project, index) => <a className={`project-card group ${project.className}`} href="#contact" key={project.number} data-reveal><div className="project-card__top"><span>{project.number} / STUDY</span><span>{project.type}</span></div><ProjectArtwork index={index} /><div className="project-card__bottom"><div><h3>{project.title.split("\n").map((line, lineIndex) => <span key={lineIndex}>{line}{lineIndex === 0 && <br />}</span>)}</h3><p>Bir sonraki gerçek hikâyeye yer açılıyor.</p></div><span className="project-arrow"><Arrow diagonal /></span></div></a>)}
          </div>
          <p className="project-note">BU GÖRSELLER TASARIM ÇALIŞMALARI İÇİN HAZIRLANMIŞ DEMO KONSEPTLERDİR.</p>
        </section>

        <section className="approach-section page-gutter" id="approach">
          <div className="section-label" data-reveal><span>04 / YAKLAŞIM</span><span className="label-rule" /><span>İŞİN MUTFAĞI</span></div>
          <div className="approach-layout"><h2 data-reveal>Önce iyi<br />bir <em>soru.</em></h2><div className="approach-list">
            <article data-reveal><span>01</span><div><h3>Dinle ve fark et</h3><p>Problemi, bağlamı ve insanı gerçekten anlamaya çalış.</p></div><b>↗</b></article>
            <article data-reveal><span>02</span><div><h3>Basitleştir, somutlaştır</h3><p>Bir fikri erkenden görünür yap. Gerçek geri bildirim al.</p></div><b>↗</b></article>
            <article data-reveal><span>03</span><div><h3>Özenle tamamla</h3><p>İşlev, his ve detay aynı deneyimin parçası.</p></div><b>↗</b></article>
          </div></div>
          <div className="big-thought" data-reveal><span>“</span><p>İyi tasarım, doğru soruya<br /><em>verilmiş nazik bir cevaptır.</em></p><i>— KÜÇÜK BİR NOT</i></div>
        </section>

        <section className="contact-section page-gutter" id="contact"><div className="contact-top"><span>05 / İLETİŞİM</span><span>YENİ BİR ŞEYE BAŞLAYALIM</span></div><div className="contact-main" data-reveal><h2>İyi bir fikir<br />bulaşıcıdır<span>.</span></h2><div className="contact-aside"><p>Bir şey inşa ediyorsan, yeni bir bakış arıyorsan ya da sadece merhaba demek istersen — konuşalım.</p><a className="contact-button group" href="mailto:hello@example.com">Bir merhaba bırak <Arrow diagonal /></a><span className="contact-note">E-POSTA ADRESİNİ KENDİ ADRESİNLE DEĞİŞTİR.</span></div></div><div className="contact-orbit" aria-hidden="true"><i>✳</i></div></section>
      </main>

      <footer className="site-footer page-gutter"><a className="wordmark" href="#top">ALP</a><span>MERAKLA TASARLANDI · ÖZENLE YAPILDI</span><a href="#top">BAŞA DÖN ↑</a><span>© 2026 ALP YAĞIZ PALA</span></footer>
    </>
  );
}
