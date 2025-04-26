import React from "react";
import "../Employee.css"; 
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa"; 

const EmployeeTable = ({ employees, onDelete }) => {
  return (
    <table className="employee-table">
      <thead className="employee-table-head">
        <tr>
          <th>S.No</th>
          <th>Employee Name</th>
          <th>Mobile Number</th>
          <th>City</th>
          <th>Work Type</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {employees.length === 0 ? (
          <tr>
            <td colSpan="6" style={{ textAlign: "center" }}>
              No employees found
            </td>
          </tr>
        ) : (
          employees.map((emp, index) => (
            <tr key={emp.id}>
              <td>{index + 1}</td>
              <td>{emp.name}</td>
              <td>+91{emp.mobile}</td>
              <td>{emp.city}</td>
              <td>{emp.workType}</td>
              <td>
                <button className="icon" title="Notes">
                  <FaEdit />
                </button>
                <button
                  className="icon delete"
                  title="Delete"
                  onClick={() => onDelete(emp.id)}
                >
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
