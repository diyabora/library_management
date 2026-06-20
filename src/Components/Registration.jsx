import { useState } from "react";
import RegistrationHelper from "../helpers/auth/registration-helper";
import { GiBookCover } from "react-icons/gi";
import { FaEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

function Registration() {
    const { formData, errors, show, shows, handleInputValues, handleShow, handleSubmit, handleIcon, handleIcons } = RegistrationHelper();
    return (
        <>
            <form className="center card container1 shadow p-4 ms-auto me-auto mt-5 pb-0" onSubmit={handleSubmit}>
                <div className="bookIcon fs-1 "><GiBookCover /></div>
                <h3 className="text-center">Register</h3>
                <p className="text-center">Create your account to get started.</p>
                <div className="mb-3">
                    <label for="Input1" className="form-label">Full Name:</label>
                    <input type="text" className="form-control p-2" placeholder="Enter your full name" name="username" value={formData.name} onChange={handleInputValues} />
                    {
                        errors.name && <small className="text-danger">{errors.name}</small>
                    }
                </div>
                <div className="mb-3">
                    <label for="Input1" className="form-label">Email:</label>
                    <input type="text" className="form-control p-2" placeholder="Enter your Email" name="email" value={formData.email} onChange={handleInputValues} />
                    {
                        errors.email && <small className="text-danger">{errors.email}</small>
                    }
                </div>
                <div className=" input-group mb-3">
                    <label for="Input1" className="form-label">Password:</label>
                    <div class="input-group ">
                        <input type={show == true ? "text" : "password"} class="form-control p-2" placeholder="Enter your password" aria-describedby="basic-addon1" />
                        <span class="input-group-text" id="basic-addon1" onClick={handleIcon}>
                            {
                                show == true ? <FaEye /> : <FaRegEyeSlash />
                            }
                        </span>
                    </div>
                    {
                        errors.password && <small className="text-danger">{errors.password}</small>
                    }
                </div>
                <div className="mb-3 ">
                    <label for="Input1" className="form-label">Confirm Password:</label>
                    <div class="input-group">
                        <input type={shows == true ? "text" : "password"} class="form-control p-2" placeholder="Enter your password" aria-describedby="basic-addon1" />
                        <span class="input-group-text" id="basic-addon1" onClick={handleIcons}>
                            {
                                shows == true ? <FaEye /> : <FaRegEyeSlash />
                            }
                        </span>
                    </div>
                    {
                        errors.password && <small className="text-danger">{errors.password}</small>
                    }
                </div>
                <button type="submit" className="btn btn-primary bg w-100 p-2 ">Register</button>
                <hr />
                <p className="text-center">Already have an account? <Link to='/sign-in' className="text-primary">Login</Link> </p>
            </form>
        </>
    )
}


export default Registration;