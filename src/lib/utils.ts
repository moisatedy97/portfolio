import { clsx, type ClassValue } from "clsx";
import fs from "fs";
import { twMerge } from "tailwind-merge";

/**
 * Combines and deduplicates class names using clsx and tailwind-merge.
 *
 * @param {ClassValue[]} inputs - An array of class values to be combined.
 * @returns {string} A string of combined and deduplicated class names.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Asynchronously retrieves the names of all files within a specified directory.
 *
 * @param {string} dir - The directory path relative to the current working directory.
 * @returns {Promise<string[]>} A promise that resolves to an array of file names. Returns an empty array if an error occurs.
 */
export const getFilesFromDir = (dir: string): string[] => {
  try {
    const path = process.cwd() + "/public" + dir;
    const fileNames = fs.readdirSync(path, "utf8");

    return fileNames;
  } catch (error) {
    console.error(`Error fetching files from directory ${dir}: ${error}`);
    return [];
  }
};
