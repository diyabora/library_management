import { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
    const [show, setShow] = useState(false);
    const handleShow = () => {
        setShow(!show);
    }
    return (
        <>
            <h5 > MAIN</h5>
            <ul className="list-group  ">
                <li className="list-group-item">
                    <Link to={"/"}>Dashboard</Link>
                </li>
                <li className="list-group-item ">Courses
                    <span><svg xmlns="http://www.w3.org/2000/svg" onClick={handleShow} width="16" height="16" fill="currentColor" className="bi bi-chevron-down down-arrow" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                    </svg>
                        <ul className={`list-subgroup ${show === true ? '' : 'sub_menu'}`}>
                            <li className="list-group-item">BA</li>
                            <li className="list-group-item">B.Com</li>
                            <li className="list-group-item">B.Sc</li>
                            <li className="list-group-item">BMS</li>
                            <li className="list-group-item">BCA</li>
                            <li className="list-group-item">B.Tech</li>
                            <li className="list-group-item">B.Ed</li>
                            <li className="list-group-item">BBA</li>
                        </ul>
                    </span>
                </li>
                <li className="list-group-item">
                    <Link to={"/students"}>Students</Link>
                </li>
                <li className="list-group-item">
                    <Link to={"/books"} >Books</Link></li>
                <li className="list-group-item">Syllabus</li>
                <li className="list-group-item">Attendence</li>
                <li className="list-group-item">
                    <Link to={"/categories"}>Categories</Link>
                </li>
                <li className="list-group-item">
                    <Link to={"/sign-up"}>Student Registration</Link>
                </li>
                <li className="list-group-item">
                    <Link to={"/sign-in"}>Student Login</Link>
                </li>
                <li className="list-group-item">
                    <Link to={"/addNewBook"}>Add New Book</Link>
                </li>
            </ul>

        </>
    )
}

export default Sidebar;