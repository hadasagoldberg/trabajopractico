import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';


const theme = createTheme();

//Arranca la definicion del componente Login
//Parametros y arranca despues de la llave
const Login = () => {
  const navigate = useNavigate()
  //Funcion definida dentro del componente. Le llega de parametro el evento submit
  /*const handleSubmit = (event) => {
    //Permite que no recargue la pagina al enviar el submit
    event.preventDefault();
    //Agarra las variables, genera un formdata (formato de texto) y lo imprime en consola
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };*/

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Email inválido").required("Required"),
      password: Yup.string().min(8, "Debe tener 8 caracteres").required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })


  //El return muestra
  return (
    //Define el estilo
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        //Arriba: se le agregan propiedades de CSS con sx
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box sx={{ mt: 1 }}>
            <form onSubmit={formik.handleSubmit}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                //Autofocus es para que cuando se carga la pagina se pare ahi
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {(formik.touched.email && formik.errors.email) ? <Typography color='error'>{formik.errors.email}</Typography> : null}
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {(formik.touched.password && formik.errors.password) ? <Typography color='error'>{formik.errors.password}</Typography> : null}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              //onClick={() => navigate('ingresos')}
              >
                Sign In
              </Button>
            </form>
          </Box>
        </Box>

      </Container>
    </ThemeProvider>
  );
}

export default Login;