import { useState } from "react";

const AddNewBookHelper = () => {
    const initialValues = {
        bookName: "",
        category: "",
        description: "",
        autherName: "",
        status: "",
        ISBN: "",
    }
    const [formData, setFormData] = useState(initialValues);
    console.log(formData);
    const [errors, setErrors] = useState({});
    const [image, setImage] = useState(null);
    const handleImgChange = (e) => {
        setImage(e.target.files[0]);
    }
    const handleInputValues = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const validate = () => {
        let newErrors = {};
        if (formData.bookName.trim() === "") {
            newErrors.bookName = "Book name is required";
        }
        if (formData.category.trim() === "") {
            newErrors.category = "Category is required";
        }
        if (formData.description.trim() === "") {
            newErrors.description = "Description is required";
        }
        if (formData.autherName.trim() === "") {
            newErrors.autherName = "Auther name is required";
        }
        if (formData.status.trim() === "") {
            newErrors.status = "Status is required";
        }
        if (formData.ISBN.trim() === "") {
            newErrors.ISBN = "ISBM number is required";
        }
        if (!image) {
            newErrors.image = "Image is required";
        }
        setErrors(newErrors);
        return newErrors;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("bookName", formData.bookName);
        data.append("category", formData.category);
        data.append("description", formData.description);
        data.append("autherName", formData.autherName);
        data.append("status", formData.status);
        data.append("ISBN", formData.ISBN);

        const isValid = validate();
        if (Object.keys(isValid).length === 0) {
            alert("Form submitted successfully");
        }
        else {
            alert("form has errors");
        }
    }
    return {
        formData,
        errors,
        handleInputValues,
        handleSubmit,
        validate,
        handleImgChange
    }

}
export default AddNewBookHelper;