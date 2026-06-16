import { useState } from "react";
import LoginHelper from "../helpers/auth/loginHelper";
function Login() {
    const { formData, errors, handleInputChange, handleSubmit } = LoginHelper();
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="container1 mt-4 ms-auto me-auto p-3" >
                    <h2 className="text-center">Sign In</h2>
                    <div className="mb-3">
                        <label for="Input1" className="form-label">Username:</label>
                        <input type="text" className="form-control p-3" placeholder="Enter Username" name="username" value={formData.username} onChange={handleInputChange} />
                        {
                            errors.username && <small className="text-danger">{errors.username}</small>
                        }   
                    </div>
                    <div className="mb-3">
                        <label for="Input1" className="form-label">Email:</label>
                        <input type="text" className="form-control p-3" placeholder="Enter Email" name="email" value={formData.email} onChange={handleInputChange} />
                        {
                            errors.email && <small className="text-danger">{errors.email}</small>
                        }
                    </div>
                    <div className="mb-3">
                        <label for="Input1" className="form-label">Password:</label>
                        <input type="password" className="form-control p-3" placeholder="Enter Password" name="password" value={formData.password} onChange={handleInputChange} />
                       {
                            errors.password && <small className="text-danger">{errors.password}</small>
                        }
                    </div><br />
                    <button type="submit" className="btn btn-primary w-100 p-3">Sign In</button>
                </div>
            </form>
        </>
    )
}
export default Login;