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

export const getFilesFromDir = (dirPath: string): string[] | null => {
  try {
    const path = process.cwd() + "/public" + dirPath;
    const fileNames = fs.readdirSync(path, "utf8");
    return fileNames;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("An unexpected error occurred");
    }

    return null;
  }
};

export const getFileFromDir = (imagePath: string): string | null => {
  try {
    const path = process.cwd() + "/public" + imagePath;
    const file = fs.readFileSync(path, "utf8");

    return file;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("An unexpected error occurred");
    }

    return null;
  }
};
