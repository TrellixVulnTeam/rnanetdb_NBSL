import * as React from 'react';
import { Box, Grid, Item, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useFetch } from '../hook/useFetch';
import { getBaseUrl } from '../utils/url';
import axios from 'axios';
import { Button } from '@mui/material';

export default function ResolutionForm() {
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');
  const [data, setData] = useState([]);

  const handleMinChange = (e) => {
    setMin(e.target.value);
  };

  const handleMaxChange = (e) => {
    setMax(e.target.value);
  };
  const fetchStructureByResolution = async () => {
    const base_url = getBaseUrl();
    let url = '';

    try {
      if (min && max) {
        console.log(min, max);
        url = `structures?resolution_greater_than=${min}&resolution_less_than=${max}`;
      }

      if (min && !max) {
        url = `structures?resolution_greater_than=${min}`;
      }

      if (max && !min) {
        url = `structures?resolution_less_than=${max}`;
      }
      const data = await axios.get(`${base_url}/${url}`);
      setData(data);
    } catch (error) {}
  };
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Typography>Resolution</Typography>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            label="Min"
            variant="outlined"
            value={min}
            onChange={handleMinChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            label="Max"
            variant="outlined"
            value={max}
            onChange={handleMaxChange}
          />
        </Grid>
      </Grid>
      {console.log(data)}
      <Button onClick={fetchStructureByResolution}>Chercher</Button>
    </Box>
  );
}
