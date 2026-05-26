import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const NAV = [
  { href: "#coatings", label: "Покрытия" },
  { href: "#concrete", label: "Бетон" },
  { href: "#applications", label: "Применение" },
  { href: "#works", label: "Работы" },
  { href: "#tech", label: "Технология" },
  { href: "#certs", label: "Сертификаты" },
  { href: "#contacts", label: "Контакты" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-shadow ${
        scrolled ? "shadow-[0_4px_20px_-8px_rgba(0,0,0,0.15)]" : ""
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between gap-4 px-4 lg:px-6">
        <a href="#top" className="flex shrink-0 items-center" aria-label="Полимер Эксперт">
          <img src={logo} alt="Полимер Эксперт" className="h-10 w-auto lg:h-12" />
        </a>

        <nav className="hidden lg:flex items-center gap-4 xl:gap-5">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="whitespace-nowrap text-[13px] font-semibold uppercase tracking-wide text-[#111] hover:text-[#FFC107] transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex shrink-0 items-center gap-3">
          <a
            href="tel:+79182125000"
            className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap font-display text-[15px] font-bold text-[#111] hover:text-[#FFC107] transition-colors"
          >
            <Phone className="h-4 w-4 shrink-0" />
            <span className="whitespace-nowrap">+7 (918) 212-50-00</span>
          </a>
          <a
            href="#form"
            className="whitespace-nowrap rounded-full bg-[#FFC107] px-4 py-2.5 text-xs font-bold uppercase text-[#111] shadow-card hover:brightness-95 transition"
          >
            Получить расчёт
          </a>
        </div>

        <button
          className="lg:hidden flex items-center justify-center rounded-md p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Меню"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-white">
          <nav className="mx-auto flex max-w-[1280px] flex-col gap-1 px-4 py-4">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-semibold uppercase text-[#111] hover:bg-surface"
              >
                {n.label}
              </a>
            ))}
            <a
              href="tel:+79182125000"
              className="mt-2 flex items-center gap-2 px-3 py-2 font-display font-bold"
            >
              <Phone className="h-4 w-4" /> +7 (918) 212-50-00
            </a>
            <a
              href="#form"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-full bg-[#FFC107] px-5 py-3 text-center text-sm font-bold uppercase"
            >
              Получить расчёт
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
