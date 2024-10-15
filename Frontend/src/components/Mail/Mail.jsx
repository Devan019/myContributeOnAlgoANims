import React from 'react'
import logo from '/logo.png'
import { Link } from 'react-router-dom'
const Mail = () => {
    return (
        <>
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
                            <div className="mail flex justify-center">
                                <img src="/mail.jpeg" width={"200px"} alt="mail" />
                            </div>
                            <h1 className='text-2xl'>check your mail</h1>
                            <div className='flex justify-between'>
                                <Link className=' underline text-blue-600'  to="/login">back to login</Link>
                                <Link className=' underline text-blue-600' to="/login/forgetpassword">Change email</Link>
                            </div>
                        </div>
                        

                    </div>
                </div>
            </div>
        </>
    )
}

export default Mail