import React from 'react'
import {Box, Stack, Typography, Button} from '@mui/material';
import HeroBannerImage from '../assets/images/home.jpg'
const HeroBanner = () => {
  return (
    <Box sx={{
        mt:{lg:'212px',xs:'70px'}, ml:{sm:'50px'}}} 
        possition="relative" p="20px"> 
      <Typography color="#FF2625"
      fontWeight="600"
      fontSize="26px">
      Gym Club
      </Typography>
      <Typography fontWeight={700}
      sx={{fontSize:{lg:'44px', xs:'40px'}}}
      mb="23px" mt="30px">
      "Do something today <br/> that your future<br/> self will thank you for"
      </Typography>
      <Typography fontSize="22px"
      lineHeight="35px" mb={4}> 
      Go an extra mile and check out the most effective exercises</Typography>
      <Button href='#Exercises' variant='contained' color="error" sc={{backgroundColor:'#ff2625',padding:'10px'}}>Explore Exercises</Button>
      <Typography fontWeigt={600}
      color="#FF2625"
      sx={{opacity:0.1,
    display:{lg:'block', xs:'none'}}}
    fontSize="200px">
      GYM it!!!!!
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  )
}

export default HeroBanner
