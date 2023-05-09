export const addTask = (task) => ({
  type: 'ADD_TASK',
  payload: task,
});

export const removeTask = (task) => ({
  type: 'REMOVE_TASK',
  payload: task,
});
