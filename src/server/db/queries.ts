import { db } from ".";

export const getAllProjects = async () => {
  try {
    const data = await db.query.projects.findMany({
      with: {
        projectsToFrameworks: {
          columns: {
            frameworkId: false,
            projectId: false
          },
          with: {
            framework: true
          }
        },
        projectsToLibraries: {
          columns: {
            libraryId: false,
            projectId: false
          },
          with: {
            library: true
          }
        },
        projectsToLanguages: {
          columns: {
            languageId: false,
            projectId: false
          },
          with: {
            language: true
          }
        },
        projectsToDatabases: {
          columns: {
            databaseId: false,
            projectId: false
          },
          with: {
            database: true
          }
        }
      }
    });

    return data;
  } catch (error) {
    console.log(`Error fetching projects: ${error}`);
    return [];
  }
};
