import React from 'react';
import { DialogTitleProps, ButtonProps, Breakpoint } from '@mui/material';

// Define the ActionModalProps interface
export interface ActionModalProps {
  title: string;
  open: boolean;
  actionButtons?: ActionButtons[];
  children: React.ReactNode;
  onClose?: () => void;
  size?: Breakpoint;
}

// Define the ActionButton interface
export interface ActionButtons {
  children: React.ReactNode;
  id?: string;
  buttonProps: ButtonProps;
}

// Define the ModalTitleProps interface extending DialogTitleProps
export interface ModalTitleProps extends DialogTitleProps {
  children: React.ReactNode;
  onClose?: () => void;
}