import { Checkbox, Divider, List, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Todo } from "../../models";
import todoData from "./todoData.json";

const { Text } = Typography;

const fakeApiGetTodo = (ms: number) =>
  new Promise<Todo[]>((resolve, rejects) => {
    return setTimeout(() => resolve(todoData), ms);
  });

const TodoItem = ({ todo, onCheck }: { todo: Todo; onCheck: (item: Todo) => void }) => {
  return (
    <List.Item
      actions={[
        <Link key={todo.id + todo.content} to={`${todo.id}`} replace={false}>
          more
        </Link>,
      ]}
    >
      <Checkbox onChange={() => onCheck(todo)}>
        <Text delete={!todo.isDone}>{todo.content}</Text>
      </Checkbox>
    </List.Item>
  );
};

const TodoList = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleTodoItemOnCheck = (todo: Todo) => {
    const currentTodoList = [...todoList];
    const todoIndex = currentTodoList.findIndex((item) => item.id === todo.id);
    currentTodoList[todoIndex].isDone = !currentTodoList[todoIndex].isDone;
    setTodoList(currentTodoList);
  };

  // Unsubscriptions and asynchronous tasks in a useEffect cleanup function
  // To fix "Can't perform a React state update on an unmounted component" issue
  useEffect(() => {
    let isComponentUnmount = false;
    async function getTodoList() {
      setIsLoading(true);

      //blocking
      const response = await fakeApiGetTodo(5000);
      if (response && !isComponentUnmount) {
        setIsLoading(false);
        setTodoList(response);
      }
    }

    getTodoList();

    return () => {
      isComponentUnmount = true;
    };
  }, []);

  return (
    <div>
      <Divider orientation="left">Todos</Divider>
      <List
        bordered
        dataSource={todoList}
        loading={isLoading}
        renderItem={(todo) => <TodoItem key={todo.id + todo.content} todo={todo} onCheck={handleTodoItemOnCheck} />}
      />
    </div>
  );
};

export default TodoList;
