import React from "react";
import Button from "./Button";

type ConfirmModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  message: string;
};

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  message,
}) => {
  if (!isOpen) return null;
  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center" onClick={handleOverlayClick}>
      <div className="bg-primary border border-primary/15 p-6 rounded-md shadow-lg w-full max-w-sm">
        <p className="mb-4 text-center">{message}</p>
        <div className="flex justify-between">
          <Button
            onClick={onClose}
           variant="danger"
          >
            Cancelar
          </Button>
          <Button
            onClick={onConfirm}
          >
            Confirmar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
