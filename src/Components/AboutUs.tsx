import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import NavigationIcon from '@mui/icons-material/Navigation';

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
      height: {xs: "100vw"},
      //width: "100vw",
      maxHeight: {xs: "100vh", md: "400px"},
      backgroundImage: `url(${"IMG_4450-full.png"})`,
      backgroundSize: {xs: 'cover', lg: "cover"},
      backgroundRepeat: "no-repeat",
      backgroundPosition: {xs: "center", lg:"center right"},
      backgroundAttachment: "scroll",
      alignItems: "center",
      justifyContent: "center",
      verticalAlign: "bottom"
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

 export default function AboutUs() {
  return (
    <Box sx={{
      p: 3,
      alignSelf:"center",
      alignContent: "center",
      alignItems: "center",
      justifyContent: "center",
      display: 'flex',
    }}>
      <Card sx={{ 
          maxWidth: 850,
          backgroundColor: "#1b1b19",
          display: 'flex',
          flexDirection: {xs: "column", sm: "row"}
        }}>
        <CardMedia
          sx={{ 
            height: "400px",
            objectFit: "contain",
          }}
          component="img"
          image="miami.jpg"
          title="Join us for a toast!"
        />
        <Box sx={{ width: "100%", flexDirection: "column"}}>
          <CardContent>
            <Typography gutterBottom variant="h3" component="div">
              Our Story
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Nulla nisl in neque rutrum diam venenatis metus. Suscipit purus viverra id aliquam erat; duis nostra ullamcorper. Molestie vivamus iaculis sed parturient habitasse curae hac lorem metus. Massa netus eleifend ultricies laoreet eros? Ridiculus aliquet cursus primis massa nibh. Nascetur ad massa vulputate posuere volutpat dui sem sociosqu.
            <p />
            Phasellus placerat auctor platea tristique consectetur iaculis. Phasellus est montes class primis ultricies. Sodales fermentum vivamus facilisis scelerisque egestas sodales praesent. Ornare nibh imperdiet magnis; porta ridiculus diam netus. Convallis sodales nostra metus eget quam nascetur ullamcorper pretium. Netus venenatis mattis id; nibh tristique rhoncus accumsan. Tellus tempus pulvinar lectus, justo suscipit massa. Lobortis sem fusce habitant laoreet hac sociosqu litora venenatis.
            </Typography>
          </CardContent>
          {/* <CardActions>
            <IconButton>
              <NavigationIcon/>
            </IconButton>
          </CardActions> */}
        </Box>
      </Card>
    </Box>
  );
}
