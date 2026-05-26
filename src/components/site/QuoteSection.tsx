import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";

const COATINGS = [
  "Эпоксидное",
  "Полиуретановое",
  "Акриловое",
  "Полиуретанцементное",
  "Полиэфирное",
  "Бетон с топпингом",
];

const PRICE_ROWS = [
  { type: "Эпоксидный", price: "950–2 100", life: "10–20 лет" },
  { type: "Полиуретановый", price: "1 050–2 100", life: "10–20 лет" },
  { type: "Топпинговый", price: "250–1 350", life: "15–25 лет" },
  { type: "Полимерцементный", price: "1 200–1 900", life: "15–25 лет" },
  { type: "Антистатический", price: "1 450–2 650", life: "10–20 лет" },
  { type: "Кварценаполненный", price: "1 000–1 700", life: "10–20 лет" },
  { type: "Химстойкий", price: "1 500–2 500", life: "15–25 лет" },
];

function maskPhone(v: string) {
  const d = v.replace(/\D/g, "").slice(0, 11);
  const n = d.startsWith("8") ? "7" + d.slice(1) : d.startsWith("7") ? d : "7" + d;
  const p = n.slice(1);
  let out = "+7";
  if (p.length > 0) out += " (" + p.slice(0, 3);
  if (p.length >= 3) out += ") " + p.slice(3, 6);
  if (p.length >= 6) out += "-" + p.slice(6, 8);
  if (p.length >= 8) out += "-" + p.slice(8, 10);
  return out;
}

export function QuoteSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    area: "",
    coating: COATINGS[0],
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [consent, setConsent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (form.name.trim().length < 2) errs.name = "Укажите имя";
    if (form.phone.replace(/\D/g, "").length < 11) errs.phone = "Укажите телефон";
    if (!form.area || Number(form.area) <= 0) errs.area = "Укажите площадь";
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSent(true);
      setForm({ name: "", phone: "", area: "", coating: COATINGS[0], message: "" });
    }
  };

  return (
    <section id="form" className="bg-[#FFC107] py-20 lg:py-28 text-[#111]">
      <div className="mx-auto max-w-[1280px] px-4 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <div className="mb-4 h-1 w-16 rounded-full bg-[#111]" />
          <h2 className="section-title text-3xl md:text-5xl lg:text-6xl">
            Получите бесплатный расчёт стоимости
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left: pricing table */}
          <div>
            <h3 className="font-display text-xl md:text-2xl font-extrabold uppercase text-[#111]">
              Примерная стоимость материалов для промышленного пола
            </h3>
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-card">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-[#111] text-[#FFC107]">
                    <th className="px-4 py-4 font-display text-xs font-bold uppercase tracking-wider">Тип пола</th>
                    <th className="px-4 py-4 font-display text-xs font-bold uppercase tracking-wider">Цена материала (руб./м²)</th>
                    <th className="px-4 py-4 font-display text-xs font-bold uppercase tracking-wider">Срок службы</th>
                  </tr>
                </thead>
                <tbody>
                  {PRICE_ROWS.map((r, i) => (
                    <tr key={r.type} className={i % 2 ? "bg-[#FFF8E1]" : "bg-white"}>
                      <td className="px-4 py-3 font-semibold text-[#111]">{r.type}</td>
                      <td className="px-4 py-3 font-display font-extrabold text-[#111]">{r.price}</td>
                      <td className="px-4 py-3 text-[#111]/70">{r.life}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-[#111]/70">
              Стоимость системы материалов от 1 680 ₽/м² (бетон, 1 слой грунта + 3 слоя основы).
              Цены указаны на материалы. Итоговая стоимость работ рассчитывается индивидуально.
            </p>
          </div>

          {/* Right: form */}
          <div className="rounded-2xl bg-white p-8 shadow-card">
            {sent ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle2 className="h-16 w-16 text-[#FFC107]" />
                <h3 className="mt-4 font-display text-2xl font-extrabold uppercase">
                  Заявка отправлена
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Мы свяжемся с вами в течение рабочего дня.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4" noValidate>
                <h3 className="font-display text-2xl font-extrabold uppercase">
                  Заявка на расчёт
                </h3>

                <div>
                  <input
                    type="text"
                    placeholder="Имя"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-lg border border-border bg-white px-4 py-3 outline-none focus:border-[#111]"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: maskPhone(e.target.value) })}
                    className="w-full rounded-lg border border-border bg-white px-4 py-3 outline-none focus:border-[#111]"
                  />
                  {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                </div>

                <div>
                  <input
                    type="number"
                    placeholder="Площадь объекта, м²"
                    value={form.area}
                    onChange={(e) => setForm({ ...form, area: e.target.value })}
                    className="w-full rounded-lg border border-border bg-white px-4 py-3 outline-none focus:border-[#111]"
                  />
                  {errors.area && <p className="mt-1 text-sm text-red-600">{errors.area}</p>}
                </div>

                <select
                  value={form.coating}
                  onChange={(e) => setForm({ ...form, coating: e.target.value })}
                  className="w-full rounded-lg border border-border bg-white px-4 py-3 outline-none focus:border-[#111]"
                >
                  {COATINGS.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>

                <textarea
                  placeholder="Сообщение (необязательно)"
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-lg border border-border bg-white px-4 py-3 outline-none focus:border-[#111]"
                />

                <label className="flex items-start gap-2 cursor-pointer text-xs text-muted-foreground">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-0.5 h-4 w-4 shrink-0 rounded border-border accent-[#111] cursor-pointer"
                  />
                  <span>
                    Я ознакомлен(а) и согласен(на) на обработку моих персональных данных (ФИО, телефон, e-mail) в целях рассмотрения моего обращения. Оператор: ООО НСТ «ПОЛИМЕР ЭКСПЕРТ», ИНН 2308285521, 350000, г. Краснодар, ул. им. Гоголя, д. 80. Ознакомлен(а) с{" "}
                    <a href="/privacy.html" target="_blank" rel="noopener" className="underline hover:text-[#111]">
                      Политикой конфиденциальности
                    </a>
                    . Согласие может быть отозвано в любой момент.
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={!consent}
                  className="w-full rounded-full bg-[#111] py-4 font-display text-sm font-bold uppercase tracking-wider text-white transition disabled:opacity-50 disabled:cursor-not-allowed enabled:hover:bg-[#000]"
                >
                  Отправить заявку
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
