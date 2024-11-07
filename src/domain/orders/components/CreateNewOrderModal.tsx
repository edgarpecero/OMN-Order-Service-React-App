import React, { Dispatch, SetStateAction, useMemo } from 'react';
import { Typography } from '@mui/material';
import { ActionButtons } from '../../../shared/hooks/actionmodal/ActionModal.types';
import ActionModal from '../../../shared/hooks/actionmodal/ActionModal';
import { LineItem } from '../Orders.types';
import AvailableItemsList from './AvailableItemList';

export interface CreateNewOrderModalProps {
  onConfirm: () => void;
  onClose: () => void;
  open: boolean;
}

const CreateNewOrderModal = ({
  open,
  onClose,
  onConfirm,
}: CreateNewOrderModalProps) => {
  
  const actionButtons: ActionButtons[] = useMemo(() => {
    const createButton: ActionButtons = {
      children: 'Create',
      buttonProps: {
        variant: 'contained',
        onClick: onConfirm,
        fullWidth: true,
      },
    };
    const cancelButton: ActionButtons = {
      children: 'Cancel',
      buttonProps: {
        onClick: onClose,
        color: 'inherit',
        variant: 'outlined',
        fullWidth: true,
      },
    };
    return [createButton, cancelButton];
  }, [onConfirm, onClose]);

  return (
    <ActionModal
      size='md'
      open={open}
      title='Create New Order Form:'
      actionButtons={actionButtons}
      onClose={onClose}
    >
      {/* <Typography variant='body1'>Create New Order Form:</Typography> */}
      <AvailableItemsList />
    </ActionModal>
  );
};

export default React.memo(CreateNewOrderModal);
