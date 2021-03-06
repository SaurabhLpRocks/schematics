import { Button } from '@material-ui/core';
import './MyMdComp.scss';
import { DataGrid, GridColDef, GridRowsProp } from '@material-ui/data-grid';
import { IMyMdCompProps } from './MyMdComp.interface';

export function MyMdComp(props: IMyMdCompProps) {
  const rows: GridRowsProp = [
    { id: 1, col1: 'Hello', col2: 'World' },
    { id: 2, col1: 'XGrid', col2: 'is Awesome' },
    { id: 3, col1: 'Material-UI', col2: 'is Amazing' },
  ];

  const columns: GridColDef[] = [
    { field: 'col1', headerName: 'Column 1', width: 150 },
    { field: 'col2', headerName: 'Column 2', width: 150 },
  ];

  return (
    <div>
      <h1>Welcome to MyMdComp!</h1>
      <Button variant="contained" color="primary">
        Hello World
      </Button>

      <div style={{ height: 300, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} />
      </div>
    </div>
  );
}

export default MyMdComp;
