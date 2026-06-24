import axios from "axios";
import { useState } from "react";
import getApiConfig from "../../services/common/getConfig";

const AddNewBookHelper = () => {
    const initialValues = {
        title: "",
        category: "",
        description: "",
        autherName: "",
        status: "",
        quantity: ""
    }
    const [formData, setFormData] = useState(initialValues);
    console.log(formData);
    const [errors, setErrors] = useState({});
    const [image, setImage] = useState(null);
    // const handleImgChange = (e) => {
    //     setImage(e.target.files[0]);
    // }
    const handleInputValues = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const validate = () => {
        let newErrors = {};
        if (formData.title.trim() === "") {
            newErrors.title = "book name is required";
        }
        if (formData.category.trim() === "") {
            newErrors.category = "category is required";
        }
        if (formData.description.trim() === "") {
            newErrors.description = "description is required";
        }
        if (formData.autherName.trim() === "") {
            newErrors.autherName = "auther name is required";
        }
        if (formData.status.trim() === "") {
            newErrors.status = "status is required";
        }
        if (formData.quantity.trim() === "") {
            newErrors.quantity = "quantity is required";
        }
        // if (!image) {
        //     newErrors.image = "please upload image";
        // }
        setErrors(newErrors);
        return newErrors;
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        // const data = new FormData();
        // data.append("bookName", formData.title);
        // data.append("category", formData.category);
        // data.append("description", formData.description);
        // data.append("autherName", formData.autherName);
        // data.append("status", formData.status);
        // data.append("quantity", formData.quantity);
        let isValid = validate();
        if (Object.keys(isValid).length === 0) {
            try {
                const response = await axios.post(
                    `${import.meta.env.VITE_API_URL}/book/add-new-book`,
                    formData,
                    getApiConfig()
                );
                
                console.log(response.data);
            } catch (error) {
                console.log("API Error:", error);
            }
        }
        else {
            alert("form has errors");
        }
        alert("Form submitted successfully");
    }
    return {
        formData,
        errors,
        handleInputValues,
        handleSubmit,
        validate,
        // handleImgChange
    }

}
export default AddNewBookHelper;