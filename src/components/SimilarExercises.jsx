import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

const SimilarExercises = ({ muscleExerciseData, equipmentExercisesData }) => {
  console.log("muscleExerciseData", muscleExerciseData);
  console.log("equipmentExercisesData", equipmentExercisesData);
  return (
    <Box sx={{ mt: { lg: "150px", xs: "0px" } }}>
      <Typography variant="h3" m={5}>
        Exercises that target the same muscle group
      </Typography>
      <Stack direction="row" sx={{ p: "20px", position: "relative" }}>
        {muscleExerciseData.length ? (
          <HorizontalScrollbar data={muscleExerciseData} isBodyParts={false} />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography variant="h3" m={5}>
        Exercises that target the same equipment
      </Typography>
      <Stack direction="row" sx={{ p: "20px", position: "relative" }}>
        {equipmentExercisesData.length ? (
          <HorizontalScrollbar
            data={equipmentExercisesData}
            isBodyParts={false}
          />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
