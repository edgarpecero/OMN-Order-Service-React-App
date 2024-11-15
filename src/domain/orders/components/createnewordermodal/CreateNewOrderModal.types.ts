export interface CreateNewOrderModalProps {
  onConfirm?: () => void;
  onClose: () => void;
  onReset?: () => void;
  open: boolean;
}

export interface OrderModalProps {
  onConfirm?: () => void;
  onClose: () => void;
  onReset?: () => void;
  open: boolean;
}

export interface CustomerFormInputs {
  name: string;
  email: string;
}

export interface CreateNewOrderModalRefType {
  handleResetForm: () => void;
}