export interface CreateNewOrderModalProps {
  onConfirm?: () => void;
  onClose: () => void;
  onReset: () => void;
  open: boolean;
}

export interface CustomerFormInputs {
  name: string;
  email: string;
}
