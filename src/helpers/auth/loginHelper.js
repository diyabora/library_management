import axios from "axios";
import { useState } from "react";
import getApiConfig from "../../services/common/getConfig";
import { useDispatch } from "react-redux";

const LoginHelper = () => {
    // const dispatch = useDispatch();

    const initialValues = {
        username: "",
        email: "",
        password: ""
    }
    const [formData, setFormData] = useState(initialValues);
    console.log(formData);
    const [errors, setErrors] = useState({});
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const validate = () => {
        const newErrors = {};
        if (formData.username.trim() === "") {
            newErrors.username = "username is required";
        }
        if (formData.email.trim() === "") {
            newErrors.email = "email is required";
        }
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "email is invalid";
        }
        if (formData.password.trim() === "") {
            newErrors.password = "password is required";
        }
        else if (formData.password.length != 6) {
            newErrors.password = "Password must be at least 6 characters";
        }
        console.log("newerros :", newErrors);
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        let isValid = validate();
        if (isValid) {
            const  data  = await axios.post(`${import.meta.env.VITE_API_URL}/auth/sign-in`, formData, getApiConfig());
            console.log(data);
            if (data.status === 200) {
                localStorage.setItem("token", data.token);
                alert("login succesfully12");
            }
        }
        else {
            alert("form has errors");
        }
    }
    return {
        formData,
        errors,
        handleInputChange,
        handleSubmit
    }
}

export default LoginHelper;