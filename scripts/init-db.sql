-- Payload v3 initial schema for polimer-expert CMS

CREATE TABLE IF NOT EXISTS "users" (
    "id" serial PRIMARY KEY NOT NULL,
    "name" varchar,
    "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
    "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
    "email" varchar NOT NULL,
    "reset_password_token" varchar,
    "reset_password_expiration" timestamp(3) with time zone,
    "salt" varchar,
    "hash" varchar,
    "login_attempts" numeric DEFAULT 0,
    "lock_until" timestamp(3) with time zone
);
CREATE UNIQUE INDEX IF NOT EXISTS "users_email_idx" ON "users" ("email");
CREATE INDEX IF NOT EXISTS "users_created_at_idx" ON "users" ("created_at");

CREATE TABLE IF NOT EXISTS "users_sessions" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "id" varchar PRIMARY KEY NOT NULL,
    "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
    "expires_at" timestamp(3) with time zone,
    CONSTRAINT "users_sessions__parent_id_users_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "users"("id") ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS "users_sessions_order_idx" ON "users_sessions" ("_order");
CREATE INDEX IF NOT EXISTS "users_sessions_parent_id_idx" ON "users_sessions" ("_parent_id");

CREATE TABLE IF NOT EXISTS "media" (
    "id" serial PRIMARY KEY NOT NULL,
    "alt" varchar,
    "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
    "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
    "url" varchar,
    "thumbnail_url" varchar,
    "filename" varchar,
    "mime_type" varchar,
    "filesize" numeric,
    "width" numeric,
    "height" numeric,
    "focal_x" numeric,
    "focal_y" numeric,
    "sizes_thumbnail_url" varchar,
    "sizes_thumbnail_width" numeric,
    "sizes_thumbnail_height" numeric,
    "sizes_thumbnail_mime_type" varchar,
    "sizes_thumbnail_filesize" numeric,
    "sizes_thumbnail_filename" varchar,
    "sizes_card_url" varchar,
    "sizes_card_width" numeric,
    "sizes_card_height" numeric,
    "sizes_card_mime_type" varchar,
    "sizes_card_filesize" numeric,
    "sizes_card_filename" varchar,
    "sizes_hero_url" varchar,
    "sizes_hero_width" numeric,
    "sizes_hero_height" numeric,
    "sizes_hero_mime_type" varchar,
    "sizes_hero_filesize" numeric,
    "sizes_hero_filename" varchar
);
CREATE UNIQUE INDEX IF NOT EXISTS "media_filename_idx" ON "media" ("filename");
CREATE INDEX IF NOT EXISTS "media_created_at_idx" ON "media" ("created_at");

CREATE TABLE IF NOT EXISTS "cases" (
    "id" serial PRIMARY KEY NOT NULL,
    "client" varchar NOT NULL,
    "coating" varchar NOT NULL,
    "area" numeric,
    "description" varchar,
    "image_id" integer,
    "order" numeric DEFAULT 100,
    "published" boolean DEFAULT true,
    "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
    "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
    CONSTRAINT "cases_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "media"("id")
);
CREATE INDEX IF NOT EXISTS "cases_created_at_idx" ON "cases" ("created_at");

CREATE TABLE IF NOT EXISTS "cases_metrics" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "id" varchar PRIMARY KEY NOT NULL,
    "label" varchar,
    CONSTRAINT "cases_metrics__parent_id_cases_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "cases"("id") ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS "cases_metrics_order_idx" ON "cases_metrics" ("_order");
CREATE INDEX IF NOT EXISTS "cases_metrics_parent_id_idx" ON "cases_metrics" ("_parent_id");

CREATE TABLE IF NOT EXISTS "partners" (
    "id" serial PRIMARY KEY NOT NULL,
    "name" varchar NOT NULL,
    "logo_id" integer,
    "website" varchar,
    "order" numeric DEFAULT 100,
    "published" boolean DEFAULT true,
    "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
    "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
    CONSTRAINT "partners_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "media"("id")
);
CREATE INDEX IF NOT EXISTS "partners_created_at_idx" ON "partners" ("created_at");

