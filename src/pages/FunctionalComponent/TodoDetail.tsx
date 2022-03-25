import { ArrowLeftOutlined } from "@ant-design/icons";
import { Divider, Typography } from "antd";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import todoData from "./todoData.json";

const { Title } = Typography;

const TodoDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const todo = todoData.find((item) => item.id === id);

  return (
    <div>
      <ArrowLeftOutlined style={{ fontSize: 30 }} onClick={() => navigate(-1)} />
      {todo ? (
        <>
          <Divider orientation="center" style={{ fontSize: 30 }}>{`Todo ID: ${id}`}</Divider>
          <Title level={3}>{todo?.content}</Title>
        </>
      ) : (
        <Divider orientation="center" style={{ fontSize: 30 }}>
          Todo Not Found
        </Divider>
      )}
    </div>
  );
};

export default TodoDetail;
