import { eq } from "drizzle-orm";
import { db } from ".";
import {
  databases,
  frameworks,
  languages,
  libraries,
  otherUtils,
  projectsToDatabases,
  projectsToFrameworks,
  projectsToLanguages,
  projectsToLibraries,
  projectsToOtherUtils
} from "./schema";

export const getAllProjects = async () => {
  const data = await db.query.projects.findMany();

  return data;
};

export const getProjectLanguages = async (projectId: number) => {
  const data = await db
    .select({
      id: languages.id,
      name: languages.name,
      image: languages.image
    })
    .from(languages)
    .leftJoin(projectsToLanguages, eq(languages.id, projectsToLanguages.languageId))
    .where(eq(projectsToLanguages.projectId, projectId));

  return data;
};

export const getProjectFrameworks = async (projectId: number) => {
  const data = await db
    .select({
      id: frameworks.id,
      name: frameworks.name,
      image: frameworks.image
    })
    .from(frameworks)
    .leftJoin(projectsToFrameworks, eq(frameworks.id, projectsToFrameworks.frameworkId))
    .where(eq(projectsToFrameworks.projectId, projectId));

  return data;
};

export const getProjectLibraries = async (projectId: number) => {
  const data = await db
    .select({
      id: libraries.id,
      name: libraries.name,
      image: libraries.image
    })
    .from(libraries)
    .leftJoin(projectsToLibraries, eq(libraries.id, projectsToLibraries.libraryId))
    .where(eq(projectsToLibraries.projectId, projectId));

  return data;
};

export const getProjectDatabases = async (projectId: number) => {
  const data = await db
    .select({
      id: databases.id,
      name: databases.name,
      image: databases.image
    })
    .from(databases)
    .leftJoin(projectsToDatabases, eq(databases.id, projectsToDatabases.databaseId))
    .where(eq(projectsToDatabases.projectId, projectId));

  return data;
};

export const getProjectOtherUtils = async (projectId: number) => {
  const data = await db
    .select({
      id: otherUtils.id,
      name: otherUtils.name,
      image: otherUtils.image
    })
    .from(otherUtils)
    .leftJoin(projectsToOtherUtils, eq(otherUtils.id, projectsToOtherUtils.otherUtilId))
    .where(eq(projectsToOtherUtils.projectId, projectId));

  return data;
};

export const getAllCompanies = async () => {
  const data = await db.query.companies.findMany();

  return data;
};

export const getAllSocials = async () => {
  const data = await db.query.socials.findMany();

  return data;
};
