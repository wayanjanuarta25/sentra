import Link from "next/link";
import styles from "./Footer.module.css";

const NAV_LINKS = [
  { label: "Tentang", href: "#tentang" },
  { label: "Program", href: "#program" },
  { label: "Transformasi", href: "#transformasi" },
  { label: "Dokumentasi", href: "#dokumentasi" },
  { label: "Kontak", href: "#kontak" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.label}>
          Platform Transformasi Digital<br/>Untuk UMKM Indonesia
        </div>
        
        <div className={`${styles.hugeTitle} font-display`}>
          SENTRA.
        </div>

        <div className={styles.footerBottom}>
          <nav className={styles.nav}>
            {NAV_LINKS.map((link) => (
              <Link key={link.label} href={link.href} className={styles.navLink}>
                {link.label}
              </Link>
            ))}
          </nav>
          
          <div className={styles.copy}>
            DIBUAT UNTUK<br/>USAHA LOKAL INDONESIA.
          </div>
        </div>
      </div>
    </footer>
  );
}
