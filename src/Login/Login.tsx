import { loginStyle } from "@/Login/Login.css.ts";
import { user } from "@/mockData.ts";
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [loginId, setLoginId] = useState<string>();
  const [loginPass, setLoginPass] = useState<string>();
  const [errorMsg, setErrorMsg] = useState<string>();
  const navigate = useNavigate();

  const loginHandler = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (loginId === user.id && loginPass === user.password) {
      navigate("admin");
    } else {
      setErrorMsg("ログインに失敗しました");
    }
  };

  return (
    <Fragment>
      <div className={loginStyle.backScreen}>
        <div className={loginStyle.container}>
          <h1 className={loginStyle.text}>ログイン</h1>
          <form className={loginStyle.form}>
            <p className={loginStyle.error}>{errorMsg}</p>
            <p>
              <label>
                <input
                  type="text"
                  className={loginStyle.inputId}
                  onChange={(e) => setLoginId(e.target.value)}
                  placeholder="id入力"
                  autoComplete="off"
                />
              </label>
            </p>
            <p>
              <label>
                <input
                  type="password"
                  className={loginStyle.inputPass}
                  onChange={(e) => setLoginPass(e.target.value)}
                  placeholder="password入力"
                  autoComplete="off"
                />
              </label>
            </p>
            <input
              type="submit"
              value="ログイン"
              className={loginStyle.button}
              onClick={(e) => loginHandler(e)}
            />
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default Login;
