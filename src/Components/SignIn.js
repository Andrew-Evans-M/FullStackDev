import React from "react";
import "../assets/Css/signIn.css";
import img1 from "../assets/Images/Google.png";
import img2 from "../assets/Images/FaceBook.png";
import img3 from "../assets/Images/Linkedin.png";
import img4 from "../assets/Images/Twitter.png";
import Illustration from "../assets/Images/Illustration.png";
import { useNavigate } from "react-router-dom";
function SignIn() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  };

  return (
    <>
      <div className="main-cont container">
        <div className="sign-in-space">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6 col-xl-6 pe-0 d-flex justify-content-center">
              <div className="sign-in-main">
                <div className="field-in">
                  <div className="header">
                    <h1>Sign In</h1>
                    <h5>
                      New user?{" "}
                      <span style={{ color: "#587fff" }}>
                        Create an account
                      </span>
                    </h5>
                  </div>
                  <div className="sign-in-inp">
                    <input
                      type="text"
                      id="input-name"
                      placeholder="Username or email"

                    />
                    <input type="text" id="input-name" placeholder="Password" />
                    <div className="sign-in">
                      <input
                        className="a"
                        type="checkbox"
                        id="Check-box"
                        checked
                      />
                      <label htmlFor="Check-box" className="checkbox-label">Keep me signed in</label>
                    </div>
                    <button onClick={() => handleClick()}>Sign In</button>
                  </div>
                  <div className="footer-sec">
                    <div className="border-cont">
                      <div className="border-div"></div>
                      <p className="mb-0">Or Sign In With </p>
                      <div className="border-div"></div>
                    </div>
                    <div className="img-Sec">
                      <img src={img1} />
                      <img src={img2} />
                      <img src={img3} />
                      <img src={img4} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="img-main">
                <img className="Illustration" src={Illustration} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
