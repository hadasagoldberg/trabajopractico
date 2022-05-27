import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import Navbar from './components/navbar';
import {ThemeProvider} from '@mui/material/styles';
import theme from './theme_config'
import {Routes, Route} from 'react-router-dom'
import Ingresos from './components/ingresos'
import Egresos from './components/egresos'
import FollowUp from './components/followup'
import ReporteGeneral from './components/reporteGeneral'
import ReportePiezas from './components/reportePiezas';
import ReporteDeposito from './components/reporteDeposito';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='ingresos' element={<Ingresos />}></Route>
        <Route path='egresos' element={<Egresos />}></Route>
        <Route path='followup' element={<FollowUp />}></Route>
        <Route path='reporteGeneral' element={<ReporteGeneral />}></Route>
        <Route path='reportePiezas' element={<ReportePiezas />}></Route>
        <Route path='reporteDeposito' element={<ReporteDeposito />}></Route>

      </Routes>
      
        
      
    </ThemeProvider>
    
  );
}

export default App;
