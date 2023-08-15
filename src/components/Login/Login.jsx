import "./Login.css";
import squiggle from "../../assets/squiggle.png";
// https://stock.adobe.com/images/squiggly-line/538587269?asset_id=538587269

const Login = () => {
  function test() {
    console.log("i got clicked!");
  }

  return (
    <div className="login-container">
      <div className="login-welcome">
        <div id="in-todo-itive">
          <h1>
            In<span className="dot">•</span>
            <i>todo</i>
            <span className="dot">•</span>itive
          </h1>
        </div>
        <h3>
          An app designed with <i>you</i> in mind.
        </h3>
      </div>
      <img id="squiggle" src={squiggle} alt="squiggle" />
      <div id="login-field">
        <input id="username" type="text" placeholder="username" />
        <input id="password" type="text" placeholder="password" />
        <input
          id="login-submit"
          type="submit"
          value="Submit"
          onClick={test}
        ></input>
        <p id="account">
          Don't have an account yet?{" "}
          <a id="sign-up" href="https://www.google.com">
            Sign up!
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
