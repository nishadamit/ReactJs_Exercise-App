import React from "react";
import { Stack, Typography } from "@mui/material";
import icon from "../assets/icons/gym.png";

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  return (
    <Stack
      type="button"
      justifyContent="center"
      alignItems="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #ff2625" : "",
        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scroll({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <img
        src={icon}
        alt="dummbell"
        style={{ width: "40px", height: "40px" }}
      />
      <Typography fontSize="24px" fontWeight="bold" textTransform="capitalize">
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
