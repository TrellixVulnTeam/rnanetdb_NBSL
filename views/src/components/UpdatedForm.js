import React, { useContext, useState, useEffect, useCallback } from 'react';
import TextField from '@mui/material/TextField';
import { Button, Grid, Typography } from '@mui/material';
import MouseOverPopoverHelperText from './HelperText';

import Stack from '@mui/material/Stack';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import axios from 'axios';
import { getBaseUrl } from '../utils/url';
import { Store } from '../utils/store';
import { useNavigate } from 'react-router-dom';
import { getQueryString } from '../utils/queryStringGenerator';

const organisms = ['organism1', 'organism2', 'organism3'];

const formtDate = (date) => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date);
};

export default function UpdatedForm() {
  const base_url = getBaseUrl();
  const navigate = useNavigate();

  const {
    state: { methods },
    dispatch,
  } = useContext(Store);

  const [resolution, setResolution] = useState({ min: 1, max: 20 });
  const [sequenceLength, setSequenceLength] = useState({ min: 1, max: 4 });
  const [organism, setOrganism] = useState();
  const [method, setMethod] = useState();
  const [releaseDate, setReleaseDate] = useState({
    min: formtDate(new Date('1900-01-01')),
    max: formtDate(new Date()),
  });

  const handleReleaseDateChange = ({ name, value }) => {
    const dateFormated = new Intl.DateTimeFormat('en-US').format(value);
    console.log(dateFormated);
    setReleaseDate((prevReleaseDate) => {
      return { ...prevReleaseDate, [name]: dateFormated };
    });
  };

  const handleResolutionChange = (event) => {
    setResolution((prevResolution) => {
      return { ...prevResolution, [event.target.name]: event.target.value };
    });
  };

  const handleSequenceLengthChange = (event) => {
    setSequenceLength((prevSequenceLength) => {
      return { ...prevSequenceLength, [event.target.name]: event.target.value };
    });
  };

  const handleOrganismChange = (event) => {
    setOrganism(event.target.value);
  };

  const handleMethodChange = (event) => {
    setMethod(event.target.value);
  };

  const fetchMethods = useCallback(async () => {
    try {
      const methods = await axios.get(`${base_url}/structures/methods/all`);
      console.log(methods);
      const methodWithNoDuplicates = methods.data.reduce((acc, method) => {
        const { exp_method } = method;
        if (!acc.includes(exp_method)) {
          acc.push(exp_method);
        }
        return acc;
      }, []);
      dispatch({ type: 'SET_METHODS', payload: methodWithNoDuplicates });
    } catch (error) {
      console.log(error);
    }
  }, [base_url, dispatch]);

  const handleFormSubmit = async (_event) => {
    try {
      const payload = {
        resolution,
        sequenceLength,
        organism,
        method,
        releaseDate,
      };
      // dispatch({ type: 'FORM_UPDATE', payload });
      const queryString = getQueryString(payload);
      const { data } = await axios.get(`${base_url}/structures?${queryString}`);
      dispatch({ type: 'SET_DATA', payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMethods();
  }, [fetchMethods]);

  return (
    <Grid
      container
      spacing={2}
      direction="column"
      alignItems="flex-start"
      justifyContent="flex-start"
      style={{ width: '100%' }}
    >
      <Grid container item spacing={2} justifyContent={'space-around'}>
        <Grid item sx={6} md={6}>
          <TextField
            label="Min Sequence Length"
            id="outlined-start-adornment"
            sx={{ width: '100%' }}
            type="number"
            name="min"
            value={sequenceLength.min}
            onChange={handleSequenceLengthChange}
          />
        </Grid>
        <Grid item sx={6} md={6}>
          <TextField
            label="Max Sequence Length"
            id="outlined-start-adornment"
            sx={{ width: '100%' }}
            type="number"
            name="max"
            value={sequenceLength.max}
            onChange={handleSequenceLengthChange}
          />
        </Grid>
      </Grid>
      <Grid container item spacing={2} justifyContent={'space-around'}>
        <Grid item sx={6} md={6}>
          <TextField
            label="Min Resolution"
            id="outlined-start-adornment"
            sx={{ width: '100%' }}
            type="number"
            name="min"
            value={resolution.min}
            onChange={handleResolutionChange}
          />
        </Grid>

        <Grid item sx={6} md={6}>
          <TextField
            label="Max Resolution"
            id="outlined-start-adornment"
            sx={{ width: '100%' }}
            type="number"
            name="max"
            value={resolution.max}
            onChange={handleResolutionChange}
          />
        </Grid>
      </Grid>

      <Grid container item spacing={2} justifyContent={'space-around'}>
        <Grid item md={12}>
          <TextField
            id="outlined-select-currency-native"
            select
            label="Organisms"
            value={organism}
            sx={{ width: '100%' }}
            onChange={handleOrganismChange}
            SelectProps={{
              native: true,
            }}
          >
            <option value={undefined} >
              Select an organism
            </option>
            {organisms.map((organism) => (
              <option key={organism} value={organism}>
                {organism}
              </option>
            ))}
          </TextField>
        </Grid>
      </Grid>
      <Grid container item spacing={2} justifyContent={'space-around'}>
        <Grid item sx={12} md={12}>
          <TextField
            id="outlined-select-currency-native"
            select
            label="Methods"
            value={method}
            sx={{ width: '100%' }}
            onChange={handleMethodChange}
            SelectProps={{
              native: true,
            }}
          >
            <option value={undefined}> Select a method </option>
            {methods.map((method) => (
              <option key={method} value={method}>
                {method}
              </option>
            ))}
          </TextField>
        </Grid>
      </Grid>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Grid container item spacing={2} justifyContent={'space-around'}>
          <Grid item sx={6} md={6}>
            <Stack spacing={3}>
              <DesktopDatePicker
                label="Min Release date"
                inputFormat="MM/dd/yyyy"
                value={releaseDate.min}
                onChange={(newMinDate) =>
                  handleReleaseDateChange({ name: 'min', value: newMinDate })
                }
                renderInput={(params) => <TextField {...params} />}
              />
            </Stack>
          </Grid>
          <Grid item sx={6} md={6}>
            <Stack spacing={3}>
              <DesktopDatePicker
                label="Max Release date"
                inputFormat="MM/dd/yyyy"
                value={releaseDate.max}
                onChange={(newMaxDate) =>
                  handleReleaseDateChange({ name: 'max', value: newMaxDate })
                }
                renderInput={(params) => <TextField {...params} />}
              />
            </Stack>
          </Grid>
        </Grid>
      </LocalizationProvider>
      <Grid container item spacing={2} justifyContent="center">
        <Grid item sx={12} md={8}>
          <Button variant="outlined" onClick={handleFormSubmit} fullWidth>
            Submit
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
