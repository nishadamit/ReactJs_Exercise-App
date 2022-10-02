import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
    >
      <Typography color="#FF2526" fontWeight={700} fontSize="26px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
      >
        Sweat, Smile and <br /> Repeat
      </Typography>
      <Typography lineHeight="35px" fontSize="22px" mb={4}>
        checkout most the most effective exercises
      </Typography>

      <Button
        variant="contained"
        sx={{ backgroundColor: "#ff2526", padding: "10px" }}
      >
        EXPLORE EXERCISES
      </Button>
      <Typography
        fontWeight={600}
        color="#ff2526"
        sx={{ opacity: 0.1, display: { xl: "block" } }}
        fontSize="200px"
      >
        Exercises
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
