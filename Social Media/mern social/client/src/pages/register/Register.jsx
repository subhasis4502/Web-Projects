import "./register.css"

export default function Register() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Lamasocial</h3>
                    <span className="loginDesc">
                        Connect with everybody on Lamasocial.
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Enter a Username" type="text" className="loginInput" />
                        <input placeholder="Enter your Email-Id" type="Email" className="loginInput" />
                        <input placeholder="Enter your Name" type="text" className="loginInput" />
                        <input placeholder="Enter a new Password" type="Password" className="loginInput"/>
                        <input placeholder="Confirm your Password" type="Password" className="loginInput"/>
                        <button className="loginButton">Sign Up</button>
                        <button className="loginRegisterButton">Log into Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
