import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  output: "standalone",
};

export default withPayload(nextConfig, {
  configPath: path.resolve(dirname, "./src/payload.config.ts"),
});
