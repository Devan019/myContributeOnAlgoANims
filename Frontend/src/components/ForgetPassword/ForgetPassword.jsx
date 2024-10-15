import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './forgetpass.css'
import logo from '/logo.png'
const ForgetPassword = () => {
    const [obj, setobj] = useState([]);
    const [email, setemail] = useState("")
    const [btnDisabled , setbtnDisabled] = useState(true)

    const [emailColor, setemailColor] = useState("text-red-500");
    const [emailMsg, setemailMsg] = useState("invalid email");
    const [emailtick, setemailtick] = useState("X");

    async function getData() {
        const api = await fetch("http://localhost:8080/api/login");
        const data = await api.json();
        setobj(data);
    }
    useState(() => {
        getData();
    }, [])

    function forEmail(evt) {
        let value = evt.target.value;
        setemail(value);

        let getemail = false;
        for (let obj2 of obj) {
            if (obj2.emailId == value) {
                getemail = true;
                break;
            }
        }

        if (!getemail) {
            setemailColor("text-red-500");
            setemailMsg("invalid email");
            setemailtick("X");
        } else {
            setemailColor("text-green-500");
            setemailMsg("valid");
            setemailtick("✔");
            setbtnDisabled(false);
        }
    }

    function sendmail(){
        let emailObj = {
            emailId : email
        }

        fetch("http://localhost:8080/forgetpassword",{
            method : 'POST',
            headers: {
                "Content-type": "application/json"
              },
              body : JSON.stringify(emailObj)
        }).then(()=>{
            console.log("senddata");
        })

        setbtnDisabled(true);
    }

    return (
        <>
        <a href=""></a>
            <div className="body">

                <div className="login-container">

                    <div className="video-container">

                        <video id="background-video" src="/bg.mp4" muted loop autoPlay />
                    </div>
                    <header className="algoanims-heading">
                        AlgoAnims
                    </header>

                    <div className="form-container">

                        <div className="login-box" >
                            <div className="logo-forget">
                                <img src={logo} alt="Logo" />
                            </div>
                            <form className="login-form forget-form"
                                onSubmit={(evt) => {

                                }}>

                                <div className="container-forget ">

                                    <div className="fileds-tick">
                                        <div className="fileds">
                                            <input
                                                value={email}
                                                onChange={(evt)=>{
                                                    forEmail(evt);
                                                }}
                                                type="email"
                                                placeholder="Email"
                                                required
                                            />
                                            {email.length > 0 ? <input 
                                            readOnly
                                            value={emailtick}
                                            className={`${emailColor}`}
                                            type="text" /> : <></>}
                                        </div>
                                        {email.length > 0 && emailMsg != 'valid' ? <small
                                        className={`${emailColor}`}>{emailMsg}</small> : <></>}
                                    </div>

                                   <Link to='/login/forgetpassword/mail'> <button type='button'
                                   onClick={sendmail}
                                    disabled = {btnDisabled}
                                    className='bg-blue-500 text-white p-2 rounded-md '>
                                        send mail
                                    </button>
                                    </Link>

                                </div>




                            </form>
                        </div>


                    </div>
                </div>
            </div>

        </>
    )
}

export default ForgetPassword