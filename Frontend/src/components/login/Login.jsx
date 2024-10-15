import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./login.css";
import logoImage from "/logo.png";
import { useNavigate } from "react-router-dom";
import getkey from "../../../public/key";
import CryptoJS from "crypto-js";

import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Reload } from "../../Functions/Reload";


function Login() {
  const loginBoxRef = useRef(null);
  const signupBoxRef = useRef(null);
  const headingRef = useRef(null);

  const [firstField, setFirst] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  let [obj, setObj] = useState([]);

  const [passtype , setpasstype] = useState("password");
  const [passicon , setpassicon] = useState("👁️");


  const [firstfieldColor, setfirstfieldColor] = useState("text-red-500");
  const [passColor, setpassColor] = useState("text-red-500");

  const [firsttick, setfirsttick] = useState("X");
  const [passTick, setPassTick] = useState("X");

  const [firstMsg, setfirstMsg] = useState("username or email is not availabel");
  const [passMsg, setpassMsg] = useState("password is not availabel");


  useEffect(() => {
    localStorage.removeItem("HomeReload");
    localStorage.removeItem("NavedReload");
    localStorage.removeItem("NavReload");

    Reload("LoginReload");
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();



    // Animation sequence
    tl.from(loginBoxRef.current, { y: 50, opacity: 0, duration: 2, delay: 0.5, ease: "power2.out" }, "ok")
      .from(signupBoxRef.current, { y: 50, opacity: 0, duration: 2, ease: "power2.out" }, "ok")
      .from(headingRef.current, { y: -50, opacity: 0, duration: 2, ease: "power2.out" }, "ok");

    return () => {
      tl.kill(); // Cleanup the timeline on unmount
    };
  }, []);




  async function setalldata() {
    const api = await fetch("http://localhost:8080/api/login");
    const apidata = await api.json();
    for (let data of apidata) {
      let email = data.emailId;
      let uname = data.userName;
      let password = data.password;

      let finalstr = CryptoJS.AES.decrypt(data.password, getkey()).toString(CryptoJS.enc.Utf8)


      obj.push({
        email: email,
        uname: uname,
        pass: finalstr
      })

    }
    console.log(obj);
  }

  function check() {

    let temp;
    if (passTick == '✔' && firsttick == '✔') {
      for (let pd of obj) {
        if ((pd.uname === firstField || pd.email === firstField)) {
          temp = pd;
          break;
        }
      }
      navigate("/");

      const obj2 = {
        email: temp.email
      }

      {
        fetch("http://localhost:8080/login", {
          method: 'POST',
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(obj2)
        }).then((res) => res.json());

      }

    }

  }

  useEffect(() => {
    setalldata();
    console.log("useEffect called");

    // const tl = gsap.timeline();

    gsap.from(
      loginBoxRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 2, delay: 0.5, ease: "power2.out" }
    );
    gsap.from(
      signupBoxRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 2, delay: 0.3, ease: "power2.out" },
      "-=1" // Overlap the animations
    )
    gsap.from(
      headingRef.current,
      { y: -50, opacity: 0 },
      { y: -15, opacity: 1, duration: 2, delay: 0.3, ease: "power2.out" },
      "-=1.2"
    );

    // Optional: Clean up the timeline on component unmount
    // return () => {
    //   tl.kill();
    // };
  }, []); // Empty dependency array ensures this runs once on mount

  function forFirstField(evt) {
    let value = evt.target.value;
    setFirst(value)
    let isget = false;
    for (let pd of obj) {
      if (pd.uname == value || pd.email == value) {
        isget = true;
        break;
      }
    }
    if (isget) {
      setfirstMsg("valid");
      setfirsttick("✔");
      setfirstfieldColor("text-green-500");
    } else {
      setfirstMsg("username or email is not availabel");
      setfirsttick("X");
      setfirstfieldColor("text-red-500");
    }
  }

  function forPassword(evt) {
    let value = evt.target.value;
    setPass(value)
    let isget = false;
    for (let pd of obj) {
      if ((pd.uname === firstField || pd.email === firstField) &&  pd.pass == value) {
        isget = true;
        break;
      }
    }
    if (isget) {
      setpassMsg("valid");
      setPassTick("✔");
      setpassColor("text-green-500");
    } else {
      setpassMsg("password is not availabel");
      setPassTick("X");
      setpassColor("text-red-500");
    }
  }

  return (

    <div className="body">

      <div className="login-container">

        <div className="video-container">
          
          <video id="background-video" src="/bg.mp4" muted loop autoPlay />
        </div>


        <header className="algoanims-heading" ref={headingRef}>
          AlgoAnims
        </header>

        <div className="form-container">
         
          <div className="login-box" ref={loginBoxRef}>
            <div className="logo">
              <img src={logoImage} alt="Logo" />
            </div>
            <form className="login-form"
              onSubmit={(evt) => {
                evt.preventDefault();
                check();
              }}>

              <div className="fileds-tick">
                <div className="fileds">
                  <input
                    value={firstField}
                    onChange={(evt) => {
                      forFirstField(evt)
                    }}
                    type="text"
                    placeholder="Username, or Email"
                    required
                  />
                  {firstField.length > 0 ? <input
                    readOnly
                    value={firsttick}
                    className={`${firstfieldColor}`}
                    type="text" /> : <></>}
                </div>
                {firstField.length > 0 && firstMsg != 'valid' ?
                  <small className={`${firstfieldColor}`} >{firstMsg}</small>
                  : <></>}
              </div>

              <div className="fileds-tick pass-tick">
                <div className="fileds">
                  <input
                    value={pass}
                    onChange={(evt) => {
                      forPassword(evt)
                    }}
                    type={passtype} placeholder="Password" required />
                    <button
                    type="button"
                    onClick={()=>{
                      setpassicon("🙈");
                      setpasstype((prev)=>{
                        if(prev == "text") return "password"
                        return "text"
                      })
                    }}
                    >{passicon}</button>
                    {pass.length > 0 ? <input 
                    readOnly
                    value={passTick}
                    className={`${passColor}`}
                    type="text" />  : <></>}
                </div>
                {passMsg != 'valid' && pass.length > 0 ? <small
                className={`${passColor}`}
                >{passMsg}</small> : <></>}
              </div>

              <button type="submit" className="loginbtn btn-login">Log In</button>
              <div className="separator">
                <div className="line"></div>
              </div>
              <Link to='forgetpassword' className="forgot-password">
                Forgot password?
              </Link>
            </form>
          </div>

          
          <div className="signup-box" ref={signupBoxRef}>
            <p>
              Do not have an account?
              <NavLink to='/signup' className="text-blue-500">
                <span> Sign up </span>
              </NavLink>


            </p>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Login;