CREATE TABLE IF NOT EXISTS "settings" (
    "id" serial PRIMARY KEY NOT NULL,
    "hero_title" varchar,
    "hero_subtitle" varchar,
    "hero_image_id" integer,
    "phone" varchar,
    "email" varchar,
    "address" varchar,
    "telegram_channel" varchar,
    "telegram_username" varchar,
    "logo_id" integer,
    "seo_title" varchar,
    "seo_description" varchar,
    "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
    "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
    CONSTRAINT "settings_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "media"("id"),
    CONSTRAINT "settings_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "media"("id")
);

CREATE TABLE IF NOT EXISTS "payload_migrations" (
    "id" serial PRIMARY KEY NOT NULL,
    "name" varchar,
    "batch" numeric,
    "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
    "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "payload_locked_documents" (
    "id" serial PRIMARY KEY NOT NULL,
    "global_slug" varchar,
    "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
    "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);
CREATE INDEX IF NOT EXISTS "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" ("global_slug");
CREATE INDEX IF NOT EXISTS "payload_locked_documents_created_at_idx" ON "payload_locked_documents" ("created_at");

CREATE TABLE IF NOT EXISTS "payload_locked_documents_rels" (
    "id" serial PRIMARY KEY NOT NULL,
    "order" integer,
    "parent_id" integer NOT NULL,
    "path" varchar NOT NULL,
    "cases_id" integer,
    "partners_id" integer,
    "media_id" integer,
    "users_id" integer,
    CONSTRAINT "payload_locked_documents_rels_parent_id_fk" FOREIGN KEY ("parent_id") REFERENCES "payload_locked_documents"("id") ON DELETE CASCADE,
    CONSTRAINT "payload_locked_documents_rels_cases_id_fk" FOREIGN KEY ("cases_id") REFERENCES "cases"("id") ON DELETE CASCADE,
    CONSTRAINT "payload_locked_documents_rels_partners_id_fk" FOREIGN KEY ("partners_id") REFERENCES "partners"("id") ON DELETE CASCADE,
    CONSTRAINT "payload_locked_documents_rels_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "media"("id") ON DELETE CASCADE,
    CONSTRAINT "payload_locked_documents_rels_users_id_fk" FOREIGN KEY ("users_id") REFERENCES "users"("id") ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" ("order");
CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" ("path");

CREATE TABLE IF NOT EXISTS "payload_preferences" (
    "id" serial PRIMARY KEY NOT NULL,
    "key" varchar,
    "value" jsonb,
    "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
    "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);
CREATE INDEX IF NOT EXISTS "payload_preferences_key_idx" ON "payload_preferences" ("key");
CREATE INDEX IF NOT EXISTS "payload_preferences_created_at_idx" ON "payload_preferences" ("created_at");

CREATE TABLE IF NOT EXISTS "payload_preferences_rels" (
    "id" serial PRIMARY KEY NOT NULL,
    "order" integer,
    "parent_id" integer NOT NULL,
    "path" varchar NOT NULL,
    "users_id" integer,
    CONSTRAINT "payload_preferences_rels_parent_id_fk" FOREIGN KEY ("parent_id") REFERENCES "payload_preferences"("id") ON DELETE CASCADE,
    CONSTRAINT "payload_preferences_rels_users_id_fk" FOREIGN KEY ("users_id") REFERENCES "users"("id") ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS "payload_preferences_rels_order_idx" ON "payload_preferences_rels" ("order");
CREATE INDEX IF NOT EXISTS "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "payload_preferences_rels_path_idx" ON "payload_preferences_rels" ("path");

INSERT INTO "payload_migrations" ("name", "batch", "updated_at", "created_at")
VALUES ('initial', 1, now(), now())
ON CONFLICT DO NOTHING;
