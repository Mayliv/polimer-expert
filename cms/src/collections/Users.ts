import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  labels: { singular: "Пользователь", plural: "Пользователи" },
  admin: {
    useAsTitle: "email",
    group: "Настройки",
  },
  auth: true,
  fields: [
    {
      name: "name",
      label: "Имя",
      type: "text",
    },
  ],
};
