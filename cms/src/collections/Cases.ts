import type { CollectionConfig } from "payload";

export const Cases: CollectionConfig = {
  slug: "cases",
  labels: { singular: "Кейс", plural: "Кейсы" },
  admin: {
    useAsTitle: "client",
    defaultColumns: ["client", "coating", "area", "published"],
    group: "Контент сайта",
  },
  fields: [
    {
      name: "client",
      label: "Название объекта / клиент",
      type: "text",
      required: true,
    },
    {
      name: "coating",
      label: "Тип покрытия",
      type: "text",
      required: true,
    },
    {
      name: "area",
      label: "Площадь (м²)",
      type: "number",
    },
    {
      name: "description",
      label: "Описание",
      type: "textarea",
    },
    {
      name: "image",
      label: "Фотография",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "metrics",
      label: "Показатели (списком)",
      type: "array",
      labels: { singular: "Показатель", plural: "Показатели" },
      fields: [
        { name: "label", label: "Текст показателя", type: "text" },
      ],
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
