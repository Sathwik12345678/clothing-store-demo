import { useEffect } from "react";

function About() {
  useEffect(() => {
    const sections = document.querySelectorAll(".about-page .reveal-section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8%" },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="inner-page about-page">
      <section className="inner-hero about-hero about-intro reveal-section">
        <div className="inner-hero-art reveal-image"><img src="/images/about.png" alt="Velvora fashion campaign" /></div>
        <div className="inner-hero-copy reveal-up">
          <span className="eyebrow">The Velvora story</span>
          <h1>Clothes with a <em>point of view.</em></h1>
          <p>Modern heirlooms for women who dress with intention, made in the language of Indian craft and contemporary ease.</p>
        </div>
      </section>

      <section className="story-section page-width reveal-section">
        <div className="story-number">01 <span>/</span></div>
        <div className="story-copy"><span className="eyebrow">Our point of view</span><h2>Beauty lives in the details.</h2><p>Velvora began with a simple belief: getting dressed should feel like coming home to yourself. Each collection brings together rich textiles, thoughtful proportions, and the quiet confidence of something made to last.</p><p>We work towards pieces that move through your life with you, from intimate celebrations to the days that deserve a little more ceremony.</p></div>
        <div className="story-collage"><img className="collage-main" src="/images/Product1.png" alt="Velvora statement look" /><img className="collage-small" src="/images/product3.png" alt="Velvora garment detail" /></div>
      </section>

      <section className="values-section reveal-section"><div className="page-width"><span className="eyebrow">What we believe</span><div className="values-grid"><article><span>01</span><h3>Considered</h3><p>Every silhouette earns its place through texture, proportion, and purpose.</p></article><article><span>02</span><h3>Rooted</h3><p>Craft and culture are not details to us. They are where the story begins.</p></article><article><span>03</span><h3>Personal</h3><p>Clothing should make room for your life, your mood, and your own signature.</p></article></div></div></section>
    </main>
  );
}

export default About;