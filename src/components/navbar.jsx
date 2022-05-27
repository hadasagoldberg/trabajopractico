import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {ThemeProvider} from '@mui/material/styles';
import theme from '../theme_config';
import {useNavigate, userNavigate} from 'react-router-dom'
import ReporteGeneral from './reporteGeneral'

const Navbar = () => {
    const navigate = useNavigate()
    return(
        <div>
            <ThemeProvider theme={theme}>
                <AppBar position="fixed" color="primary">
                    <Toolbar>
                        <Button variant="text" color="secondary" onClick={() => navigate('/ingresos')}>
                            Ingresos
                        </Button>
                        <Button variant="text" color="secondary" onClick={() => navigate('/egresos')}>
                            Pedidos
                        </Button>
                        <Button variant="text" color="secondary" onClick={() => navigate('/followup')}>
                            Follow Up
                        </Button>
                        <Button variant="text" color="secondary" onClick={() => navigate('/reporteGeneral')}>
                            Reporte General
                        </Button>
                        <Button variant="text" color="secondary" onClick={() => navigate('/reportePiezas')}>
                            Reporte Piezas
                        </Button>
                        <Button variant="text" color="secondary" onClick={() => navigate('/reporteDeposito')}>
                            Reporte Depósito
                        </Button>
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
            
        </div>
    )
}

export default Navbar