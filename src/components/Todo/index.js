import { Row, Tag, Checkbox } from "antd";
import { useState } from "react";
import { toggleClick, updateTodos } from "../TodoList/todoListSlice";
import { useDispatch } from "react-redux";

const priorityColorMapping = {
  High: "red",
  Medium: "blue",
  Low: "gray",
};

export default function Todo({ name, prioriry, id, completed }) {
  const [checked, setChecked] = useState(completed);
  const dispatch = useDispatch();
  console.log(prioriry);
  const toggleCheckbox = () => {
    setChecked(!checked);
    // dispatch(toggleClick(id));
    dispatch(updateTodos(id));
  };

  return (
    <Row
      justify="space-between"
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: "line-through" } : {}),
      }}
    >
      <Checkbox checked={checked} onChange={toggleCheckbox}>
        {name}
      </Checkbox>
      <Tag color={priorityColorMapping[prioriry]} style={{ margin: 0 }}>
        {prioriry}
      </Tag>
    </Row>
  );
}
