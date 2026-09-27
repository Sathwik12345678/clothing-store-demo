import { useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/productcard";

function Home() {
  useEffect(() => {
    const revealItems = document.querySelectorAll(
      "[data-reveal], .product-card"
    );

    revealItems.forEach((item, index) => {
      item.classList.add("reveal-on-scroll");
      item.style.setProperty("--reveal-order", index % 6);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.16 }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="home-page">
      <section className="hero-section reveal-section" id="home">
        <img
          className="hero-image"
          src="/images/hero.png"
          alt="Velvora collection featuring black and red occasion wear"
        />
        <div className="hero-copy">
          <span className="eyebrow hero-kicker">Velvora occasion wear</span>
          <h1 className="hero-title">Pure elegance for every story.</h1>
          <p className="hero-intro">
            Modern Indian silhouettes, crafted for celebrations that deserve a
            little more presence.
          </p>
          <a className="button button-light hero-button" href="#products">
            Shop the edit
          </a>
        </div>
      </section>

      <section className="products-section section-shell reveal-section home-motion" id="products">
        <div className="section-heading" data-reveal="fade-up">
          <div>
            <span className="eyebrow">The edit</span>
            <h2>Signature styles</h2>
          </div>
          <a className="text-link" href="#products">
            View all pieces <span>↗</span>
          </a>
        </div>
        <div className="product-grid">
          <ProductCard
            image="/images/Product1.png"
            name="Noir embroidered suit"
            price="₹2,499"
          />
          <ProductCard image="/images/product2.png" name="Crimson festive edit" price="₹2,499" />
          <ProductCard image="/images/product3.png" name="Rosewood drape set" price="₹2,699" />
          <ProductCard image="/images/product4.png" name="Heirloom evening look" price="₹2,799" />
        </div>
      </section>

      <section className="about-section section-shell reveal-section home-motion" id="about">
        <div className="about-image" data-reveal="slide-left">
          <img src="/images/Product1.png" alt="Velvora craftsmanship and textiles" />
        </div>
        <div className="about-copy" data-reveal="slide-right">
          <span className="eyebrow">Our point of view</span>
          <h2>Tradition, tailored for now.</h2>
          <p>
            Velvora is a celebration of the woman who carries her story with
            quiet confidence. We bring heirloom craft, considered silhouettes,
            and a modern sense of ease together in every piece.
          </p>
          <Link className="text-link" to="/about">
            Our story <span>↗</span>
          </Link>
        </div>
      </section>

      <section className="video-section section-shell reveal-section home-motion" id="videos">
        <div className="section-heading" data-reveal="fade-up">
          <div>
            <span className="eyebrow">Behind the look</span>
            <h2>Made to be remembered</h2>
          </div>
          <p className="heading-note">
            A closer look at the details, movement, and hands behind the
            collection.
          </p>
        </div>
        <div className="video-grid">
          <div className="video-tile video-tile-large" data-reveal="zoom-up">
            <video autoPlay loop muted playsInline preload="auto" aria-label="Velvora craftsmanship film">
              <source src="/images/Video-1.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="video-tile" data-reveal="zoom-up">
            <video autoPlay loop muted playsInline preload="auto" aria-label="Velvora occasion edit">
              <source src="/images/Video-2.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <section className="contact-section reveal-section home-motion" id="contact">
        <div className="contact-inner" data-reveal="scale-up">
          <span className="eyebrow">Visit or write to us</span>
          <h2>Let's find your signature.</h2>
          <p>
            For styling appointments, orders, and everything in between, our
            team is here.
          </p>
          <a className="button button-light" href="mailto:hello@velvora.com">
            hello@velvora.com
          </a>
        </div>
      </section>
    </main>
  );
}

export default Home;
