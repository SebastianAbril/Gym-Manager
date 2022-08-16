import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function Footer() {
  function Copyright(props) {
    return (
      <Typography
        fontSize="1.4rem"
        variant="inherit"
        color="text.secondary"
        align="center"
        {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://github.com/SebastianAbril">
          Made by Sebastian Abril
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  return (
    <footer className="Footer">
      <Copyright
        sx={{
          position: 'absolute',
          bottom: '0',
          width: '100%',
          padding: '5px'
        }}
      />
    </footer>
  );
}
