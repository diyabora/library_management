import { useState } from "react";
import RegistrationHelper from "../helpers/auth/registration-helper";

function Registration() { 
    const {formData,errors,show,handleInputValues,handleShow,handleSubmit}=RegistrationHelper();
    return (
        <>
            <div className="container-fluid">
                <h3>Student Registration</h3>
                <div className="row">
                    <div className="bg-primary col-lg-12">
                        <div className="topic">FILL ALL THE INFO</div>
                    </div>
                    <div className="sign-up col-lg-12">
                        <form action="" onSubmit={handleSubmit}>
                            <div class="mb-3 row">
                                <label  class="col-lg-2 col-form-label">UserName:</label>
                                <div class="col-lg-10">
                                    <input type="text" class="form-control" onChange={handleInputValues} value={formData.name} name="name"/>
                                    {
                                        errors &&
                                        <span className="text-danger">{errors.name}</span>
                                    }
                                </div>
                            </div>
                            <div class="mb-3 row">
                                <label  class="col-lg-2 col-form-label">Email:</label>
                                <div class="col-lg-10">
                                    <input type="text" class="form-control" onChange={handleInputValues} value={formData.email} name="email" />
                                    {
                                        errors && 
                                       < span className="text-danger">{errors.email} </span>
                                    }
                                </div>
                            </div>
                            <div class="mb-3 row">
                                <label  class="col-lg-2 col-form-label">Password:</label>
                                <div class="col-lg-10">
                                    <input type="password" class="form-control" onChange={handleInputValues} value={formData.password}name="password" />
                                    {
                                        errors &&
                                        <span className="text-danger">{errors.password}</span>
                                    }
                                </div>
                            </div>
                            <div class="mb-3 row">
                                <label  class="col-lg-2 col-form-label">Contact No:</label>
                                <div class="col-lg-10">
                                    <input type="text" class="form-control" onChange={handleInputValues} values={formData.contact}name="contact" />
                                    {
                                        errors &&
                                        <span className="text-danger">{errors.contact}</span>
                                    }
                                </div>
                            </div>
                           <center>
                             <button className=" btn btn-primary">submit</button>
                           </center>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Registration;