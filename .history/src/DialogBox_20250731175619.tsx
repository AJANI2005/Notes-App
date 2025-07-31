import React from "react";
import "./style/dialogbox.css"
interface DialogBoxProps {
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode
}

const DialogBox: React.FC<DialogBoxProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null; // don't render if closed

    return (
        <div className="dialog-overlay">
            <div className="dialog-box">
                <button className="dialog-close" onClick={onClose}>✖</button>
            </div>
            {children}
        </div>
    );
};

export default DialogBox;
