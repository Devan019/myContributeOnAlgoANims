// import { data } from 'autoprefixer';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import cryptoJs from "crypto-js";
import getkey from '../../../public/key';
const ResetPassword = () => {
    const [btndisabled, setbtndisabled] = useState(true)
    const [userName, setUserName] = useState("");
    const [password, setPass] = useState("");
    const [repassword, setRePass] = useState("");
    const [encrypt, setEncrypt] = useState("");
    const [emailid, setEmailid] = useState("");
    const [passType, setPassType] = useState("password");
    const [passicon, setPassicon] = useState("👁️");
    const [repassType, setrePassType] = useState("password");
    const [repassicon, setrePassicon] = useState("👁️");


    const [passColor, setpassColor] = useState("text-red-500");
    const [repassColor, setRepassColor] = useState("text-red-500");

    const [passTick, setPassTick] = useState("X");
    const [repassTick, setRepassTick] = useState("X");

    const [passMsg, setpassMsg] = useState("invalid password");
    const [repassmsg, setRepassmsg] = useState("password not match");
    function isDigit(str) {
        let hasDigit = false;
        for (let i = 0; i <= 9; i++) {
            if (str.includes(i.toString())) {
                hasDigit = true;
                break;
            }
        }
        return hasDigit;
    }

    function isChar(str) {
        let hasChar = false;
        for (let i = 65; i <= 90; i++) {
            if (str.includes(String.fromCharCode(i))) {
                hasChar = true;
                break;
            }
        }
        for (let i = 97; i <= 122; i++) {
            if (str.includes(String.fromCharCode(i))) {
                hasChar = true;
                break;
            }
        }
        return hasChar;
    }

    function isSpecialChar(str) {
        let isSpecialChar = false;
        let spchars = '@#!$%^&*()_+{}[]|":;<>,./?';
        for (let char of spchars) {
            if (str.includes(char)) {
                isSpecialChar = true;
            }
        }
        return isSpecialChar;
    }

    function rePassError(evt) {
        console.log(passTick , repassTick)

        let value = evt.target.value;
        if(passTick == '✔' && repassTick == '✔'){
            setbtndisabled(false);
        }else{
            setbtndisabled(true);
        }
        setRePass(value)
        if (value != password) {
            setRepassColor("text-red-500");
            setRepassTick("X");
            setRepassmsg("don't match password");
        } else {
            setRepassColor("text-green-500");
            setRepassTick("✔");
            setRepassmsg("valid");
            if(passTick == '✔'){
                setbtndisabled(false);
            }
        }
    }
    function passwordError(evt) {
        console.log(passTick , repassTick)

        let value = evt.target.value
        if(passTick == '✔' && repassTick == '✔'){
            setbtndisabled(false);
        }else{
            setbtndisabled(true);
        }
        if (value != repassword) {
            setRepassColor("text-red-500");
            setRepassTick("X");
            setRepassmsg("don't match password");
        }
        setPass(value);
        setpassColor("text-red-500");
        setPassTick("X");
        if (value.length < 6) {
            setpassMsg("min length of password is 6");
        } else {
            if (!isChar(value)) {
                setpassMsg("password should contain charaters");
            } else {
                if (!isDigit(value)) {
                    setpassMsg("password should contain digit");
                } else {
                    if (!isSpecialChar(value)) {
                        setpassMsg("password should contain special charcter");
                    } else {
                        setpassMsg("valid");
                        setPassTick("✔");
                        setpassColor("text-green-500")
                    }
                }
            }


        }
    }

    async function main() {
        const api = await fetch("http://localhost:8080/api/resetpassword");
        const data = await api.json();

        setEmailid(data.email);
        setUserName(data.userName);

    }

    useEffect(() => {
        main();
    }, [])

    function reSetPassword() {
        console.log(passTick , repassTick)

        if (passTick == '✔' && repassTick == '✔') {
            setbtndisabled(false);
            let obj = {
                password: encrypt
            }
            fetch("http://localhost:8080/changepassword", {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(obj)
            }).then(() => {
                console.log("password is reset");
            })
        }


    }

    return (
        <div className="body">
            <div className="login-container">
                <div className="video-container">
                    <video className="video" id="background-video" src="/bg.mp4" autoPlay muted loop />
                </div>

                <header className="algoanims-heading">
                    AlgoAnims
                </header>

                <div className="form-container">
                    <div className="login-box">
                        <div className="logo">
                            <img src="/logo.png" alt="Logo" />
                        </div>
                        <form className="login-form" >


                            <div className="fileds">
                                <input type="text"
                                    id="uname"
                                    value={userName}

                                    placeholder="Username" required />

                            </div>

                            <div className="fileds">
                                <input

                                    value={emailid}
                                    type="email"
                                    placeholder="Email Address"
                                    required
                                />


                            </div>


                            <div className="fileds-tick pass-tick">
                                <div className="fileds">
                                    <input
                                        onChange={(evt) => {
                                            passwordError(evt)
                                            setEncrypt(cryptoJs.AES.encrypt(evt.target.value, getkey()).toString());
                                        }}

                                        value={password}
                                        type={passType}
                                        placeholder="Password"
                                        required
                                    />
                                    <button
                                        className="btn-pass"
                                        type="button"
                                        onClick={() => {
                                            setPassType((prev) => {
                                                if (prev == 'password') {
                                                    setPassicon("🙈");
                                                    return "text";
                                                } else {
                                                    setPassicon("👁️");
                                                    return "password";
                                                }
                                            })
                                        }}
                                    >{passicon}</button>
                                    {password.length > 0 ? <input type="text"
                                        readOnly
                                        className={`${passColor}`}
                                        value={passTick}
                                    /> : <></>}
                                </div>
                                {passMsg != "valid" && password.length > 0 ? <small className={`${passColor}`}>{passMsg}</small> : <></>}
                            </div>

                            <div className="fileds-tick pass-tick">
                                <div className="fileds">
                                    <input
                                        onChange={(evt) => {
                                            rePassError(evt)
                                        }}
                                        value={repassword}
                                        type={repassType}
                                        placeholder="Confirm Password"
                                        required
                                    />
                                    <button
                                        className="btn-pass"
                                        type="button"
                                        onClick={() => {
                                            setrePassType((prev) => {
                                                if (prev == 'password') {
                                                    setrePassicon("🙈");
                                                    return "text";
                                                } else {
                                                    setrePassicon("👁️");
                                                    return "password";
                                                }
                                            })
                                        }}
                                    >{repassicon}</button>
                                    {repassword.length > 0 ? <input type="text"
                                        readOnly
                                        className={`${repassColor}`}
                                        value={repassTick}
                                    /> : <></>}

                                </div>
                                {repassmsg != "valid" && repassword.length > 0 ? <small className={`${repassColor}`}>{repassmsg}</small> : <></>}
                            </div>


                            <Link to='/login'><button
                                disabled={btndisabled}
                                onClick={reSetPassword}
                                type="button" className="signupbtn">Set Password</button>
                                <div className="separator">
                                    <div className="line"></div>
                                </div></Link>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ResetPassword