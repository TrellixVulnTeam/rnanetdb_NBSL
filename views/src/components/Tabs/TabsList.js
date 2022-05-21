import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanel from './TabPanel';
import a11yProps from './a11yProps';
import FilteredTable from '../FilteredTable';
import { Grid } from '@mui/material';
import Histogram from '../Graphs/Histogram';
import Pie from '../Graphs/Pie';
import UpdatedForm from '../UpdatedForm';

export default function TabsList() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Structures" {...a11yProps(0)} />
          <Tab label="Graph Representation" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Grid
          container
          justifyContent="space-between"
          spacing={3}
          sx={{ width: '100%' }}
        >
          <Grid item xs={10}>
            <FilteredTable />
          </Grid>
          {/* <Grid item xs={2}>
            <FilterForm />
          </Grid> */}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          spacing={3}
          sx={{ width: '100%' }}
          flexWrap="wrap"
        >
          <Grid item xs={4}>
            <Histogram />
          </Grid>
          <Grid item xs={4}>
            <Pie />
          </Grid>
          <Grid item xs={4}>
            <UpdatedForm />
          </Grid>
        </Grid>
      </TabPanel>
    </Box>
  );
}
