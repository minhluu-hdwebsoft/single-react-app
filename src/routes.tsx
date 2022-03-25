import { DemoRedux } from "pages/DemoRedux/DemoRedux";
import { HelloWorld } from "pages/HelloWorld";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { NotFound, PrivateRoute } from "./components/common";
import LoginPage from "./pages/auth/LoginPage";
import { DemoClassComponent } from "./pages/ClassComponent/DemoClassComponent";
import TodoDetail from "./pages/FunctionalComponent/TodoDetail";
import TodoList from "./pages/FunctionalComponent/TodoList";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/admin" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="admin" element={<PrivateRoute />}>
        <Route index element={<HelloWorld />} />
        <Route path="redux" element={<DemoRedux />} />
        <Route path="hello-world" element={<HelloWorld />} />
        <Route path="class" element={<DemoClassComponent />} />
        <Route path="functional">
          <Route path="todo">
            <Route index element={<TodoList />} />
            <Route path=":id" element={<TodoDetail />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="*" element={<Navigate to="/admin" />} />
    </Routes>
  );
}

export default AppRoutes;
