import React, { useState } from "react";
import "../Dashboard.css";
import EmployeeTable from "./EmployeeTable";
import AddEmployeeModal from "./AddEmployeeModal";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import { FaPlus, FaSignOutAlt } from "react-icons/fa";
/* import { FaSearch } from "react-icons/fa";  */

function App() {
 const [employees, setEmployees] = useState(() => {
   const savedEmployees = localStorage.getItem("employees");
   return savedEmployees ? JSON.parse(savedEmployees) : [];
 });
  const [search, setSearch] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);


 const filteredEmployees = employees.filter(
   (emp) =>
     emp.name.toLowerCase().includes(search.toLowerCase()) ||
     emp.mobile.includes(search)
 );


  const handleDelete = (id) => {
    setSelectedEmployeeId(id);
    setShowDeleteModal(true);
  };

 const confirmDelete = () => {
   const updatedEmployees = employees.filter(
     (e) => e.id !== selectedEmployeeId
   );
   setEmployees(updatedEmployees);
   localStorage.setItem("employees", JSON.stringify(updatedEmployees)); // Update localStorage!
   setShowDeleteModal(false);
 };

 const handleAddEmployee = (newEmployee) => {
   const updatedEmployees = [...employees, newEmployee];
   setEmployees(updatedEmployees);
   localStorage.setItem("employees", JSON.stringify(updatedEmployees)); // Update localStorage!
 };
  

  return (
    <div className="employee-container">
      <div className="sidebar-container">
        <div className="logo-container">
          <img
            src="src/images/logo.png"
            alt="logo"
            className="logo-container-img"
          />
          <p style={{ margin: "0px" }}>TechLambdas</p>
        </div>

        <div className="button-container">
          <button>
            {" "}
            <FaSignOutAlt
              style={{ marginRight: "8px", marginTop: "2px" }}
            />{" "}
            Logout
          </button>
        </div>
      </div>
      <div className="employee-table-container">
        <div className="header">
          <h1>Employee</h1>
          <div className="header-input">
            <input
              className="employee-input"
              type="text"
              placeholder="Employee Name / Mobile Number"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <button
              onClick={() => setShowAddModal(true)}
              className="addNew-button"
            >
              <FaPlus
                style={{
                  marginRight: "8px",
                  border: "1px solid white",
                  borderRadius: "50%",
                  padding: "2px",
                  fontSize: "15px",
                }}
              />{" "}
              Add New
            </button>
          </div>
        </div>
        <div className="employee-table">
          <EmployeeTable
            employees={filteredEmployees}
            onDelete={handleDelete}
          />
          {showAddModal && (
            <AddEmployeeModal
              onClose={() => setShowAddModal(false)}
              onAdd={handleAddEmployee}
            />
          )}
          {showDeleteModal && (
            <DeleteConfirmationModal
              onConfirm={confirmDelete}
              onCancel={() => setShowDeleteModal(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
