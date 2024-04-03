import { configureStore } from "@reduxjs/toolkit";
import todoListSlice from "../components/TodoList/todoListSlice";
import filterSlice from "../components/Filters/filterSlice";

export const store = configureStore({
  reducer: {
    filters: filterSlice,
    todoList: todoListSlice,
  },
});
