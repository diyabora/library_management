import { useState } from "react";
import LoginHelper from "../helpers/auth/loginHelper";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom"
import { GiBookCover } from "react-icons/gi";

function Login() {
    const { formData, errors,show, handleInputChange, handleSubmit,handleIcon } = LoginHelper();
    
   
    return (
        <>
                <form className="center card container1 shadow p-4 ms-auto me-auto mt-5 pb-0" onSubmit={handleSubmit}>
                    <div className="bookIcon fs-1 "><GiBookCover /></div>
                    <h3 className="text-center">Login</h3>
                    <p className="text-center">Welcome back! Please login to your account</p>
                    <div className="mb-3">
                        <label for="Input1" className="form-label">Username:</label>
                        <input type="text" className="form-control p-2" placeholder="Enter Username" name="username" value={formData.username} onChange={handleInputChange} />
                        {
                            errors.username && <small className="text-danger">{errors.username}</small>
                        }
                    </div>
                    <div className="mb-3">
                        <label for="Input1" className="form-label">Email:</label>
                        <input type="text" className="form-control p-2" placeholder="Enter your Email" name="email" value={formData.email} onChange={handleInputChange} />
                        {
                            errors.email && <small className="text-danger">{errors.email}</small>
                        }
                    </div>
                    <div className="mb-3 input-group">
                        <label for="Input1" className="form-label">Password:</label>
                        <div class="input-group">
                            <input type={show == true ? "text" : "password"} class="form-control p-2" placeholder="Enter your password" aria-describedby="basic-addon1" />
                            <span class="input-group-text" onClick={handleIcon}>
                                {
                                    show == true ? <FaEye /> : <FaRegEyeSlash />
                                }
                            </span>
                        </div>
                        {
                            errors.password && <small className="text-danger">{errors.password}</small>
                        }
                    </div><br />
                    <button type="submit" className="btn btn-primary bg w-100 p-2 ">Sign In</button>
                    <hr />
                    <p className="text-center">Don't have an account? <Link to='/sign-up' className="text-primary">Register</Link> </p>
                </form>
        </>
    )
}
export default Login;