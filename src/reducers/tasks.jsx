const initialState = {
  tasks: [],
};

function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case 'REMOVE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.id),
      };
    default:
      return state;
  }
}

export default tasksReducer;
