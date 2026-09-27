import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer"><div className="footer-main"><div className="footer-brand"><Link className="footer-wordmark" to="/">VELVORA</Link><p>Pure elegance, made for your story.</p></div><div><span className="footer-label">Explore</span><a href="#products">Collection</a><a href="#about">About us</a><a href="#videos">Journal</a></div><div><span className="footer-label">Connect</span><a href="mailto:hello@velvora.com">hello@velvora.com</a><a href="tel:+919876543210">+91 98765 43210</a><span>Instagram &nbsp; Pinterest</span></div></div><div className="footer-bottom"><span>© 2026 Velvora Clothing</span><span>Designed for the beautifully dressed.</span><span>Privacy &nbsp; Terms</span></div>
    </footer>
  );
}

export default Footer;