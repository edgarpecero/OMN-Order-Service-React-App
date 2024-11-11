import React, { useCallback, useMemo } from 'react';
import { ActionButtons } from '../../../../shared/componets/actionmodal/ActionModal.types';
import ActionModal from '../../../../shared/componets/actionmodal/ActionModal';
import AvailableItemsList from './AvailableItemList';
import { useOrderContext } from '../../context/OrderContext';
import { LineItem } from '../../OrderPage.types';
import TotalAmoutLabel from './TotalAmoutLabel';
import CustomerForm from './CustomerForm';
import { schema } from './CreateNewOrderModal.utils';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { CreateNewOrderModalProps, CustomerFormInputs } from './CreateNewOrderModal.types';
import { useCreateNewOrder } from '../../hooks/useOrders';
import { OrderOperation } from '../../OrderPage.utils';
import { Typography } from '@mui/material';

const CreateNewOrderModal = ({
  open,
  onClose,
  onConfirm,
  onReset,
}: CreateNewOrderModalProps) => {
  const {
    handleRefresh,
    selectedItems,
    handleOrderSnackbar,
    isCreateOrderModalOpen,
  } = useOrderContext();
  const { createNewOrder } = useCreateNewOrder();
  const methods = useForm<CustomerFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmitNewOrder: SubmitHandler<CustomerFormInputs> = useCallback(async (data) => {
    try {
      const payload = { lineItems: selectedItems, customer: data };
      await createNewOrder(payload);
      handleOrderSnackbar(OrderOperation.CREATE, true);
      onConfirm && onConfirm();
    } catch (error) {
      handleOrderSnackbar(OrderOperation.CREATE, false);
    } finally {
      methods.reset();
      handleRefresh();
      isCreateOrderModalOpen(false);
    }
  }, [
    selectedItems,
    createNewOrder,
    isCreateOrderModalOpen,
    handleOrderSnackbar,
    handleRefresh,
    onConfirm,
    methods
  ]);

  const actionButtons: ActionButtons[] = useMemo(() => {
    const createButton: ActionButtons = {
      children: 'Create',
      buttonProps: {
        type: 'submit',
        form: 'newOrderForm',
        variant: 'contained',
        fullWidth: true,
        // disabled: !methods.formState.isValid,
      },
    };
    const resetGridButton: ActionButtons = {
      children: 'Reset',
      buttonProps: {
        onClick: onReset,
        color: 'inherit',
        variant: 'outlined',
        fullWidth: true,
      },
    };
    return [resetGridButton, createButton];
  }, [onReset, methods.formState.isValid]);

  const totalAmount = useMemo(() => {
    return selectedItems.reduce((acc, item: LineItem) => acc + item.price * item.quantity, 0);
  }, [selectedItems]);

  return (
    <ActionModal
      size='md'
      open={open}
      title='Create New Order Form'
      actionButtons={actionButtons}
      onClose={onClose}
    >
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmitNewOrder)} id='newOrderForm'>
          <Typography variant='h6' gutterBottom>
            Please fill the form below and add quantity to the items you want to order:
          </Typography>
          <CustomerForm />
          <AvailableItemsList />
          <TotalAmoutLabel totalAmount={totalAmount} />
        </form>
      </FormProvider>
    </ActionModal>
  );
};

export default React.memo(CreateNewOrderModal);
