import { Fragment } from 'react';
import { Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const Tabla = (props) => {

    return (
        <Fragment>
            <Typography component="h1" variant="h5" align='center'>
                {props.titulo}
            </Typography>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={props.rows}
                    columns={props.columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                />
            </div>
        </Fragment>
    );
};

export default Tabla;