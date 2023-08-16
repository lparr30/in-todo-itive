import "./Login.css";

const Login = () => {
  function test() {
    console.log("i got clicked!");
  }

  return (
    <div className="login-container">
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
      <div id="login-field">
        <input id="username" type="text" placeholder="username" />
        <input id="password" type="text" placeholder="password" />
        <input
          id="login-submit"
          type="submit"
          value="Submit"
          onClick={test}
        ></input>
      </div>
      
    </div>
  );
};

export default Login;
