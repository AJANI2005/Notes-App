import React from "react";

interface DialogBoxProps {
  isOpen: boolean;
  onClose: () => void;
  children?           : React.ReactNode
}

const DialogBox: React.FC<DialogBoxProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // don't render if closed

  return (
    <div className="dialog-overlay">
      <div className="dialog-box">
        <button className="dialog-close" onClick={onClose}>✖</button>
      </div>
    </div>
  );
};

export default DialogBox;
