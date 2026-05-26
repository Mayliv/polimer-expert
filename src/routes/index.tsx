import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Shield, ShieldCheck, Award, Thermometer, FlaskConical, Layers, Droplets, Gauge, Building2,
  ArrowRight, FileText, Flame,
  Hammer, Sparkles, Wrench, Disc3, Phone, Mail, Send, MessageCircle, Download, X, Play,
  ChevronDown,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { QuoteSection } from "@/components/site/QuoteSection";
import heroBg from "@/assets/hero-floor.jpg";
import logo from "@/assets/logo.png";
import director from "@/assets/director.webp";
import workKatren from "@/assets/work-katren.jpg";
import workShops from "@/assets/work-shops.jpg";
import workKids from "@/assets/work-kids.jpg";
import workVeles from "@/assets/work-veles.jpg";
import firePreview from "@/assets/fire.webp";
import firePdf from "@/assets/fire.pdf";
import eaesPreview from "@/assets/eaes.webp";
import eaesPdf from "@/assets/eaes.pdf";
import testPreview from "@/assets/test.webp";
import testPdf from "@/assets/test.pdf";
import bukletPdf from "@/assets/buklet.pdf";
import laprolinCatalog from "@/assets/laprolin-catalog.pdf";
import ingri from "@/assets/ingri.webp";
import lincrete from "@/assets/lincrete.webp";
import sika from "@/assets/sika.webp";
import praspan from "@/assets/praspan.webp";
import lincreteLogo from "@/assets/lincrete.webp";
import praspanLogo from "@/assets/praspan.webp";
import sikaLogo from "@/assets/sika.webp";
import ingriLogo from "@/assets/ingri.webp";
import shipBefore from "@/assets/ship-before.webp";
import shipAfter from "@/assets/ship-after.webp";
import bipLogo from "@/assets/Bip_logo.svg.png";

