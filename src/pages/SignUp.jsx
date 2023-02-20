import { isDisabled } from "@testing-library/user-event/dist/utils";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Main from "./Main";
import "./SignUp.css";

const initialState = {
  email: "",
  pwd: "",
  pwdCheck: "",
  username: "",
  age: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE": {
      return action.state;
    }
    case "RESET": {
      return action.state;
    }

    default:
      return state;
  }
};

const SignUp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isPwdSame, setIsPwdSame] = useState(true);
  const [disabled, setDisabled] = useState(true);

  const emailRef = useRef();
  const navigate = useNavigate();

  const handleChange = useCallback(
    (e) => {
      dispatch({
        type: "CHANGE",
        state: { ...state, [e.target.name]: e.target.value },
      });
    },
    [state]
  );

  useEffect(() => {
    if (state.pwd !== state.pwdCheck) {
      setIsPwdSame(false);
    } else {
      setIsPwdSame(true);
    }

    if (
      state.email === false ||
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
    state.pwd,
    state.pwdCheck,
    isPwdSame,
    state.email,
    state.username,
    disabled,
  ]);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    alert(`${state.username}님 환영합니다!`);
    localStorage.setItem("name", state.username);
    navigate("/");
  };

  const onReset = () => {
    dispatch({
      type: "RESET",
      state: initialState,
    });
    emailRef.current.focus();
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
          ref={emailRef}
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
      </form>
      <div className="signup_reset_wrap">
        <button onClick={onReset} className="signup_reset">
          초기화
        </button>
      </div>
    </div>
  );
};

export default SignUp;
