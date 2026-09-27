import { useEffect } from "react";

function Contact() {
  useEffect(() => {
    const sections = document.querySelectorAll(".contact-page .contact-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8%" },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="inner-page contact-page">
      <section className="contact-layout page-width contact-reveal">
        <div className="contact-copy reveal-up"><span className="eyebrow">We would love to hear from you</span><h1>Let’s find your <em>signature.</em></h1><p>For styling appointments, order questions, and everything in between, our team is here.</p><div className="contact-details"><a href="mailto:hello@velvora.com"><small>Email</small>hello@velvora.com</a><a href="tel:+919876543210"><small>Call</small>+91 98765 43210</a><span><small>Studio hours</small>Mon – Sat, 10 am – 6 pm</span></div></div>
        <form className="contact-form reveal-image"><div className="form-heading"><span className="eyebrow">Send a note</span><p>Tell us a little about what you are looking for.</p></div><label>Name<input type="text" placeholder="Your name" required /></label><label>Email<input type="email" placeholder="you@example.com" required /></label><label>Message<textarea placeholder="How can we help?" rows="4" required /></label><button className="button button-dark" type="submit">Send enquiry <span>↗</span></button></form>
      </section>
      <section className="contact-image-strip contact-reveal"><img src="/images/conatact2.png" alt="Velvora festive fashion" /><div><span className="eyebrow">In good company</span><h2>Dress for the moments<br />you will remember.</h2></div><img src="/images/conatact1.png" alt="Velvora occasion fashion" /></section>
      <section className="contact-section contact-page-section contact-reveal"><div className="contact-inner"><span className="eyebrow">Stay close</span><h2>Follow the story.</h2><p>New collections, studio notes, and a little beauty in your inbox.</p><a className="button button-light" href="mailto:hello@velvora.com">Join our journal</a></div>
      </section>
    </main>
  );
}

export default Contact;