import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import WeddingAppBar from './AppBar.tsx'

const styles = {
  // heroContainer: {
  //   height: {xs: "100vh"},
  //   maxHeight: "800",
  //   backgroundImage: `url(${"IMG_4450.png"})`,
  //   backgroundSize: {xs: 'auto 100vh', lg: "auto 100vw"},
  //   backgroundRepeat: "no-repeat",
  //   backgroundPosition: {xs: "top center", lg:"bottom center"},
  //   backgroundAttachment: "scroll",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   boxShadow: "3"
  // }
  heroContainer: {
      //height: {xs: "100vw"},
      //width: "100vw",
      //maxHeight: {xs: "100vh", md: "400px"},
      // backgroundImage: `url(${"IMG_4450-full.png"})`,
      // backgroundSize: {xs: 'cover', lg: "cover"},
      // backgroundRepeat: "no-repeat",
      // backgroundPosition: {xs: "center", lg:"center right"},
      // backgroundAttachment: "scroll",
      alignItems: "center",
      justifyContent: "center",
      padding: {xs: 0},
      //verticalAlign: "bottom"
    }
 };

const textStyle = {
  flexGrow: 1,
  backgroundColor: "transparent", 
  alignSelf: "center", 
  textAlign: "center", 
  textWrap: "nowrap",
  textColor: "red",
  textShadow: "1px 1px #857367",
}

const bannerItems = ["Court", " and ", "Andrew"];

 export default function Hero() {
  return (
    <Container sx={ styles["heroContainer"] }>
      <WeddingAppBar></WeddingAppBar>
      <Card sx={{ 
        minWidth: "400px",
        alignSelf: "center",
        align: "center",
        boxShadow: "3",
        backgroundColor: "#0a0a08",
      }}>
        <CardMedia
          sx={{ 
            maxHeight: {xs: "40vw", lg: 480},
            objectFit: "cover",
            objectPosition: "center"
          }}
          component="img"
          image="IMG_4450-full.png"
          title="Take in the sunset!"
        />
        <CardContent>
          <Box sx={{verticalAlign: 'bottom'}}>
              <Typography variant='h3' sx={textStyle}>Court and Andrew</Typography>
          </Box>
        </CardContent>
      </Card>
      {/* <Stack direction={{ xs: 'column', md: 'row' }} spacing={{xs:1, md:0}} 
        sx={{
          verticalAlign: 'bottom',
          display: {xs:'block', md:'none'}
        }}>
        {bannerItems.map((item) => (
          <Typography variant="h3" component="h3" sx={textStyle}>{item}</Typography>
        ))}
      </Stack> */}
    </Container>
  );
}
