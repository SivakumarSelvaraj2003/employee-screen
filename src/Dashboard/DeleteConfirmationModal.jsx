import React from "react";
import Icon from "@mdi/react";
import { mdiDeleteClock } from "@mdi/js";
import "../DeleteModal.css";

const DeleteConfirmationModal = ({ onConfirm, onCancel }) => {
  return (
    <div className="modal-overlay">
      <div className="modal2">
        <div className="delete-icons">
          <Icon color="#0056b3" path={mdiDeleteClock} size={3} />
        </div>
        <p>Are you sure you want to delete this employee?</p>
        <div className="modal-actions">
          <button onClick={onCancel} className="cancel-btn">
            No
          </button>
          <button onClick={onConfirm} className="delete-btn">
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
