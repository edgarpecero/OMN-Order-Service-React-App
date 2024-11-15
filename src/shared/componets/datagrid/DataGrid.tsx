import { DataGrid as DataGridMui, DataGridProps } from '@mui/x-data-grid';

export interface DataGridWapperProps extends Omit<DataGridProps, 'rows'> {
  rows: any;
}

const DataGrid = ({ rows = [], columns, ...props }: DataGridWapperProps) => {
  return (
    <DataGridMui
      rows={rows}
      columns={columns}
      disableRowSelectionOnClick
      {...props}
    />
  );
}

export default DataGrid;