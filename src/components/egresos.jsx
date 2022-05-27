import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import theme from '../theme_config';
import Navbar from './navbar'
import Select_pieza from './select_pieza'
import Select_labo from './select_laboratorio'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const Egresos = () => {
    const navigate = useNavigate()
    
      const handleSubmit = (event) => {
      event.preventDefault();
      
      const data = new FormData(event.currentTarget);
      console.log({
        deposito: data.get('deposito'),
        pieza: data.get('pieza'),
        cantidad: data.get('cantidad'),
      });
    };
  
    const[uso, setUso] = React.useState('');

    const handleChange = (event) => {
        setUso(event.target.value)
    }
    
    return (
      <ThemeProvider theme={theme}> 
      <Navbar/>     
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 20,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          //Arriba: se le agregan propiedades de CSS con sx
            >
            <Typography component="h1" variant="h5">
              Pedidos            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            
            <Select_labo/>
            
            <Select_pieza/>  

              <TextField
                margin="normal"
                required
                fullWidth
                name="cantidad"
                label="Cantidad"
                type="number"
                id="cantidad"
                autoComplete="current-password"
              />
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}

              >
                Enviar
              </Button>
              
            </Box>
          </Box>
          
        </Container>
      </ThemeProvider>
    );
  }

export default Egresos