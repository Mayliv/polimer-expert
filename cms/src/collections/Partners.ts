import type { CollectionConfig } from "payload";

export const Partners: CollectionConfig = {
  slug: "partners",
  labels: { singular: "Партнёр", plural: "Партнёры" },
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "published", "order"],
    group: "Контент сайта",
  },
  fields: [
    {
      name: "name",
      label: "Название партнёра",
      type: "text",
      required: true,
    },
    {
      name: "logo",
      label: "Логотип",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "website",
      label: "Сайт партнёра",
      type: "text",
    },
    {
      name: "order",
      label: "Порядок отображения",
      type: "number",
      defaultValue: 100,
      admin: { position: "sidebar" },
    },
    {
      name: "published",
      label: "Опубликован",
      type: "checkbox",
      defaultValue: true,
      admin: { position: "sidebar" },
    },
  ],
};
