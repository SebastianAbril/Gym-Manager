import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import HomeIcon from '@mui/icons-material/Home';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Inicio" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Usuarios" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ManageSearchIcon />
      </ListItemIcon>
      <ListItemText primary="Consultas" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Certificados" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <ManageAccountsIcon />
      </ListItemIcon>
      <ListItemText primary="Ajustes" />
    </ListItemButton>
  </React.Fragment>
);
