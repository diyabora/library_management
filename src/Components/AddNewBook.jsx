import AddNewBookHelper from "../helpers/books/addNewBook-helper";
function AddNewBook() {
    const {formData, errors, handleInputValues, handleSubmit,handleImgChange } = AddNewBookHelper();
    return (
        <>
            <div className="container w-51 m-0">
                <h3>Add New Book</h3>
                <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="col-md-6">
                        <label  className="form-label">Book Title</label>
                        <input type="text" className="form-control" name="title" value={formData.bookName} onChange={handleInputValues} />
                        {
                            errors.title && <small className="text-danger">{errors.title}</small>
                        }
                    </div>
                    <div className="col-md-6">
                        <label  className="form-label">Category</label>
                        <br></br>
                        <select name="category" className="form-control"  value={formData.category} onChange={handleInputValues} >
                            <option value="">--Select --</option>
                            <option value="Rich dad Poor dad">Rich dad Poor dad</option>
                            <option value="the great gatsby">the great gatsby</option>
                            <option value="Atomic Habit">Atomic Habit</option>
                        </select>
                         {
                            errors.category && <small className="text-danger">{errors.category}</small>
                        }
                    </div>
                    <div className="col-12">
                        <label className="form-label">Description</label>
                        <textarea className="form-control" rows={6} name="description" value={formData.description} onChange={handleInputValues} ></textarea>
                         {
                            errors.description && <small className="text-danger">{errors.description}</small>
                        }
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Authername</label>
                        <input type="text" className="form-control" name="autherName" value={formData.autherName} onChange={handleInputValues} />
                         {
                            errors.autherName && <small className="text-danger">{errors.autherName}</small>
                        }
                    </div>
                    <div className="col-md-4">
                        <label for="inputState" className="form-label" >Status</label>
                        <select id="inputState" className="form-select"  name="status" onChange={handleInputValues}>
                            <option value="">Choose...</option>
                            <option value="active">Active</option>
                            <option value="inActive">Inctive</option>
                        </select>
                         {
                            errors.status && <small className="text-danger">{errors.status}</small>
                        }
                    </div>
                    <div className="col-md-2">
                        <label for="inputZip" className="form-label">Quantity</label>
                        <input type="number" className="form-control" name="quantity" placeholder="total Copies" onChange={handleInputValues} />
                         {
                            errors.quantity && <small className="text-danger">{errors.quantity}</small>
                        }
                    </div>
                    <div className="col-md-12">
                        <label for="inputZip" className="form-label">Book cover Image</label>
                        <input className="form-control" type="file" id="formFileMultiple"   multiple />
                        {
                            errors.image && <small className="text-danger">{errors.image}</small>
                        }
                    </div>
                    <div className="col-md-12">
                        <button type="submit" className="btn btn-primary w-100">Add Book</button>
                    </div>

                </form>
            </div>
        </>
    )
}

export default AddNewBook;