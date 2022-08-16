import * as React from 'react';
import Footer from '../../components/Footer/Footer';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500]
    },
    secondary: {
      main: blue[500]
    }
  }
});
export default function LoginScreen() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password')
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          bgcolor: 'primary.main',
          height: '130px',
          display: 'flex',
          justifyContent: 'center'
        }}>
        <Typography fontSize="2.2rem" color="white" sx={{ marginTop: '30px' }}>
          Gym Manager
        </Typography>
      </Box>
      <Container component="main" maxWidth="xs" sx={{ marginTop: '-50px' }}>
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',

            backgroundColor: 'white',
            borderRadius: '4px',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)'
          }}>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main', margin: '20px 0px 10px 0' }}>
            <FitnessCenterIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Mi cuenta
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="E-mail"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Grid container justifyContent="center">
              <Button type="submit" size="large" variant="contained" sx={{ mt: 3, mb: 2 }}>
                <Typography fontSize="1.3rem">Ingresar</Typography>
              </Button>
            </Grid>

            <Grid container justifyContent="center " sx={{ padding: '10px 10px 20px 10px' }}>
              <Link href="#" variant="body2" fontSize="1.2rem">
                Forgot password?
              </Link>
            </Grid>
          </Box>
        </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
