import { FaBook } from "react-icons/fa";

function Books() {
    return (
        <>
            <div className="container p-5">
                <div className="row">
                    <div className="col-lg-2">
                        <div className="card p-3 d-flex ">
                            <div className="card-icon fs-1"><FaBook  /></div>
                            <div className="card-body" >
                                <h3>1390</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2"></div>
                    <div className="col-lg-2"></div>
                    <div className="col-lg-2"></div>
                    <div className="col-lg-2"></div>
                </div>
            </div>
        </>
    )
}

export default Books;