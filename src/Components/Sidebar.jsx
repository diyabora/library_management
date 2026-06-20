import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/list.module.css";
import { GiBookCover } from "react-icons/gi";
import { MdOutlineHome } from "react-icons/md";
import { MdPeopleAlt } from "react-icons/md";
import { IoBookOutline } from "react-icons/io5";
import { IoIosLogIn } from "react-icons/io";

function Sidebar() {
    const [show, setShow] = useState(false);
    const handleShow = () => {
        setShow(!show);
    }
    console.log(styles);
    return (
        <>
            <h5 >
                <div className="row ">
                    <div className="col-lg-3 fs-1 mt-auto mb-auto"><GiBookCover /></div>
                    <div className="col-lg-9 fs-4 p-0  mt-auto mb-auto" style={{ lineHeight: "16px" }}>LIBRARY<br /><span className="fs-6 mt-0 gap-0">management system</span></div>
                </div>
            </h5>
            <ul className={`list-group ${styles.list}`}>
                <li>
                    <Link to={"/"} className={`${styles.listItems}list-group-item`}><span className="fs-4">
                        <MdOutlineHome /></span>
                        Dashboard</Link>
                </li>
                <li>Courses
                    <span><svg xmlns="http://www.w3.org/2000/svg" onClick={handleShow} width="16" height="16" fill="currentColor" className="bi bi-chevron-down down-arrow" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                    </svg>
                        <ul className={`list-subgroup  ${show === true ? '' : 'sub_menu'}`}>
                            <li className={`${styles.listItems}list-group-item`}>BA</li>
                            <li className={`${styles.listItems}list-group-item`}>B.Com</li>
                            <li className={`${styles.listItems}list-group-item`}>B.Sc</li>
                            <li className={`${styles.listItems}list-group-item`}>BMS</li>
                            <li className={`${styles.listItems}list-group-item`}>BCA</li>
                            <li className={`${styles.listItems}list-group-item`}>B.Tech</li>
                            <li className={`${styles.listItems}list-group-item`}>B.Ed</li>
                            <li className={`${styles.listItems}list-group-item`}>BBA</li>
                        </ul>
                    </span>
                </li>
                <li >
                    <Link to={"/students"} className={`${styles.listItems}list-group-item`}><span className="fs-4 me-1"><MdPeopleAlt /></span>Students</Link>
                </li>
                <li >
                    <Link to={"/books"} className={`${styles.listItems}list-group-item`} ><span className="fs-4 "><IoBookOutline /></span > Books</Link></li>
                <li >Issued Books</li>
                <li >Returns </li>
                <li>
                    <Link to={"/categories"} className={`${styles.listItems}list-group-item`}>Reports</Link>
                </li>
                <li >
                    <Link to={"/sign-up"} className={`${styles.listItems}list-group-item`}>Student Registration</Link>
                </li>
                <li >
                    <Link to={"/sign-in"} className={`${styles.listItems}list-group-item`}><span className="fs-4 me-1"><IoIosLogIn /></span>Student Login</Link>
                </li>
                <li>
                    Settings
                </li>
                <li >
                    <Link to={"/addNewBook"} className={`${styles.listItems}list-group-item`}>Add New Book</Link>
                </li>
            </ul>

        </>
    )
}

export default Sidebar;