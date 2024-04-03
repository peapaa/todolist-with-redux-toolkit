import { Col, Row, Input, Button, Select, Tag, Space } from "antd";
import Todo from "../Todo";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "./todoListSlice";
import { todoListSelector } from "../../redux/selector";
export default function TodoList() {
  const [todoName, setTodoName] = useState("");
  const [prority, setPrority] = useState("");
  const dispatch = useDispatch();
  const todoList = useSelector(todoListSelector);
  const inputRef = useRef();
  console.log(todoName);
  console.log(prority);
  const handleSubmit = () => {
    dispatch(
      addTodo({
        id: uuidv4(),
        name: todoName,
        completed: false,
        prority: prority,
      })
    );
    setTodoName("");
    inputRef.current.focus();
  };
  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((todo) => (
          <Todo
            key={todo.id}
            name={todo.name}
            prioriry={todo.prority}
            id={todo.id}
            completed={todo.completed}
          />
        ))}
      </Col>
      <Col span={24}>
        <Space.Compact style={{ display: "flex" }}>
          <Input
            ref={inputRef}
            value={todoName}
            onChange={(e) => {
              setTodoName(e.target.value);
            }}
          />
          <Select
            defaultValue="Medium"
            value={prority}
            onChange={(value) => setPrority(value)}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleSubmit}>
            Add
          </Button>
        </Space.Compact>
      </Col>
    </Row>
  );
}
