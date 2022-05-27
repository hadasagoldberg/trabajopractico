import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import theme from '../theme_config';
import TablaGrid from '../reutilizables/tablaGrid'
import Navbar from './navbar'


const columns = [
    { field: 'fecha', headerName: 'Fecha', type: 'date', minWidth: 110, flex: 1 },
    { field: 'id', headerName: 'Código Pieza', type: 'number', minWidth: 110, flex: 1, },
    { field: 'descripPieza', headerName: 'Pieza', minWidth: 110, flex: 1,},
    { field: 'totalEntregado', headerName: 'Total Entregado', type: 'number', minWidth: 110, flex: 1 },
    { field: 'uso', headerName: 'Usadas', type: 'number', minWidth: 110, flex: 1},
    { field: 'descarte', headerName: 'Descartadas', type: 'number', minWidth: 110, flex: 1},
];

const rows = [
    { fecha: '25/05/2022', id: 1, descripPieza: 'Pantalla', totalEntregado: 10, uso: 10, descarte: 0 },
    { fecha: '25/05/2022', id: 1, descripPieza: 'Pantalla', totalEntregado: 10, uso: 10, descarte: 0 },
    { fecha: '25/05/2022', id: 1, descripPieza: 'Pantalla', totalEntregado: 10, uso: 10, descarte: 0 },
    { fecha: '25/05/2022', id: 1, descripPieza: 'Pantalla', totalEntregado: 10, uso: 10, descarte: 0 },
    { fecha: '25/05/2022', id: 1, descripPieza: 'Pantalla', totalEntregado: 10, uso: 10, descarte: 0 },
    { fecha: '25/05/2022', id: 1, descripPieza: 'Pantalla', totalEntregado: 10, uso: 10, descarte: 0 },
    { fecha: '25/05/2022', id: 1, descripPieza: 'Pantalla', totalEntregado: 10, uso: 10, descarte: 0 },
    { fecha: '25/05/2022', id: 1, descripPieza: 'Pantalla', totalEntregado: 10, uso: 10, descarte: 0 },
    { fecha: '25/05/2022', id: 1, descripPieza: 'Pantalla', totalEntregado: 10, uso: 10, descarte: 0 },
    { fecha: '25/05/2022', id: 1, descripPieza: 'Pantalla', totalEntregado: 10, uso: 10, descarte: 0 },
    { fecha: '25/05/2022', id: 1, descripPieza: 'Pantalla', totalEntregado: 10, uso: 10, descarte: 0 },
];

const ReportePiezas = () => {
    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            <TablaGrid rows={rows} columns={columns} titulo={'Reporte por Piezas'}/>
        </ThemeProvider>


    );

};

export default ReportePiezas;