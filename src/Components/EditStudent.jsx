import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getApiConfig from "../services/common/getConfig";

const EditStudent = () => {
    const initialValues = {
        name: "",
        phone: "",
        email: "",
        dateOfJoining: "",
        seatNumber: "",
        status: "",
        course: "",
        fee: "",
        address: ""
    }
    const { id } = useParams();
    console.log(id);
    const [studentData, setStudentData] = useState(initialValues);
    console.log(studentData);
    useEffect(() => {
        async function getStudent() {
            try {
                let { data } = await axios.get(`${import.meta.env.VITE_API_URL}/student/getStudent/${id}`, getApiConfig());
                setStudentData(data.student);
            }
            catch (error) {
                console.log("error:", error);
            }
        }
        getStudent();
    }, [])

    const handleUpdate = async (e) => {
        e.preventDefault();
        let { data } = await axios.patch(`${import.meta.env.VITE_API_URL}/student/updateStudent/${id}`, studentData, getApiConfig());
        if (data.status === 200) {
            alert(data.message);
            window.location.reload();
        }
    }
    const handleInputChange = (e) => {
        setStudentData({
            ...studentData,
            [e.target.name]: e.target.value
        })
    }
    return (
        <>
            <div className="container" >
                <div className="row  justify-content-center">
                    <div className="col-lg-9 ">
                        <div className="card p-4">
                            <h4 className="text-center mb-4">UPDATE STUDENT DETAILS</h4>
                            <form onSubmit={handleUpdate}>
                                <div className="row">
                                    <div className="col-lg-6  mb-2">
                                        <label className="form-label col-lg-6">STUDENT NAME</label><br />
                                        <input type="text" className=" col-lg-6 w-100 p-2 form-control" name="name" value={studentData.name} onChange={handleInputChange} placeholder="Enter student name..." />
                                        <  span className="text-danger"></span>
                                    </div>
                                    <div className="col-lg-6">
                                        <label class="form-label col-lg-6">PHONE NUMBER</label><br />
                                        <input type="text" class=" col-lg-6  w-100 p-2 form-control" name="phone" onChange={handleInputChange} value={studentData.phone} placeholder="Enter phone number..." />
                                        <span className="text-danger"></span>
                                    </div>
                                </div>
                                <div className="row  mb-2">
                                    <div className="col-lg-12">
                                        <label class="form-label col-lg-6">EMAIL</label><br />
                                        <input type="text" class=" col-lg-6 w-100 p-2 form-control" name="email" onChange={handleInputChange} value={studentData.email} placeholder="Please enter email..." />
                                        <span className="text-danger"></span>
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col-lg-4  mb-2">
                                        <label class="form-label col-lg-6">DATE OF JOINING</label><br />
                                        <input type="DATE" class=" col-lg-6 w-100 p-2 form-control" name="dateOfJoining" onChange={handleInputChange} value={studentData.dateOfJoining} />
                                        <span className="text-danger"></span>
                                    </div>
                                    <div className="col-lg-4">
                                        <label class="form-label col-lg-6">SEAT NUMBER</label><br />
                                        <input type="text" class=" col-lg-6  w-100 p-2 form-control" name="seatNumber" onChange={handleInputChange} value={studentData.seatNumber} placeholder="Enter seat number..." />
                                        < span className="text-danger"></span>
                                    </div>
                                    <div className="col-lg-4">
                                        <label class="form-label col-lg-6">STATUS</label><br />
                                        <input type="text" class=" col-lg-6  w-100 p-2 form-control" name="status" onChange={handleInputChange} value={studentData.status} placeholder="Enter status..." />
                                        < span className="text-danger"></span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6  mb-2">
                                        <label class="form-label col-lg-6">COURSE</label><br />
                                        <input type="text" class=" col-lg-6 w-100 p-2 form-control" name="course" onChange={handleInputChange} value={studentData.course} placeholder="Enter course..." />
                                    </div>
                                    <div className="col-lg-6">
                                        <label class="form-label col-lg-6">FEE</label><br />
                                        <input type="text" class=" col-lg-6  w-100 p-2 form-control" name="fee" onChange={handleInputChange} value={studentData.fee} placeholder="Enter fee..." />
                                    </div>
                                </div>
                                <div className="row mb-4">
                                    <div className="col-lg-12">
                                        <label class="form-label">ADDRESS</label>
                                        <textarea class="form-control" rows="5" name="address" onChange={handleInputChange} value={studentData.address} placeholder="Enter address..."></textarea>
                                    </div>
                                </div>

                                <button className="btn btn-outline-primary w-100">Update Details</button>
                            </form>
                        </div>
                    </div >
                </div >
            </div>
        </>
    )
}

export default EditStudent;