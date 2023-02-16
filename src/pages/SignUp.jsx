import React, { useEffect, useState } from "react";
import Input from "../component/Input";
import "./SignUp.css";

const SignUp = () => {
  const [state, setState] = useState({
    email: "",
    pwd: "",
    pwdCheck: "",
    username: "",
    age: "",
  });

  const [isPwdSame, setIsPwdSame] = useState(true);
  const [disabled, setDisabled] = useState(true);

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (state.pwd !== state.pwdCheck) {
      setIsPwdSame(false);
    } else {
      setIsPwdSame(true);
    }
  }, [state.pwd, state.pwdCheck, isPwdSame]);

  useEffect(() => {
    if (
      state.email === "" ||
      state.pwd === "" ||
      state.pwdCheck === "" ||
      state.username === "" ||
      isPwdSame === false
    ) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [
    state.email,
    state.pwd,
    state.pwdCheck,
    isPwdSame,
    state.username,
    disabled,
  ]);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    alert(`${state.username}님 환영합니다!`);
  };

  const onReset = () => {
    setState({
      email: "",
      pwd: "",
      pwdCheck: "",
      username: "",
      age: "",
    });
  };

  return (
    <div>
      <h1> 회원가입 </h1>
      <form onSubmit={onSubmit}>
        <Input
          name="email"
          title={"이메일"}
          type={"email"}
          value={state.email}
          onChange={handleChange}
          placeholder={"이메일을 입력하세요"}
          required
        />
        <Input
          name="pwd"
          title={"비밀번호"}
          type={"password"}
          value={state.pwd}
          onChange={handleChange}
          placeholder={"비밀번호를 입력하세요"}
          required
        />
        <Input
          name="pwdCheck"
          title={"비밀번호 재확인"}
          type={"password"}
          value={state.pwdCheck}
          onChange={handleChange}
          placeholder={"비밀번호를 다시 입력하세요"}
          required
        />
        {isPwdSame ? (
          ""
        ) : (
          <p className="pwdNotice">* 비밀번호가 일치하지 않습니다</p>
        )}
        <Input
          name="username"
          title={"이름"}
          type={"text"}
          value={state.username}
          onChange={handleChange}
          placeholder={"이름을 입력하세요"}
          required
        />
        <Input
          name="age"
          title={"나이"}
          className="age"
          type={"number"}
          value={state.age}
          onChange={handleChange}
          placeholder={"나이를 입력하세요"}
        />

        <div>
          <button type="submit" className="signup_submit" disabled={disabled}>
            가입하기
          </button>
        </div>
        <div className="signup_reset_wrap">
          <button onClick={onReset} className="signup_reset">
            초기화
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
