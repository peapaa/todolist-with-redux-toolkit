import { createSelector } from "@reduxjs/toolkit";
export const todoListSelector = (state) => state.todoList;
export const filterBySearch = (state) => state.filters.search;
export const filterByStatus = (state) => state.filters.status;
export const filterByPrority = (state) => state.filters.priority;

export const todoListRemaining = createSelector(
  todoListSelector,
  filterBySearch,
  filterByStatus,
  filterByPrority,
  (todoList, searchText, status, priority) => {
    return todoList.filter((todo) => {
      if (status === "All") {
        return priority && priority.length
          ? todo.name.includes(searchText) && priority.includes(todo.priority)
          : todo.name.includes(searchText);
      }
      return (
        todo.name.includes(searchText) &&
        (status === "Completed" ? todo.completed : !todo.completed) &&
        (priority && priority.length ? priority.includes(todo.priority) : true)
      );
    });
  }
);
