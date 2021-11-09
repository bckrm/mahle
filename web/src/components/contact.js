import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Footer from "./footer";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function Contact() {

  return (
    <>
      <Box id="contact" sx={{ flexGrow: 1, width: '50%', margin: '70px auto', backgroundColor: '#002984' }}>
        <Grid container spacing={3}>
          <Grid item md={12}>
            <Typography variant="h5" component="div" color="white" fontWeight="bold" textAlign="center">Want to try it out?</Typography>
          </Grid>
          <Grid item md={12}>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <Grid container md={12}>
                <Grid item md={6}>
                  <div>
                    <Typography style={{margin: '20px 0 0 20px', color: 'white'}}>First Name *</Typography>
                    <TextField
                        required
                        id="fname"
                        margin="normal"
                        style={{width: 795, margin: '20px 0 20px 20px', backgroundColor: 'white', borderColor: 'white', borderRadius: 8}}
                        variant="outlined"
                        name='fname'
                    />
                  </div>
                </Grid>
                <Grid item md={6}>
                  <div>
                    <Typography style={{margin: '20px 0 0 20px', color: 'white'}}>Last Name *</Typography>
                    <TextField
                        required
                        id="lname"
                        margin="normal"
                        style={{width: 795, margin: '20px 0 20px 20px', backgroundColor: 'white', borderColor: 'white', borderRadius: 8}}
                        variant="outlined"
                        name='lname'
                    />
                  </div>
                </Grid>
              </Grid>
              <Grid container md={12}>
                <Grid item md={6}>
                  <div>
                    <Typography style={{margin: '20px 0 0 20px', color: 'white'}}>e-mail *</Typography>
                    <TextField
                        required
                        id="email"
                        margin="normal"
                        style={{width: 795, margin: '20px 0 20px 20px', backgroundColor: 'white', borderColor: 'white', borderRadius: 8}}
                        variant="outlined"
                        name='email'
                    />
                  </div>
                </Grid>
                <Grid item md={6}>
                  <div>
                    <Typography style={{margin: '20px 0 0 20px', color: 'white'}}>Telephone</Typography>
                    <TextField
                        id="telephone"
                        margin="normal"
                        style={{width: 795, margin: '20px 0 20px 20px', backgroundColor: 'white', borderColor: 'white', borderRadius: 8}}
                        variant="outlined"
                        name='telephone'
                    />
                  </div>
                </Grid>
                <Grid item md={12}>
                  <div>
                    <Typography style={{margin: '20px 0 0 20px', color: 'white'}}>Message *</Typography>
                    <TextField
                      required
                      id="message"
                      placeholder=""
                      margin="normal"
                      InputLabelProps={{
                        shrink: true
                      }}
                      rows={10}
                      multiline={true}
                      style={{width: '96%', margin: '20px 0 20px 20px', backgroundColor: 'white', borderRadius: 8}}
                      variant="outlined"
                      name="message"
                    />
                  </div>
                </Grid>
                <Grid item md={12}>
                  <Stack direction="row" spacing={1}>
                    <Chip label="Submit" style={{margin: 'auto', backgroundColor:"#d04081", color: 'white', fontWeight: 'bold', fontSize: '1.5rem', padding: 20}}/>
                  </Stack>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
        <Footer/>
      </Box>
    </>
  );
}
