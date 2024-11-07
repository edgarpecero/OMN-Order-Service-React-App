import React, { Dispatch, SetStateAction, useCallback, useMemo } from 'react';
import { ActionButtons } from '../../../shared/hooks/actionmodal/ActionModal.types';
import ActionModal from '../../../shared/hooks/actionmodal/ActionModal';
import AvailableItemsList from './AvailableItemList';
import { useOrderContext } from '../context/OrderContext';
import { useCreateNewOrder } from '../hooks/useCreateOrder';

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
  const { selectedItems } = useOrderContext();
  const { createNewOrder } = useCreateNewOrder();

  const handleCreateNewOrder = useCallback(async () => {
    try {
      const response = await createNewOrder(selectedItems);
      console.log('Data successfully posted:', response);
    } catch (error) {
      console.error('Failed to post selected rows:', error);
    } finally {
      onClose();
    }
  }, [selectedItems, createNewOrder, onClose]);

  const actionButtons: ActionButtons[] = useMemo(() => {
    const createButton: ActionButtons = {
      children: 'Create',
      buttonProps: {
        variant: 'contained',
        onClick: handleCreateNewOrder,
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
