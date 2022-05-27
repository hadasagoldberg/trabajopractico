import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import theme from '../theme_config';
import TablaGrid from '../reutilizables/tablaGrid'
import Navbar from './navbar'


const columns = [
    { field: 'fecha', headerName: 'Fecha', type: 'date', minWidth: 110, flex: 1 },
    { field: 'id', headerName: 'Numero Entrega', type: 'number', minWidth: 110, flex: 1, },
    { field: 'deposito', headerName: 'Depósito', type: 'number', minWidth: 110, flex: 1 },
    { field: 'laboratorio', headerName: 'Laboratorio', type: 'number', minWidth: 110, flex: 1},
    { field: 'nombrePieza', headerName: 'Pieza', type: 'number', minWidth: 110, flex: 1},
    { field: 'cantidad', headerName: 'Cantidad', type: 'number', minWidth: 110, flex: 1},
    { field: 'uso', headerName: 'Usadas', type: 'number', minWidth: 110, flex: 1},
    { field: 'descarte', headerName: 'Descartadas', type: 'number', minWidth: 110, flex: 1},
];

const rows = [
    { fecha: '25/05/2022', id: 1, deposito: 1, laboratorio: 1, pieza: 1, cantidad: 10, uso: 10, descarte: 0 },
    { fecha: '25/05/2022', id: 1, deposito: 1, laboratorio: 1, pieza: 1, cantidad: 10, uso: 10, descarte: 0 },
    { fecha: '25/05/2022', id: 1, deposito: 1, laboratorio: 1, pieza: 1, cantidad: 10, uso: 10, descarte: 0 },
    { fecha: '25/05/2022', id: 1, deposito: 1, laboratorio: 1, pieza: 1, cantidad: 10, uso: 10, descarte: 0 },
    { fecha: '25/05/2022', id: 1, deposito: 1, laboratorio: 1, pieza: 1, cantidad: 10, uso: 10, descarte: 0 },
    { fecha: '25/05/2022', id: 1, deposito: 1, laboratorio: 1, pieza: 1, cantidad: 10, uso: 10, descarte: 0 },
    { fecha: '25/05/2022', id: 1, deposito: 1, laboratorio: 1, pieza: 1, cantidad: 10, uso: 10, descarte: 0 },
    { fecha: '25/05/2022', id: 1, deposito: 1, laboratorio: 1, pieza: 1, cantidad: 10, uso: 10, descarte: 0 },
    { fecha: '25/05/2022', id: 1, deposito: 1, laboratorio: 1, pieza: 1, cantidad: 10, uso: 10, descarte: 0 },
    { fecha: '25/05/2022', id: 1, deposito: 1, laboratorio: 1, pieza: 1, cantidad: 10, uso: 10, descarte: 0 },
    { fecha: '25/05/2022', id: 1, deposito: 1, laboratorio: 1, pieza: 1, cantidad: 10, uso: 10, descarte: 0 },
];

const ReporteGeneral = () => {
    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            <TablaGrid rows={rows} columns={columns} titulo={'Reporte General'}/>
        </ThemeProvider>


    );

};

export default ReporteGeneral;