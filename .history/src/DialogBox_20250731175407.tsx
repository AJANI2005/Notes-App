import React from "react";

interface DialogBoxProps {
  isOpen: boolean;
  onClose: () => void;
}

const DialogBox: React.FC<DialogBoxProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // don't render if closed

  return (
    <div className="dialog-overlay">
      <div className="dialog-box">
        <button className="dialog-close" onClick={onClose}>
          ✖
        </button>
        <h2>Dialog Title</h2>
        <p>This is a simple dialog box. You can put any content here.</p>
      </div>
    </div>
  );
};

export default DialogBox;
