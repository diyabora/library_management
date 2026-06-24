import { IoBookSharp } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { MdMenuBook } from "react-icons/md";
import { LuFiles } from "react-icons/lu";
import { Component, useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Link } from "react-router-dom";
import getApiConfig from "../services/common/getConfig";
import axios from "axios";

function Dashboard() {
    const [totalStudents,setTotalStudents]=useState(0);
    console.log(totalStudents);
     async function fetchStudents() {
        try {
            let { data } = await axios.get(`${import.meta.env.VITE_API_URL}/student/get-all-students`, getApiConfig());
            let students=data.students;
            setTotalStudents(data.students.length);
        }
        catch (error) {
            console.error("Error fetching student data:", error);
        }
    }
    // fetchStudents();
    useEffect(() => {
        fetchStudents();
    }, []);

    const state = {
        options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
            }
        },
        series: [
            {
                name: "series-1",
                data: [30, 40, 45, 50, 49, 60, 70, 91]
            }
        ]
    };
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <form class="d-flex  me-auto" role="search">
                            <input class="form-control " size={50} type="search" placeholder="Search" aria-label="Search" />
                        </form>
                        <ul class="navbar-nav mb-2 mb-lg-0 d-flex align-items-center">

                            <li class="nav-item ">
                                <Link to="/sign-up" className="me-3 text-decoration-underline custom-link-effect">Sign Up</Link>
                            </li>
                            <li class="nav-item ">
                                <Link to="/sign-in" className="me-3 text-decoration-underline custom-link-effect">Login</Link>
                            </li>
                            <li class="nav-item ms-auto ">
                                <a class="nav-link me-3" href="#">Notifications
                                    <span className="ms-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
                                            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
                                        </svg>
                                    </span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled " aria-disabled="true">Profile
                                    <span className="ms-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                                        </svg>
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
            <hr className="mt-0" />
            <div className="container-fluid">
                <h3>Dashboard Overview</h3>
                <div className="row">
                    <div className="col-lg-3">
                        <div className="card p-0 ">
                            <div className="card-body ">
                                <div className="row">
                                    <div className="col-lg-7">
                                        <p className="card-title" style={{ fontWeight: "500", fontSize: "18px" }}>Total Books</p>
                                        <h1 className="card-text">1,250</h1>
                                    </div>
                                    <div className="col-lg-5 mt-4 ">
                                        <span className="fs-1 "><IoBookSharp /></span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 ">
                        <div className="card p-0 ">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-7">
                                        <p className="card-title" style={{ fontWeight: "500", fontSize: "18px" }}>Total Students</p>
                                        <h1 className="card-text">{totalStudents}</h1>
                                    </div>
                                    <div className="col-lg-5">
                                        <span className="userIcon"><IoIosPeople /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 ">
                        <div className="card p-0 ">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-7">
                                        <p className="card-title " style={{ fontWeight: "500", fontSize: "18px" }}>Issued Books</p>
                                        <h1 className="card-text">85</h1>
                                    </div>
                                    <div className="col-lg-5 mt-3">
                                        <span className="fs-1 "><MdMenuBook /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 ">
                        <div className="card p-0 ">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-7">
                                        <p className="card-title" style={{ fontWeight: "500", fontSize: "18px" }}>Pending fines</p>
                                        <h1 className="card-text">$120</h1>
                                    </div>
                                    <div className="col-lg-5 mt-3">
                                        <span className="fs-1 "><LuFiles /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className=" col-lg-6 h-50">
                        <div className="card mt-4">
                            <Chart
                                options={state.options}
                                series={state.series}
                                type="bar"
                                width="500"
                            />
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="card mt-4">

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Dashboard;