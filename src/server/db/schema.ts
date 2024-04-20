// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { relations, sql } from "drizzle-orm";
import { int, sqliteTableCreator, text, primaryKey } from "drizzle-orm/sqlite-core";

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
  imagesPath: text("images_path", { length: 1024 }),
  createdAt: int("created_at", { mode: "timestamp" })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: int("updated_at", { mode: "timestamp" })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull()
});

export const projectsRelations = relations(projects, ({ many }) => ({
  projectsToFrameworks: many(projectsToFrameworks),
  projectsToLibraries: many(projectsToLibraries),
  projectsToLanguages: many(projectsToLanguages),
  projectsToDatabases: many(projectsToDatabases),
  projectsToOtherUtils: many(projectsToOtherUtils)
}));

export const frameworks = createTable("frameworks", {
  id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name", { length: 256 }),
  image: text("image", { length: 1024 })
});

export const frameworksRelations = relations(frameworks, ({ many }) => ({
  projectsToFrameworks: many(projectsToFrameworks)
}));

export const libraries = createTable("libraries", {
  id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name", { length: 256 }),
  image: text("image", { length: 1024 })
});

export const librariesRelations = relations(libraries, ({ many }) => ({
  projectsToLibraries: many(projectsToLibraries)
}));

export const languages = createTable("languages", {
  id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name", { length: 256 }),
  image: text("image", { length: 1024 })
});

export const languagesRelations = relations(languages, ({ many }) => ({
  projectsToLanguages: many(projectsToLanguages)
}));

export const databases = createTable("databases", {
  id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name", { length: 256 }),
  image: text("image", { length: 1024 })
});

export const databasesRelations = relations(databases, ({ many }) => ({
  projectsToDatabases: many(projectsToDatabases)
}));

export const otherUtils = createTable("other_utils", {
  id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name", { length: 256 }),
  image: text("image", { length: 1024 })
});

export const otherUtilsRelations = relations(otherUtils, ({ many }) => ({
  projectsToOtherUtils: many(projectsToOtherUtils)
}));

export const socials = createTable("socials", {
  id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name", { length: 256 }),
  url: text("url", { length: 1024 })
});

export const companies = createTable("companies", {
  id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name", { length: 256 }),
  image: text("url", { length: 1024 })
});

export type Project = typeof projects.$inferSelect;
export type NewProject = typeof projects.$inferInsert;
export type Framework = typeof frameworks.$inferSelect;
export type NewFramework = typeof frameworks.$inferInsert;
export type Language = typeof languages.$inferSelect;
export type NewLanguage = typeof languages.$inferInsert;
export type Database = typeof databases.$inferSelect;
export type NewDatabase = typeof databases.$inferInsert;
export type OtherUtil = typeof otherUtils.$inferSelect;
export type NewOtherUtil = typeof otherUtils.$inferInsert;
export type Social = typeof socials.$inferSelect;
export type NewSocial = typeof socials.$inferInsert;
export type Company = typeof companies.$inferSelect;
export type NewCompany = typeof companies.$inferInsert;

export const projectsToFrameworks = createTable(
  "projects_to_frameworks",
  {
    projectId: int("project_id", { mode: "number" }).references(() => projects.id),
    frameworkId: int("framework_id", { mode: "number" }).references(() => frameworks.id)
  },
  (t) => ({
    pk: primaryKey({
      columns: [t.projectId, t.frameworkId]
    })
  })
);

export const projectsToFrameworksRelations = relations(projectsToFrameworks, ({ one }) => ({
  project: one(projects, {
    fields: [projectsToFrameworks.projectId],
    references: [projects.id]
  }),
  framework: one(frameworks, {
    fields: [projectsToFrameworks.frameworkId],
    references: [frameworks.id]
  })
}));

export const projectsToLibraries = createTable(
  "projects_to_libraries",
  {
    projectId: int("project_id", { mode: "number" }).references(() => projects.id),
    libraryId: int("library_id", { mode: "number" }).references(() => libraries.id)
  },
  (t) => ({
    pk: primaryKey({
      columns: [t.projectId, t.libraryId]
    })
  })
);

export const projectsToLibrariesRelations = relations(projectsToLibraries, ({ one }) => ({
  project: one(projects, {
    fields: [projectsToLibraries.projectId],
    references: [projects.id]
  }),
  library: one(libraries, {
    fields: [projectsToLibraries.libraryId],
    references: [libraries.id]
  })
}));

export const projectsToLanguages = createTable(
  "projects_to_languages",
  {
    projectId: int("project_id", { mode: "number" }).references(() => projects.id),
    languageId: int("language_id", { mode: "number" }).references(() => languages.id)
  },
  (t) => ({
    pk: primaryKey({
      columns: [t.projectId, t.languageId]
    })
  })
);

export const languagesToProjectsRelations = relations(projectsToLanguages, ({ one }) => ({
  project: one(projects, {
    fields: [projectsToLanguages.projectId],
    references: [projects.id]
  }),
  language: one(languages, {
    fields: [projectsToLanguages.languageId],
    references: [languages.id]
  })
}));

export const projectsToDatabases = createTable(
  "projects_to_databases",
  {
    projectId: int("project_id", { mode: "number" }).references(() => projects.id),
    databaseId: int("database_id", { mode: "number" }).references(() => databases.id)
  },
  (t) => ({
    pk: primaryKey({
      columns: [t.projectId, t.databaseId]
    })
  })
);

export const databasesToProjectsRelations = relations(projectsToDatabases, ({ one }) => ({
  project: one(projects, {
    fields: [projectsToDatabases.projectId],
    references: [projects.id]
  }),
  database: one(databases, {
    fields: [projectsToDatabases.databaseId],
    references: [databases.id]
  })
}));

export const projectsToOtherUtils = createTable(
  "projects_to_other_utils",
  {
    projectId: int("project_id", { mode: "number" }).references(() => projects.id),
    otherUtilId: int("other_util_id", { mode: "number" }).references(() => otherUtils.id)
  },
  (t) => ({
    pk: primaryKey({
      columns: [t.projectId, t.otherUtilId]
    })
  })
);

export const projectsToOtherUtilsRelations = relations(projectsToOtherUtils, ({ one }) => ({
  project: one(projects, {
    fields: [projectsToOtherUtils.projectId],
    references: [projects.id]
  }),
  otherUtil: one(otherUtils, {
    fields: [projectsToOtherUtils.otherUtilId],
    references: [otherUtils.id]
  })
}));
