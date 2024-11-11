import { Tooltip, IconButton } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import React from 'react';

const DeleteRowIcon = ({ onDelete }: { onDelete: (e: React.MouseEvent) => void }) => {

  return (
    <Tooltip title='Delete'>
      <IconButton aria-label='delete-cell-icon' onClick={onDelete}>
        <DeleteOutlineIcon color='error' fontSize='inherit' />
      </IconButton>
    </Tooltip>
  );
};

export default React.memo(DeleteRowIcon);
