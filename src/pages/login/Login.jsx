import './login.css'

function Login() {
  return (
    <>
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className='loginLogo'>SocialMedia</h3>
                    <span className='loginDesc'>connect with world!!</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                    <input type="Email" className="loginInput" placeholder='Email'/>
                    <input type="passward" className="loginInput" placeholder='passward'/>
                        <button className='loginButton'>log in</button>
                        <span className='loginForgot'>forgot passward?</span>
                        <button className='loginRegisterButton'>create a new account</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login