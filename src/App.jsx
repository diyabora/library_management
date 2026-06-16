import { Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Sidebar from "./Components/Sidebar";
import "./App.css";
import Registation from "./Components/Registration";
import Categories from "./Components/Categories";
import Login from "./Components/Login";
import AddNewBook from "./Components/AddNewBook";
import Students from "./Components/Students";
import AddStudent from "./Components/AddStudent";
import EditStudent from "./Components/EditStudent";
import Books from "./Components/Books";
// import Parent from "./Components/Parent";
// import Child from "./Components/Child";

function App() {
  return (
    <>
      <div className="row g-0 ">
        <h2 className="title text-center m-0">Library Management System</h2>
        <div className="sidebar col-lg-2  ">
          <Sidebar />
        </div>
        <div className="dashboard col-lg-10 p-0 ">
          <Routes>
            <Route path={"/"} element={<Dashboard />} />
            <Route path={"/sign-up"} element={<Registation />} />
            <Route path={"/Categories"} element={<Categories />} />
            <Route path={"/sign-in"} element={<Login />} />
            <Route path={"/addNewBook"} element={<AddNewBook />} />
            <Route path={"/students"} element={<Students />} />
            <Route path={"/addStudent"} element={<AddStudent />} />
            <Route path="/students/editStu,dent/:id" element={<EditStudent />} />
            <Route path="/books" element={ <Books/>} />
          </Routes>

          {/* <Parent/> */}
        </div>
      </div>
    </>
  )
}
export default App;