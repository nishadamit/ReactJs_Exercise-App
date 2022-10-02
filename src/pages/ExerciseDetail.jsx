import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";
import { fetchData, exerciseOptions, youtubeOptions } from "../utils/fetchData";
const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [excerciseVideos, setExcerciseVideos] = useState([]);
  const [muscleExerciseData, setMuscleExerciseData] = useState([]);
  const [equipmentExercisesData, setEquipmentExercisesData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com/exercises";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDataDetail = await fetchData(
        `${exerciseDbUrl}/exercise/${id}`,
        exerciseOptions
      );

      console.log(exerciseDataDetail);
      setExerciseDetail(exerciseDataDetail);
      const exerciseVideosData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDataDetail.name}`,
        youtubeOptions
      );
      setExcerciseVideos(exerciseVideosData.contents);

      const response = await fetch(
        `${exerciseDbUrl}/target/${exerciseDataDetail.target}`,
        exerciseOptions
      );
      const targetMuscleExercisesData = await response.json();

      setMuscleExerciseData(targetMuscleExercisesData);
      const response2 = await fetch(
        `${exerciseDbUrl}/equipment/${exerciseDataDetail.equipment}`,
        exerciseOptions
      );
      const equipmentExercisesData = await response2.json();
      setEquipmentExercisesData(equipmentExercisesData);
    };
    fetchExerciseData();
  }, [id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        excerciseVideos={excerciseVideos}
        name={exerciseDetail.name}
      />
      <SimilarExercises
        muscleExerciseData={muscleExerciseData}
        equipmentExercisesData={equipmentExercisesData}
      />
    </Box>
  );
};

export default ExerciseDetail;
