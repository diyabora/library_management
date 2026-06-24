import { Link } from 'react-router-dom';
import getApiConfig from '../services/common/getConfig';
import styles from '../styles/students.module.css';
import { useEffect, useRef, useState } from 'react';
import { FaEdit } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import axios from 'axios';

function Students() {
    const [studentData, setStudentData] = useState([]);
    const [selectedId, setSelectedId] = useState("");
    const closeBtnRef = useRef();
    console.log(selectedId);
    async function fetchStudents() {
        try {
            let { data } = await axios.get(`${import.meta.env.VITE_API_URL}/student/get-all-students`, getApiConfig());
            let students=data.students;
            console.log(students.length);
            console.log(data);
            setStudentData(data.students);
        }
        catch (error) {
            console.error("Error fetching student data:", error);
        }
    }
    // fetchStudents();
    useEffect(() => {
        fetchStudents();
    }, []);

    const handleDeleteData = async () => {
        let { data } = await axios.delete(`${import.meta.env.VITE_API_URL}/student/delete-student/${selectedId}`, getApiConfig());
        if (data.status === 200) {
            closeBtnRef.current.click();
            window.location.reload();
        }
    }

    return (                                                                

        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h3>Students</h3>
                    </div>
                    <div className="col-md-12 mb-3 d-flex justify-content-between">
                        <button className={`btn  ${styles.button} `}>
                            <Link to={'/addStudent'} className='text-white'>+Add Student</Link>
                        </button>
                        <input type="text" className={`form-control ${styles.searchInput}`} placeholder="Search Student" />
                        <div className="button-container ">
                            <button className={`btn me-3 ${styles.bg}`}>Filter</button>
                            <button className={`btn btn-primary ${styles.button}`}>Export</button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <h2>Total Students</h2>
                    <div className="col-md-12">
                        <table class="table border">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">photo</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Course</th>
                                    <th scope="col">Year</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {studentData.length > 0 ?
                                    studentData.map((items, index) => (
                                        <tr key={index}>
                                            <th >{index + 1}</th>
                                            <td>{items.name}</td>
                                            <td>{items.email}</td>
                                            <td>{items.course}</td>
                                            <td>{items.fee}</td>
                                            {/* btn btn-sm ${items.isActive}==Active? btn-success: btn-danger */}
                                            {/* btn btn-sm ${items.isActive ? "btn-success" : "btn-danger"} */}
                                            <td>
                                                <div className='d-flex gap-2'>
                                                    <div  >
                                                        <Link to={`/students/editStudent/${items._id}`} className='btn btn-primary'><FaEdit />Edit</Link>
                                                    </div>
                                                    <button className='btn btn-danger' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => { setSelectedId(items._id) }} ><MdDelete />Delete
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                    :
                                    <tr>
                                        <td colSpan={6} className='text-center'>No Students Found</td>
                                    </tr>

                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* delete model */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content p-2">
                        <button type="button" className="btn-close ms-auto" data-bs-dismiss="modal" aria-label="Close"></button>
                        <h5 className='text-center'>Are you sure?</h5>
                        <p className='text-center'>Are you sure you want to delete this data? </p>
                        <div className="footer ms-auto me-auto d-flex gap-3">
                            <button ref={closeBtnRef} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-danger" onClick={handleDeleteData}>delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Students;