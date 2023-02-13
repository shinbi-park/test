import React from "react";
import Input from "./component.js/Input";

import "./style.css";

const App = () => {
  return (
    <div>
      <h1> 회원가입 </h1>
      <div>
        <Input
          name={"이메일"}
          notice={"필수*"}
          type={"email"}
          placeholder={"이메일을 입력하세요"}
          required
        />

        <Input
          name={"비밀번호"}
          notice={"필수*"}
          type={"password"}
          placeholder={"비밀번호를 입력하세요"}
          required
        />

        <Input
          name={"비밀번호 재확인"}
          notice={"필수*"}
          type={"password"}
          placeholder={"비밀번호를 다시 입력하세요"}
          required
        />

        <Input
          name={"이름"}
          notice={"필수*"}
          type={"text"}
          placeholder={"이름을 입력하세요"}
          required
        />

        <Input
          name={"나이"}
          className="age"
          type={"number"}
          placeholder={"나이를 입력하세요"}
        />

        <div>
          <button type="submit">가입하기</button>
        </div>
      </div>
    </div>
  );
};

export default App;
