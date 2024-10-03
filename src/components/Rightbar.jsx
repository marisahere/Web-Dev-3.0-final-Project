import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
} from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="scrollable">
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar
            alt="Remy Sharp"
            src="https://th.bing.com/th/id/OIP.uykrwxWXpq2T7hv1xRTVsQHaFe?rs=1&pid=ImgDetMain"
          />
          <Avatar
            alt="Travis Howard"
            src="https://th.bing.com/th/id/OIP.WkuGv4-iR5uPKZFcs7UjvAHaHs?rs=1&pid=ImgDetMain"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://th.bing.com/th/id/R.d221bbc629e39f163076e402189b35ad?rik=FtKFheY0DhhNIQ&pid=ImgRaw&r=0"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
          />
          <Avatar
            alt="Lara Henderson"
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhCNeBSmGLRnFGZYC4M1vs5vlsmiEOdSwGwx__v_zOiFcgYVmG3glNbOAuDbRVfUFr2SFZ3UadJAaz3nYcg-ZT3zear6g6Ab67UTDoSTmF0UdWDFOFTMjUnsskyzojytVEhQc7MkjpJq7JvHHHEl3MqJMutk3Hstg1jWE4TgkD2x4TswHV9lbI3UfCq/s1080/medical%20student%20medical%20dp.jpg"
          />
          <Avatar
            alt="James Green"
            src="https://th.bing.com/th/id/OIP.JhqKSFTqJ7TxuZU0taMZiwHaEo?rs=1&pid=ImgDetMain"
          />
          <Avatar alt="Oliver Woodword" src="/static/images/avatar/7.jpg" />
          <Avatar alt="Gilbert Blythe" src="/static/images/avatar/8.jpg" />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={120} gap={5}>
          <ImageListItem>
            <img
              src="https://th.bing.com/th/id/R.5da8514079e665874a4e463128060798?rik=qS3UBxzT%2flFilg&pid=ImgRaw&r=0"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://i.pinimg.com/736x/d5/d4/bb/d5d4bb7e8a83e3cc20f3383e4ca3e5c7.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://i.pinimg.com/564x/01/bc/a0/01bca01316461e841c34e82696486ae1.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://i.pinimg.com/564x/8a/5f/34/8a5f34d85739d82fba92c913a97a7f73.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://i.pinimg.com/564x/54/06/38/540638a6b7efb68911afe4840d4664b1.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://th.bing.com/th/id/R.8ec9d814f393d888b1abf77a15332caf?rik=GQ5T%2fpTP%2fSGz0Q&pid=ImgRaw&r=0"
              alt=""
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2}>
          Latest Conversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://th.bing.com/th/id/OIP.WIPsaGSVRxb-cdKc59A9CQHaFE?rs=1&pid=ImgDetMain"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: "text.primary", display: "inline" }}
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Travis Howard"
                src="https://th.bing.com/th/id/R.1fa3dc9d2ef58d2e95c1186f9a2893ae?rik=Ts7AV2xUQP4YRw&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fwp1814535.jpg&ehk=2j2KVCrd7Ej32sRdvi9ntEuDJ%2bOSr9M7lh%2f1jJ2bzPU%3d&risl=&pid=ImgRaw&r=0"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: "text.primary", display: "inline" }}
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Cindy Baker"
                src="https://th.bing.com/th/id/OIP.pT3Y7U8gH9hdjNgNQx438gHaIA?rs=1&pid=ImgDetMain"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: "text.primary", display: "inline" }}
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
