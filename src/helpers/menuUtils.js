import 'colors';

import inquirer from 'inquirer';

import {
  checkTaskQuestion,
  confirmQuestion,
  deleteTaskQuestion,
  menuHeader,
  menuQuestions,
  pauseMenuQuestion,
  readUserInputQuestion,
} from './menuQuestions.js';

export const promptQuestion = async (question) =>
  await inquirer.prompt(question);

export const confirm = async (message) => {
  const question = await confirmQuestion(message);
  const { confirmChoice } = await promptQuestion(question);
  return confirmChoice;
};

export const readUserInput = async (message) => {
  const question = await readUserInputQuestion(message);
  const { description } = await promptQuestion(question);
  return description;
};

export const pauseMenu = async () => {
  console.log('\n');
  await promptQuestion(pauseMenuQuestion);
};

export const showMenu = async () => {
  console.clear();
  menuHeader();

  const { option } = await promptQuestion(menuQuestions);
  return option;
};

export const listTasksToDelete = async (taskList = []) => {
  const choices = taskList.map((task, i) => {
    const index = `${i + 1}`.green;
    return {
      value: task.id,
      name: `${index}. ${task.description}`,
    };
  });
  const question = await deleteTaskQuestion(choices);
  const { id } = await promptQuestion(question);
  return id;
};

export const markTaskAsFinished = async (taskList = []) => {
  const choices = taskList.map((task, i) => {
    const index = `${i + 1}`.green;
    return {
      value: task.id,
      name: `${index}. ${task.description}`,
      checked: !!task.completedIn,
    };
  });
  const question = await checkTaskQuestion(choices);
  const { selectedIds } = await promptQuestion(question);
  return selectedIds;
};
