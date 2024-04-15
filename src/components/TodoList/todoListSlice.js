import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  todos: [],
};

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
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        console.log(action);
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        console.log(action);
        state.todos = action.payload;
        state.status = "idle";
      })
      .addCase(addNewTodos.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      })
      .addCase(updateTodos.fulfilled, (state, action) => {
        let currentTodo = state.todos.find(
          (todo) => todo.id === action.payload
        );
        currentTodo = action.payload;
      });
  },
});

export const fetchTodos = createAsyncThunk("todo/fetchTodos", async () => {
  const response = await fetch("api/todos");
  const res = await response.json();
  console.log({ res });
  return res.todos;
});

export const addNewTodos = createAsyncThunk(
  "todo/addNewTodos",
  async (newTodo) => {
    const response = await fetch("api/todos", {
      method: "POST",
      body: JSON.stringify(newTodo),
    });
    const res = await response.json();
    console.log({ res });
    return res.todos;
  }
);

export const updateTodos = createAsyncThunk(
  "todo/updateTodos",
  async (updateTodo) => {
    const response = await fetch("api/updateTodo", {
      method: "POST",
      body: JSON.stringify(updateTodo),
    });
    const res = await response.json();
    console.log("update todo", { res });
    return res.todos;
  }
);
// tạo ra 3 action creator: todo/fetchTodos/pending, todo/fetchTodos/rejected, todo/fetchTodos/fulfilled

export const { addTodo, toggleClick } = todoListSlice.actions;
export default todoListSlice.reducer;

// // action: là 1 obj {}, action creator () => {return action} trả về  1 action
// // thunk action: {function}, thunk action creator () => {return thunk action} trả về 1 thunk action
// export function addTodos(todo) {
//   // thằng này là thunk action creator
//   // thunk action là cái middleware nằm trung gian, giữa store và dispatch action của event
//   return function addTodoThunk(dispatch, getState) {
//     // trong thunk action đều có thể truy cập vào todo, closure
//     console.log({ todo });
//     console.log("add todo thunk", getState());
//     // custom
//     todo.name = "thien test update";
//     dispatch(addTodo(todo)); // thunk action sẽ dispatch 1 action creator ---> 1 action thường
//     console.log("add todo thunk after", getState());
//   };
// }
