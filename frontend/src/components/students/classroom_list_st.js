import { makeStyles } from '@mui/styles'
import { createTheme } from '@mui/material/styles';
import React, { useEffect, useState } from 'react'
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import axiosInstance from '../../config/axios';
import Programming_classroom_logo from '../../assets/programming_classroom_img.png';

const useStyles = makeStyles(({ theme = createTheme() }) => ({
    container: {
      width: 'auto', 
      marginTop: theme.spacing(3),
      [theme.breakpoints.down("sm")]: {
        // paddingTop: theme.spacing(3),
        alignItems: "center"
      }
    },
    card_classroom: {
      maxWidth: 345 ,
      marginBottom: theme.spacing(3)
    }
  }));

function Classroom_list_st() {

    const classes = useStyles();

    const theme = createTheme();
    
    const [classroom, setClassroom] = useState([])

    useEffect( async () => {
      let classroom_data = await axiosInstance.get('classrooms/classroom')
      console.log(classroom_data.data[0])
      setClassroom(classroom_data.data[0])
    }, [])

  return (
      <Container className={classes.container}>
        <Box component='div'
          sx={{ width: 160 , height: 'auto', alignItems: 'center',
                bgcolor: '#008037', color: 'white', display: 'flex',
                paddingleft: theme.spacing(3), marginBottom: theme.spacing(3),
                borderRadius: 3, }}>
          <SchoolIcon sx={{ paddingLeft: theme.spacing(2) }}/>
          <Typography 
            sx={{ fontFamily: "Kanit", display:'flex' , fontWeight: 500 ,
                  padding: theme.spacing(2) , paddingLeft: theme.spacing(2.5)}}>
            ห้องเรียน
          </Typography>
        </Box>
        <Grid container sx={{ alignItems: "center", pl:{ xs: 5 , md: 2} }}>
          <Card sx = {{background: 'linear-gradient(45deg, #a1e7db 30%, #77bb4c  90%)', flexDirection: 'column', marginRight: theme.spacing(4) }} className={classes.card_classroom}>
            <CardActionArea href='/classroom_st'>
              <CardMedia
              component="img"
              alt="Classroom logo"
              height="250"
              width="125"
              image={Programming_classroom_logo}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Kanit", fontWeight: 500  }}>
                  {classroom.name}
                </Typography>
                <Typography gutterBottom variant="body2" component="div" sx={{ fontFamily: "Kanit", fontWeight: 500 }}>
                  {classroom.about}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions CardActions>
              <Button sx={{ fontFamily: "Kanit", color:"#008037" }} size="small" href='/classroom_st' >เข้าห้องเรียน</Button>
            </CardActions>
          </Card>
      
        </Grid>
      </Container>
  )
}

export default Classroom_list_st