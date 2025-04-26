import React, { useState } from "react";
import "../Modal.css";

const AddEmployeeModal = ({ onClose, onAdd }) => {
  const [form, setForm] = useState({
    name: "",
    workType: "",
    gender: "",
    mobile: "",
    email: "",
    city: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "mobile") {
      const cleanedValue = value.replace(/\D/g, "");
      if (cleanedValue.length > 10) {
        alert("Mobile number cannot be more than 10 digits");
        return;
      }
      setForm({ ...form, [name]: cleanedValue });
    } else {
      setForm({ ...form, [name]: value });
    }
  };


  const handleSubmit = () => {
    if (!form.name || !form.mobile || !form.workType || !form.city) {
      alert("Please fill required fields");
      return;
    }

    
    const newEmp = { ...form, id: Date.now() };
    onAdd(newEmp);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2 style={{ marginTop: "0px", textAlign: "start" }}>New Employee</h2>
        <div className="line"></div>
        <div className="modal-input">
          <div className="employee-details1">
            <label>
              Employee Name <span style={{ color: "red" }}>*</span>
              <input
                name="name"
                placeholder="Ex. Sivakumar"
                value={form.name}
                onChange={handleChange}
              />
            </label>

            <labe>
              Work Type <span style={{ color: "red" }}>*</span>
              <select
                name="workType"
                value={form.workType}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="Cleaning">Cleaning</option>
                <option value="Receptionist">Receptionist</option>
                <option value="HR">HR</option>
                <option value="Developer">Developer</option>
                <option value="Testing">Testing</option>
                <option value="Marketing">Marketing</option>
                <option value="Sales Department">Sales Department</option>
              </select>
            </labe>

            <div className="gender-section">
              <p style={{ fontWeight: "500" }}>
                Gender <span style={{ color: "red" }}>*</span>
              </p>
              <div className="gender-section-label">
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={form.gender === "Male"}
                    onChange={handleChange}
                  />{" "}
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={form.gender === "Female"}
                    onChange={handleChange}
                  />{" "}
                  Female
                </label>
              </div>
            </div>

            <label>
              Mobile Number <span style={{ color: "red" }}>*</span>
              <input
                name="mobile"
                placeholder="+91 9786343013 "
                value={form.mobile}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="employee-details2">
            <label>
              Email Address <span style={{ color: "red" }}>*</span>
              <input
                name="email"
                placeholder="Ex. siva4kumar2003@gmail.com"
                value={form.email}
                onChange={handleChange}
              />
            </label>

            <label>
              City <span style={{ color: "red" }}>*</span>
              <select name="city" value={form.city} onChange={handleChange}>
                <option value="">Select</option>
                <option value="Kovilpatti">Kovilpatti</option>
                <option value="Satur">Satur</option>
                <option value="Tirunelveli">Tirunelveli</option>
                <option value="Sivakasi">Sivakasi</option>
                <option value="Sangarankovil">Sangarankovil</option>
              </select>
            </label>

            <label className="address-label">
              <p style={{ marginBottom: "0px" }}>
                Address <span style={{ color: "red" }}>*</span>
              </p>
              <textarea
                name="address"
                placeholder="Type here..."
                value={form.address}
                onChange={handleChange}
                style={{
                  height: "150px",
                  width: "355px",
                  padding: "10px",
                  fontSize: "14px",
                  borderRadius: "8px",
                  border: "1px solid #8ab0d8",
                  resize: "vertical",
                  boxSizing: "border-box",
                }}
              />
            </label>

            <div className="modal-actions">
              <button onClick={onClose} className="cancel">
                Cancel
              </button>
              <button onClick={handleSubmit} className="add-button">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployeeModal;
