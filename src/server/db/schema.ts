// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { relations, sql } from "drizzle-orm";
import {
  int,
  sqliteTableCreator,
  text,
  primaryKey,
} from "drizzle-orm/sqlite-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = sqliteTableCreator((name) => `${name}`);

export const projects = createTable("projects", {
  id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name", { length: 256 }),
  description: text("description", { length: 1024 }),
  github: text("github", { length: 1024 }),
  host: text("host", { length: 1024 }),
  images: text("images", { length: 1024 }),
  createdAt: int("created_at", { mode: "timestamp" })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: int("updatedAt", { mode: "timestamp" })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export const projectsRelations = relations(projects, ({ many }) => ({
  projectsToFrameworks: many(projectsToFrameworks),
}));

export const frameworks = createTable("frameworks", {
  id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name", { length: 256 }),
  image: text("image", { length: 1024 }),
});

export const frameworksRelations = relations(frameworks, ({ many }) => ({
  projectsToFrameworks: many(projectsToFrameworks),
}));

export const libraries = createTable("libraries", {
  id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name", { length: 256 }),
  image: text("image", { length: 1024 }),
});

export const languages = createTable("languages", {
  id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name", { length: 256 }),
  image: text("image", { length: 1024 }),
});

export const databases = createTable("databases", {
  id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name", { length: 256 }),
  image: text("image", { length: 1024 }),
});

export const other_utils = createTable("other_utils", {
  id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name", { length: 256 }),
  image: text("image", { length: 1024 }),
});

export const socials = createTable("socials", {
  id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name", { length: 256 }),
  url: text("url", { length: 1024 }),
});

export const companies = createTable("companies", {
  id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name", { length: 256 }),
  image: text("url", { length: 1024 }),
});

export const projectsToFrameworks = createTable(
  "projects_to_frameworks",
  {
    projectId: int("project_id", { mode: "number" }).references(
      () => projects.id,
    ),
    frameworkId: int("framework_id", { mode: "number" }).references(
      () => frameworks.id,
    ),
  },
  (t) => ({
    pk: primaryKey({
      columns: [t.projectId, t.frameworkId],
    }),
  }),
);

export const projectsToFrameworksRelations = relations(
  projectsToFrameworks,
  ({ one }) => ({
    project: one(projects, {
      fields: [projectsToFrameworks.projectId],
      references: [projects.id],
    }),
    framework: one(frameworks, {
      fields: [projectsToFrameworks.frameworkId],
      references: [frameworks.id],
    }),
  }),
);
