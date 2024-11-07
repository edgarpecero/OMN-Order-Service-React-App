import Box from '@mui/material/Box';
import { columns } from './DataGrid.utils';
import { DataGrid as DataGridMui } from '@mui/x-data-grid';
import { Order } from '../../../domain/orders/Orders.types';

const DataGrid = ({ rows }: { rows: Order[] }) => {
  return (
    <Box sx={{ height: 600, width: '100%' }}>
      <DataGridMui
        rows={rows}
        columns={columns}
        disableRowSelectionOnClick
      />
    </Box>
  );
}

export default DataGrid;