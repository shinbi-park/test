import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  const name = localStorage.getItem("name");
  useEffect(() => {
    const name = localStorage.getItem("name");

    name === null ? navigate("/signup") : navigate("/");
  }, []);
  return (
    <div>
      <h1>{name}님 환영합니당</h1>
    </div>
  );
};

export default Main;