export const Route = createFileRoute("/")({
  component: LandingPage,
  head: () => ({
    meta: [
      { title: "Промышленные полы под ключ на полимере Лапролин — Полимер Эксперт" },
      { name: "description", content: "Сертифицированные промышленные полимерные полы на основе материала Лапролин Экстра Рус pH 14. Гарантия до 5 лет. Работаем по всей России." },
      { property: "og:title", content: "Полимер Эксперт — промышленные полы под ключ" },
      { property: "og:description", content: "Сертифицированный полимер Лапролин. Гарантия до 5 лет. Работаем по всей России." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

/* ---------- shared ---------- */
function SectionTitle({ kicker, children, dark }: { kicker?: string; children: React.ReactNode; dark?: boolean }) {
  return (
    <div className="mb-12 max-w-4xl">
      {kicker && (
        <p className="mb-3 font-display text-xs font-bold uppercase tracking-[0.2em] text-[#FFC107]">
          {kicker}
        </p>
      )}
      <div className="mb-5 h-1 w-16 rounded-full bg-[#FFC107]" />
      <h2 className={`section-title text-3xl md:text-5xl lg:text-6xl ${dark ? "text-white" : "text-[#111]"}`}>
        {children}
      </h2>
    </div>
  );
}

/* ---------- 1. Hero ---------- */
function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-[#111] text-white">
      <img
        src={heroBg}
        alt=""
        aria-hidden
        width={1920}
        height={1080}
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-[#111]/95 via-[#111]/80 to-[#111]"
      />
      <div className="mx-auto max-w-[1280px] px-4 lg:px-8 pt-10 pb-10 md:pt-14 md:pb-14 lg:pt-16 lg:pb-16">
        <div className="grid gap-10 lg:gap-12 lg:grid-cols-12 items-center">
          {/* LEFT — director */}
          <div className="order-2 lg:order-1 lg:col-span-5 flex flex-col items-center lg:items-start">
            <div className="relative w-full max-w-[320px] lg:max-w-none">
              <img
                src={director}
                alt="Лукиянов Руслан Алексеевич — генеральный директор"
                className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
              />
            </div>
            <div className="mt-4 text-center lg:text-left">
              <p className="font-display text-lg font-extrabold text-white">Лукиянов Руслан Алексеевич</p>
              <p className="text-sm text-white/60">Генеральный директор</p>
            </div>
          </div>

          {/* RIGHT — text */}
          <div className="order-1 lg:order-2 lg:col-span-7">
            <h1 className="section-title text-[1.425rem] sm:text-[1.78rem] md:text-[2.14rem] lg:text-[2.85rem]">
              Профессиональные промышленные полы для вашего бизнеса — Ваша экономия на простоях и разрушениях.
            </h1>
            <p className="mt-6 max-w-2xl text-base md:text-lg text-white/80 leading-relaxed">
              Работаем по всей России. Полы под ключ на основе сертифицированных материалов.
              Опыт с полимерными системами любой сложности. Гарантия на покрытие — до 5 лет.
            </p>
            <p className="mt-4 max-w-2xl text-sm md:text-base text-white/60 leading-relaxed">
              15+ квалифицированных мастеров. Полная оснащённость оборудованием LINOLIT. Расчёт объекта за 15 минут.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#form"
                className="inline-flex items-center gap-2 rounded-full bg-[#FFC107] px-7 py-4 font-display text-sm font-bold uppercase tracking-wider text-[#111] shadow-card hover:brightness-95 transition whitespace-nowrap"
              >
                Расчет объекта за 15 минут <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="tel:+79182125000"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-4 font-display text-sm font-bold uppercase tracking-wider text-white hover:bg-white/10 transition whitespace-nowrap"
              >
                <Phone className="h-4 w-4" /> +7 (918) 212-50-00
              </a>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: Building2, label: "Выполнено 60+ промышленных объектов" },
                { icon: Layers, label: "Нанесено 300 000+ м² полимеров" },
                { icon: Award, label: "15+ лет опыта в промышленности" },
              ].map((b) => (
                <div key={b.label} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
                  <b.icon className="h-5 w-5 text-[#FFC107] shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold leading-snug">{b.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 w-full">
              <span className="text-xs uppercase tracking-widest text-white/40 font-semibold block mb-3">Материалы партнёров</span>
              <div className="flex items-center justify-between w-full">
                {[
                  { src: ingri, extra: "" },
                  { src: lincrete, extra: "invert" },
                  { src: sika, extra: "" },
                  { src: praspan, extra: "" },
                ].map((item, i) => (
                  <img key={i} src={item.src} alt="" aria-hidden className={`h-10 w-auto object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition ${item.extra}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Coatings (6 items, no Laprolin mention) ---------- */
function Coatings() {
  const items = [
    { title: "Эпоксидные", desc: "Высокая химическая и механическая стойкость. Применяются на производствах, складах, в логистических комплексах с высокой нагрузкой." },
    { title: "Полиуретановые", desc: "Эластичность, стойкость к ударам и вибрации. Оптимальный выбор для логистических центров и многоуровневых паркингов." },
    { title: "Акриловые", desc: "Быстрое отверждение, возможность нанесения при низких температурах. Подходят для срочных работ и холодных помещений." },
    { title: "Полиуретанцементные", desc: "Для пищевых производств: выдерживают резкие перепады температур, агрессивную мойку и пар." },
    { title: "Полиэфирные", desc: "Экономичное решение с хорошей химической стойкостью для технических и подсобных помещений." },
    { title: "Бетонные полы с топпингом", desc: "Упрочнённые верхним слоем из специальных смесей, с приёмкой бетона и вязкой арматуры. Оптимальное решение для складов и производств с высокими динамическими нагрузками." },
  ];
  return (
    <section id="coatings" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-4 lg:px-8">
        <SectionTitle kicker="Каталог покрытий">
          Защитные покрытия для промышленных полов
        </SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <article key={it.title} className="card-hover group flex flex-col rounded-2xl border border-border bg-white p-7 shadow-card">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#111] text-[#FFC107]">
                  <Layers className="h-6 w-6" />
                </div>
                <span className="font-display text-sm font-bold text-muted-foreground">0{i + 1}</span>
              </div>
              <h3 className="mt-5 font-display text-xl font-extrabold uppercase text-[#111]">{it.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{it.desc}</p>
              <a
                href="#form"
                className="mt-6 inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-[#111] group-hover:text-[#FFC107] transition"
              >
                Рассчитать <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Concrete services (expanded copy + tooltip) ---------- */
function ConcreteServices() {
  const items = [
    {
      icon: Disc3,
      title: "Шлифовка бетона",
      bold: "Идеально ровная база и отсутствие пыли.",
      body: "Удаляем верхний хрупкий слой («цементное молочко») и выравниваем перепады. Пол становится идеально гладким, в 2 раза более прочным и на 100% готовым к интенсивным нагрузкам или нанесению защитных покрытий.",
    },
    {
      icon: Hammer,
      title: "Бучардирование",
      bold: "Экстремальная очистка и защита от скольжения.",
      body: "Создаём равномерно шероховатую фактуру на бетоне. Идеальное решение для уличных площадок, пандусов и ступеней (эти зоны перестанут скользить). Также метод позволяет быстро и глубоко удалить самые стойкие старые покрытия любой толщины.",
    },
    {
      icon: Sparkles,
      title: "Полировка бетона",
      bold: "Премиальный вид и вечная прочность без лишних затрат.",
      body: "Превращаем обычный серый бетон в прочную зеркальную поверхность. Пол перестаёт пылить, не впитывает грязь, шикарно выглядит (не хуже мрамора) и служит десятилетиями. Максимальная экономия на уборке и освещении помещения.",
    },
    {
      icon: Wrench,
      title: "Ремонт старых полов",
      bold: "Вторая жизнь вашего пола — без демонтажа и переплат.",
      body: "Устраняем трещины, выбоины и восстанавливаем разрушенные швы. Локальный ремонт и укрепление слабых участков обойдутся в разы дешевле и быстрее, чем полная заливка новой бетонной стяжки.",
    },
    {
      icon: Layers,
      title: "Подготовка под полимеры",
      bold: "Секрет полимерного пола, который не отслоится через год.",
      body: "Создаём правильную микрошероховатость для 100% сцепления (адгезии) дорогих наливных полов с бетоном. Тщательно удаляем грязь, масла и пустоты. Это ваша главная страховка от вздутия и трещин финишного покрытия.",
    },
  ];
  return (
    <section id="concrete" className="bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-4 lg:px-8">
        <SectionTitle kicker="Работы по бетону">
          Подготовка и обработка бетонных оснований
        </SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it) => (
            <div
              key={it.title}
              title={it.bold}
              className="card-hover group relative rounded-2xl bg-white p-7 shadow-card border border-border/50"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#FFC107]">
                <it.icon className="h-7 w-7 text-[#111]" />
              </div>
              <h3 className="mt-5 font-display text-base font-extrabold uppercase text-[#111] leading-tight">
                {it.title}
              </h3>
              <p className="mt-4 font-display text-base md:text-lg font-extrabold text-[#111] leading-snug group-hover:text-[#111]">
                {it.bold}
              </p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {it.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Applications — accordion of 20 industries ---------- */
function Applications() {
  const items: { name: string; options: string[] }[] = [
    { name: "Пищевая промышленность", options: ["Полиуретановый наливной (пищевой допуск) — 15–20 лет", "Эпоксидный химстойкий — 10–15 лет", "Цементно-полимерный — 8–12 лет"] },
    { name: "Фармацевтика", options: ["Эпоксидный — 15–20 лет", "Полиуретановый стерильный — 12–15 лет", "ПВХ-покрытия антистатические — 8–10 лет"] },
    { name: "Нефтегазовая отрасль", options: ["Химстойкий эпоксидный — 20–25 лет", "Полиуретан-цементный — 12–15 лет", "Топпинговый упрочнённый — 8–10 лет"] },
    { name: "Химическая промышленность", options: ["Винилэфирный кислотостойкий — 20–30 лет", "Эпоксидный химстойкий — 15–20 лет", "Полиуретановый — 10–15 лет"] },
    { name: "Автомобильные паркинги", options: ["Полиуретановый износостойкий — 15–20 лет", "Эпоксидный с кварцевым песком — 10–15 лет", "Топпинговый бетон — 5–10 лет"] },
    { name: "Складские комплексы", options: ["Топпинговый упрочнённый — 10–20 лет", "Эпоксидный наливной — 8–10 лет", "Полимерцементный — 7–9 лет"] },
    { name: "Электронная промышленность", options: ["Антистатический эпоксидный — 12–18 лет", "Токопроводящий полиуретановый — 10–15 лет", "ПВХ антистатический — 5–7 лет"] },
    { name: "Медицинские учреждения", options: ["Полиуретановый антибактериальный — 15–20 лет", "Эпоксидный бесшовный — 10–15 лет", "ПВХ гомогенный — 7–9 лет"] },
    { name: "Холодильные камеры", options: ["Полиуретан-цементный морозостойкий — 15–25 лет", "Эпоксидный низкотемпературный — 10–15 лет", "Полимербетон — 8–10 лет"] },
    { name: "Авиационные ангары", options: ["Ультрапрочный эпоксидный — 20–30 лет", "Полиуретановый с высокой нагрузкой — 15–20 лет", "Топпинговый металлосодержащий — 10–15 лет"] },
    { name: "Переработка отходов", options: ["Химстойкий винилэфирный — 15–25 лет", "Эпоксидный кислотоупорный — 12–20 лет", "Полимерцементный — 8–15 лет"] },
    { name: "Текстильная промышленность", options: ["Антистатический полиуретановый — 12–18 лет", "Эпоксидный износостойкий — 10–15 лет", "Топпинговый — 7–12 лет"] },
    { name: "Пивоваренные заводы", options: ["Полиуретан-цементный пищевой — 15–25 лет", "Эпоксидный химстойкий — 12–20 лет", "Кислотощелочестойкий — 10–15 лет"] },
    { name: "Автосервисы и СТО", options: ["Полиуретановый маслостойкий — 12–20 лет", "Эпоксидный с кварцем — 8–15 лет", "Упрочнённый топпингом — 5–10 лет"] },
    { name: "Электростанции и подстанции", options: ["Антистатический эпоксидный — 15–25 лет", "Диэлектрический полиуретановый — 12–20 лет", "Токопроводящий — 10–15 лет"] },
    { name: "Очистные сооружения", options: ["Химстойкий винилэфирный — 20–30 лет", "Эпоксидный кислотоупорный — 15–25 лет", "Полимербетон — 10–20 лет"] },
    { name: "Торговые центры", options: ["Полиуретановый декоративный — 15–25 лет", "Эпоксидный 3D — 10–20 лет", "Мозаичный терраццо — 20–50 лет"] },
    { name: "Металлургия", options: ["Термостойкий эпоксидный — 15–25 лет", "Ультрапрочный полиуретановый — 12–20 лет", "Топпинговый металлосодержащий — 10–18 лет"] },
    { name: "Логистические центры", options: ["Топпинговый упрочнённый — 15–25 лет", "Полиуретановый износостойкий — 12–20 лет", "Эпоксидный наливной — 10–15 лет"] },
    { name: "Водоподготовка и бассейны", options: ["Эпоксидный водостойкий — 15–25 лет", "Полиуретановый гидроизоляционный — 12–20 лет", "Полимерцементный — 8–15 лет"] },
  ];
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section id="applications" className="bg-[#111] py-20 lg:py-28 text-white">
      <div className="mx-auto max-w-[1280px] px-4 lg:px-8">
        <SectionTitle kicker="Отрасли" dark>
          Где применяются наши полы
        </SectionTitle>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {[items.slice(0, 10), items.slice(10, 20)].map((col, colIdx) => (
            <div key={colIdx} className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur overflow-hidden">
              {col.map((it, i) => {
                const idx = colIdx * 10 + i;
                const isOpen = openIdx === idx;
                return (
                  <div key={it.name} className={`transition-colors ${isOpen ? "bg-white/[0.07]" : ""}`}>
                    <button
                      type="button"
                      onClick={() => setOpenIdx(isOpen ? null : idx)}
                      className={`flex w-full items-center justify-between gap-4 px-5 md:px-7 py-5 text-left transition-colors hover:bg-white/[0.04] ${isOpen ? "border-l-4 border-[#FFC107] pl-4 md:pl-6" : ""}`}
                      aria-expanded={isOpen}
                    >
                      <span className="font-display text-sm md:text-base font-extrabold uppercase tracking-wide">
                        {it.name}
                      </span>
                      <ChevronDown className={`h-5 w-5 text-[#FFC107] shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                    <div
                      className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                    >
                      <div className="overflow-hidden">
                        <ul className="px-5 md:px-7 pb-6 pt-1 space-y-2 text-sm text-white/80">
                          {it.options.map((o) => (
                            <li key={o} className="flex items-start gap-2">
                              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#FFC107] shrink-0" />
                              <span>{o}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-3xl text-sm text-white/60">
          Лапролин допущен для контакта с пищевыми и питьевыми средами — оптимальное решение
          для food &amp; pharma-объектов.
        </p>
      </div>
    </section>
  );
}

/* ---------- Works ---------- */
function Works() {
  const cases = [
    { client: "АО НПК «Катрен»", type: "Ремонт пола по технологии компании", img: workKatren },
    { client: "Сеть магазинов", type: "Полиуретановый наливной пол (матовый)", img: workShops },
    { client: "Детский центр, г. Краснодар", type: "Эпоксидный наливной пол с флоками (глянец)", img: workKids },
    { client: "ООО «Велес»", type: "Шлифование и обеспыливание литиевым лаком", img: workVeles },
  ];
  return (
    <section id="works" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-4 lg:px-8">
        <SectionTitle kicker="Портфолио">Наши работы</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cases.map((c) => (
            <article key={c.client} className="card-hover overflow-hidden rounded-2xl border border-border bg-white shadow-card">
              <div className="relative aspect-[4/3] w-full bg-surface overflow-hidden">
                <img src={c.img} alt={c.client} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                <span className="absolute left-4 top-4 rounded-full bg-[#FFC107] px-3 py-1 text-xs font-bold uppercase text-[#111]">
                  Реализовано
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-extrabold uppercase text-[#111]">{c.client}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.type}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Partners ---------- */
function Partners() {
  const items = [
    { name: "ООО «Прогресс Агро»", note: "Агропромышленный холдинг" },
    { name: "DOGMA", note: "Девелопер · застройщик" },
    { name: "Катрен", note: "Фарма-логистика" },
    { name: "Велеском", note: "Холодильное оборудование" },
    { name: "Кубаньхлеб", note: "Агропромышленный холдинг" },
  ];
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-4 lg:px-8">
        <SectionTitle kicker="Партнёры">Нам доверяют</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {items.map((p) => (
            <div key={p.name} className="card-hover rounded-2xl border border-border bg-white p-6 text-center">
              <div className="flex h-14 items-center justify-center text-muted-foreground/40">
                <Building2 className="h-8 w-8" />
              </div>
              <p className="mt-3 font-display text-sm font-extrabold uppercase text-[#111] leading-tight">
                {p.name}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">{p.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Manufacturers ---------- */
function Manufacturers() {
  const items = [
    { name: "Lincrete", img: lincreteLogo },
    { name: "PRASPAN", img: praspanLogo },
    { name: "Sika", img: sikaLogo },
    { name: "INGRI", img: ingriLogo },
  ];
  return (
    <section className="bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-4 lg:px-8">
        <SectionTitle kicker="Производители материалов">
          Материалы ведущих производителей
        </SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {items.map((p) => (
            <div
              key={p.name}
              className="group flex h-32 items-center justify-center rounded-2xl border border-border bg-white p-6"
            >
              <img
                src={p.img}
                alt={p.name}
                loading="lazy"
                className="max-h-full max-w-full object-contain grayscale opacity-70 transition group-hover:grayscale-0 group-hover:opacity-100"
              />
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-sm text-muted-foreground">
          Работаем с сертифицированными материалами ведущих производителей.
        </p>
      </div>
    </section>
  );
}

/* ---------- Why us ---------- */
function WhyUs() {
  const items = [
    <><span>Опыт с много-</span><br /><span>компонентными</span><br /><span>системами</span></>,
    "Оплата частями по договору",
    "Современное оборудование и материалы",
    "Гарантия на работы до 5 лет",
    "Работаем по всей России",
  ];
  return (
    <section className="bg-[#111] py-20 lg:py-28 text-white">
      <div className="mx-auto max-w-[1280px] px-4 lg:px-8">
        <SectionTitle kicker="Наши преимущества" dark>
          Почему выбирают нас
        </SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {items.map((it, i) => (
            <div key={i} className="card-hover rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="font-display text-3xl font-extrabold text-[#FFC107]">0{i + 1}</p>
              <p className="mt-3 font-display text-base font-extrabold uppercase leading-tight">{it}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { v: "60+", l: "объектов" },
            { v: "300 000+", l: "м²" },
            { v: "15+", l: "лет" },
          ].map((s) => (
            <div key={s.l} className="rounded-2xl border border-[#FFC107]/40 bg-[#FFC107]/10 p-5">
              <p className="font-display text-3xl font-extrabold text-[#FFC107]">{s.v}</p>
              <p className="mt-1 text-sm text-white/70 uppercase tracking-wider">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Leadership ---------- */
function Leadership() { return null; }

/* ---------- Technology (Laprolin) ---------- */
function Technology() {
  const tiles = [
    { icon: FlaskConical, value: "pH 0–14", label: "Стойкость к кислотам и щелочам", note: "" },
    { icon: Thermometer, value: "−70 … +130°C", label: "Рабочий диапазон температур", note: "(Нанесение при температуре от −15°C до +50°C.)" },
    { icon: Gauge, value: "65 МПа", label: "Прочность на разрыв", note: "" },
    { icon: ShieldCheck, value: "5 лет", label: "Гарантия на покрытие", note: "" },
    { icon: Layers, value: "Без пор", label: "Трёхслойное бесшовное покрытие", note: "" },
    { icon: Droplets, value: "Пищевой допуск", label: "Контакт с водой и продуктами", note: "" },
  ];
  const priceRows = [
    { name: "Лапролин Экстра Рус pH14", unit: "кг", price: "3 250 ₽" },
    { name: "Лапролин Экстра Рус pH14 (Антифоулинг-ANF)", unit: "кг", price: "3 600 ₽" },
    { name: "Лапролин ГП (глубокого проникновения)", unit: "л", price: "1 280 ₽" },
    { name: "Лапролин Стандарт", unit: "л", price: "1 450 ₽" },
  ];
  return (
    <section id="tech" className="bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-4 lg:px-8">
        <SectionTitle kicker="ОФИЦИАЛЬНЫЙ ДИСТРИБЬЮТОР МАТЕРИАЛОВ LAPROLIN">
          Полимер Лапролин Экстра Рус pH 14
        </SectionTitle>
        <p className="-mt-6 mb-12 max-w-3xl text-base md:text-lg text-muted-foreground">
          Антикоррозийный и герметизирующий материал, на основе которого мы создаём промышленные полы с экстремальной химической и температурной стойкостью.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tiles.map((t) => (
            <div key={t.label} className="card-hover rounded-2xl bg-white p-7 shadow-card border border-border/50">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFC107]">
                <t.icon className="h-6 w-6 text-[#111]" />
              </div>
              <p className="mt-5 font-display text-2xl md:text-3xl font-extrabold text-[#111]">
                {t.value}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{t.label}</p>
              {t.note && <p className="mt-2 text-xs text-muted-foreground italic">{t.note}</p>}
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-3xl rounded-xl border-l-4 border-[#FFC107] bg-white p-5 text-sm text-muted-foreground">
          Материал включён в Классификатор строительных ресурсов
          (Приказ Минстроя РФ № 438пр).
        </p>

        {/* Before / After */}
        <div className="mt-16">
          <h3 className="font-display text-2xl md:text-3xl font-extrabold uppercase text-[#111]">До / После</h3>
          <p className="mt-2 text-sm text-muted-foreground max-w-2xl">
            Противообрастающее покрытие корпусов судов — защита от моллюсков и водорослей
            без оловоорганических соединений.
          </p>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="relative overflow-hidden rounded-2xl border border-border shadow-card">
              <img src={shipBefore} alt="До" loading="lazy" className="aspect-[4/3] w-full object-cover" />
              <span className="absolute left-4 top-4 rounded-full bg-[#FFC107] px-3 py-1 text-xs font-bold uppercase text-[#111]">
                ДО
              </span>
              <span className="absolute left-[52%] top-4 rounded-full bg-[#FFC107] px-3 py-1 text-xs font-bold uppercase text-[#111]">
                ПОСЛЕ
              </span>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-border shadow-card">
              <img src={shipAfter} alt="После" loading="lazy" className="aspect-[4/3] w-full object-cover" />
              <span className="absolute left-4 top-4 rounded-full bg-[#FFC107] px-3 py-1 text-xs font-bold uppercase text-[#111]">
                ДО
              </span>
              <span className="absolute left-[52%] top-4 rounded-full bg-[#FFC107] px-3 py-1 text-xs font-bold uppercase text-[#111]">
                ПОСЛЕ
              </span>
            </div>
          </div>
        </div>

        {/* Price table */}
        <div className="mt-16">
          <h3 className="font-display text-2xl md:text-3xl font-extrabold uppercase text-[#111]">
            Прайс на материалы Лапролин
          </h3>
          <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-white shadow-card">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-[#FFC107] text-[#111]">
                  <th className="px-5 py-4 font-display text-xs font-bold uppercase tracking-wider">Наименование</th>
                  <th className="px-5 py-4 font-display text-xs font-bold uppercase tracking-wider">Ед. изм.</th>
                  <th className="px-5 py-4 font-display text-xs font-bold uppercase tracking-wider text-right">Цена</th>
                </tr>
              </thead>
              <tbody>
                {priceRows.map((r, i) => (
                  <tr key={r.name} className={i % 2 ? "bg-surface" : "bg-white"}>
                    <td className="px-5 py-4 font-semibold text-[#111]">{r.name}</td>
                    <td className="px-5 py-4 text-muted-foreground">{r.unit}</td>
                    <td className="px-5 py-4 text-right font-display font-extrabold text-[#111]">{r.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">Расход на слой: 150 г/м².</p>
        </div>

        {/* Video placeholder */}
        <div className="mt-16">
          <div className="relative aspect-video w-full max-w-3xl mx-auto overflow-hidden rounded-2xl bg-[#111] shadow-card">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <button
                type="button"
                aria-label="Видео скоро"
                className="flex h-20 w-20 items-center justify-center rounded-full bg-[#FFC107] text-[#111] shadow-card hover:brightness-95 transition"
              >
                <Play className="h-9 w-9 fill-[#111]" />
              </button>
              <p className="mt-5 font-display text-base md:text-lg font-extrabold uppercase tracking-wide">
                Видео: тестирование полимера Лапролин
              </p>
              <p className="mt-1 text-sm text-white/50 uppercase tracking-wider">Скоро</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <a
            href={laprolinCatalog}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-full bg-[#FFC107] px-7 py-4 font-display text-sm font-bold uppercase tracking-wider text-[#111] shadow-card hover:brightness-95 transition"
          >
            <Download className="h-4 w-4" /> Скачать каталог Лапролин
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Certificates ---------- */
function Certificates() {
  const certs = [
    { icon: Flame, title: "Пожарный сертификат", note: "Г1 слабогорючий · В1 трудновоспламеняемый", preview: firePreview, pdf: firePdf },
    { icon: Droplets, title: "Свидетельство ЕАЭС", note: "Допуск к контакту с питьевой водой и пищей", preview: eaesPreview, pdf: eaesPdf },
    { icon: FileText, title: "Протокол испытаний", note: "Истираемость, удар, адгезия 100%", preview: testPreview, pdf: testPdf },
  ];
  const stats = [
    { value: "100%", label: "Адгезия" },
    { value: "10–12 мг", label: "Истираемость / 1000 циклов" },
    { value: "17.4 кВ", label: "Диэлектрика" },
    { value: "55 см", label: "Прочность при ударе" },
  ];
  const [open, setOpen] = useState<null | { title: string; preview: string; pdf: string }>(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(null); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <section id="certs" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-4 lg:px-8">
        <SectionTitle kicker="Документы">
          Сертификаты и результаты испытаний
        </SectionTitle>
        <p className="-mt-6 mb-12 max-w-3xl text-lg text-muted-foreground">
          Материал прошёл независимые испытания и имеет полный пакет документов.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:max-w-5xl lg:mx-auto">
          {certs.map((c) => (
            <article key={c.title} className="card-hover flex flex-col rounded-2xl bg-white p-7 shadow-card border border-border/50">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#111] text-[#FFC107]">
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-base font-extrabold uppercase text-[#111] leading-tight">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground flex-1">{c.note}</p>
              <button
                type="button"
                onClick={() => setOpen({ title: c.title, preview: c.preview, pdf: c.pdf })}
                className="mt-5 inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-[#111] hover:text-[#FFC107]"
              >
                Смотреть <ArrowRight className="h-4 w-4" />
              </button>
            </article>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl bg-[#111] p-6 text-white">
              <p className="font-display text-3xl md:text-4xl font-extrabold text-[#FFC107]">
                {s.value}
              </p>
              <p className="mt-1 text-sm text-white/70">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
          onClick={() => setOpen(null)}
        >
          <div
            className="relative flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <h3 className="font-display text-base font-extrabold uppercase text-[#111]">{open.title}</h3>
              <button
                type="button"
                onClick={() => setOpen(null)}
                aria-label="Закрыть"
                className="rounded-full p-2 text-[#111] hover:bg-black/5"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex-1 overflow-auto bg-surface p-4">
              <img src={open.preview} alt={open.title} className="mx-auto block max-h-[80vh] w-auto max-w-full rounded-md shadow" />
            </div>
            <div className="border-t border-border px-5 py-4 flex justify-end">
              <a
                href={open.pdf}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-full bg-[#FFC107] px-5 py-3 font-display text-sm font-bold uppercase text-[#111] hover:brightness-95"
              >
                <FileText className="h-4 w-4" /> Открыть полный документ (PDF)
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer id="contacts" className="bg-[#111] text-white">
      <div className="mx-auto max-w-[1280px] px-4 lg:px-8 py-20">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* About */}
          <div>
            <img src={logo} alt="Полимер Эксперт" className="h-14 w-auto" style={{ filter: "invert(1) brightness(2)" }} />
            <p className="mt-5 text-sm text-white/70 leading-relaxed">
              Промышленные полы под ключ на основе сертифицированного полимера Лапролин.
              Работаем по всей России.
            </p>
            <a
              href={bukletPdf}
              target="_blank"
              rel="noopener"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#FFC107] px-5 py-3 font-display text-sm font-bold uppercase text-[#111]"
            >
              <Download className="h-4 w-4" /> Скачать буклет (PDF)
            </a>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-[#FFC107]">Контакты</h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li><a href="tel:+79182125000" className="flex items-center gap-2 hover:text-[#FFC107]"><Phone className="h-4 w-4" /> +7 (918) 212-50-00</a></li>
              <li><a href="mailto:info@polymerexpert.ru" className="flex items-center gap-2 hover:text-[#FFC107]"><Mail className="h-4 w-4" /> info@polymerexpert.ru</a></li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="https://t.me/Chernykh_KRD" target="_blank" rel="noopener" className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"><Send className="h-4 w-4" /> Telegram</a>
              <a href="https://bip.ai" target="_blank" rel="noopener" className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"><img src={bipLogo} alt="BIP" className="h-5 w-auto object-contain" /> BIP</a>
              <a href="https://max.ru" target="_blank" rel="noopener" className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"><MessageCircle className="h-4 w-4" /> MAX</a>
            </div>

            <div className="mt-6 rounded-2xl border border-[#FFC107]/40 bg-[#FFC107]/10 p-5">
              <p className="font-display text-sm font-bold uppercase tracking-wider text-[#FFC107]">Наш Telegram-канал</p>
              <a href="https://t.me/betonpoli" target="_blank" rel="noreferrer" className="mt-2 flex items-center gap-2 font-display font-bold hover:text-[#FFC107]">
                <Send className="h-4 w-4" /> t.me/betonpoli
              </a>
            </div>
          </div>

          {/* Quick form */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-[#FFC107]">Быстрая связь</h3>
            <FooterMiniForm />
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 grid gap-4 md:grid-cols-2 text-xs text-white/50">
          <div>
            <p>ООО НСТ «Полимер Эксперт»</p>
            <p>ИНН 2308285521 · ОГРН 1222300022340 · г. Краснодар</p>
          </div>
          <div className="md:text-right">© 2026 ПОЛИМЕР ЭКСПЕРТ. Все права защищены.</div>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-white/5 pt-4 text-xs text-white/30">
          <a href="/privacy.html" target="_blank" rel="noopener" className="hover:text-white/60 transition-colors">
            Политика конфиденциальности
          </a>
          <span>·</span>
          <span>Создано студией SqoraPro</span>
        </div>
      </div>
    </footer>
  );
}

function FooterMiniForm() {
  const [consent, setConsent] = useState(false);
  return (
    <form
      onSubmit={(e) => { e.preventDefault(); alert("Заявка отправлена"); }}
      className="mt-5 space-y-3"
    >
      <input required placeholder="Имя" className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#FFC107] outline-none" />
      <input required type="tel" placeholder="Телефон" className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#FFC107] outline-none" />
      <label className="flex items-start gap-2 cursor-pointer text-xs text-white/50">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-white/30 accent-[#FFC107] cursor-pointer"
        />
        <span>
          Согласен(на) на обработку персональных данных (ФИО, телефон) в целях обратной связи. Оператор: ООО НСТ «ПОЛИМЕР ЭКСПЕРТ», ИНН 2308285521.{" "}
          <a href="/privacy.html" target="_blank" rel="noopener" className="underline hover:text-white/80">
            Политика конфиденциальности
          </a>
          . Согласие может быть отозвано в любой момент.
        </span>
      </label>
      <button
        type="submit"
        disabled={!consent}
        className="w-full rounded-full bg-[#FFC107] py-3 font-display text-sm font-bold uppercase text-[#111] transition disabled:opacity-40 disabled:cursor-not-allowed enabled:hover:brightness-95"
      >
        Перезвонить мне
      </button>
    </form>
  );
}

/* ---------- Page ---------- */
function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Coatings />
        <ConcreteServices />
        <Applications />
        <Works />
        <Partners />
        <WhyUs />
        <Technology />
        <Certificates />
        <QuoteSection />
      </main>
      <Footer />
    </div>
  );
}
