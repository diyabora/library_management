import { useState } from "react";
import getApiConfig from "../services/common/getConfig.js";
import addStudentHelper from "../helpers/students/addStudentHelper.js";


function AddStudent() {
    const { formvalues, errors,handleInputChange,handleSubmit } = addStudentHelper();
    return (
        <>
            <div className="container" >
                <div className="row  justify-content-center ">
                    <div className="col-lg-9 ">
                        <div className="card p-4">
                            <h4 className="text-center mb-4">ADD NEW STUDENT</h4>
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col lg-6  mb-2">
                                        <label class="form-label col-lg-6">STUDENT NAME</label><br />
                                        <input type="text" class=" col-lg-6 w-100 p-2 form-control" name="name" onChange={handleInputChange} value={formvalues.name} placeholder="Enter student name..." />
                                        <  span className="text-danger">{errors.name}</span>
                                    </div>
                                    <div className="col lg-6">
                                        <label class="form-label col-lg-6">PHONE NUMBER</label><br />
                                        <input type="text" class=" col-lg-6  w-100 p-2 form-control" name="phone" onChange={handleInputChange} placeholder="Enter phone number..." />
                                        <span className="text-danger">{errors.phone}</span>
                                    </div>
                                </div>
                                <div className="row  mb-2">
                                    <div className="col lg-12">
                                        <label class="form-label col-lg-6">EMAIL</label><br />
                                        <input type="text" class=" col-lg-6 w-100 p-2 form-control" name="email" onChange={handleInputChange} placeholder="Please enter email..." />
                                        <span className="text-danger">{errors.email}</span>
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col lg-4  mb-2">
                                        <label class="form-label col-lg-6">DATE OF BIRTH</label><br />
                                        <input type="DATE" class=" col-lg-6 w-100 p-2 form-control" name="dateOfJoining" onChange={handleInputChange} />
                                        <span className="text-danger">{errors.dateOfJoining}</span>
                                    </div>
                                    <div className="col lg-4">
                                        <label class="form-label col-lg-6">SEAT NUMBER</label><br />
                                        <input type="text" class=" col-lg-6  w-100 p-2 form-control" name="seatNumber" onChange={handleInputChange} placeholder="Enter seat number..." />
                                        < span className="text-danger">{errors.seatNumber}</span>
                                    </div>
                                    <div className="col lg-4">
                                        <label class="form-label col-lg-6">STATUS</label><br />
                                        <input type="text" class=" col-lg-6  w-100 p-2 form-control" name="status" onChange={handleInputChange} placeholder="Enter status..." />
                                        < span className="text-danger">{errors.status}</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col lg-6  mb-2">
                                        <label class="form-label col-lg-6">COURSE</label><br />
                                        <input type="text" class=" col-lg-6 w-100 p-2 form-control" name="course" onChange={handleInputChange} placeholder="Enter course..." />
                                    </div>
                                    <div className="col lg-6">
                                        <label class="form-label col-lg-6">FEE</label><br />
                                        <input type="text" class=" col-lg-6  w-100 p-2 form-control" name="fee" onChange={handleInputChange} placeholder="Enter fee..." />
                                    </div>
                                </div>
                                <div className="row mb-4">
                                    <div className="col-lg-12">
                                        <label class="form-label">ADDRESS</label>
                                        <textarea class="form-control" rows="5" name="address" onChange={handleInputChange} placeholder="Enter address..."></textarea>
                                    </div>
                                </div>
                                <button className="btn bg w-100">Add Student</button>
                            </form>
                        </div>
                    </div >
                </div >
            </div>
        </>
    )
}


export default AddStudent;