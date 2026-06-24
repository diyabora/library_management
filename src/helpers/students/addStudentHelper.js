import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import getApiConfig from "../../services/common/getConfig";


const addStudentHelper = () => {
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
    const [formvalues, setFormValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    console.log(formvalues);
    const handleInputChange = (e) => {
        setFormValues({
            ...formvalues,
            [e.target.name]: e.target.value
        });
    }
    const validate = () => {
        const newErrors = {};
        if (formvalues.name.trim() === "") {
            newErrors.name = "name is required";
        }
        if (formvalues.phone.trim() === "") {
            newErrors.phone = "phone number is required";
        }
        else if (formvalues.phone.length != 10) {
            newErrors.phone = "phone number must be 10 digits";
        }
        if (formvalues.email.trim() === "") {
            newErrors.email = "email is required";
        }
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formvalues.email)) {
            newErrors.email = "email is invalid";
        }
        if (formvalues.dateOfJoining.trim() === "") {
            newErrors.dateOfJoining = "date of joining is required";
        }
        if (formvalues.seatNumber.trim() === "") {
            newErrors.seatNumber = "seat number is required";
        }
        if (formvalues.status.trim() === "") {
            newErrors.status = "status is required";
        }
        if (formvalues.course.trim() === "") {
            newErrors.course = "course is required";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        let isValid = validate();
        if (isValid) {
            let { data } = await axios.post(`${import.meta.env.VITE_API_URL}/student/add-new-student`, formvalues, getApiConfig());
            if (data.status === 201) {
                navigate('/students')
            }
        }
        else {
            alert("form has errors");
        }

    };
    return {
        formvalues,
        errors,
        handleInputChange,
        handleSubmit
    }
}

export default addStudentHelper;