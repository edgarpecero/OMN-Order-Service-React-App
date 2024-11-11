import Box from '@mui/material/Box';
import { DataGrid as DataGridMui, DataGridProps } from '@mui/x-data-grid';

export interface DataGridWapperProps extends Omit<DataGridProps, 'rows'> {
  rows: any;
}

const DataGrid = ({ rows = [], columns }: DataGridWapperProps) => {
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