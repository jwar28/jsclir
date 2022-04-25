import { readFile, saveFile } from '../data/fileManager.js';

export const saveIntoFile = (taskListArray) => saveFile(taskListArray);

export const getTasksInFile = (tasksFile) => {
  const tasksInFile = readFile();

  if (tasksInFile) tasksFile.getTasksFromArray(tasksInFile);
  return tasksInFile;
};
