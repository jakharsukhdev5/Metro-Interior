const Arrow = () => <span aria-hidden="true">↗</span>;

const services = [
  ['01','Residential Interiors','Bespoke homes, crafted around your way of living.'],
  ['02','Commercial Spaces','Purposeful environments that make work feel elevated.'],
  ['03','Turnkey Solutions','One accountable team from first sketch to final handover.'],
  ['04','Furniture & Styling','Curated pieces, materials and finishing touches.'],
];

export default function HomePage(){
  return (
    <main>
      <header className="siteHeader">
        <a className="brand" href="#top" aria-label="Metro Interior Decorators home">
          <img src="/images/metro-logo.svg" alt="Metro Interior Decorators" />
        </a>
        <nav className="desktopNav" aria-label="Primary navigation">
          <a className="active" href="#top">Home</a>
          <a href="#studio">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#journal">Journal</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="talk" href="#contact"><span>Let&apos;s talk</span><b>→</b></a>
      </header>

      <section className="hero" id="top">
        <div className="heroCopy">
          <p className="eyebrow">Spaces beyond ordinary</p>
          <h1>Designing<br/>a More <em>Beautiful</em><br/>Tomorrow</h1>
          <p className="heroLead">We create timeless interiors that balance aesthetics, function and emotion — designed around the way you live.</p>
          <a className="arrowLink" href="#projects"><span className="circleArrow">→</span><span>Explore our work</span></a>
          <div className="heroIndex"><span>01</span><i></i><span>03</span></div>
        </div>
        <div className="heroVisual">
          <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2200&q=90" alt="Refined contemporary living room interior" />
          <div className="heroScrim"></div>
          <div className="floatingWords"><span>People</span><span>Spaces</span><span>Stories</span></div>
          <div className="locationTag">Bangalore<br/>& beyond</div>
        </div>
      </section>

      <section className="approach" id="studio">
        <div>
          <p className="sectionLabel red">Our approach</p>
          <h2>Thoughtful Design.<br/>Meaningful Living.</h2>
        </div>
        <div className="approachBody">
          <p>Great design goes beyond decoration. It shapes how a space feels, how it flows, and how it becomes part of your everyday life.</p>
          <a href="#philosophy">Our philosophy <Arrow/></a>
        </div>
        <div className="stats">
          <div><strong>150+</strong><span>Projects delivered</span></div>
          <div><strong>8+</strong><span>Years of excellence</span></div>
          <div><strong>100%</strong><span>Client satisfaction</span></div>
        </div>
        <div className="redSignature"><span>Better</span><span>Spaces.</span><span>Brighter</span><span>Lives.</span></div>
      </section>

      <section className="services" id="services">
        <div className="redMaterial" aria-hidden="true"><img src="https://images.unsplash.com/photo-1615529328331-f8917597711f?auto=format&fit=crop&w=900&q=90" alt="" /></div>
        <div className="servicesGrid">
          <div className="servicesHeading">
            <p className="sectionLabel red">Our services</p>
            <h2>One studio.<br/>Every detail.</h2>
          </div>
          {services.map(([n,title,copy]) => (
            <article className="serviceCard" key={title}>
              <span className="serviceNo">{n}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <a href="#contact" aria-label={`Learn about ${title}`}>→</a>
            </article>
          ))}
        </div>
      </section>

      <section className="featured" id="projects">
        <div className="featuredCopy">
          <p className="sectionLabel">Featured project</p>
          <h2>The Courtyard Home</h2>
          <p className="meta">Bangalore, India · Residential</p>
          <p className="projectText">A modern home shaped around light, calm and connection. Natural materials, open proportions and quiet details create a living experience that feels effortless.</p>
          <a className="textLink" href="#contact">View project <Arrow/></a>
          <div className="projectPager"><b>01</b><i></i><span>02</span><span>03</span></div>
        </div>
        <div className="featuredImage"><img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1800&q=90" alt="Courtyard-inspired dining interior" /></div>
        <blockquote>“A home should tell your story.”<span>Metro Interior Decorators</span></blockquote>
      </section>

      <section className="projectStrip" aria-label="Selected projects">
        <article><img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=88" alt="The Ridge House"/><div><span>01</span><h3>The Ridge House</h3><p>Private Residence</p></div></article>
        <article><img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=88" alt="Solace boutique project"/><div><span>02</span><h3>Solace</h3><p>Boutique Hospitality</p></div></article>
        <article><img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=88" alt="The Atelier workspace"/><div><span>03</span><h3>The Atelier</h3><p>Creative Workspace</p></div></article>
      </section>

      <section className="philosophy" id="philosophy">
        <div className="materialImage"><img src="https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1200&q=88" alt="Natural stone material detail" /></div>
        <div className="philosophyCopy">
          <p className="sectionLabel red">Our philosophy</p>
          <h2>Material.<br/>Light.<br/><em>Life.</em></h2>
          <p>We work with honest materials, measured proportions and natural light to create interiors with depth, restraint and longevity.</p>
          <a className="textLink" href="#contact">Discover our approach <Arrow/></a>
        </div>
        <div className="quotePanel"><p>Spaces made<br/>to be lived in,<br/>not simply seen.</p></div>
      </section>

      <section className="contact" id="contact">
        <p className="sectionLabel red">Start a conversation</p>
        <h2>Your space deserves<br/><em>something extraordinary.</em></h2>
        <p>Tell us what you are imagining. We&apos;ll turn it into a considered, beautifully resolved interior.</p>
        <a href="mailto:hello@metrointeriordecorators.com">Book a consultation <span>→</span></a>
      </section>

      <footer id="journal">
        <div className="footerBrand"><img src="/images/metro-logo.svg" alt="Metro Interior Decorators"/><p>Spaces beyond ordinary.</p></div>
        <div className="footerNav"><a href="#top">Home</a><a href="#studio">Studio</a><a href="#services">Services</a><a href="#projects">Projects</a><a href="#contact">Contact</a></div>
        <div className="footerMeta"><p>Bangalore · India</p><p>© 2026 Metro Interior Decorators</p></div>
      </footer>
    </main>
  );
}
