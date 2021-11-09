import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

// backgroundColor: '#002984'
export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1, width: '50%', margin: '80px auto 0 auto', fontWeight: 'bold' }}>
      <AppBar position="static" style={{padding: 0, backgroundColor: 'transparent', boxShadow: 'none'}}>
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1, textAlign: 'center', fontWeight: 'bold' }}>BLUE-J</Typography>
        </Toolbar>
        <Toolbar>
          <Typography variant="subtitle1" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>by MAHLE Aftermarket GmbH, Stuttgart 2001-2017</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
