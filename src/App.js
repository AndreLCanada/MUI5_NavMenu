import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Icon from '@mdi/react'
import { mdiBriefcase } from '@mdi/js'
import { BsPersonCircle } from "react-icons/bs";
import { IoGiftSharp } from "react-icons/io5";



function ConciergeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 60 60"
      version="1.1"
      viewBox="-2 -5 62 62"
      xmlSpace="preserve"
      fill="#f9f9f9"
    >
      <path d="M54 2H6C2.748 2 0 4.748 0 8v33c0 3.252 2.748 6 6 6h8v10a1 1 0 001.74.673L25.442 47H54c3.252 0 6-2.748 6-6V8c0-3.252-2.748-6-6-6zM12 15h15a1 1 0 110 2H12a1 1 0 110-2zm34 18H12a1 1 0 110-2h34a1 1 0 110 2zm0-8H12a1 1 0 110-2h34a1 1 0 110 2z"></path>
    </svg>
  );
}

function CoffeeChatIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="23"
        height="22"
        x="0"
        y="0"
        enableBackground="new 0 0 468.873 468.873"
        version="1.1"
        viewBox="0 0 468.873 468.873"
        xmlSpace="preserve"
        fill="#f9f9f9"
      >
        <path d="M369.992 10.059c-48.285 0-88.48 34.613-97.145 80.381H13.25C5.932 90.439 0 96.375 0 103.691v242.48c0 7.32 5.932 13.252 13.25 13.252h202.674v86.138a13.251 13.251 0 0022.621 9.37l96.172-95.508h56.975c7.32 0 13.252-5.932 13.252-13.252V201.458c37.361-14.121 63.93-50.215 63.93-92.52.001-54.608-44.27-98.879-98.882-98.879zm0 172.762c-40.736 0-73.879-33.143-73.879-73.882 0-40.738 33.143-73.881 73.879-73.881 40.738 0 73.883 33.143 73.883 73.881 0 40.74-33.145 73.882-73.883 73.882z"></path>
        <path d="M412.129 98.303H380.49V66.666c0-5.8-4.699-10.502-10.502-10.502-5.801 0-10.502 4.702-10.502 10.502v31.637H327.85c-5.801 0-10.502 4.702-10.502 10.502 0 5.8 4.701 10.502 10.502 10.502h31.637v31.637c0 5.8 4.701 10.502 10.502 10.502 5.803 0 10.502-4.702 10.502-10.502v-31.637h31.639c5.801 0 10.502-4.702 10.502-10.502-.001-5.801-4.702-10.502-10.503-10.502z"></path>
      </svg>
    );
  }


