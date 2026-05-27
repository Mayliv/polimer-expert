import type { GlobalConfig } from "payload";

export const Settings: GlobalConfig = {
  slug: "settings",
  label: "Настройки сайта",
  admin: { group: "Настройки" },
  fields: [
    {
      label: "Hero-секция",
      type: "collapsible",
      fields: [
        { name: "heroTitle", label: "Заголовок Hero", type: "text" },
        { name: "heroSubtitle", label: "Подзаголовок Hero", type: "textarea" },
        { name: "heroImage", label: "Фоновое фото Hero", type: "upload", relationTo: "media" },
      ],
    },
    {
      label: "Контактные данные",
      type: "collapsible",
      fields: [
        { name: "phone", label: "Телефон", type: "text" },
        { name: "email", label: "Email", type: "email" },
        { name: "address", label: "Адрес", type: "text" },
        { name: "telegramChannel", label: "Telegram-канал (ссылка)", type: "text" },
        { name: "telegramUsername", label: "Telegram менеджера (ссылка)", type: "text" },
      ],
    },
    {
      label: "Логотип",
      type: "collapsible",
      fields: [
        { name: "logo", label: "Логотип сайта", type: "upload", relationTo: "media" },
      ],
    },
    {
      label: "SEO",
      type: "collapsible",
      fields: [
        { name: "seoTitle", label: "Title страницы", type: "text" },
        { name: "seoDescription", label: "Meta description", type: "textarea" },
      ],
    },
  ],
};
