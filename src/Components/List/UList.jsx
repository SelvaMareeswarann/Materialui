import React from "react";

import { Grid, Typography, Box } from '@mui/material';
const UList = () => {
  return (
    <Grid container spacing={2} justifyContent="space-around" marginTop="40px">
    <Grid item xs={12} sm={4}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          '&:hover': {
            color: 'pink',
          },
        }}
      >
        <Typography fontWeight="bold" sx={{ marginBottom: '10px' }}>
          water
        </Typography>
        <Box>
          <Typography variant="h3" component="p" sx={{ display: 'inline' }}>
            4255172
          </Typography>
          <i>+m<sup>3</sup></i>
        </Box>
        <Typography component="p" sx={{ marginLeft: '54px' }}>
          water cycled
        </Typography>
      </Box>
    </Grid>
    <Grid item xs={12} sm={4}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          '&:hover': {
            color: 'pink',
          },
        }}
      >
        <Typography fontWeight="bold" sx={{ marginBottom: '10px' }}>
          cotton
        </Typography>
        <Box>
          <Typography variant="h3" component="p" sx={{ display: 'inline' }}>
            1500000
          </Typography>
          <i>+acres</i>
        </Box>
        <Typography component="p">
          Cotton Cultivated
        </Typography>
      </Box>
    </Grid>
    <Grid item xs={12} sm={4}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          '&:hover': {
            color: 'pink',
          },
        }}
      >
        <Typography fontWeight="bold" sx={{ marginBottom: '10px' }}>
          Energy
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h3" component="p" sx={{ display: 'inline' }}>
            778581
          </Typography>
          <i style={{ display: 'inline', marginLeft: '4px' }}>+kWh</i>
        </Box>
        <Typography component="p" sx={{ marginRight: '0' }}>
          Solar Power
        </Typography>
      </Box>
    </Grid>
  </Grid>
  );
};

export default UList;
