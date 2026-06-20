// import { FaBook } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";

function Books() {
    return (
        <>
            <div className="container p-4">
                <div className="row ">
                    <div className="col-lg-6">
                        <h4 >
                            All Books
                        </h4>
                    </div>
                    <div className="col-lg-6 d-flex">
                        <button className="btn btn-primary  ms-auto me-4 "><span className="fs-5"><IoIosAdd /></span>Add book</button>
                    </div>
                </div>
                <div className="row mt-5">
                    <input className="form-control w-25 ms-auto me-5" type="search" placeholder=" searck books" ></input>
                </div>
                <div className="card mt-4">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">NO.</th>
                                <th scope="col">Book Cover</th>
                                <th scope="col">Title</th>
                                <th scope="col">Auther</th>
                                <th scope="col">Category</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>John</td>
                                <td>Doe</td>
                                <td>@social</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>John</td>
                                <td>Doe</td>
                                <td>@social</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>John</td>
                                <td>Doe</td>
                                <td>@social</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Books;