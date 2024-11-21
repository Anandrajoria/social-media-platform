import "./register.css";

function Register() {
  return (
    <>
      <div className="login">
        <div className="loginWrapper">
          <div className="loginLeft">
            <h3 className="loginLogo">SocialMedia</h3>
            <span className="loginDesc">connect with world!!</span>
          </div>
          <div className="loginRight">
            <div className="loginBox">
              <input
                type="text"
                className="loginInput"
                placeholder="username"
              />
              <input type="Email" className="loginInput" placeholder="Email" />
              <input
                type="passward"
                className="loginInput"
                placeholder="passward"
              />
              <input
                type="passward again"
                className="loginInput"
                placeholder="passward"
              />
              <button className="loginButton">Sign up</button>

              <button className="loginRegisterButton">
                Log into your account
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
