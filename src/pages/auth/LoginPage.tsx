import { Button, Card, Typography } from "antd";
import { useAuth } from "../../context";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

function LoginPage() {
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const [isLoging, setIsLoging] = useState(false);

  const handleButtonLoginOnClick = () => {
    setIsLoging(true);
    signIn();
    setTimeout(() => {
      setIsLoging(false);
      navigate("/admin", { replace: true });
    }, 1000);
  };

  return (
    <Card>
      <Title>Login Page</Title>
      <Button type="primary" onClick={handleButtonLoginOnClick} loading={isLoging}>
        Login
      </Button>
    </Card>
  );
}

export default LoginPage;
