import React, { useState, useEffect } from "react";
import { Box, Button, Container, Grid, IconButton, InputBase, Typography, Paper, Avatar, List, ListItem, ListItemText, ListItemIcon, } from "@mui/material";
import { styled } from "@mui/system";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { any } from "prop-types";
import { Placeholder } from "react-bootstrap";
import TypingEffect from "../../components/TypingEffect";

const GradientBox = styled(Box)(({ theme }) => ({
  background: "linear-gradient(180deg, rgb(251,237,150) 0%, rgb(171,236,214) 100%)",
  borderRadius: "44px",
  boxShadow: "0px 23px 30px #abecd633, 0px 4px 12px #0000001a",
  padding: theme.spacing(5),
  textAlign: "center",
}));

const ProjectCard = styled(Box)(({ theme }) => ({
  background: theme.palette.background.paper,
  borderRadius: "18px",
  overflow: "hidden",
  // boxShadow: theme.shadows[1],
  padding: theme.spacing(2),
  // textAlign: "center",
}));

const SkillIcon = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(10),
  height: theme.spacing(10),
}));


export const Mobile = (): JSX.Element => {

  // const [placeholder, setPlaceholder] = useState('');

  // useEffect(() => {
  //   const text = 'Type something...';
  //   let i = 0;
  //   const typingEffect = setInterval(() => {
  //     if (i < text.length) {
  //       setPlaceholder(text.substring(0, i + 1));
  //       i++;
  //     } else {
  //       clearInterval(typingEffect);
  //     }
  //   }, 100);
  //   return () => clearInterval(typingEffect);
  // }, []);

  return (
    <Container maxWidth="lg" sx={{ backgroundColor: "#fafdfc", padding: "90px 0" }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" paddingY={2}>
        <Box display="flex" alignItems="center">
          <img src="/img/image.svg" alt="Img" style={{ width: 16, height: 34 }} /> _
          UCR & Coursera Certificates
          {/* <img src="/img/logo-name.svg" alt="Logo name" style={{ width: 136, height: 22, marginLeft: 8 }} />e */}
        </Box>promo icons here
        <IconButton>
          <MenuIcon />
        </IconButton>
      </Box>
      <GradientBox>
        <Avatar src="/img/brownDude.png" sx={{ width: 115, height: 115, margin: "0 auto" }} />
        <Typography variant="h1" sx={{ fontSize: 44, fontWeight: "bold", color: "defaultgray-900" }}>
          Hello, I'm Jason
        </Typography>
        {/* <img src="/img/desenvolvo-ideias-e-ajudo-a-construir-um-mundo-melhor-atrav-s-do.png" alt="Desenvolvo ideias e" style={{ width: "100%" }} /> */}
        {/* <textarea title="Intro" placeholder="I have lots of projects you can look up in my github"></textarea> */}
        {/* <TextField className="text-info" fullWidth multiline placeholder={'I have lots of projects you can look up in my github'} variant="outlined" /> */}
        {/* <TextField className="text-info" fullWidth multiline placeholder={placeholder} variant="outlined" /> */}
        <TypingEffect />
        <Box display="flex" justifyContent="center" gap={2} marginTop={2}>
          <Button variant="contained" color="primary" sx={{ borderRadius: 32 }}>
            Contact
          </Button>
          <Button variant="text" endIcon={<ArrowForwardIcon />}>
            Download CV
          </Button>
        </Box>
      </GradientBox>

      <Box textAlign="center" marginY={5}>
        <Typography variant="h2" sx={{ fontSize: 92, fontWeight: "bold", color: "defaultgray-900" }}>
          Latest
          <br />
          Projects
        </Typography>
      </Box>

      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={4}>
          <ProjectCard>
            <Typography variant="h3" sx={{ fontSize: 38, fontWeight: "bold", color: "defaultgray-900" }}>
              Freelance Work Dashboard
            </Typography>
            <Box display="flex" justifyContent="center" gap={1} marginY={2}>
              <Button variant="contained" color="primary" sx={{ borderRadius: 32 }}>
                TypeScript-Express-Node
              </Button>
              <Button variant="contained" color="secondary" sx={{ borderRadius: 32 }}>
                React
              </Button>
            </Box>
            <img src="/img/DevMesh.png" alt="Image" style={{ width: "100%", height: 213, objectFit: "cover" }} />
            <List>
              <ListItemIcon>
                <GitHubIcon />
              </ListItemIcon>
              <ListItemIcon>
                <LanguageIcon />
              </ListItemIcon>
            </List>
          </ProjectCard>
        </Grid>
        
        <Grid item xs={12} md={4} sx={{marginBottom: "2", border: "5px"}}> {/* This is supposed to make the middle grid be a litle above the rest, but is not working */}
          <ProjectCard sx={{marginBottom: "2", border: "5px"}}>
            <Typography variant="h3" sx={{ fontSize: 38, fontWeight: "bold", color: "defaultgray-900" }}>
              Videogame or API goes here 
            </Typography>
            <Box display="flex" justifyContent="center" gap={1} marginY={2}>
              <Button variant="contained" color="primary" sx={{ borderRadius: 32 }}>
                C# - Visual Studio
              </Button>
              <Button variant="contained" color="secondary" sx={{ borderRadius: 32 }}>
                Unity
              </Button>
            </Box>
            <img src="/img/Portfolio2019.png" alt="Image" style={{ width: "100%", height: 213, objectFit: "cover" }} />
            <List>
              <ListItemIcon>
                <GitHubIcon className="w-10" />
              </ListItemIcon>
              <ListItemIcon>
                <LanguageIcon className="w-10" />
              </ListItemIcon>
            </List>
          </ProjectCard>
        </Grid>
        <Grid item xs={12} md={4}>
          <ProjectCard>
            <Typography variant="h3" sx={{ fontSize: 38, fontWeight: "bold", color: "defaultgray-900" }}>
              Social Media Platform
            </Typography>
            <Box display="flex" justifyContent="center" gap={1} marginY={2}>
              <Button variant="contained" color="primary" sx={{ borderRadius: 32 }}>
                Typescript-Redux
              </Button>
              <Button variant="contained" color="secondary" sx={{ borderRadius: 32 }}>
                React
              </Button>
              <Button variant="contained" color="secondary" sx={{ borderRadius: 32 }}>
                Redux
              </Button>
            </Box>
            <img src="/img/SocialMediaPlatform.png" alt="Image" style={{ width: "100%", height: 213, objectFit: "cover" }} />
            <List>

              <ListItemIcon>
                <GitHubIcon />
              </ListItemIcon>

              <ListItemIcon>
                <LanguageIcon />
              </ListItemIcon>

            </List>
          </ProjectCard>
        </Grid>
      </Grid>

      <Box textAlign="center" marginY={5}>
        <Typography variant="h2" sx={{ fontSize: 92, fontWeight: "bold", color: "defaultgray-900" }}>
          About
          <br />
          me
        </Typography>
      </Box>

      <Box display="flex" justifyContent="space-between" alignItems="center" marginY={5}>
        <Box>
          <Typography variant="body1" sx={{ fontSize: 24, color: "defaultgray-900" }}>
            I'm 31 years old, I'm a CS student at Uni, I'm in a career transitioning path, I come from sales and technical support.
            <br />
            <br />
            Today I write fullstack applications!
          </Typography>
          <Typography variant="h3" sx={{ fontSize: 52, fontWeight: "bold", color: "defaultgray-900", marginTop: 4 }}>
            Skills
          </Typography>
          <Box display="grid" justifyContent="space-between" marginTop={2}>
            <Box display="flex" justifyContent="space-between" marginTop={2}>
              <Box textAlign="center" className="p-3">
                <SkillIcon src="/img/frame-94.svg" />
                <Typography variant="h4" sx={{ fontSize: 28, color: "defaultgray-900" }}>
                  React
                </Typography>
              </Box>
              <Box textAlign="center" className="p-3">
                <SkillIcon src="/img/frame-94-1.svg" />
                <Typography variant="h4" sx={{ fontSize: 28, color: "defaultgray-900" }}>
                  Node.js
                </Typography>
              </Box>
              <Box textAlign="center" className="p-3">
                <SkillIcon src="/img/express.png" />
                <Typography variant="h4" sx={{ fontSize: 28, color: "defaultgray-900" }}>
                  Express
                </Typography>
              </Box>
              <Box textAlign="center" className="p-3">
                <SkillIcon src="/img/sql.png" />
                <Typography variant="h4" sx={{ fontSize: 28, color: "defaultgray-900" }}>
                  SQL
                </Typography>
              </Box>
            </Box>
            <Box display="flex" justifyContent="space-between" marginTop={2}>
              <Box textAlign="center" className="p-3">
                <SkillIcon src="/img/django.png" />
                <Typography variant="h4" sx={{ fontSize: 28, color: "defaultgray-900" }}>
                  Django
                </Typography>
              </Box>
              <Box textAlign="center" className="p-3">
                <SkillIcon src="/img/kubernetes.png" sx={{marginLeft: 5  }}/>
                <Typography variant="h4" sx={{ fontSize: 28, color: "defaultgray-900" }}>
                  Kubernetes
                </Typography>
              </Box>
              <Box textAlign="center" className="p-3">
                <SkillIcon src="/img/redux.png"  />
                <Typography variant="h4" sx={{ fontSize: 28, color: "defaultgray-900" }}>
                  Redux
                </Typography>
              </Box>
              <Box textAlign="center" className="p-3">
                <SkillIcon src="/img/ci-cd.png" />
                <Typography variant="h4" sx={{ fontSize: 28, color: "defaultgray-900" }}>
                  CI/CD
                </Typography>
              </Box>
            </Box>
            <Box display="flex" justifyContent="space-between" marginTop={2}>
              <Box textAlign="center" className="p-3">
                <SkillIcon src="/img/docker.png" />
                <Typography variant="h4" sx={{ fontSize: 28, color: "defaultgray-900" }}>
                  Docker
                </Typography>
              </Box>
              <Box textAlign="center" className="p-3">
                <SkillIcon src="/img/figma.png" />
                <Typography variant="h4" sx={{ fontSize: 28, color: "defaultgray-900" }}>
                  Figma
                </Typography>
              </Box>
              <Box textAlign="center" className="p-3">
                <SkillIcon src="/img/bootstrap.png" sx={{ marginLeft: 4 }}/>
                <Typography variant="h4" sx={{ fontSize: 28, color: "defaultgray-900" }}>
                  Bootstrap
                </Typography>
              </Box>
              <Box textAlign="center" className="p-3">
                <SkillIcon src="/img/gitGithub.png" sx={{marginLeft: 5 }}/>
                <Typography variant="h4" sx={{ fontSize: 28, color: "defaultgray-900" }}>
                  Git & Github
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box>
          <img src="/img/hiBrownMale-removebg.png" alt="Mask group" style={{ width: 495, height: 495 }} />
        </Box>
      </Box>
      <Box component="footer" sx={{ backgroundColor: "defaultgray-900", padding: "20px 0", borderRadius: "48px 48px 0 0", boxShadow: "shadow-xl" }}>
        <Container maxWidth="lg">
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box>
              <Typography variant="h2" sx={{ fontSize: 92, fontWeight: "bold", color: "defaultwhite" }}>
                Any idea
                <br />
                in mind?
              </Typography>
              <Typography variant="h4" sx={{ fontSize: 28, color: "defaultwhite", marginTop: 2 }}>
                Let's built it together!
              </Typography>
                <Paper component="form" sx={{ display: "flex", alignItems: "center", marginTop: 2, padding: "2px 4px", borderBottom: "2px solid defaultwhite" }}>
                  <InputBase placeholder="youremail@goeshere.io" type="email" sx={{ color: "defaultwhite", fontSize: 28 }} />
                </Paper>
              <Box display="flex" gap={2} marginTop={2}>
                <IconButton sx={{ backgroundColor: "defaultwhite", borderRadius: 2 }}>
                  <TwitterIcon />
                </IconButton>
                <IconButton sx={{ backgroundColor: "#55acee", borderRadius: 2 }}>
                  <LinkedInIcon />
                </IconButton>
              </Box>
            </Box>
            <Box sx={{ position: "relative", width: 474, height: 452, backgroundColor: "#1100001a", borderRadius: 2, overflow: "hidden" }}>
              <img src="/img/rectangle.png" alt="Rectangle" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <img src="/img/image-9.png" alt="Image" style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", top: 0, left: 0 }} />
            </Box>
          </Box>
          <Box display="flex" justifyContent="center" alignItems="center" gap={1} marginTop={4}>
            <Typography variant="body2" sx={{ color: "defaultwhite" }}>
              Developed by Alessandro Achtenberg
            </Typography>
            <Typography variant="body2" sx={{ color: "defaultwhite" }}>
              |
            </Typography>
            <Box display="flex" alignItems="center" gap={1}>
              <Typography variant="body2" sx={{ color: "defaultwhite" }}>
                Design by
              </Typography>
              <img src="/img/rafo-logo-1.svg" alt="Rafo logo" style={{ width: 44, height: 30 }} />
            </Box>
          </Box>
        </Container>
      </Box>
    </Container>
  );
};