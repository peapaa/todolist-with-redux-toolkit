import { Typography, Divider } from "antd";
import "./App.css";
import TodoList from "./components/TodoList";
import Filters from "./components/Filters";
import { setupServer } from "./fakeApi";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTodos } from "./components/TodoList/todoListSlice";

setupServer();

const { Title } = Typography;
// đoạn này chỉ dùng để test api

// const fetchUrl = async () => {
//   try {
//     const response = await fetch("api/todos");
//     const data = await response.json();
//     console.log("api get", data);
//   } catch (err) {
//     console.log(err);
//   }
// };

// const fetchPostApi = async () => {
//   try {
//     const response = await fetch("api/todos", {
//       method: "POST",
//       body: JSON.stringify({
//         id: 1,
//         name: "test",
//         completed: false,
//         priority: "Medium",
//       }),
//     });
//     const data = await response.json();
//     console.log("api post", data);
//   } catch (err) {
//     console.log(err);
//   }
// };

// const fetchUpdateTodoApi = async () => {
//   try {
//     const response = await fetch("api/updateTodo", {
//       method: "POST",
//       body: JSON.stringify({
//         id: 1,
//         name: "testnew",
//         completed: true,
//         priority: "Medium",
//       }),
//     }).then(() => fetchUrl());
//   } catch (err) {
//     console.log(err);
//   }
// };

function App() {
  // useEffect(() => {
  //   fetchPostApi();
  //   fetchUrl();
  //   fetchUpdateTodoApi();
  // }, []);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);
  return (
    <div
      style={{
        width: 500,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        padding: 20,
        boxShadow: "0 0 10px 4px #bfbfbf",
        borderRadius: 5,
        height: "90vh",
      }}
    >
      <Title style={{ textAlign: "center" }}>TODO APP with REDUX</Title>
      <Filters />
      <Divider />
      <TodoList />
    </div>
  );
}

export default App;
