import React from "react";
import { InfinitySpin } from "react-loader-spinner";
import { Box, Stack } from "@mui/material";

const Loader = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      width="100%"
    >
      <InfinitySpin color="grey" />
    </Stack>
  );
};

export default Loader;
