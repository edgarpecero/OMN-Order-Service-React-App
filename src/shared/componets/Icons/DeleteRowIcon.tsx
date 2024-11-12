import { Tooltip, IconButton } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import React from 'react';

interface DeleteRowIconProps {
  onDelete: (e: React.MouseEvent) => void;
  isDeleted: boolean;
}

const DeleteRowIcon = ({ onDelete, isDeleted }: DeleteRowIconProps) => {
  return (
    !isDeleted ? (
      <Tooltip title="Delete">
        <IconButton aria-label="delete-cell-icon" onClick={onDelete}>
          <DeleteOutlineIcon color="error" fontSize="inherit" />
        </IconButton>
      </Tooltip>
    ) : null
  );
};

export default React.memo(DeleteRowIcon);