function App() {
  return (
    <Box className="App" sx={{ 
        p: '100px',
    }}>
    
     <Stack direction="row" spacing={2}>
      <Paper elevation={3} sx={{ 
        borderRadius: '12px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px 8px',
        gap: '16px',
        left: '0%',
        right: '0%',
        top:' 0%',
        bottom: '0.37%',
        background: '#FFFFFF',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.08)',
        width: '296px',
        }}>
          <Box alignItems={'center'} paddingBottom='40px'>
            logo
          </Box>
          <MenuList>
            <MenuItem sx={{
              borderRadius: '10px',
              ':hover': {
                        "& .TypoOne": {
                              color: "black",
                            },
                            "& .itemOneBox": {
                              backgroundColor: "purple",
                            },
                      },
              
              }}>
                <Grid container direction="row" alignItems="center" spacing={1.5}>
                  <Grid item >
                    <Box className='itemOneBox' sx={{
                      pl: '4px',
                      pr: '6px',
                      pt: '4.5px',
                      pb: '6px',
                      width: '20px',
                      height: '20px',
                      borderRadius: '5px',
                      backgroundColor: 'gray',
                    }}>
                      <BsPersonCircle color='#f9f9f9' size='22px'/>
                    </Box>
                  </Grid>
                  <Grid item className='TypoOne' sx={{ color: 'gray' }}>
                  <Typography>Account</Typography>
                  </Grid>
                </Grid>
              </MenuItem>
              <MenuItem sx={{
              borderRadius: '10px',
              ':hover': {
                        "& .TypoTwo": {
                              color: "black",
                            },
                            "& .itemTwoBox": {
                              backgroundColor: "purple",
                            },
                      },
              
              }}>
                <Grid container direction="row" alignItems="center" spacing={1.5}>
                  <Grid item >
                    <Box className='itemTwoBox' sx={{
                      pl: '4px',
                      pr: '6px',
                      pt: '4.5px',
                      pb: '6px',
                      width: '20px',
                      height: '20px',
                      borderRadius: '5px',
                      backgroundColor: 'gray',
                      alignContent: 'center',
                      justifyContent: 'center',
                    }}>
                      <Icon path={mdiBriefcase} size='22px' color='#f9f9f9' />
                    </Box>
                  </Grid>
                  <Grid item className='TypoTwo' sx={{ color: 'gray' }}>
                    Resource Library
                  </Grid>
                </Grid>
              </MenuItem>
              <MenuItem sx={{
              borderRadius: '10px',
              ':hover': {
                        "& .TypoThree": {
                              color: "black",
                            },
                            "& .itemThreeBox": {
                              backgroundColor: "purple",
                            },
                      },
              
              }}>
                <Grid container direction="row" alignItems="center" spacing={1.5}>
                  <Grid item >
                    <Box className='itemThreeBox' sx={{
                      pl: '4px',
                      pr: '6px',
                      pt: '4.5px',
                      pb: '6px',
                      width: '20px',
                      height: '20px',
                      borderRadius: '5px',
                      backgroundColor: 'gray',
                    }}>
                      <ConciergeIcon />
                    </Box>
                  </Grid>
                  <Grid className='TypoThree' item sx={{ color: 'gray' }}>
                    Concierge
                  </Grid>
                </Grid>
              </MenuItem>
              <MenuItem sx={{
              borderRadius: '10px',
              ':hover': {
                        "& .typoFour": {
                              color: "black",
                            },
                            "& .itemFourBox": {
                              backgroundColor: "purple",
                            },
                      },
              
              }}>
                <Grid container direction="row" alignItems="center" spacing={1.5}>
                  <Grid item >
                    <Box className='itemFourBox' sx={{
                      pl: '4px',
                      pr: '6px',
                      pt: '4.5px',
                      pb: '6px',
                      width: '20px',
                      height: '20px',
                      borderRadius: '5px',
                      backgroundColor: 'gray',
                    }}>
                      <CoffeeChatIcon />
                    </Box>
                  </Grid>
                  <Grid className='typoFour' item sx={{ color: 'gray' }}>
                    Coffee Chats
                  </Grid>
                </Grid>
              </MenuItem>
              <MenuItem sx={{
              borderRadius: '10px',
              ':hover': {
                        "& .typoFive": {
                              color: "black",
                            },
                            "& .itemFiveBox": {
                              backgroundColor: "purple",
                            },
                      },
              
              }}>
                <Grid container direction="row" alignItems="center" spacing={1.5}>
                  <Grid item >
                    <Box className='itemFiveBox' sx={{
                      pl: '4px',
                      pr: '6px',
                      pt: '4.5px',
                      pb: '6px',
                      width: '20px',
                      height: '20px',
                      borderRadius: '5px',
                      backgroundColor: 'gray',
                    }}>
                      <IoGiftSharp color='#f9f9f9' size='22px'/>
                    </Box>
                  </Grid>
                  <Grid className='typoFive' item sx={{ color: 'gray' }}>
                    Bounties
                  </Grid>
                </Grid>
              </MenuItem>
            </MenuList>
        </Paper>
      </Stack>
    </Box>
  );
}

export default App;
