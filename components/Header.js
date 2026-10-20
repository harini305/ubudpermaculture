"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { NAV, SITE } from "@/lib/site";
import { ExternalIcon } from "./Icons";
import styles from "./Header.module.css";

// Routes that open with a full-bleed photo/video, where the header starts transparent.
const HERO_ROUTES = ["/", "/activities", "/glamping", "/farmer-market", "/biodynamic-retreat", "/accommodation"];
const hasHero = (path) => HERO_ROUTES.includes(path) || path.startsWith("/activities/");

const isActive = (path, href) => (href === "/" ? path === "/" : path === href || path.startsWith(`${href}/`));

export default function Header({ logoWhite, logoColour }) {
  const pathname = usePathname() || "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);
  const panelRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = useCallback((restoreFocus = true) => {
    setOpen(false);
    if (restoreFocus) toggleRef.current?.focus();
  }, []);

  // Close the panel whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const page = [document.getElementById("main"), document.getElementById("site-footer")];
    if (!open) {
      page.forEach((el) => el && (el.inert = false));
      document.documentElement.style.overflow = "";
      return;
    }
    page.forEach((el) => el && (el.inert = true));
    document.documentElement.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key !== "Tab" || !panelRef.current) return;
      const items = panelRef.current.querySelectorAll("a[href], button");
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    const onResize = () => window.innerWidth > 1080 && close(false);
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
      page.forEach((el) => el && (el.inert = false));
      document.documentElement.style.overflow = "";
    };
  }, [open, close]);

  const transparent = hasHero(pathname) && !scrolled;

  return (
    <>
      <header className={`${styles.header} ${transparent ? styles.transparent : styles.solid}`}>
        <div className={`container ${styles.bar}`}>
          <Link href="/" className={styles.brand} aria-label="Ubud Permaculture, home">
            <img
              src={transparent ? logoWhite : logoColour}
              alt=""
              width="34"
              height="51"
              className={styles.logo}
            />
            <span className={styles.wordmark}>Ubud Permaculture</span>
          </Link>

          <nav className={styles.desktopNav} aria-label="Main">
            <ul>
              {NAV.map((item) => (
                <li key={item.href}>
                  {item.external ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className={styles.navLink}>
                      {item.label}
                      <ExternalIcon />
                      <span className="visually-hidden"> ({item.note}, opens in a new tab)</span>
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className={styles.navLink}
                      aria-current={isActive(pathname, item.href) ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <Link href="/book" className={`btn btn--primary ${styles.book}`} aria-current={pathname === "/book" ? "page" : undefined}>
              Book now
            </Link>
          </nav>

          <button
            ref={toggleRef}
            type="button"
            className={styles.toggle}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
          >
            <span className={styles.toggleBars} aria-hidden="true" />
            <span className="visually-hidden">Open menu</span>
          </button>
        </div>
      </header>

      <div className={`${styles.overlay} ${open ? styles.overlayOpen : ""}`} onClick={() => close()} aria-hidden="true" />
      <div
        id="mobile-menu"
        ref={panelRef}
        className={`${styles.panel} ${open ? styles.panelOpen : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        <button ref={closeRef} type="button" className={styles.close} onClick={() => close()}>
          <span aria-hidden="true" className={styles.closeIcon} />
          <span className="visually-hidden">Close menu</span>
        </button>
        <nav aria-label="Mobile">
          <ul className={styles.panelList}>
            {[{ label: "Home", href: "/" }, ...NAV].map((item, i) => (
              <li key={item.href} style={{ "--i": i }}>
                {item.external ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className={styles.panelLink}>
                    {item.label}
                    <ExternalIcon />
                    <span className={styles.panelNote}>{item.note}</span>
                    <span className="visually-hidden"> (opens in a new tab)</span>
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className={styles.panelLink}
                    aria-current={isActive(pathname, item.href) ? "page" : undefined}
                    onClick={() => close(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.panelFoot}>
          <Link href="/book" className="btn btn--light" onClick={() => close(false)}>
            Book an activity
          </Link>
          <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className={styles.panelSmall}>
            WhatsApp {SITE.phoneDisplay}
            <span className="visually-hidden"> (opens WhatsApp)</span>
          </a>
        </div>
      </div>
    </>
  );
}
