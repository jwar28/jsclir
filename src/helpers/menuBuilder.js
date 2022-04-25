import { TaskService } from '../services/taskService.js';
import { getTasksInFile, saveIntoFile } from './dataUtils.js';
import {
  confirm,
  listTasksToDelete,
  markTaskAsFinished,
  pauseMenu,
  readUserInput,
  showMenu,
} from './menuUtils.js';

const createTask = async (taskList) => {
  const desc = await readUserInput('Description:');
  taskList.createTask(desc);
};

const confirmDeleteChoice = async () => {
  return await confirm('Are you sure you want to delete this task?');
};

const deleteTask = async (taskList) => {
  const id = await listTasksToDelete(taskList.taskListArray);
  if (id !== '0') {
    const confirmChoice = await confirmDeleteChoice();
    if (confirmChoice) {
      taskList.deleteTask(id);
      console.log('\nTask deleted successfully'.green);
    }
  }
};

const showAllTasks = async (taskList) => taskList.showAllTasks();

const showTasksByStatus = async (taskList, isCompleted) => {
  return taskList.showTasksByStatus(isCompleted);
};

const checkTaskAsFinished = async (taskList) => {
  const idsList = await markTaskAsFinished(taskList.taskListArray);
  return taskList.markTaskAsCompleted(idsList);
};

const menuActions = async (option, taskList) => {
  switch (option) {
    case '1':
      await createTask(taskList);
      break;

    case '2':
      await showAllTasks(taskList);
      break;

    case '3':
      await showTasksByStatus(taskList, true);
      break;

    case '4':
      await showTasksByStatus(taskList, false);
      break;

    case '5':
      await checkTaskAsFinished(taskList);
      break;

    case '6':
      await deleteTask(taskList);
      break;
  }
};

export const startMenu = async () => {
  console.clear();
  const taskList = new TaskService();
  getTasksInFile(taskList);
  let option = '';

  do {
    option = await showMenu();

    await menuActions(option, taskList);

    saveIntoFile(taskList.taskListArray);

    if (option !== '0') await pauseMenu();
  } while (option !== '0');
};
