import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "test",
    completed: true,
    priority: "Medium",
  },
  {
    id: 2,
    name: "React",
    completed: false,
    priority: "Medium",
  },
  {
    id: 3,
    name: "Redux",
    completed: false,
    priority: "Medium",
  },
];

const todoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggleClick: (state, action) => {
      const currentTodo = state.find((todo) => todo.id === action.payload);
      if (currentTodo) {
        currentTodo.completed = !currentTodo.completed;
      }
    },
  },
});

export const { addTodo, toggleClick } = todoListSlice.actions;
export default todoListSlice.reducer;
