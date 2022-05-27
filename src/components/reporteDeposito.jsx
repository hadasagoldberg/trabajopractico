import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import theme from '../theme_config';
import TablaGrid from '../reutilizables/tablaGrid'
import Navbar from './navbar'


const columns = [
    { field: 'fecha', headerName: 'Fecha', type: 'date', minWidth: 100, flex: 1 },
    { field: 'id', headerName: 'Depósito', type: 'number', minWidth: 80, flex: 1, },
    { field: 'totalEntregado', headerName: 'Total Entregado', type: 'number', minWidth: 120, flex: 1 },
    { field: 'entregaLab1', headerName: 'Entregas al Lab 1', type: 'number', minWidth: 130, flex: 1},
    { field: 'entregaLab2', headerName: 'Entregas al Lab 2', type: 'number', minWidth: 130, flex: 1},
    { field: 'uso', headerName: 'Usadas', type: 'number', minWidth: 70, flex: 1},
    { field: 'descarte', headerName: 'Descartadas', type: 'number', minWidth: 100, flex: 1},
];

const rows = [
    { fecha: '25/05/2022', id: 1, totalEntregado: 10, entregaLab1: 5, entregaLab2: 5, uso: 10, descarte: 0 },
    { fecha: '25/05/2022', id: 1, totalEntregado: 10, entregaLab1: 5, entregaLab2: 5, uso: 10, descarte: 0 },
    { fecha: '25/05/2022', id: 1, totalEntregado: 10, entregaLab1: 5, entregaLab2: 5, uso: 10, descarte: 0 },
    { fecha: '25/05/2022', id: 1, totalEntregado: 10, entregaLab1: 5, entregaLab2: 5, uso: 10, descarte: 0 },
    { fecha: '25/05/2022', id: 1, totalEntregado: 10, entregaLab1: 5, entregaLab2: 5, uso: 10, descarte: 0 },
    { fecha: '25/05/2022', id: 1, totalEntregado: 10, entregaLab1: 5, entregaLab2: 5, uso: 10, descarte: 0 },
    { fecha: '25/05/2022', id: 1, totalEntregado: 10, entregaLab1: 5, entregaLab2: 5, uso: 10, descarte: 0 },
    { fecha: '25/05/2022', id: 1, totalEntregado: 10, entregaLab1: 5, entregaLab2: 5, uso: 10, descarte: 0 },
    { fecha: '25/05/2022', id: 1, totalEntregado: 10, entregaLab1: 5, entregaLab2: 5, uso: 10, descarte: 0 },
    { fecha: '25/05/2022', id: 1, totalEntregado: 10, entregaLab1: 5, entregaLab2: 5, uso: 10, descarte: 0 },
    { fecha: '25/05/2022', id: 1, totalEntregado: 10, entregaLab1: 5, entregaLab2: 5, uso: 10, descarte: 0 },
    { fecha: '25/05/2022', id: 1, totalEntregado: 10, entregaLab1: 5, entregaLab2: 5, uso: 10, descarte: 0 },
    { fecha: '25/05/2022', id: 1, totalEntregado: 10, entregaLab1: 5, entregaLab2: 5, uso: 10, descarte: 0 },

];

const ReporteDeposito = () => {
    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            <TablaGrid rows={rows} columns={columns} titulo={'Reporte Depósito 1'}/>
            <TablaGrid rows={rows} columns={columns} titulo={'Reporte Depósito 2'}/>
            <TablaGrid rows={rows} columns={columns} titulo={'Reporte Depósito 3'}/>
        </ThemeProvider>


    );

};

export default ReporteDeposito;