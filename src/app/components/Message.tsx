import React, { useEffect } from "react";

type MessageProps = {
  message: string;
  type: "success" | "error";
  onClose: () => void;
};

const Message: React.FC<MessageProps> = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000); 
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed top-28 z-50 p-4 rounded-sm shadow-sm  border border-primary/15  ${
        type === "success" ? "bg-green-500/10" : "bg-red-500/10 text-white"
      }`}
    >
      {message}
    </div>
  );
};

export default Message;
