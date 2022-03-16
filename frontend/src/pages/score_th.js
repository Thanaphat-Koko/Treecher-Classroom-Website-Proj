import React, { useState } from 'react';
import { Drawer, Grid } from '@mui/material'
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system'
import Navbar from '../components/navbar'
import Score_resultth from '../components/teacher/score_resultth';
import Left_Menu_class_th from '../components/teacher/left_menu_class_th';
import Left_slidebar_class_th from '../components/teacher/left_slidebar_class_th';
import Avartar_mobile from '../components/teacher/avartar_mobile';
import Navbar_moblie from '../components/navbar_mobile';



const useStyles = makeStyles(({ theme = useTheme() }) => ({
  container: {
    paddingTop: theme.spacing(3),
  },
  avartar_mobile: {
    alignItems: 'right', 
    justifyContent: 'flex-end',
    paddingTop: theme.spacing(5),
    paddingLeft: theme.spacing(12),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  gridavartar :{
    paddingTop: theme.spacing(10),
    border: "1px solid black", 
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  
}));


function Score_th() {

  const classes = useStyles()

  const [color, setColor] = useState(true)

  const handleClick = () => {
    setColor(!color)
  };

  const [openslide, setOpenslide] = useState(false)

  const toggleslider = () => {
    setOpenslide(!openslide)
  }


  return (
    <Box position='flex'>
      <Box component='div' sx={{ display: {sm: 'none'} }}>
        <Navbar_moblie toggleslider={toggleslider} />
      </Box>
      <Grid container item spacing={0.5}>
        <Grid item xs={1.8} sx={{ display: { xs: 'none', md: 'flex' }, position: 'fixed'}}>
            <Left_Menu_class_th changecolor={color} handleClick={handleClick}/>
        </Grid>
        <Drawer open={openslide} anchor="left" onClose={toggleslider}>
            <Left_slidebar_class_th />
          </Drawer>
        <Grid item xs sx={{ marginLeft: {md:"15%"}}} > 
          <Grid item classname={classes.gridavartar}>
            <Avartar_mobile className={classes.avartar_mobile}/>
          </Grid>
          <Grid item xs >
            <Score_resultth/>
          </Grid>
        </Grid>
      </Grid>
    </Box>
    
  )
}

export default Score_th