import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  const name = localStorage.getItem("name");
  useEffect(() => {
    const name = localStorage.getItem("name");

    // name === null ? navigate("/signup") : navigate("/"); - 내가 쓴 방식

    //멘토님 피드백 방식
    if (!name) navigate("/signup");
  }, []);
  return <div>{name && <h1>{name}님 환영합니당</h1>}</div>;
};

export default Main;
