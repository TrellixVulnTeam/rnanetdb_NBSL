import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import { Typography } from '@mui/material';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <a href="https://evryrna.ibisc.univ-evry.fr/evryrna/rnanet" target={"_blank"} style={{ color:"GrayText", textDecoration:"none"}}>
        <ListItemText primary="RNANet" />
      </a>
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      <Typography variant="h6" color="inherit">
        Documentation
      </Typography>
    </ListSubheader>
    <ListItemButton>
      <a href="https://forge.ibisc.univ-evry.fr/lbecquey/RNANet/blob/master/doc/INSTALL.md" target={"_blank"} style={{ color:"GrayText", textDecoration:"none"}}>
        <ListItemText primary="Installation and run guide" />
      </a>
    </ListItemButton>
    <ListItemButton>
      <a href="https://forge.ibisc.univ-evry.fr/lbecquey/RNANet/blob/master/doc/Database.md" target={"_blank"} style={{ color:"GrayText", textDecoration:"none"}}>
        <ListItemText primary="Database documentation" />
      </a>
    </ListItemButton>
    <ListItemButton>
      <a href="https://forge.ibisc.univ-evry.fr/lbecquey/RNANet/blob/master/doc/FAQ.md" target={"_blank"} style={{ color:"GrayText", textDecoration:"none"}}>
        <ListItemText primary="FQA" />
      </a>
    </ListItemButton>
    <ListItemButton>
      <a href="https://forge.ibisc.univ-evry.fr/lbecquey/RNANet/blob/master/doc/FAQ.md" target={"_blank"} style={{ color:"GrayText", textDecoration:"none"}}>
        <ListItemText primary="Warning and errors help list" />
      </a>
    </ListItemButton>
  </React.Fragment>
);