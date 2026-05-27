import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { localStoragePlugin } from "@payloadcms/storage-local";
import path from "path";
import { fileURLToPath } from "url";

import { Cases } from "./collections/Cases";
import { Partners } from "./collections/Partners";
import { Media } from "./collections/Media";
import { Settings } from "./globals/Settings";
import { Users } from "./collections/Users";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: "— Полимер Эксперт CMS",
    },
  },
  collections: [Cases, Partners, Media, Users],
  globals: [Settings],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || "CHANGE_ME_IN_PRODUCTION",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL,
    },
  }),
  plugins: [
    localStoragePlugin({
      collections: { media: true },
      uploadDir: path.resolve(dirname, "../../public/uploads"),
    }),
  ],
  cors: [
    process.env.FRONTEND_URL || "http://localhost:5173",
    "https://polexpert.ru",
    "https://www.polexpert.ru",
  ],
  csrf: [
    process.env.FRONTEND_URL || "http://localhost:5173",
    "https://polexpert.ru",
    "https://www.polexpert.ru",
  ],
});
