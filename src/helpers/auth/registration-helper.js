import { useState } from "react";
import axios from "axios";
import getApiConfig from "../../services/common/getConfig";

const RegistrationHelper = () => {
    const initialValues = {
        name: "",
        email: "",
        password: "",
        contact: ""
    };
    const [formData, setFormData] = useState(initialValues);
    console.log(formData);
    //hide and unhide ppassword 
    const [show, setShow] = useState();
    const handleShow = (e) => {
        setShow(!show);
    }
    const [errors, setErrors] = useState({});
    console.log(errors);
    const handleInputValues = (e) => {
        console.log(e);
        setFormData({
            ...formData,
            [e.target.name]: e.target.value

        });
    }
    const validate = () => {
        let newErrors = {};
        if (formData.name.trim() === "") {
            newErrors.name = "Name is required";
        }
        if (formData.email.trim() === "") {
            newErrors.email = "Email is required";
        }
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }
        if (formData.password.trim() === "") {
            newErrors.password = "Password is required";
        }
        else if (formData.password.length != 6) {
            newErrors.password = "Password must be at least 6 characters";
        }
        if (formData.contact.trim() === "") {
            newErrors.contact = "Contact number is required";
        }
        else if (!/^\d{10}$/.test(formData.contact.trim())) {
            newErrors.contact = "Contact number must be 10 digits";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }
    console.log(formData);
    console.log(errors);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const isValid = validate();
        if (isValid) {
            //submit the form
            //api call function
            const response = await axios.post(`${import.meta.env.VITE_URL_API}/auth/sign-up`, formData, getApiConfig);
            console.log(response);
            if (response.status === 201) {
                alert("registration successful");
                setFormData(initialValues);
            }
        }
        else {
            alert("Please fill all the fields correctly");
        }
    }
    return {
        formData,
        handleInputValues,
        show,
        handleShow,
        errors,
        handleSubmit

    }   

}
export default RegistrationHelper;